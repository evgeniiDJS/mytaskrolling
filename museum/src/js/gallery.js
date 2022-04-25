
async function pushGalleryAndOverflow() {
    const pictureInnerContainer = document.querySelector('.picture-inner-container');
    const img0 = document.createElement('img');
    img0.classList.add('gallery_items');
    img0.src = `./src/assets/img/galery/galery6.jpg`;
    img0.alt = `galery6`;

    const img1 = document.createElement('img');
    img1.classList.add('gallery_items');
    img1.src = `./src/assets/img/galery/galery5.jpg`;
    img1.alt = `galery5`;

    const img2 = document.createElement('img');
    img2.classList.add('gallery_items');
    img2.src = `./src/assets/img/galery/galery12.jpg`;
    img2.alt = `galery12`;

    let arr = [img0, img1, img2];

    let shuffle = (array) => array.sort(() => Math.random() - 0.5);

    await shuffle(arr);

    await arr.map((item) => pictureInnerContainer.append(item));

    await document.querySelector('#menu__toggle').addEventListener('change', function(e) {
        document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
    });
}
pushGalleryAndOverflow();