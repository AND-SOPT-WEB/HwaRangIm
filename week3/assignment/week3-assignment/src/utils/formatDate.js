export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 || 12;

  return `${year}.${String(month).padStart(2, "0")}.${String(day).padStart(
    2,
    "0"
  )} ${ampm} ${String(formattedHours).padStart(2, "0")}시 ${String(
    minutes
  ).padStart(2, "0")}분 ${String(seconds).padStart(2, "0")}초`;
};
