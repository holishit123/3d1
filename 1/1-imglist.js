//img
(function () {
  const baseUrl = `../img/1/失身于它/1-2/`;
  const baseUrl1 = `../img/1/失身于它/3/`;
  const baseUrl2 = `../img/1/失身于它/4/`;
  const baseUrl3 = `../img/1/失身于它/5/`;
  const baseUrl4 = `../img/1/失身于它/5-bonus/`;
  const baseUrl5 = `../img/1/失身于它/6/`;
  const baseUrl6 = `../img/1/失身于它/7/`;
  const baseUrl7 = `../img/1/失身于它/8/`;

  const imgList = [];
  for (let i = 1; i <= 219; i++) {
    const formattedNumber = String(i).padStart(4, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl}${formattedNumber}.jpg`);
  }

  for (let i = 1; i <= 107; i++) {
    const formattedNumber = String(i).padStart(4, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl1}${formattedNumber}.jpg`);
  }

  for (let i = 1; i <= 99; i++) {
    const formattedNumber = String(i).padStart(4, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl2}${formattedNumber}.jpg`);
  }

  for (let i = 1; i <= 104; i++) {
    const formattedNumber = String(i).padStart(4, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl3}${formattedNumber}.jpg`);
  }

  for (let i = 0; i <= 52; i++) {
    const formattedNumber = String(i).padStart(4, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl4}${formattedNumber}.jpg`);
  }

  for (let i = 0; i <= 83; i++) {
    const formattedNumber = String(i).padStart(4, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl5}${formattedNumber}.jpg`);
  }

  for (let i = 0; i <= 101; i++) {
    const formattedNumber = String(i).padStart(4, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl6}${formattedNumber}.jpg`);
  }

  for (let i = 0; i <= 79; i++) {
    const formattedNumber = String(i).padStart(4, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl7}${formattedNumber}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
