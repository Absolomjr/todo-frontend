export default function Navbar({ search, setSearch }) {
    return (
        <div className="flex items-center justify-between bg-white px-6 py-4 shadow">
            <h1 className="text-xl font-semibold text-gray-700">My Tasks</h1>

            <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border px-3 py-2 rounded w-64 focus:outline-none focus:ring"
            />
        </div>
    );
}
