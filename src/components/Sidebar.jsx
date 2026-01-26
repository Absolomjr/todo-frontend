import { logout } from "../utils/auth";

export default function Sidebar({ active }) {
    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen p-5">
            <h2 className="text-2xl font-bold mb-8">📝 Todo App</h2>

            <nav className="space-y-4">
                <button
                    className={`w-full text-left px-3 py-2 rounded ${active === "tasks"
                            ? "bg-gray-700"
                            : "hover:bg-gray-800"
                        }`}
                >
                    Tasks
                </button>

                <button
                    className={`w-full text-left px-3 py-2 rounded ${active === "team"
                            ? "bg-gray-700"
                            : "hover:bg-gray-800"
                        }`}
                >
                    Team
                </button>

                <button
                    onClick={logout}
                    className="w-full text-left px-3 py-2 rounded hover:bg-red-600 mt-10"
                >
                    Logout
                </button>
            </nav>
        </div>
    );
}
