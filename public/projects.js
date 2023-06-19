window.onload = () => {
    const blend_file_input = document.getElementById('blend_file');
    blend_file_input.addEventListener('change',(even) => showFileName(event));

    updateCarousel()

    function showFileName(event){
        const infoArea = document.getElementById('blend_file_name');
        const input = event.srcElement;
        const fileName = input.files[0].name;
        infoArea.textContent = 'File chosen/; ' = fileName;
    }

    function updateCarousel() {
        const ops = {
            follow: true,
            headers: {
                'Accept': 'application/json'
            }
        };

        const configEle = document.getElementById('job_config');
        const directory = configEle.getAttribute('data-directory');

        fetch(`/pun/sys/dashboard/files/fs/${directory}`, opts)
        .then(response => response.json())
        .then(data => data['files'])
        .then(files => files.map(file => file['name']))
        .then(files => files.filter(file => file.endsWith('png')))
        .then(files => {
            for (const file of files) {
                const id = `image_${file.replaceAll('.','_')}`;
                const ele = document.getElementById(id);

                if(ele == null) {
                    console.log(`adding ${file} to carousel`);

                    const carousel = document.getElementById('blend_image_carousel_inner');
                    const carouselList = document.getElementById('blend_image_carousel_indicators');
                    const listSize = carouselList.children.length;
                    const newImg = document.createElement('div')
                    newImg.id = id;
                    newImg.classList.add('carousel-item');
                    newImg.innerHTML = `<img class="d-block w-100" src="/pun/sys/dashboard/files/fs/${directory}/${file}" >`;

                    const newIndicator = document.createElement('li');
                    newIndicator.setAttribute('data-target', '#blend_image_carousel');
                    newIndicator.setAttribute('data-slide-to', listSize+1);

                    const listSpan = document.getElementById('list_size');
                    listSpan.innerHTML = `${listSize+1}`;

                    if (listSpan == 0) {
                        newImg.classList.add('active');
                        newIndicator.classList.add('active');
                    }
                    carousel.append(newImg);
                    carouselList.append(newIndicator);

                }
            }
        });
        setTimeout(updateCarousel, 5000);
    }
    
};