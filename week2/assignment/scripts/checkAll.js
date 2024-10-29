const checkAllBtn = (e) => {
  const checkboxes = document.querySelectorAll(".check-item");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = e.target.checked;
  });
};

const isAllChecked = () => {
  const checkBoxes = document.querySelectorAll(".check-item");
  const checkAll = document.querySelector("#check-all-btn");
  const checked = document.querySelectorAll(".check-item:checked").length;

  checkAll.checked = checkBoxes.length === checked;
};

export { checkAllBtn, isAllChecked };
