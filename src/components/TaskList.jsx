import { useEffect, useState } from "react";
import api from "../services/api";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState("");

    const fetchTasks = async () => {
        const res = await api.get("/tasks");
        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const filteredTasks = tasks.filter((task) =>
        task.tit.e.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {/* Search */}
            <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 border rounded mb-4"
            />

            {/* Tasks */}
            <div className="border rounded">
                {filteredTasks.length === 0 ? (
                    <p className="p-4 text-gray-500 text-center">
                        No tasks found
                    </p>
                ) : (
                    filteredTasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            refresh={fetchTasks}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
