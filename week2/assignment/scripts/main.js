import members from "../constants/members.js";
import { renderMembers } from "./render.js";
import { filterMembers, resetMembers } from "./filter.js";
import checkAllBtn from "./checkAll.js";
import deleteMember from "./deleteMember.js";

const searchButton = document.querySelector(".search-button");
const resetButton = document.querySelector(".reset-button");
const checkAll = document.querySelector("#check-all-btn");
const deleteButton = document.querySelector(".delete-button");

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

let membersData = JSON.parse(localStorage.getItem("membersData"));

renderMembers(membersData);

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

resetButton.addEventListener("click", resetMembers);

checkAll.addEventListener("change", (e) => checkAllBtn(e));

deleteButton.addEventListener("click", () => {
  checkAll.checked = false;
  membersData = deleteMember(membersData);
  renderMembers(membersData);
});
