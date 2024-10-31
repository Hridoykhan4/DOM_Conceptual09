const allBtn = document.getElementsByClassName('add-btn');

for (const btn of allBtn) {
    btn.addEventListener('click', function(event){
        const name = event.target.parentNode.childNodes[1].innerText
        const price =  event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        
        const firstCartCount = getConvertedValue('cart');
        if(firstCartCount + 1 > 6){
            alert('Khatam');
            return;
        }

        // Update Budget
       
        const budget =  getConvertedValue('budget');

        document.getElementById('budget').innerText = budget - parseInt(price)


    //   Update Cart

        const cartCount = getConvertedValue('cart');
        document.getElementById('cart').innerText = cartCount + 1


        // Left Count

        const leftCount = getConvertedValue('left');
        document.getElementById('left').innerText = leftCount - 1


       



        const selectedContainer = document.getElementById('selected-players-container');
        const div = document.createElement('div');
        div.classList.add('selected-players')
        
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)


        selectedContainer.appendChild(div);


        updateTotalCost(price);
        updateGrandTotal()

    })
}


function updateGrandTotal(status){
    const totalCost = getConvertedValue('total-cost');

   if(status){
    const couponCode = document.getElementById('coupon-code').value;
    if(couponCode === 'mama420'){
        const discount = totalCost * 0.2;
        document.getElementById('grand-total').innerText = totalCost - discount;
    }
    else{
        alert('Please enter coupon code')  
    }
   }
   else{
    document.getElementById('grand-total').innerText = totalCost;
   } 
}



function updateTotalCost(value){
   const totalCost = getConvertedValue('total-cost');
   const sum = totalCost + parseInt(value);
   document.getElementById('total-cost').innerText = sum

}


function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertedPrice =  parseInt(price);
    return convertedPrice;
   
}



