/**Create element with bigger img in it and set overlay div to visible */
function view(img) {
    /**Get image source url */
    let imgsrc = img.src;
    /**Create div  container for the img */
    let imgElem = document.createElement("div");
    imgElem.classList.add("img-container");
    imgElem.innerHTML = '<IMG SRC="' + img.src + '"onClick="close();"/>';
  
    const container = document
      .querySelector("#gallery .content")
      .appendChild(imgElem);
    imgElem.addEventListener("click", (event) => {
      close();
    });
  }
  
  /**Create function for removing created element and hiding overlay div (closing the picture viewer) */
  function close() {
    let element = document.getElementsByClassName("img-container")[0].remove();
  }
  
  document.querySelectorAll(".grid-item").forEach((item) => {
    item.addEventListener("click", function () {
      view(this);
    });
  });