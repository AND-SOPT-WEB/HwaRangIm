const checkAllBtn = (e) => {
  const checkboxes = document.querySelectorAll(".check-item");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = e.target.checked;
  });
};

export default checkAllBtn;
