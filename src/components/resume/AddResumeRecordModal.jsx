import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function AddResumeRecordModal({ isOpen, onClose, title, columns, onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState(initialData);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
    }
  }, [isOpen, initialData]);

  if (!isOpen || !mounted) return null;

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialData);
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[2px] isolate"
      onClick={onClose}
    >
      <div 
        className="bg-bgCard border border-borderColor w-full max-w-md p-6 rounded-2xl shadow-xl isolate"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-textMain tracking-tight">{title === "Summary" ? "Edit" : "Add"} {title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-bgMain rounded-lg text-muted transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {columns.map(col => (
            <div key={col.accessorKey} className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-textMain">{col.header}</label>
              {col.type === "textarea" ? (
                <textarea 
                  required
                  rows={5}
                  className="p-3 bg-bgMain border border-strong rounded-xl text-textMain outline-none focus:border-primary transition-colors resize-none"
                  value={formData[col.accessorKey] || ""}
                  onChange={(e) => handleChange(col.accessorKey, e.target.value)}
                />
              ) : (
                <input 
                  type="text" 
                  required
                  className="p-3 bg-bgMain border border-strong rounded-xl text-textMain outline-none focus:border-primary transition-colors"
                  value={formData[col.accessorKey] || ""}
                  onChange={(e) => handleChange(col.accessorKey, e.target.value)}
                />
              )}
            </div>
          ))}

          <div className="pt-4 flex justify-end gap-3">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-muted hover:bg-bgMain transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary-hover shadow-md transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
