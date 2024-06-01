export async function getFood() {
    let req = await fetch('http://localhost:4000/desserts');
    let data = await req.json();
    let html = '';
    for (let res of data) {
        html += generateFoodHtml(res)
    }
    document.getElementById('cardWrap').innerHTML = html;
}

function generateFoodHtml(data) {
    let html = `<article class="card">
                    <picture class="main-img">
                        <source
                            srcset="/images/${data.image}">
                        <img src="/images/${data.image}"
                            alt="">
                    </picture>
                    <picture class="subtitle">
                        <source srcset="/images/Sub Title Element.png">
                        <img src="/images/Sub Title Element.png" alt="">
                    </picture>
                    <h1>${data.name}</h1>
                    <p>${data.description_short}</p>
                    <button>Научете повече</button>
                </article>`

    return html
}

getFood()