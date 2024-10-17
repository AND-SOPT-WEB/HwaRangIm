import members from "../constants/members.js";
import { renderMembers } from "./render.js";
import { filterMembers, resetMembers } from "./filter.js";

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

const membersData = JSON.parse(localStorage.getItem("membersData"));

renderMembers(membersData);

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", () => {
  const filters = {
    name: document.querySelector("#name").value,
    englishName: document.querySelector("#eng-name").value,
    github: document.querySelector("#github").value,
    gender: document.querySelector("#gender").value,
    role: document.querySelector("#role").value,
    firstWeekGroup: document.querySelector("#week1-group").value,
    secondWeekGroup: document.querySelector("#week2-group").value,
  };

  const filteredMembers = filterMembers(membersData, filters);
  renderMembers(filteredMembers);
});

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", resetMembers);
