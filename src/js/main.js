import "../scss/style.scss";

const groupTablesData = [
  {
    id: "1",
    name: "Барселона",
    logo: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/FC_Barcelona.svg/213px-FC_Barcelona.svg.png",
    games: 10,
    wins: 6,
    draws: 2,
    loses: 2,
    scored: 20,
    conceded: 10,
    points: 20,
    form: ["W", "W", "D", "L", "W"],
    group: "A",
  },
  {
    id: "2",
    name: "Реал Мадрид",
    logo: "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8a/FC_Real_Madrid_Logo.svg/279px-FC_Real_Madrid_Logo.svg.png",
    games: 10,
    wins: 7,
    draws: 2,
    loses: 1,
    scored: 22,
    conceded: 9,
    points: 23,
    form: ["W", "W", "W", "D", "D"],
    group: "A",
  },
  {
    id: "3",
    name: "Ливерпуль",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    games: 10,
    wins: 8,
    draws: 1,
    loses: 1,
    scored: 25,
    conceded: 6,
    points: 25,
    form: ["W", "W", "W", "W", "D"],
    group: "A",
  },
  {
    id: "4",
    name: "Пари Сен-Жермен",
    logo: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Paris_Saint-Germain_F.C..svg/300px-Paris_Saint-Germain_F.C..svg.png",
    games: 10,
    wins: 6,
    draws: 3,
    loses: 1,
    scored: 20,
    conceded: 9,
    points: 21,
    form: ["W", "D", "D", "L", "W"],
    group: "A",
  },
  {
    id: "5",
    name: "Манчестер Юнайтед",
    logo: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/375px-Manchester_United_FC_crest.svg.png",
    games: 10,
    wins: 5,
    draws: 2,
    loses: 3,
    scored: 18,
    conceded: 12,
    points: 17,
    form: ["D", "W", "W", "L", "L"],
    group: "B",
  },
  {
    id: "6",
    name: "Ювентус",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Juventus_FC_-_logo_black_%28Italy%2C_2017%29.svg",
    games: 10,
    wins: 7,
    draws: 1,
    loses: 2,
    scored: 23,
    conceded: 8,
    points: 22,
    form: ["W", "W", "D", "W", "L"],
    group: "B",
  },
  {
    id: "7",
    name: "Бавария",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/300px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
    games: 10,
    wins: 9,
    draws: 1,
    loses: 0,
    scored: 30,
    conceded: 5,
    points: 28,
    form: ["W", "W", "W", "W", "D"],
    group: "B",
  },
  {
    id: "8",
    name: "Челси",
    logo: "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/FC_Chelsea_Logo.svg/300px-FC_Chelsea_Logo.svg.png",
    games: 10,
    wins: 4,
    draws: 3,
    loses: 3,
    scored: 15,
    conceded: 14,
    points: 15,
    form: ["L", "D", "W", "D", "W"],
    group: "B",
  },
  {
    id: "9",
    name: "Арсенал",
    logo: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/53/Arsenal_FC.svg/300px-Arsenal_FC.svg.png",
    games: 10,
    wins: 6,
    draws: 2,
    loses: 2,
    scored: 19,
    conceded: 9,
    points: 20,
    form: ["W", "D", "W", "L", "W"],
    group: "C",
  },
  {
    id: "10",
    name: "Милан",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/239px-Logo_of_AC_Milan.svg.png",
    games: 10,
    wins: 6,
    draws: 2,
    loses: 2,
    scored: 19,
    conceded: 9,
    points: 20,
    form: ["W", "L", "W", "D", "W"],
    group: "C",
  },
  {
    id: "11",
    name: "Тоттенхэм Хотспур",
    logo: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b4/Tottenham_Hotspur.svg/181px-Tottenham_Hotspur.svg.png",
    games: 10,
    wins: 4,
    draws: 4,
    loses: 2,
    scored: 14,
    conceded: 12,
    points: 16,
    form: ["D", "W", "D", "W", "L"],
    group: "C",
  },
  {
    id: "12",
    name: "Боруссия Дортмунд",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/300px-Borussia_Dortmund_logo.svg.png",
    games: 10,
    wins: 5,
    draws: 3,
    loses: 2,
    scored: 17,
    conceded: 14,
    points: 18,
    form: ["W", "D", "L", "W", "D"],
    group: "C",
  },
];

const groupedByGroup = groupTablesData.reduce((acc, team) => {
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

function renderGroupTables() {
  const container = document.getElementById("tablesContainer");

  const markup = groupedByGroup
    .map(({ groupName, teams }) => {
      const rows = teams
        .map((team, index) => {
          return `
          <tr>
            <td class="team">
              <span class="place ${
                index === 0
                  ? "first-second-place"
                  : index === 1
                  ? "first-second-place"
                  : index === 2
                  ? "third-place"
                  : ""
              }">${index + 1}</span>
              <span>
                <img src="${
                  team.logo
                }" alt="logo" width="24" height="24" class="logo" />
              </span>
              <span>${team.name}</span>
            </td>
            <td class="games block-params">${team.games}</td>
            <td class="wins block-params">${team.wins}</td>
            <td class="drows block-params">${team.draws}</td>
            <td class="loses block-params">${team.loses}</td>
            <td class="goals">${team.scored} - ${team.conceded}</td>
				<td class="form">${team.form.join("")}</td>
            <td class="points block-params">${team.points}</td>
          </tr>`;
        })
        .join("");

      return `
      <table class="group-table">
        <thead class="table-head">
          <tr>
            <th class="group">Група ${groupName}</th>
            <th class="games block-params">И</th>
            <th class="wins block-params">В</th>
            <th class="drows block-params">Н</th>
            <th class="loses block-params">П</th>
            <th class="goals">З - П</th>
				<th class="form">Форма</th>
            <th class="points block-params">О</th>
          </tr>
        </thead>
        <tbody class="table-body">
          ${rows}
        </tbody>
      </table>`;
    })
    .join("");

  container.innerHTML = markup;
}

renderGroupTables();
