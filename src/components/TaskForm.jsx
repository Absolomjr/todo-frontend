import { useState } from "react";
import api from "../services/api";

export default function TaskForm({ refresh }) {
    const [title, setTitle] = useState("");

    const addTask = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        await api.post("/tasks", { title, completed: false });
        setTitle("");
        refresh();
    };

    return (
        <form onSubmit={addTask} className="flex mb-4">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 p-2 border rounded-l focus:outline-none"
            />
            <button className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700">
                Add
            </button>
        </form>
    );
}
