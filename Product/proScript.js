const url ="https://course-api.com/javascript-store-products"
const container =document.querySelector('body')

const param = new URLSearchParams(window.location.search)
let productId = param.get('id')
console.log(productId)

const respons =async()=>{
    try{
        container.innerHTML="<h1>Loading...</h1>"
        const data = await fetch(url)
        const innerData = await data.json()
        container.innerHTML=""
        console.log(innerData)
        display(innerData)
    }catch(erro){
        console.log(`there was an ${erro}` )
    }
}
respons()

function display(data){
    data.filter((item)=>{
        if(item.id==productId){
            let content =
            `
            <a href="../index.html">
                 <button>Back Home</button>
            </a>
            <article>
                <img src="${item.fields.image[0].url}" alt="">
                <section>
                    <h1>${item.fields.name}</h1>
                    <p>${item.fields.company}</p>
                    <p>$${item.fields.price}</p>
                    <div>
                        <span class="product-color" style="background-color:${item.fields.colors[0]}"> </span>
                        <span class="product-color" style="background-color:${item.fields.colors[1]}"> </span>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, commodi ipsa corrupti quo dicta aut quos reprehenderit libero iste ducimus labore dolor hic eligendi, eveniet quibusdam saepe qui nam similique.</p>
                    <button>Add To Cart</button>
                </section>
            </article>
            `
            console.log(item)
            container.innerHTML=content
        }       
    })
}