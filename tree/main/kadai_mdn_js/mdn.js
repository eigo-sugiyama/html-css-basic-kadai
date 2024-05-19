window.onload = function() {
  const date = new Date();
  let year = date.getUTCFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let formatDate = `${year}年${month}月${day}日`;
  console.log(formatDate);

  document.getElementById('dateDisplay').textContent = formatDate;
};
