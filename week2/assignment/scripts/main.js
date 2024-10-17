import members from "../constants/members.js";
import { renderMembers } from "./render.js";
import { filterMembers, resetMembers } from "./filter.js";
import { checkAllBtn, isAllChecked } from "./checkAll.js";
import deleteMember from "./deleteMember.js";
import addNewMember from "./addMember.js";

const searchButton = document.querySelector(".search-button");
const resetButton = document.querySelector(".reset-button");
const checkAll = document.querySelector("#check-all-btn");
const deleteButton = document.querySelector(".delete-button");
const addButton = document.querySelector(".add-button");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close");
const addMemberForm = document.querySelector(".modal-form");
// const addMemberBtn = document.querySelector(".add-member");

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

let membersData = JSON.parse(localStorage.getItem("membersData"));

const addCheckboxListeners = () => {
  const checkBoxes = document.querySelectorAll(".check-item");
  checkBoxes.forEach((checkbox) =>
    checkbox.addEventListener("change", isAllChecked)
  );
};

renderMembers(membersData);
addCheckboxListeners();

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
  addCheckboxListeners();
});

resetButton.addEventListener("click", resetMembers);

checkAll.addEventListener("change", (e) => checkAllBtn(e));

deleteButton.addEventListener("click", () => {
  checkAll.checked = false;
  membersData = deleteMember(membersData);
  renderMembers(membersData);
  addCheckboxListeners();
});

addButton.addEventListener("click", () => {
  modal.showModal();
});
modalCloseBtn.addEventListener("click", () => {
  modal.close();
});
modal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) modal.close();
});

addMemberForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newMember = addNewMember(membersData);
  if (newMember) {
    membersData.push(newMember);
    renderMembers(membersData);
    addCheckboxListeners();
    modal.close();
    addMemberForm.reset();
  }
});
