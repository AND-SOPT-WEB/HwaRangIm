const deleteMember = (membersData) => {
  const checkedInputs = document.querySelectorAll(".check-item:checked");
  const checkedTrsId = Array.from(checkedInputs).map((checkedInput) =>
    parseInt(checkedInput.closest("tr").id)
  );

  const updatedMembersData = membersData.filter(
    (member) => !checkedTrsId.includes(member.id)
  );

  return updatedMembersData;
};

export default deleteMember;
