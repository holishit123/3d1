//img
(function () {
  const baseUrl1 = `../img/4/ackerman我的媽媽被損友穿上了/23/`;
  const baseUrl2 = `../img/4/ackerman我的媽媽被損友穿上了/24/`;
  const baseUrl3 = `../img/4/ackerman我的媽媽被損友穿上了/25/`;

  const imgList = [];

  for (let i = 1; i <= 105; i++) {
    const formattedNumber = String(i).padStart(3, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl1}${formattedNumber}.jpg`);
  }

  for (let i = 1; i <= 110; i++) {
    const formattedNumber = String(i).padStart(3, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl2}${formattedNumber}.jpg`);
  }
  for (let i = 1; i <= 103; i++) {
    const formattedNumber = String(i).padStart(3, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl3}${formattedNumber}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
