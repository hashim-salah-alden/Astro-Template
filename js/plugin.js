let boxs = document.querySelectorAll('.thumbnails .box'),
    thumbnails = document.querySelectorAll('.thumbnails-options .thumbnail');

thumbnails.forEach(thumbnail => {

    thumbnail.addEventListener('click',(e) =>{

        document.querySelector('.thumbnails .box.active').classList.remove('active');

        document.querySelector(e.target.dataset.option).classList.add('active');

    })
})