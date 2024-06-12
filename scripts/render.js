
export const renderPhotosGrid = (data) => {
    
    const imgGrids = $imgGrid.children;
    console.log(data);
    const imageGridsArray = Array.from(imgGrids);
    let index = 0;
    let changeLimit = Math.ceil(data.length / imageGridsArray.length);
    imageGridsArray.forEach((imageGridContainer) => {
        const imageDataGroup = data.slice(index, index + changeLimit);
        index += changeLimit; 
        const $imagesFragment = document.createDocumentFragment();
        while (imageGridContainer.firstChild) {
            imageGridContainer.removeChild(imageGridContainer.firstChild)
        }
        imageDataGroup.forEach((image) => {
            console.log(image);
            const $a = document.createElement("a");
            
            $a.className = "image-item";
            $a.href = `../pages/prewiev-pages.html?image-id=${image.id}`; // Corrected typo in query parameter
            $a.innerHTML = `
                <img class="img-style" src="${image.src.original}?auto=compress&cs=tinysrgb&w=400" alt="${image.alt}"/>
                <div class="image-cover">
                    <div class="image-button"></div>
                    <div class="image-account"></div>
                    <div class="photographer-avatar"></div>
                    <div class="top">
                        ${image.photographer}
                        <a id="down" href="${image.src.medium}?cs=srgb&dl=pexels-alikarimibn-6284716.jpg&fm=jpg">Download</a>
                    </div>
                </div>
            `;
            
            
            $imagesFragment.appendChild($a);
           
        });
        console.log(index);
        imageGridContainer.appendChild($imagesFragment);
        });
    renderPrevImg()
}

export const renderPrevImg = (data) => {
    console.log(data);
    $resImg.src = data.src.original;
    $aboutImg.innerText = data.alt;
    $infoImg.innerText = data.photographer;
    
}
