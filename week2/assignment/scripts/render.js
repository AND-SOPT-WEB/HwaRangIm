export const renderMembers = (membersData) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

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

    tr.innerHTML = `
      <td><input type="checkbox" class="check_item" /></td>
      <td id="name">${name}</td>
      <td id="eng-name">${englishName}</td>
      <td id="github">${github}</td>
      <td id="gender">${gender === "male" ? "남자" : "여자"}</td>
      <td id="role">${role}</td>
      <td id="week1-group">${firstWeekGroup}</td>
      <td id="week2-group">${secondWeekGroup}</td>
    `;

    tbody.appendChild(tr);
  });
};
