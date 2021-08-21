// memory cost 

function updetTotal(){
    let bestPrice = parseInt(document.getElementById('bestPrice').innerText);
    let storageCost = parseInt(document.getElementById('storageCost').innerText);
    let deliveryCost = parseInt(document.getElementById('deliveryCost').innerText);
    let memoryCost = parseInt(document.getElementById('memoryCost').innerText);

    let totalCost = bestPrice + storageCost + deliveryCost + memoryCost;
    document.getElementById('totalAmount').innerText = totalCost;
    document.getElementById('newtotalAmount').innerText = totalCost;
}

function updatePrice (id , price){
    document.getElementById(id).innerText = price ;
    updetTotal();
}
//  memory Price
document.getElementById('defaultMemoryPrice').addEventListener('click',function(){
    updatePrice('memoryCost' , 0)
});
document.getElementById('secondMemoryPrice').addEventListener('click',function(){
    updatePrice('memoryCost' , 180);
});

// Storage Cost 

document.getElementById('defaultStoragePrice').addEventListener('click',function(){
    updatePrice('storageCost' , 0)
});
document.getElementById('secondStoragePrice').addEventListener('click',function(){
    updatePrice('storageCost' , 100)
});
document.getElementById('thirdStoragePrice').addEventListener('click',function(){
    updatePrice('storageCost' , 180);
});

// Delivery option

document.getElementById('defaultDeliveryCost').addEventListener('click',function(){
    updatePrice('deliveryCost' , 0)
});
document.getElementById('fastDeliveryCost').addEventListener('click',function(){
    updatePrice('deliveryCost' , 20)
});

//  promo code
document.getElementById('promo-CodeBtn').addEventListener('click' ,
function(){
    const totalAmount = document.getElementById('totalAmount');
    const totalPrice = parseFloat(totalAmount.innerText) 
    const promoCode = document.getElementById('promoCode').value;

    if(promoCode == 'stevekaku'){
        document.getElementById('newtotalAmount').innerText = totalPrice - (totalPrice * 0.2);
        document.getElementById('promoCode').value = ' ';
    }
    else{
        document.getElementById('newtotalAmount').innerText = totalPrice;
        document.getElementById('promoCode').value = ' ';
    }
    
})


