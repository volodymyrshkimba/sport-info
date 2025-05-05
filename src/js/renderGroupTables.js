import { getMarksFromLettersArray } from "./getMarksFromLettersArray.js";

const container = document.getElementById("tablesContainer");

const juveLogo =
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/Juventus_FC_-_logo_black_%28Italy%2C_2017%29.svg";
const liverpoolLogo =
  "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg";

export const renderGroupTables = (groupedByGroup, type) => {
  const markup = groupedByGroup
    .map(({ groupName, teams }) => {
      const rows = teams
        .map((team, index) => {
          return `
			 <tr>
				<td class="team">
				  <span class="place ${
            index === 0 || index === 1
              ? "first-second-place"
              : index === 2
              ? "third-place"
              : ""
          }">${index + 1}${
            index <= 2
              ? '<span class="tooltip">Ліга чемпіонів<span class="tooltip-arrow"></span></span>'
              : ""
          }</span>
				  <span class="logo-wrapper">
					 <img src="${
             team.name === "Ливерпуль"
               ? liverpoolLogo
               : team.name === "Ювентус"
               ? juveLogo
               : team.logo
           }" alt="logo" width="24" height="24" class="logo" />
				  </span>
				  <span class="team-name">${team.name}</span>
				</td>
				<td class="games block-params">${team.games}</td>
				<td class="wins block-params">${team.wins}</td>
				<td class="drows block-params">${team.draws}</td>
				<td class="loses block-params">${team.loses}</td>
				<td class="goals">${team.scored} - ${team.conceded}</td>
				<td class="form">${getMarksFromLettersArray(team.form)}</td>
				<td class="points block-params">${team.points}</td>
			 </tr>`;
        })
        .join("");

      return `
		<table class="group-table ${
      type === "general" ? "active" : ""
    }" data-type="${type}">
		  <thead class="table-head">
			 <tr>
				<th class="group">Група ${groupName}</th>
				<th class="games block-params">
				  <span class="mobile-only">И</span>
              <span class="desktop-only">Игры</span>
				</th>
				<th class="wins block-params">В</th>
				<th class="drows block-params">Н</th>
				<th class="loses block-params">П</th>
				<th class="goals">З - П</th>
				<th class="form">Форма</th>
				<th class="points block-params">
				  <span class="mobile-only">О</span>
              <span class="desktop-only">Очки</span>
				</th>
			 </tr>
		  </thead>
		  <tbody class="table-body">
			 ${rows}
		  </tbody>
		</table>`;
    })
    .join("");

  container.insertAdjacentHTML("beforeend", markup);
};
