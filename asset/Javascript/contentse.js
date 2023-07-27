let product=document.querySelectorAll("#details").length;//.value;
let counter="";

//let product=document.getElementById('pols').innerHTML; 
let cart = document.querySelectorAll('#btn_cart');
    for (let i=0; i <cart.length; i++) //event listener 
    {
        cart[i].addEventListener('click', ()=>{
            cartcount(product[i]);
            console.log(i);
            de=fetchdataJson(i)
            console.log(de);
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
        console.log(product);
        let prodnum=localStorage.getItem('cartcount');
                prodnum=parseInt(prodnum);
        if (prodnum) {
                    localStorage.setItem('cartcount',prodnum +1);
                        document.getElementById('badge').innerHTML=prodnum+1;
                    bad=document.getElementById('badge');
     
                      }
       else{
        localStorage.setItem('cartcount',1);
        document.getElementById('badge').innerHTML=1;

       }
  
    }

    function  fetchdataJson(i ) {
        let dat;
       fetch("static/Javascript/product.json")
       .then((res)=>{
        return res.json();
       
       })
        .then((data)=>{
          dat=data[i];
          console.log(dat);
        });
      
    };
           

    onLoadCartNumbers();

