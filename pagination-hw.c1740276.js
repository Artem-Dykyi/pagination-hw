const e=e=>fetch(`https://pixabay.com/api/?key=49720943-65d54ece17a872b9e08aac171&q=yellow+flowers&image_type=photo&per_page=4&page=${e}`).then(e=>e.json()),t=e=>{e.forEach(e=>{document.querySelector(".gallery").insertAdjacentHTML("beforeend",`<li class="gallery-item">
                <img src="${e.previewURL}" alt="${e.tags}" class="gallery-photo">
            </li>`)})};let l=1;e(1).then(({hits:e})=>{t(e),console.log(e)}),document.querySelector(".load-more").addEventListener("click",()=>{e(++l).then(({hits:e})=>{t(e)})});
//# sourceMappingURL=pagination-hw.c1740276.js.map
