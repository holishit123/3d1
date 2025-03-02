//img
(function () {
  const baseUrl1 = `../img/2/[Snow3D] 我的女友王雯/1/`;
  const baseUrl2 = `../img/2/[Snow3D] 我的女友王雯/2/`;
  const baseUrl3 = `../img/2/[Snow3D] 我的女友王雯/3/`;
  const baseUrl4 = `../img/2/[Snow3D] 我的女友王雯/4/`;
  const baseUrl5 = `../img/2/[Snow3D] 我的女友王雯/5/`;

  const imgList = [];
  for (let i = 1; i <= 191; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 1; i <= 172; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  for (let i = 1; i <= 67; i++) {
    imgList.push(`${baseUrl3}${i}.jpg`);
  }

  for (let i = 1; i <= 140; i++) {
    imgList.push(`${baseUrl4}${i}.jpg`);
  }
  for (let i = 1; i <= 141; i++) {
    imgList.push(`${baseUrl5}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
