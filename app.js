const allBtn = document.getElementsByClassName('add-btn');

for (const btn of allBtn) {
    btn.addEventListener('click', function(event){

        event.target.setAttribute('disabled', true);
        
        const name =  event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        
        if(getConvertedValue('budget') - parseInt(price) < 0 || getConvertedValue('cart') + 1 > 6 || getConvertedValue('left') - 0 < 0){
          alert('Low Money And Player Exceeded');
          return
        }

        
        event.target.parentNode.style.backgroundColor = 'gray'



        const selectedPlayersContainer = document.getElementById('selected-players-container');
        
        const div = document.createElement('div');
        div.classList.add('selected-players')

        const p1 = document.createElement('p');
        p1.innerText = name;
        const p2 = document.createElement('p');
        p2.innerText = price;
        const p3 = document.createElement('p');
        p3.innerText = category;


      div.appendChild(p1)
      div.appendChild(p2)
      div.appendChild(p3)
       selectedPlayersContainer.appendChild(div);


       updateTotalCost(price);
       updateGrandTotal();
       updateBudget(price);
       updateCart();
       updateLeft()
    })
}
  function updateCart(){
    const updatedCart = getConvertedValue('cart');
    document.getElementById('cart').innerText = updatedCart + 1;
    }


    function updateLeft(){
      const left = getConvertedValue('left');
      document.getElementById('left').innerText = left - 1;
    }

  function updateBudget(value){
    const budget =  getConvertedValue('budget');
    document.getElementById('budget').innerText = budget - parseInt(value)
  }



  function updateTotalCost(value){
    const totalCost = getConvertedValue('total-cost');
    const convertedPrice = parseInt(value);

    document.getElementById('total-cost').innerText = totalCost + convertedPrice
  }

  function updateGrandTotal(element){
      const totalCost = getConvertedValue('total-cost');

      const couponCode = document.getElementById('coupon-code').value;

      if(element){
          if(couponCode === 'raja420'){
            const discount = totalCost * 0.2;
            document.getElementById('grand-total').innerText = totalCost - discount;
          }
          else{
            alert("Invalid Coupon Code No Discount");
            return;
          }
      }
      else{
        document.getElementById('grand-total').innerText = totalCost;
      }

  }

  function getConvertedValue(id){
      const idNew = document.getElementById(id).innerText;
      const convertPrice = parseInt(idNew);
      return convertPrice;
  }


/* const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    const name = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    const category =
      event.target.parentNode.childNodes[5].childNodes[1].innerText;
    const selectedContainer = document.getElementById(
      "selected-players-container"
    );

    event.target.setAttribute("disabled", false);

    if (
      getValueById("budget") - parseInt(price) < 0 ||
      getValueById("cart") + 1 > 6 ||
      getValueById("left") - 0 < 0
    ) {
      alert("Tomar Budget or Cart Or players er Limit sesh");
      return;
    }

    event.target.parentNode.style.backgroundColor = "gray";
    event.target.parentNode.style.color = "white";

    const div = document.createElement("div");
    div.classList.add("selected-players");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = category;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);


    updateBudget(price);
    updateLeftPlayer();
    updateTotalCost(price);
    updateGrandTotal();
    updateCartCount();
  });
}

function updateTotalCost(price) {
  const previousTotal = document.getElementById("total-cost").innerText;
  const convertedTotal = parseInt(previousTotal);
  const convertedPrice = parseInt(price);
  const sum = convertedTotal + convertedPrice;
  document.getElementById("total-cost").innerText = sum;
}

function updateGrandTotal(control) {
  const previousTotal = document.getElementById("total-cost").innerText;
  const convertedTotal = parseInt(previousTotal);
  const couponCode = document.getElementById("coupon-code").value;
  if (control) {
    if (couponCode == "Hero20") {
      const discount = convertedTotal * 0.2;
      document.getElementById("grand-total").innerText =
        convertedTotal - discount;
    } else {
      alert("Invalid Coupon Code No Discount");
      return;
    }
  } else {
    document.getElementById("grand-total").innerText = convertedTotal;
  }
}

function updateBudget(value) {
  const defaultBudget = document.getElementById("budget").innerText;
  const convertDefaultBudget = parseInt(defaultBudget);
  document.getElementById("budget").innerText =
    convertDefaultBudget - parseInt(value);
}

function updateLeftPlayer() {
  const defaultLeft = document.getElementById("left").innerText;
  const convertDefaultLeft = parseInt(defaultLeft);
  document.getElementById("left").innerText = convertDefaultLeft - 1;
}

function updateCartCount() {
  const defaultCartCount = document.getElementById("cart").innerText;

  const convertDefaultCartCount = parseInt(defaultCartCount);
  document.getElementById("cart").innerText = convertDefaultCartCount + 1;
}

function getValueById(id) {
  const targetElement = document.getElementById(id).innerText;
  return parseInt(targetElement);
}



 */































/* const allBtn = document.getElementsByClassName('add-btn');


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

        grandTotal()

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

 */




















