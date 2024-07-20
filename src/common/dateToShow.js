const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function showBlogDate(uploadDate) {
  const date = new Date(uploadDate);
  const dateToShow = month[date.getMonth()] + " " + date.getDate();
  return dateToShow;
}

export { showBlogDate };
