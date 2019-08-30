const nasaContainer = document.querySelector(".nasaPic");

function createNasaHTML(nasaObj) {
    let nasaHTML = `
    <section>
        <h1>Cool NASA Picture of Space</h1>
        <h2>Title: ${nasaObj.title}</h2>
        <p>Date: ${nasaObj.date}</p>
        <p>Information: ${nasaObj.explanation}</p>
        <p>&copy; ${nasaObj.copyright}</p>
        <img src="${nasaObj.url}">
    </section>
    `
    return nasaHTML;
}

function addNasaToDom(htmlNasa) {
    nasaContainer.innerHTML += htmlNasa;
}

fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(pics => pics.json())
    .then(parsedNasa => {
        const nasaAsHTML = createNasaHTML(parsedNasa)
        addNasaToDom(nasaAsHTML)
    })
