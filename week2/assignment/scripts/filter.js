const filterMembers = (membersData, filters) => {
  return membersData.filter((member) => {
    const {
      name,
      englishName,
      github,
      gender,
      role,
      firstWeekGroup,
      secondWeekGroup,
    } = filters;

    if (name && !member.name.includes(name)) return false;
    if (englishName && !member.englishName.includes(englishName)) return false;
    if (github && !member.github.includes(github)) return false;
    if (gender && member.gender !== gender) return false;
    if (role && member.role !== role) return false;
    if (firstWeekGroup && member.firstWeekGroup != firstWeekGroup) return false;
    if (secondWeekGroup && member.secondWeekGroup != secondWeekGroup)
      return false;

    return true;
  });
};

const resetMembers = () => {
  document.querySelector("#name").value = "";
  document.querySelector("#eng-name").value = "";
  document.querySelector("#github").value = "";
  document.querySelector("#gender").value = "";
  document.querySelector("#role").value = "";
  document.querySelector("#week1-group").value = "";
  document.querySelector("#week2-group").value = "";

  //   window.location.reload();
};

export { filterMembers, resetMembers };
