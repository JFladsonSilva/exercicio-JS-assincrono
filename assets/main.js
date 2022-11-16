const urlLink = 'https://dog.ceo/api/breeds/image/random';
;
const dogBtn = document.getElementById('change-dog');
const dogImg = document.getElementById('dog');

const getDogs = async () => {
    const data = await fetch(urlLink)
    .then((param) => param.json())
    .catch((err) => console.log(err));

    return data.message;

}
console.log(getDogs())
const loadImg = async () => {
    dogImg.src = await getDogs();
}

dogBtn.addEventListener('click', loadImg)

loadImg()