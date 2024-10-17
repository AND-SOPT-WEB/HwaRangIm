const addNewMember = (membersData) => {
  let name = document.getElementById("modal-name").value;
  let englishName = document.getElementById("modal-eng-name").value;
  let github = document.getElementById("modal-github").value;
  let gender = document.getElementById("modal-gender").value;
  let role = document.getElementById("modal-role").value;
  let firstWeekGroup = document.getElementById("modal-week1-group").value;
  let secondWeekGroup = document.getElementById("modal-week2-group").value;

  if (
    !name.trim() ||
    !englishName.trim() ||
    !github.trim() ||
    !gender ||
    !role ||
    !firstWeekGroup.trim() ||
    !secondWeekGroup.trim()
  ) {
    alert("모든 필드를 입력해주세요.");
    return;
  }

  const newMember = {
    id: membersData.length + 1,
    name,
    englishName,
    github,
    gender,
    role,
    firstWeekGroup,
    secondWeekGroup,
  };

  return newMember;
};

export default addNewMember;
