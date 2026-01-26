import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
    const [refreshFlag, setRefreshFlag] = useState(false);

    const refreshTasks = () => setRefreshFlag(!refreshFlag);

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar active="tasks" />

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 min-h-screen p-8">
                <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">

                    <h1 className="text-3xl font-bold mb-6">
                        My Tasks
                    </h1>

                    <TaskForm refresh={refreshTasks} />
                    <TaskList key={refreshFlag} />
                </div>
            </div>
        </div>
    );
}
