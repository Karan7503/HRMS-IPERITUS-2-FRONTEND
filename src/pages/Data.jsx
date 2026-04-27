import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { getEmployeeData, saveEmployeeData } from "../services/dataService";
import Breadcrumb from "../ui/BreadCrumb";
import CustomSelect from "../ui/CustomSelect";
import {
  User, Phone, Heart, FileText,
  CheckCircle2, Plus, Trash2, Edit2, X
} from "lucide-react";

/* ─── Sidebar ─── */
const NAV = [
  { id: "personal", label: "Personal",     icon: User },
  { id: "contact",  label: "Contact",      icon: Phone },
  { id: "medical",  label: "Medical",      icon: Heart },
  { id: "other",    label: "Other Details",icon: FileText },
];

function DataSidebar({ active, onNavigate, name, empCode }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Profile Card — identical to ResumeSidebar */}
      <div className="card-soft bg-bgCard p-6 rounded-[1.5rem] border border-borderColor flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-bgMain border-2 border-borderColor flex items-center justify-center overflow-hidden mb-4 shadow-sm">
          <span className="text-3xl font-bold text-muted">
            {(name?.[0] ?? "?").toUpperCase()}
          </span>
        </div>
        <h2 className="text-xl font-extrabold text-textMain tracking-tight">{name || "Your Name"}</h2>
        <span className="text-sm font-medium text-muted mt-1 px-3 py-1 bg-bgMain rounded-full border border-borderColor">
          {empCode || "Employee"}
        </span>
      </div>

      {/* Nav — identical to ResumeSidebar */}
      <nav className="card-soft bg-bgCard p-3 rounded-[1.5rem] border border-borderColor flex flex-col gap-1">
        {NAV.map(item => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide ${
                isActive ? "text-gray-800 shadow-md" : "text-muted hover:bg-gray-200 hover:text-gray-800"
              }`}
            >
              <item.icon size={18} className={isActive ? "text-gray-800" : ""} />
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="dataNavIndicator"
                  className="absolute inset-0 bg-gray-200 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

/* ─── Shared primitives ─── */
function SectionCard({ id, icon: Icon, title, badge, onAdd, addLabel = "Add", children }) {
  return (
    <div id={id} className="scroll-mt-24 border border-borderColor rounded-2xl overflow-hidden bg-bgCard shadow-sm mb-4">
      <div className="flex items-center justify-between px-6 py-4 border-b border-borderColor">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-primarySoft text-primary"><Icon size={18} /></div>
          <h3 className="text-base font-bold text-textMain tracking-tight">{title}</h3>
          {badge !== undefined && (
            <span className="text-xs font-semibold text-muted bg-bgMain border border-strong px-2 py-0.5 rounded-full">{badge}</span>
          )}
        </div>
        {onAdd && (
          <button onClick={onAdd} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold text-primary hover:bg-primarySoft transition-colors">
            {addLabel === "Edit" ? <Edit2 size={15} /> : <Plus size={15} />}
            <span>{addLabel}</span>
          </button>
        )}
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-muted uppercase tracking-widest">{label}</label>
      {children}
    </div>
  );
}

function Inp({ value, onChange, type = "text", placeholder = "" }) {
  return (
    <input type={type} value={value ?? ""} onChange={e => onChange(e.target.value)} placeholder={placeholder}
      className="input w-full" />
  );
}

// Sel kept for panel dropdowns (uses CustomSelect)
function Sel({ value, onChange, options, placeholder = "Select option" }) {
  return (
    <CustomSelect
      value={value ?? ""}
      onChange={e => onChange(e.target.value)}
      options={options}
      placeholder={placeholder}
    />
  );
}

/* ─── Mini table (same style as ResumeSection's table) ─── */
function MiniTable({ columns, rows, onEdit, onDelete }) {
  return (
    <table className="w-full table-fixed border-collapse">
      <thead>
        <tr className="border-b border-strong">
          {columns.map(c => (
            <th key={c.key} style={{ width: c.w ?? `${Math.floor(88 / columns.length)}%` }}
              className="py-3 px-4 text-left text-xs font-bold text-muted uppercase tracking-widest">{c.label}</th>
          ))}
          <th style={{ width: "12%" }} className="py-3 px-4 text-right text-xs font-bold text-muted uppercase tracking-widest">Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr><td colSpan={columns.length + 1} className="py-8 text-center text-sm text-muted">No records yet. Click <strong>Add</strong> to get started.</td></tr>
        ) : rows.map((row, i) => (
          <tr key={i} className="border-b border-strong last:border-0 hover:bg-primarySoft/40 transition-colors">
            {columns.map(c => (
              <td key={c.key} className="py-3.5 px-4 text-sm font-medium text-textMain truncate">{row[c.key] ?? "—"}</td>
            ))}
            <td className="py-3.5 px-4">
              <div className="flex items-center justify-end gap-1">
                <button onClick={() => onEdit(i)} className="p-1.5 rounded-md text-muted hover:text-primary hover:bg-primarySoft transition-colors"><Edit2 size={15} /></button>
                <button onClick={() => onDelete(i)} className="p-1.5 rounded-md text-muted hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 size={15} /></button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ─── Modal — exact same structure as AddResumeRecordModal ─── */
function RowModal({ isOpen, onClose, title, fields, onSave, initial = {} }) {
  const [form, setForm] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { if (isOpen) setForm(initial ?? {}); }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[2px] isolate"
      onClick={onClose}
    >
      <div
        className="bg-bgCard border border-borderColor w-full max-w-md p-6 rounded-2xl shadow-xl isolate"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-textMain tracking-tight">Add {title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-bgMain rounded-lg text-muted transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(f => (
            <div key={f.key} className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-textMain">{f.label}</label>
              {f.options ? (
                <CustomSelect
                  value={form[f.key] ?? ""}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  options={f.options}
                  placeholder={`Select ${f.label}`}
                  name={f.key}
                />
              ) : (
                <input
                  type={f.type ?? "text"}
                  className="p-3 bg-bgMain border border-strong rounded-xl text-textMain outline-none focus:border-primary transition-colors w-full"
                  value={form[f.key] ?? ""}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                />
              )}
            </div>
          ))}

          <div className="pt-4 flex justify-end gap-3">
            <button type="button" onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-muted hover:bg-bgMain transition-colors">
              Cancel
            </button>
            <button type="submit"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary-hover shadow-md transition-colors">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

/* ══════════════════════════════════════════════
   PANELS
══════════════════════════════════════════════ */

function PersonalPanel({ data, set }) {
  const f = (k, v) => set({ ...data, [k]: v });
  return (
    <>
      <SectionCard id="personal-details" icon={User} title="Personal Details">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Employee Code"><Inp value={data.employee_code} onChange={v => f("employee_code", v)} placeholder="e.g. IP-MUM-IST-00213" /></Field>
          <div />
          <Field label="First Name"><Inp value={data.first_name} onChange={v => f("first_name", v)} /></Field>
          <Field label="Middle Name"><Inp value={data.middle_name} onChange={v => f("middle_name", v)} /></Field>
          <Field label="Last Name"><Inp value={data.last_name} onChange={v => f("last_name", v)} /></Field>
          <div />
          <Field label="Gender"><Sel value={data.gender} onChange={v => f("gender", v)} options={["Male","Female","Other","Prefer not to say"]} /></Field>
          <Field label="Date of Birth"><Inp value={data.dob} onChange={v => f("dob", v)} type="date" /></Field>
          <Field label="Nationality"><Sel value={data.nationality} onChange={v => f("nationality", v)} options={["Indian","American","British","Australian","Canadian","Other"]} /></Field>
          <Field label="Marital Status"><Sel value={data.marital_status} onChange={v => f("marital_status", v)} options={["Single","Married","Divorced","Widowed"]} /></Field>
          <Field label="Anniversary"><Inp value={data.anniversary} onChange={v => f("anniversary", v)} type="date" /></Field>
          <Field label="Spouse Birthday"><Inp value={data.spouse_birthday} onChange={v => f("spouse_birthday", v)} type="date" /></Field>
        </div>
      </SectionCard>
    </>
  );
}

function ContactPanel({ data, set }) {
  const f = (k, v) => set({ ...data, [k]: v });
  const [modal, setModal] = useState({ open: false, list: null, idx: null });

  const listConfig = {
    contact_details: {
      title: "Add Contact Address",
      fields: [
        { key: "type", label: "Type", options: ["Home","Office","Other"] },
        { key: "address", label: "Address" },
        { key: "primary", label: "Primary", options: ["Yes","No"] },
        { key: "status", label: "Status", options: ["Active","Inactive"] },
      ],
      cols: [{ key:"type", label:"Type" },{ key:"address", label:"Address" },{ key:"primary", label:"Primary" },{ key:"status", label:"Status" }]
    },
    communication_details: {
      title: "Add Communication",
      fields: [
        { key: "type", label: "Type", options: ["Mobile","Phone","Email"] },
        { key: "contact", label: "Contact" },
        { key: "primary", label: "Primary", options: ["Yes","No"] },
        { key: "status", label: "Status", options: ["Active","Inactive"] },
      ],
      cols: [{ key:"type", label:"Type" },{ key:"contact", label:"Contact" },{ key:"primary", label:"Primary" },{ key:"status", label:"Status" }]
    }
  };

  const save = (listKey, form) => {
    const arr = [...(data[listKey] || [])];
    if (modal.idx !== null) arr[modal.idx] = form; else arr.push(form);
    f(listKey, arr);
  };
  const del = (listKey, i) => { const arr = [...(data[listKey] || [])]; arr.splice(i, 1); f(listKey, arr); };

  return (
    <>
      <SectionCard id="email-social" icon={Phone} title="Email & Social Details">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Work Email"><Inp value={data.work_email} onChange={v => f("work_email", v)} type="email" placeholder="name@company.com" /></Field>
          <Field label="Facebook"><Inp value={data.facebook} onChange={v => f("facebook", v)} placeholder="facebook.com/..." /></Field>
        </div>
      </SectionCard>

      {["contact_details","communication_details"].map(listKey => {
        const cfg = listConfig[listKey];
        const label = listKey === "contact_details" ? "Contact Details" : "Communication Details";
        return (
          <SectionCard key={listKey} id={listKey} icon={Phone} title={label}
            badge={`${(data[listKey]||[]).length}`}
            onAdd={() => setModal({ open: true, list: listKey, idx: null })}>
            <MiniTable columns={cfg.cols} rows={data[listKey] || []}
              onEdit={i => setModal({ open: true, list: listKey, idx: i })}
              onDelete={i => del(listKey, i)} />
          </SectionCard>
        );
      })}

      <RowModal isOpen={modal.open} onClose={() => setModal({ open: false, list: null, idx: null })}
        title={modal.list ? listConfig[modal.list].title : ""}
        fields={modal.list ? listConfig[modal.list].fields : []}
        initial={modal.list && modal.idx !== null ? (data[modal.list]||[])[modal.idx] : {}}
        onSave={form => { save(modal.list, form); setModal({ open:false, list:null, idx:null }); }} />
    </>
  );
}

function MedicalPanel({ data, set }) {
  const f = (k, v) => set({ ...data, [k]: v });
  const ec = Array.isArray(data.emergency_contacts) ? data.emergency_contacts : [{},{}];
  const setEC = (i, k, v) => {
    const arr = [...ec]; arr[i] = { ...arr[i], [k]: v }; f("emergency_contacts", arr);
  };
  return (
    <>
      <SectionCard id="medical-info" icon={Heart} title="Medical Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Blood Group"><Sel value={data.blood_group} onChange={v => f("blood_group", v)} options={["A+","A−","B+","B−","AB+","AB−","O+","O−"]} /></Field>
          <Field label="Any Illness"><Inp value={data.any_illness} onChange={v => f("any_illness", v)} /></Field>
          <Field label="Allergies"><Inp value={data.allergies} onChange={v => f("allergies", v)} /></Field>
          <Field label="Previous Hospitalization"><Inp value={data.previous_hospitalization} onChange={v => f("previous_hospitalization", v)} /></Field>
        </div>
      </SectionCard>

      <SectionCard id="emergency" icon={Heart} title="Emergency Contacts">
        <div className="space-y-6">
          {[0,1].map(i => (
            <div key={i}>
              <p className="text-xs font-bold text-muted uppercase tracking-widest mb-3">Contact {i+1}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name"><Inp value={ec[i]?.name} onChange={v => setEC(i,"name",v)} /></Field>
                <div />
                <Field label="Telephone / Mobile"><Inp value={ec[i]?.phone} onChange={v => setEC(i,"phone",v)} type="tel" /></Field>
                <Field label="Alternate No."><Inp value={ec[i]?.alternate} onChange={v => setEC(i,"alternate",v)} type="tel" /></Field>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </>
  );
}

function OtherPanel({ data, set }) {
  const f = (k, v) => set({ ...data, [k]: v });
  const [modal, setModal] = useState({ open: false, list: null, idx: null });

  const configs = {
    bank_pan_aadhar: {
      title: "Bank / PAN / Aadhar",
      fields: [
        { key:"type", label:"Type", options:["Bank","PAN","Aadhar","UPI"] },
        { key:"value", label:"Value" },
        { key:"status", label:"Status", options:["Active","Inactive"] },
      ],
      cols: [{ key:"type", label:"Type" },{ key:"value", label:"Value" },{ key:"status", label:"Status" }]
    },
    passport_details: {
      title: "Passport Details",
      fields: [
        { key:"passport_no", label:"Passport No" },
        { key:"location", label:"Location" },
        { key:"issue_date", label:"Issue Date", type:"date" },
        { key:"valid_upto", label:"Valid Upto", type:"date" },
        { key:"status", label:"Status", options:["Active","Expired"] },
      ],
      cols: [{ key:"passport_no", label:"Passport No" },{ key:"location", label:"Location" },{ key:"issue_date", label:"Issue Date" },{ key:"valid_upto", label:"Valid Upto" },{ key:"status", label:"Status" }]
    },
    visa_details: {
      title: "Visa Details",
      fields: [
        { key:"visa_no", label:"Visa No" },
        { key:"type", label:"Type", options:["Tourist","Business","Work","Student"] },
        { key:"country", label:"Country" },
        { key:"valid_upto", label:"Valid Upto", type:"date" },
        { key:"status", label:"Status", options:["Active","Expired"] },
      ],
      cols: [{ key:"visa_no", label:"Visa No" },{ key:"type", label:"Type" },{ key:"country", label:"Country" },{ key:"valid_upto", label:"Valid Upto" },{ key:"status", label:"Status" }]
    }
  };

  const save = (listKey, form) => {
    const arr = [...(data[listKey]||[])];
    if (modal.idx !== null) arr[modal.idx] = form; else arr.push(form);
    f(listKey, arr);
  };
  const del = (listKey, i) => { const arr = [...(data[listKey]||[])]; arr.splice(i,1); f(listKey,arr); };

  return (
    <>
      {Object.entries(configs).map(([listKey, cfg]) => (
        <SectionCard key={listKey} id={listKey} icon={FileText} title={cfg.title}
          badge={`${(data[listKey]||[]).length}`}
          onAdd={() => setModal({ open:true, list:listKey, idx:null })}>
          <MiniTable columns={cfg.cols} rows={data[listKey]||[]}
            onEdit={i => setModal({ open:true, list:listKey, idx:i })}
            onDelete={i => del(listKey,i)} />
        </SectionCard>
      ))}

      <RowModal isOpen={modal.open} onClose={() => setModal({ open:false, list:null, idx:null })}
        title={modal.list ? configs[modal.list].title : ""}
        fields={modal.list ? configs[modal.list].fields : []}
        initial={modal.list && modal.idx !== null ? (data[modal.list]||[])[modal.idx] : {}}
        onSave={form => { save(modal.list, form); setModal({ open:false, list:null, idx:null }); }} />
    </>
  );
}

/* ══════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════ */
const EMPTY = {
  personal: {},
  contact: { work_email:"", facebook:"", contact_details:[], communication_details:[] },
  medical: { emergency_contacts:[{},{}] },
  other: { bank_pan_aadhar:[], passport_details:[], visa_details:[] },
};

export default function Data() {
  const [active, setActive] = useState("personal");
  const [data, setData] = useState(EMPTY);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    getEmployeeData().then(d => {
      setData({
        personal: d.personal || {},
        contact: { work_email:"", facebook:"", contact_details:[], communication_details:[], ...(d.contact||{}) },
        medical: { emergency_contacts:[{},{}], ...(d.medical||{}) },
        other: { bank_pan_aadhar:[], passport_details:[], visa_details:[], ...(d.other||{}) },
      });
    }).catch(console.error);
  }, []);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await saveEmployeeData(data);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch(e) { console.error(e); }
    finally { setIsSaving(false); }
  };

  const handleNavigate = id => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
  };

  const panels = {
    personal: <PersonalPanel data={data.personal} set={v => setData(p=>({...p,personal:v}))} />,
    contact:  <ContactPanel  data={data.contact}  set={v => setData(p=>({...p,contact:v}))} />,
    medical:  <MedicalPanel  data={data.medical}  set={v => setData(p=>({...p,medical:v}))} />,
    other:    <OtherPanel    data={data.other}    set={v => setData(p=>({...p,other:v}))} />,
  };

  const name = [data.personal.first_name, data.personal.last_name].filter(Boolean).join(" ");

  return (
    <div className="bg-bgMain min-h-screen px-4 sm:px-6 lg:px-10 xl:px-16 py-4 space-y-6">

      <Breadcrumb items={[{ label:"Dashboard", path:"/dashboard" },{ label:"Data", path:"/data" }]} />

      {/* Header — same as Resume.jsx */}
      <div className="flex items-center justify-between mb-8 mt-6">
        <div>
          <h1 className="text-3xl font-extrabold text-textMain tracking-tighter">Employee Data</h1>
          <p className="text-muted font-medium tracking-tight mt-1">Manage your personal, contact, medical &amp; other details.</p>
        </div>
        <button onClick={handleSave} disabled={isSaving}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold shadow-md transition-all ${
            isSaving ? "bg-muted text-white cursor-not-allowed" : "bg-primary text-white hover:bg-primary-hover hover:shadow-lg active:scale-95"
          }`}>
          {isSaving ? "Saving…" : "Update"}
        </button>
      </div>

      {/* Success toast — same as Resume.jsx */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 font-semibold tracking-tight">
            <CheckCircle2 size={22} className="text-white/90" />
            <span>Data saved successfully!</span>
          </div>
        </div>
      )}

      {/* Layout — identical to Resume.jsx */}
      <div className="flex flex-col lg:flex-row gap-8 items-start relative">

        {/* Sidebar */}
        <div className="w-full lg:w-72 shrink-0 lg:sticky lg:top-24">
          <DataSidebar active={active} onNavigate={handleNavigate} name={name} empCode={data.personal.employee_code} />
        </div>

        {/* Panels */}
        <div className="flex-1 w-full space-y-4">
          {panels[active]}
        </div>

      </div>
    </div>
  );
}
