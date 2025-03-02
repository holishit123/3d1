//img
(function () {
  const baseUrl = `../img/50/zerone兄弟竟然拜托我照顾他的妻女/1/`;
  const imgList = [];
    for (let i = 1; i <= 127; i++) {
      const formattedNumber = String(i).padStart(3, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
      imgList.push(`${baseUrl}01_${formattedNumber}.jpg`);
    }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
