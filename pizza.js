function getReceipt() {
    text1 = "";
    text2 = "";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
        text2 = text2+sizeTotal+"<br>";
    }
    runningTotal = sizeTotal;
    getCrust(runningTotal,text1,text2);
 }
 
 function getCrust(runningTotal,text1,text2) {
    var crustTotal = 0;
    var selectedCrust;
    var crustArray = document.getElementsByClassName("crust");
    for (var j = 0; j < crustArray.length; j++) {
        if (crustArray[j].checked) {
            selectedCrust = crustArray[j].value;
            text1 = text1 + selectedCrust + "<br>"; crustTotal = 3;
        }}
        

    runningTotal = (runningTotal + crustTotal);
    text2 = text2 + crustTotal + "<br>";
    getSauce(runningTotal,text1,text2);
 };
 
 function getSauce(runningTotal,text1,text2) {
    var SauceTotal=0;
    var selectedSauce;
    var sauceArray = document.getElementsByClassName("sauce");
    for (var k = 0; k < sauceArray.length; k++) {
        if (sauceArray[k].checked) {
            selectedSauce = sauceArray[k].value;
            text1 = text1 + selectedSauce + "<br>"; SauceTotal=2;
        }
        
    }
    runningTotal = (runningTotal + SauceTotal);
    text2 = text2 + SauceTotal + "<br>";
    getCheese(runningTotal,text1,text2);
 };
 
 function getCheese(runningTotal,text1,text2) {
    var cheeseTotal = 0;
    var selectedCheese;
    var cheeseArray = document.getElementsByClassName("cheese");
    for (var j = 0; j < cheeseArray.length; j++) {
        if (cheeseArray[j].checked) {
            selectedCheese = cheeseArray[j].value;
            text1 = text1 + selectedCheese + "<br>";cheeseTotal = 3;
        }
       
    }
    runningTotal = (runningTotal + cheeseTotal);
    text2 = text2 + cheeseTotal + "<br>";
    getMeat(runningTotal,text1,text2);
 };
 
 function getMeat(runningTotal,text1,text2) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meat");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    for (var j = 0; j < selectedMeat.length; j++) {
        text1 = text1+selectedMeat[j]+"<br>";
        if (meatCount <= 1) {
                text2 = text2 + 0 + "<br>";
                meatCount = meatCount - 1;
            } else if (meatCount == 2) {
                text2 = text2 + 1 + "<br>";
                meatCount = meatCount - 1;
            } else {
                text2 = text2 + 1 + "<br>";
                meatCount = meatCount - 1;
            }
    }
    getVeggie(runningTotal,text1,text2);
 };
 
 function getVeggie(runningTotal,text1,text2) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies")
    for (var j = 0; j < veggieArray.length; j++) {
        if (veggieArray[j].checked) {
            selectedVeggie.push(veggieArray[j].value);
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    for (var j = 0; j < selectedVeggie.length; j++) {
            text1 = text1+selectedVeggie[j]+"<br>";
            if (veggieCount <= 1) {
                text2 = text2 + 0 + "<br>";
                veggieCount = veggieCount - 1;
            } else if (veggieCount == 2) {
                text2 = text2 + 1 + "<br>";
                veggieCount = veggieCount - 1;
            } else {
                text2 = text2 + 1 + "<br>";
                veggieCount = veggieCount - 1;
            }
    }
    document.getElementById("cart").style.opacity=1;
    document.getElementById("showText1").innerHTML=text1;
    document.getElementById("showText2").innerHTML=text2;
    document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
 };
 
 function clearAll() {
    document.getElementById("form").reset();
    document.getElementById("cart").style.opacity=0;
 };

 