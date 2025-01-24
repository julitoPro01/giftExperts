
export const getGiftCard =  async(category='one push') => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=3vxqKyQ9R5CfrzAT6eYZaM0zild2eH4k&limit=10&q=${category}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    return data.map(img=>({
            img:img.images.downsized_medium.url,
            id:img.id,
            title:img.title
        })
    )
}
