const TeamList = () => {
    const teams = [
        { id: 1, name: "Frontend Team" },
        { id: 2, name: "Backend Team" },
    ];

    return (
        <div className="space-y-3">
            {teams.map(team => (
                <div
                    key={team.id}
                    className="p-4 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    {team.name}
                </div>
            ))}
        </div>
    );
};

export default TeamList;
