export const getPhotoApi = (page) =>{
    return fetch(`https://pixabay.com/api/?key=49720943-65d54ece17a872b9e08aac171&q=yellow+flowers&image_type=photo&per_page=4&page=${page}`).then((respons)=>{
        return respons.json()
    })
}


// https://pixabay.com/api/?key=49720943-65d54ece17a872b9e08aac171