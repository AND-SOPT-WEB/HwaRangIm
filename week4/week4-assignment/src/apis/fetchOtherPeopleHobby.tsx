import axios from "axios";

export const fetchOtherPeopleHobby = async (no: number) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL}/user/${no}/hobby`,
      {
        headers: {
          token,
        },
      }
    );
    return { success: true, result: response };
  } catch (error) {
    return { success: false, error };
  }
};
