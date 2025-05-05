export const activateTabs = () => {
  const generalTables = document.querySelectorAll('[data-type="general"]');
  const homeTables = document.querySelectorAll('[data-type="home"]');
  const awayTables = document.querySelectorAll('[data-type="away"]');
  const tabButtons = document.querySelectorAll(".tab-button");

  const handleTabClick = (event) => {
    const clickedButton = event.currentTarget;
    const type = clickedButton.dataset.type;

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    clickedButton.classList.add("active");

    [...generalTables, ...homeTables, ...awayTables].forEach((table) =>
      table.classList.remove("active")
    );

    let targetTables;
    if (type === "general-btn") {
      targetTables = generalTables;
    } else if (type === "home-btn") {
      targetTables = homeTables;
    } else if (type === "away-btn") {
      targetTables = awayTables;
    }

    targetTables.forEach((table) => table.classList.add("active"));
  };

  tabButtons.forEach((button) => {
    button.addEventListener("click", handleTabClick);
  });
};
