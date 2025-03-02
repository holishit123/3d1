//img
(function () {
  const imgList = [];
  const baseUrl1 = `../img/3/Món Quà Tuyệt Vời Cho Ba!/1/`;
  const baseUrl2 = `../img/3/Món Quà Tuyệt Vời Cho Ba!/2/`;

  for (let i = 1; i <= 9; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 1; i <= 7; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
