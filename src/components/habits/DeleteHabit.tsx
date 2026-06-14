import React from 'react'

const DeleteHabit = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
  <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-gray-100">
        <h2>Delete Habit</h2>
        <p>Are you sure you want to delete this habit? This action cannot be undone.</p>

        <div className="mt-4 flex gap-3">
          <button className="rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600">
            Delete
          </button>
            <button className="rounded-md bg-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-400">
                Cancel
            </button>
    </div>
    </div>
    </div>
 
  )
}

export default DeleteHabit


    