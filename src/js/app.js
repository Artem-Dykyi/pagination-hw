import { getPhotoApi } from "./get-photo-api";
import { setApi } from "./set-api";

let page = 1
getPhotoApi(page).then(({hits}) => {
   setApi(hits);
   console.log(hits)
})



document.querySelector(".load-more").addEventListener("click", () => {
    page ++;
    getPhotoApi(page).then(({hits}) => {
        setApi(hits)
    })
})
