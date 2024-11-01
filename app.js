const allBtn = document.getElementsByClassName('add-btn');


let count = 0;
for (const btn of allBtn) {
    btn.addEventListener('click', function(event){

        count += 1;

        const budget = getIntValue('budget')


        event.target.setAttribute('disabled', true);
        event.target.parentNode.parentNode.style.backgroundColor = "gray";
        const placeName = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

        if(budget - parseInt(price) < 0){
            alert('Taka Kamao');
            return;
        }

        
        setInnerText('budget', budget - parseInt(price))


        const selectedPlaceContainer = document.getElementById('selected-place-container');
        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;

        li.appendChild(p1);
        li.appendChild(p2);

        selectedPlaceContainer.appendChild(li);



        setInnerText('cart-count', count)

        totalCost('total-cost', price);

        grandTotal('grand-total', price)

    })
}


function grandTotal(category){
     const convertedTotal = getIntValue('total-cost');

    if(category === 'bus'){
        setInnerText('grand-total', convertedTotal + 100) 
    }
    else if(category === 'train'){
        setInnerText('grand-total', convertedTotal - 200)
    }
    else if(category === 'flight'){
        setInnerText('grand-total', convertedTotal + 500)
    }

    else{
    setInnerText('grand-total', convertedTotal)
    }
}

function getIntValue(elementId){
    const element = document.getElementById(elementId).innerText;
    return parseInt(element);
}


function totalCost(elementId, value){
    const element = document.getElementById(elementId).innerText;
    document.getElementById(elementId).innerText = parseInt(element) + parseInt(value)
}


function setInnerText(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


























/* const allBtn = document.getElementsByClassName('add-btn');

for (const btn of allBtn) {
    btn.addEventListener('click', function(event){
        const name = event.target.parentNode.childNodes[1].innerText
        const price =  event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        
        const firstLeftCount = getConvertedValue('left');

        const firstCartCount = getConvertedValue('cart');
        if( firstLeftCount - 1 < 0 || firstCartCount + 1 > 6){
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


        event.target.setAttribute('disabled', true);
        event.target.parentNode.style.backgroundColor = 'gray'



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



 */