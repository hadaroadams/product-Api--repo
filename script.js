const url ="https://course-api.com/javascript-store-products"
const productDiv= document.querySelector(".product-center")
console.log(productDiv)
    
const productApiFetch = async()=>{
    productDiv.innerHTML='<div class="spinner"><div>'
    try{
        const data = await fetch(url)
        const data1= await data.json()
        console.log(data1)
        productDiv.innerHTML=""
        display(data1)
    }catch(erro){
        console.log("could not get the data")
        productDiv.innerHTML=`<h2>${erro}<h2>`
    }
}
productApiFetch()

function display( data){

    data.map((item)=>{
        const id =item.id
        const img =item.fields.image[0].url
        const title = item. fields.name
        const price = item.fields.price
        let article =document.createElement('article')
        let content =`
                    <a href="./Product/product.html?id=${id}&name=john&age=25">
                        <img src="${img}">
                        <p>${title}</p>
                        <h4>$${price}</h4>
                    </a>`
        article.innerHTML=content
     productDiv.appendChild(article)
    })
}

    


