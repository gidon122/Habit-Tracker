interface DeleteHabitProps {
  habitTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteHabit = ({ habitTitle, onConfirm, onCancel }: DeleteHabitProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-gray-100 animate-in fade-in zoom-in-95 duration-150">
        <h2 className="text-lg font-bold text-gray-900">Delete Habit</h2>
        <p className="mt-2 text-sm text-gray-500">
          Are you sure you want to delete <span className="font-semibold text-gray-800">"{habitTitle}"</span>? This action cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button 
            type="button"
            onClick={onCancel}
            className="rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button 
            type="button"
            onClick={onConfirm}
            className="rounded-xl bg-red-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-600 shadow-sm transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteHabit;