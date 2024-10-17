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
  window.location.reload();
};

export { filterMembers, resetMembers };
