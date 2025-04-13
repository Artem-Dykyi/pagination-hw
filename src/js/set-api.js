export const setApi = (data) => {
     data.forEach(photo => {
        document.querySelector(".gallery").insertAdjacentHTML("beforeend", 
            `<li class="gallery-item">
                <img src="${photo.previewURL}" alt="${photo.tags}" class="gallery-photo">
            </li>`);
     });
  }