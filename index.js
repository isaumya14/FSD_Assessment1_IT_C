const quantityInput=document.getElementById('quantity');
const totalprice=document.querySelector('.total-price');
const buynow= document.getElementById('buy-now');
const pricePerUnit=15;

function updatePrice(){
    const quantity=parseInt(quantityInput.value);
    const totalP=quantity*pricePerUnit;
    totalprice.textContent=`Total Price: Rs. ${totalP}`;
}
quantityInput.addEventListener('input',updatePrice);

buynow.addEventListener('click',()=>{
    const quantity=parseInt(quantityInput.value);
    const totalP=quantity*pricePerUnit;
    alert(`You added ${quantity} items to your cart for Rs. ${totalP}`);

});
