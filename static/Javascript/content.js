
let cart = document.querySelectorAll('#btn_cart');
    for (let i=0; i <cart.length; i++)
    {
        cart[i].addEventListener('click', ()=>{
            cartcount()
        });
    }
function cartcount()
    {
        let prodnum=localStorage.getItem('cartcount');
        prodnum=parseInt(prodnum);
        console.log(typeof prodnum);
        localStorage.setItem('cartcount',1);

       // document.cookie="order"+1 +"counter"+ 7;
    }

