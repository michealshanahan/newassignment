let productArray = [
    {
        text: 'Opening pencil skirt',
        image: "https://images.crateandbarrel.com/is/image/Crate/JulietteJewelryBoxSHF16/$web_zoom$/190411135134/juliette-jewelry-box.jpg",
        stars: "https://www.amfmwv.com/sites/default/files/photos/blog/5stars.png",
        alt: 'jewelry box',
        brand: 'SK Fashion'
    },{
        text: 'Opening pencil skirt',
        image: "https://assets.ray-ban.com/is/image/RayBan/8053672741841_shad_qt?$594$",
        stars: "https://www.amfmwv.com/sites/default/files/photos/blog/5stars.png",
        alt: 'jewelry box',
        brand: 'TastyKato'
    },{
        text: 'Opening pencil skirt',
        image: "https://bellroy-product-images.imgix.net/bellroy_dot_com_gallery_image/USD/WHSE-CAR-301/0?w=768&h=490&fit=clip&auto=format",
        stars: "https://www.amfmwv.com/sites/default/files/photos/blog/5stars.png",
        alt: 'jewelry box',
        brand: 'Nosquik'
    },{
        text: 'Mini houndstooth trousers',
        image: "https://cdn.shopify.com/s/files/1/0277/9027/products/Clara.Crossbody.Vachetta.w.3_1100x.jpg?v=1566506039",
        stars: "https://www.amfmwv.com/sites/default/files/photos/blog/5stars.png",
        alt: 'jewelry box',
        brand: 'SK Fashion'
    },{
        text: 'Mini houndstooth trousers',
        image: "https://i5.walmartimages.com/asr/ec208c06-1084-4431-85bd-7d5e765f7300_1.775e297e8267d2a90628c9033510adc5.jpeg",
        stars: "https://www.amfmwv.com/sites/default/files/photos/blog/5stars.png",
        alt: 'jewelry box',
        brand: ''
    },{
        text: 'Mini houndstooth trousers',
        image: "data:image/jpeg;base64,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",
        stars: "https://www.amfmwv.com/sites/default/files/photos/blog/5stars.png",
        alt: 'jewelry box',
        brand: ''
    },{
        text: 'Opening pencil skirt',
        image: "data:image/jpeg;base64,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",
        stars: "https://www.amfmwv.com/sites/default/files/photos/blog/5stars.png",
        alt: 'jewelry box',
        brand: 'SK Fashion'
    },{
        text: 'Opening pencil skirt',
        image: "data:image/jpeg;base64,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",
        stars: "https://www.amfmwv.com/sites/default/files/photos/blog/5stars.png",
        alt: 'jewelry box',
        brand: 'TastyKato'
    }
]

let productsDiv = document.getElementById("productDisplay")

let loopFunction =()=>{
    return productArray.forEach(product => {
        console.log(product)
        let productDescription = document.createElement('div')
        productDescription.className = 'product-container'
        let createImage = document.createElement('img')
        createImage.className = 'product-image'
        createImage.src = product.image
        createImage.alt = product.alt
        productDescription.appendChild(createImage)
        let productText = document.createElement("div")
        productText.innerHTML = product.text
        productText.className = "product-name"
        productDescription.appendChild(productText)
        let createStars = document.createElement('img')
        createStars.src = product.stars
        createStars.className = "stars"
        createStars.alt = "five stars"
        productDescription.appendChild(createStars)
        let manufacturer = document.createTextNode(product.brand)
        productDescription.appendChild(manufacturer)

       return(
           productsDiv.appendChild(productDescription)
       ) 
    });
}
loopFunction()