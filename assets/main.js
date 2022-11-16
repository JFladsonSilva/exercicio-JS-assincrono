const urlLink = 'https://api.thecatapi.com/v1/images/search';
;
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    const data = await fetch(urlLink)
    .then((param) => param.json())
    .catch((err) => console.log(err));

    return data.url;

}
console.log(getCats())
const loadImg = async () => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg)

loadImg()