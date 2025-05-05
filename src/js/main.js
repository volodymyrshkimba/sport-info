import "../scss/style.scss";
import { activateTabs } from "./activateTabs.js";
import { fetchTeams } from "./fetchTeams.js";
import { groupByGroup } from "./groupByGroup.js";
import { renderGroupTables } from "./renderGroupTables.js";

async function init() {
  const teams = await fetchTeams();
  const groupedByGroup = groupByGroup(teams, "points");
  const groupedByGroupHome = groupByGroup(teams, "draws");
  const groupedByGroupAway = groupByGroup(teams, "loses");

  renderGroupTables(groupedByGroup, "general");
  renderGroupTables(groupedByGroupHome, "home");
  renderGroupTables(groupedByGroupAway, "away");

  activateTabs();
}

init();
