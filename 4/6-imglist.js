//img
(function () {
  const baseUrl1 = `../img/4/ackerman我的媽媽被損友穿上了/yg-bs-1/`;
  const baseUrl2 = `../img/4/ackerman我的媽媽被損友穿上了/yg-bs-2-3/`;

  const imgList = [];

  for (let i = 1; i <= 104; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 1; i <= 203; i++) {
    const formattedNumber = String(i).padStart(3, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl2}${formattedNumber}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
