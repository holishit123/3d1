//img
(function () {
  const baseUrl1 = `../img/4/ackerman我的媽媽被損友穿上了/bs-1/`;
  const baseUrl2 = `../img/4/ackerman我的媽媽被損友穿上了/bs-2/`;
  const baseUrl3 = `../img/4/ackerman我的媽媽被損友穿上了/bs-3/`;
  const baseUrl4 = `../img/4/ackerman我的媽媽被損友穿上了/bs-4/`;
  const baseUrl5 = `../img/4/ackerman我的媽媽被損友穿上了/bs-5/`;

  const imgList = [];
  
  for (let i = 1; i <= 105; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 1; i <= 107; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }
  for (let i = 1; i <= 92; i++) {
    imgList.push(`${baseUrl3}${i}.jpg`);
  }
  for (let i = 1; i <= 103; i++) {
    imgList.push(`${baseUrl4}${i}.jpg`);
  }
  for (let i = 1; i <= 116; i++) {
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
