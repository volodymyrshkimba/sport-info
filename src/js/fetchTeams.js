import axios from "axios";

export const fetchTeams = async () => {
  try {
    const response = await axios.get(
      "https://63ee0ec0388920150dd83e3c.mockapi.io/teams"
    );
    return response.data;
  } catch (error) {
    console.error("Помилка при отриманні команд:", error);
    return [];
  }
};
