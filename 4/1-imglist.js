//img
(function () {
  const baseUrl = `../img/4/ackerman我的媽媽被損友穿上了/1-8/`;
  const imgList = [];
  for (let i = 0; i <= 759; i++) {
    const formattedNumber = String(i).padStart(4, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl}${formattedNumber}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
