let product=document.querySelectorAll("#details").length;//.value;


//let product=document.getElementById('pols').innerHTML; 
let cart = document.querySelectorAll('#btn_cart');
    for (let i=0; i <cart.length; i++) //event listener 
    {
        cart[i].addEventListener('click', ()=>{
            cartcount(product[i]);
            console(product[i]);
        });
    }
function onLoadCartNumbers() {
    let prodnum=localStorage.getItem('cartcount');
    if (prodnum) {
        document.getElementById('badge').innerHTML=prodnum;
        
    }
}
function cartcount(product)
    {

       // product[4];
       
        console.log("the product is",product);
        let prodnum=localStorage.getItem('cartcount');
        
        prodnum=parseInt(prodnum);
        
       // console.log(typeof prodnum);
       
        if (prodnum) {
        localStorage.setItem('cartcount',prodnum +1);

        document.getElementById('badge').innerHTML=prodnum+1;
        bad=document.getElementById('badge');
       // console.log(bad);
        //console.log('added to cart');
       }
       else{
        localStorage.setItem('cartcount',1);
        document.getElementById('badge').innerHTML=1;

       }
     //  setItem(product);
    }
   /* function setItem(product) {
        let cartitem={
            [product.ge]
        }*/



    onLoadCartNumbers();

