import api from "../services/api";

export default function TaskItem({ task, refresh }) {
    const toggleComplete = async () => {
        await api.put(`/tasks/${task.id}`, {
            title: task.title,
            completed: !task.completed,
        });
        refresh();
    };

    const deleteTask = async () => {
        await api.delete(`/tasks/${task.id}`);
        refresh();
    };

    return (
        <div className="flex justify-between items-center p-2 border-b">
            <span
                onClick={toggleComplete}
                className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""
                    }`}
            >
                {task.title}
            </span>
            <button
                onClick={deleteTask}
                className="text-red-600 hover:text-red-800"
            >
                Delete
            </button>
        </div>
    );
}
