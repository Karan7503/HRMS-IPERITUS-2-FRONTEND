import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import AddResumeRecordModal from "./AddResumeRecordModal";

const MAX_ROWS = 3;

function ResumeSection({
  id,
  icon: Icon,
  title,
  columns,
  data = [],
  isSummary = false,
  summaryText = "",
  onAddRecord,
  onEditRecord,
  onDeleteRecord,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const handleAddOrEdit = (formData) => {
    if (editingRecord && onEditRecord) {
      onEditRecord(id, editingRecord.id, formData);
    } else if (onAddRecord) {
      onAddRecord(id, formData);
    }
    closeModal();
  };

  const openAddModal = () => {
    setEditingRecord(null);
    setIsModalOpen(true);
  };

  const openEditModal = (record) => {
    setEditingRecord(record);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingRecord(null);
  };

  // Show first MAX_ROWS records
  const displayData = data.slice(0, MAX_ROWS);
  const canAddMore = isSummary || data.length < MAX_ROWS;

  return (
    <div
      id={id}
      className="scroll-mt-24 border border-borderColor rounded-2xl overflow-hidden bg-bgCard shadow-sm"
    >
      {/* ── Section Header ── */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-borderColor">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-primarySoft text-primary">
            <Icon size={18} />
          </div>
          <h3 className="text-base font-bold text-textMain tracking-tight">
            {title}
          </h3>
          {!isSummary && (
            <span className="text-xs font-semibold text-muted bg-bgMain border border-strong px-2 py-0.5 rounded-full">
              {data.length}/{MAX_ROWS}
            </span>
          )}
        </div>

        {canAddMore && (
          <button
            onClick={openAddModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold text-primary hover:bg-primarySoft transition-colors"
          >
            {isSummary ? <Edit2 size={15} /> : <Plus size={15} />}
            <span>{isSummary ? "Edit" : "Add"}</span>
          </button>
        )}
      </div>

      {/* ── Content ── */}
      <div className="px-6 py-4">
        {isSummary ? (
          /* Summary plain text */
          <p className="text-sm text-muted leading-relaxed whitespace-pre-wrap">
            {summaryText || "No summary provided. Click Edit to add one."}
          </p>
        ) : (
          /* Inline table */
          <table className="w-full table-fixed border-collapse">
            {/* Table header */}
            <thead>
              <tr className="border-b border-strong">
                {columns.map((col) => (
                  <th
                    key={col.accessorKey}
                    style={{ width: `${Math.floor(88 / columns.length)}%` }}
                    className="py-3 px-4 text-left text-xs font-bold text-muted uppercase tracking-widest"
                  >
                    {col.header}
                  </th>
                ))}
                {/* Actions column – fixed 12% */}
                <th
                  style={{ width: "12%" }}
                  className="py-3 px-4 text-right text-xs font-bold text-muted uppercase tracking-widest"
                >
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody>
              {displayData.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="py-8 text-center text-sm text-muted"
                  >
                    No records yet. Click <strong>Add</strong> to get started.
                  </td>
                </tr>
              ) : (
                displayData.map((row, idx) => (
                  <tr
                    key={row.id ?? idx}
                    className="border-b border-strong last:border-0 hover:bg-primarySoft/40 transition-colors"
                  >
                    {columns.map((col) => (
                      <td
                        key={col.accessorKey}
                        className="py-3.5 px-4 text-sm font-medium text-textMain truncate"
                      >
                        {row[col.accessorKey] ?? "—"}
                      </td>
                    ))}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => openEditModal(row)}
                          title="Edit"
                          className="p-1.5 rounded-md text-muted hover:text-primary hover:bg-primarySoft transition-colors"
                        >
                          <Edit2 size={15} />
                        </button>
                        <button
                          onClick={() =>
                            onDeleteRecord && onDeleteRecord(id, row.id)
                          }
                          title="Delete"
                          className="p-1.5 rounded-md text-muted hover:text-red-500 hover:bg-red-50 transition-colors"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Modal ── */}
      <AddResumeRecordModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        columns={columns}
        onSubmit={handleAddOrEdit}
        initialData={
          isSummary ? { text: summaryText } : editingRecord ?? {}
        }
      />
    </div>
  );
}

export default ResumeSection;
