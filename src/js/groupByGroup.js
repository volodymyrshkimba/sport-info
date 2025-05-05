export const groupByGroup = (teams, sortField = "points") => {
  const grouped = teams.reduce((acc, team) => {
    const group = acc.find((g) => g.groupName === team.group);

    if (group) {
      group.teams.push(team);
    } else {
      acc.push({
        groupName: team.group,
        teams: [team],
      });
    }

    return acc;
  }, []);

  grouped.forEach((group) => {
    group.teams.sort((a, b) => b[sortField] - a[sortField]);
  });

  return grouped;
};
