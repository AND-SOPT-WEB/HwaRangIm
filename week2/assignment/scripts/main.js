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

//membersData 저장 및 초기화
if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}
let membersData = JSON.parse(localStorage.getItem("membersData"));

//초기 렌더링
renderMembers(membersData);

//검색 버튼 이벤트
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

//초기화 버튼 이벤트
resetButton.addEventListener("click", resetMembers);

//선택삭제 버튼 이벤트
deleteButton.addEventListener("click", () => {
  checkAll.checked = false;
  membersData = deleteMember(membersData);
  localStorage.setItem("membersData", JSON.stringify(membersData));
  renderMembers(membersData);
});

//모달 관련 이벤트
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
    localStorage.setItem("membersData", JSON.stringify(membersData));
    renderMembers(membersData);
    modal.close();
    addMemberForm.reset();
  }
});

//체크박스 전체선택 이벤트
checkAll.addEventListener("change", (e) => checkAllBtn(e));

//이벤트 위임을 통한 전체 체크박스 검증
document.querySelector("tbody").addEventListener("change", (e) => {
  if (e.target.classList.contains("check-item")) {
    isAllChecked();
  }
});
