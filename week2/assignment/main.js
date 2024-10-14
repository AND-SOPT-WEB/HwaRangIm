import members from "../assignment/constants/members.js";

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

const membersData = JSON.parse(localStorage.getItem("membersData"));

const tbody = document.querySelector("tbody");

membersData.forEach((item) => {
  const {
    id,
    name,
    englishName,
    github,
    gender,
    role,
    firstWeekGroup,
    secondWeekGroup,
  } = item;

  const tr = document.createElement("tr");
  tr.setAttribute("id", id);

  const checkboxTd = document.createElement("td");
  const checkbox = document.createElement("input");

  checkbox.classList.add("check_item");
  checkbox.type = "checkbox";
  checkboxTd.appendChild(checkbox);

  const nameTd = document.createElement("td");
  nameTd.innerText = name;

  const englishNameTd = document.createElement("td");
  englishNameTd.innerText = englishName;

  const githubTd = document.createElement("td");
  githubTd.innerText = github;

  const genderTd = document.createElement("td");
  genderTd.innerText = gender === "male" ? "남자" : "여자";

  const roleTd = document.createElement("td");
  roleTd.innerText = role;

  const firstWeekGroupTd = document.createElement("td");
  firstWeekGroupTd.innerText = firstWeekGroup;

  const secondWeekGroupTd = document.createElement("td");
  secondWeekGroupTd.innerText = secondWeekGroup;

  tr.append(
    checkboxTd,
    nameTd,
    englishNameTd,
    githubTd,
    genderTd,
    roleTd,
    firstWeekGroupTd,
    secondWeekGroupTd
  );

  tbody.appendChild(tr);
});
