export async function receipt() {
    let req = await fetch('http://localhost:4000/desserts');
    let data = await req.json();
    let html = '';
    console.log(data)
    for (let res of data) {
        html += receiptHtml(res)
    }

    document.getElementById('receptWrap').innerHTML = html;
}

function receiptHtml(data) {
    console.log(data)
    return `
    <div class="product">
                    <div class="product-img">
                        <picture>
                            <source
                                srcset="/images/${data.image}">
                            <img src="/images/${data.image}"
                                alt="">
                        </picture>
                    </div>

                    <div class="product-text">
                        <h1>${data.name}</h1>
                        <p>${data.description_long}</p>
                        <p>Основни съставки: ${data.ingredients_text}</p>
                    </div>

                    <div class="vitamins">
                        <div class="mini">
                            <p>КАЛОРИИ</p>
                            <h1>${data.nutritions.calories}</h1>
                        </div>
                        <div class="mini">
                            <p>ОБЩО МАЗНИНИ</p>
                            <h1>${data.nutritions.totalFat}g</h1>
                        </div>
                        <div class="mini">
                            <p>НАСИТЕНИ МАЗНИНИ</p>
                            <h1>${data.nutritions.saturatedFat}g</h1>
                        </div>
                        <div class="mini">
                            <p>ОБЩО ВЪГЛЕХИДРАТИ</p>
                            <h1>${data.nutritions.totalCarbs}g</h1>
                        </div>
                        <div class="mini">
                            <p>ПРОТЕИН</p>
                            <h1>${data.nutritions.protein}g</h1>
                        </div>
                        <div class="mini">
                            <p>ЗАХАРИ</p>
                            <h1>${data.nutritions.sugars}g</h1>
                        </div>
                        <div class="mini">
                            <p>НАТРИЙ</p>
                            <h1>${data.nutritions.sodium}mg</h1>
                        </div>
                        <div class="mini">
                            <p>ХОЛЕСТЕРОЛ</p>
                            <h1>${data.nutritions.cholesterol}mg</h1>
                        </div>
                    </div>
                </div>`
}