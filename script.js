

/**
 * Exercice 1
 */
 console.log("--------- Exercice 1 -------------------");

// Partie 1
console.log("--------- Partie 1 -------------------");

// 1- Créez une fonction appelée infoAboutMe()qui ne prend aucun paramètre.
function infoAboutMe(){
}

// 2- La fonction devrait console.log une phrase vous concernant (c'est-à-dire votre nom, votre âge, vos loisirs, etc.).
function infoAboutMe(){
    console.log(`
        Je suis Agnissan Jean Fulbert Kouassi,
        j'ai 28 ans ,
        mes loisirs sont la randonnée, les films`);
}

// 3- Appelez la fonction.
infoAboutMe();

// Partie 2
console.log("--------- Partie 2 -------------------");
// 1- Créez une fonction appelée infoAboutPerson(personName, personAge, personFavoriteColor)qui prend 3 paramètres.
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`
    Vous vous appelez ${personName}, 
    vous avez ${personAge} ans, 
    votre couleur préférée est ${personFavoriteColor}`)
}

// 2- La fonction devrait console.log une phrase vous concernant (c'est-à-dire votre nom, votre âge, vos loisirs, etc.).
function infoAboutMe(){
    console.log(`
        Je suis Agnissan Jean Fulbert Kouassi,
        j'ai 28 ans ,
        mes loisirs sont la randonnée, les films`);
}

// 3- Appelez la fonction deux fois avec les arguments suivants :
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


/**
 * Exercice 2
 */
 console.log("---------  Exercice 2 -------------------");


// 1- Créez une fonction nommée calculateTip()qui ne prend aucun paramètre.
function calculateTip(){

}

// 2- À l'intérieur de la fonction, utilisez promptpour demander à John le montant de la facture.
function calculateTip(){
    let userFacture =  prompt(`Jhone, veillez entré le montant de votre facture`)
}

/* 3- Si la facture est inférieure à 50 $, laissez un pourboire de 20 %.
Si la facture est comprise entre 50 $ et 200 $, pourboire de 15 %.
Si la facture est supérieure à 200 $, laissez un pourboire de 10 %.
*/
function calculateTip(){
    let userFacture =  prompt(`Jhone, veillez entré le montant de votre facture`)
    let userFactureType = isNaN(userFacture);

    if(userFactureType){
        alert('Veillez entré un nombre');
    }else{
        if ( userFacture < 50) {
            let poucentagePourboire = 20/100
            alert(`laisser un pourboire de ${userFacture*poucentagePourboire} ` )
        }
        if ( userFacture >= 50 || userFacture <= 200) {
            let poucentagePourboire = 15/100
            alert(`laisser un pourboire de ${userFacture*poucentagePourboire} ` )
        }
        if ( userFacture > 200) {
            let poucentagePourboire = 10/100
            alert(`laisser un pourboire de ${userFacture*poucentagePourboire} ` )
        }
    } 
}

// 4- Console.log le montant du pourboire et la facture finale (facture + pourboire).
function calculateTip(){
    let userFacture =  prompt(`Jhone, veillez entré le montant de votre facture`)
    let userFactureType = isNaN(userFacture);

    if(userFactureType){
        alert('Veillez entré un nombre');
    }else{
        if ( userFacture < 50) {
            let poucentagePourboire = 20/100
            alert(`laisser un pourboire de ${userFacture*poucentagePourboire} ` )
            console.log(` le montant du pourboire et la facture finale ${userFacture + userFacture*poucentagePourboire}`)
        }
        if ( userFacture >= 50 || userFacture <= 200) {
            let poucentagePourboire = 15/100
            alert(`laisser un pourboire de ${userFacture*poucentagePourboire} ` )
            console.log(` le montant du pourboire et la facture finale ${userFacture + userFacture*poucentagePourboire}`)
        }
        if ( userFacture > 200) {
            let poucentagePourboire = 10/100
            alert(`laisser un pourboire de ${userFacture*poucentagePourboire} ` )
            console.log(` le montant du pourboire et la facture finale ${userFacture + userFacture*poucentagePourboire}`)
        }
    } 
}

// 5- Appelez la calculateTip()fonction.
calculateTip();



/**
 * Exercice 3
 */
 console.log("---------  Exercice 3 -------------------");

// 1- Créez un appel de fonction isDivisible() qui ne prend aucun paramètre.
function  isDivisible(){
}

// 2- Dans la fonction, parcourez les nombres de 0 à 500.
function  isDivisible(){
    for (let index = 0; index < 500; index++) {
        console.log(index);
    } 
}
isDivisible();

// 3- Appelez la calculateTip()fonctionÀ la fin, console.log la somme de tous les nombres divisibles par 23.
function  isDivisible(){
    for (let index = 0; index < 500; index++) {
        if (index%23 == 0) {
            console.log(index);
        }  
    } 
}
isDivisible();

// 4- À la fin, console.log la somme de tous les nombres divisibles par 23.
function  isDivisible(){
    let sumNumber = 0;
    let numberDivible = [];

    for (let index = 0; index < 500; index++) {
        if (index%23 == 0) {
            console.log(index);
            sumNumber += index;
            numberDivible.push(index);
        }  
    } 
    console.log(`la somme de chacun des nombres ${numberDivible} divisibles par 23 est ${sumNumber} `); 
}
isDivisible();

// 5- Bonus : Ajoutez un diviseur de paramètre à la fonction.
function  isDivisible(divisor){
    let sumNumber = 0;
    let numberDivible = [];

    for (let index = 0; index < 500; index++) {
        if (index%divisor == 0) {
            console.log(index);
            sumNumber += index;
            numberDivible.push(index);
        }  
    } 
    console.log(`la somme de chacun des nombres ${numberDivible} divisibles par ${divisor} est ${sumNumber} `); 
}
isDivisible(23);


/**
 * Exercice 4
 */
console.log("---------  Exercice 4 -------------------");

// 1- Ajoutez les objets stocket pricesà votre fichier js.
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// 2- Créez un tableau appelé shoppingListavec les éléments suivants : "banane", "orange" et "pomme". Cela signifie que vous avez 1 banane, 1 orange et 1 pomme dans votre panier.
let shoppingList = ["banana", "orange", "apple"];
console.log(shoppingList);

// 3- Créez une fonction appelée myBill() qui ne prend aucun paramètre.
// function myBill(){
// }

// 4- La fonction doit retourner le prix total de votre shoppingList. Pour ce faire, vous devez suivre ces règles :
// 4-1- L'article doit être en stock. ( Astuce : vérifier if .. in)
// 4-2- Si l'article est en stock, découvrez le prix dans l' prices objet.
function myBill(){
    let priceShoping = 0;
    for (let index = 0; index < shoppingList.length; index++) {
        for (const stock_item in stock) {
            if (shoppingList[index] == stock_item) {
                if (stock[stock_item] > 1) {
                    priceShoping += parseFloat(`${prices[shoppingList[index]]}`);
                }
            }
        }
    }
    console.log(`le prix total du shoppingList est ${priceShoping} $`)
}

// 5- Appelez la myBill()fonction.
myBill();


// 6- Bonus : Si l'article est en stock, diminuez le stock de l'article de 1
function myBill(){
    let priceShoping = 0;
    for (let index = 0; index < shoppingList.length; index++) {
        for (const stock_item in stock) {
            if (shoppingList[index] == stock_item) {
                if (stock[stock_item] > 1) {                    
                    priceShoping += parseFloat(`${prices[shoppingList[index]]}`);
                    stock[stock_item] --;
                }
            }
        }
    }
    console.log(`le prix total du shoppingList est ${priceShoping} $`)
}
console.log(stock);


/**
 * Exercice 5
 */
 console.log("---------  Exercice 5 -------------------");

// 1- Créez une fonction nommée changeEnough(itemPrice, amountOfChange)qui reçoit deux arguments
function changeEnough(itemPrice, amountOfChange){

}

// 2- Dans la fonction, déterminez si vous pouvez ou non vous permettre l'article
function changeEnough(itemPrice, amountOfChange){
        let incrementAmountOfChange = 0;
        for (let i = 0; i < amountOfChange.length ; i++) {
            if (i == 0) {
                incrementAmountOfChange += parseFloat(amountOfChange[i]*0.25) 
            }
            if (i == 1) {
                incrementAmountOfChange += parseFloat(amountOfChange[i]*0.10) 
            }
            if (i == 2) {
                incrementAmountOfChange += parseFloat(amountOfChange[i]*0.05) 
            }
            if (i == 3) {
                incrementAmountOfChange += parseFloat(amountOfChange[i]*0.01) 
            }
        }

        if (incrementAmountOfChange > itemPrice) {
            return true; 
        }

        if(itemPrice > incrementAmountOfChange ){
            return false;
        }
}

// 3-Le changement sera toujours représenté dans l'ordre suivant : quarts, dimes, nickels, pennies.

// 4- Ajoutez les objets stocket prices à votre fichier js.
changeEnough(4.25, [25, 20, 5, 0])



/**
 * Exercice 6
 */
 console.log("---------  Exercice 6 -------------------");

// 1- Définissez une fonction appelée hotelCost().
function hotelCost(){
    let priceByNuit = 140;
    do {
        userSejour = prompt("Renseigné le nombre de nuits que vous souhaite séjourner à l'hôtel");
      } while (
         !userSejour || isNaN(userSejour)
      );

      return ` le prix total de l'hotel est ${userSejour * priceByNuit} $`
}
hotelCost();


// 2- Définissez une fonction appelée planeRideCost().
function planeRideCost(){
    let priceDestinationLondre = 183;
    let priceDestinationParis = 220;
    let priceAutreDestination = 300;

    do {
        userDestination = prompt("Renseigné votre destination");
      } while (
         !userDestination || !isNaN(userDestination)
      );

      let convertFormatString = userDestination.toUpperCase();

      console.log(convertFormatString);

      if (convertFormatString == "LONDRE") {
        return ` le prix pour la destination ${userDestination} est ${priceDestinationLondre} $`
        
      } else if (convertFormatString == "PARIS") {
        return ` le prix pour la destination ${userDestination} est ${priceDestinationParis} $`
        
      } else{
        return ` le prix pour cette destination  est ${priceAutreDestination} $`
      } 
}
planeRideCost();


// 3- Définissez une fonction appelée rentalCarCost().
function rentalCarCost(){

    let priceCarByDay = 10;
    do {
        numberLacationCar = prompt("Quelle est le nombre de jours de location de la voiture ?");
      } while (
         !numberLacationCar || isNaN(numberLacationCar)
      );

      let convertnumberLacationCar = parseInt(numberLacationCar);
      if (convertnumberLacationCar > 10) {
        return ` le coût de location de la voiture ${priceCarByDay* convertnumberLacationCar*0.05} $`
      } else {
        return ` le coût de location de la voiture est ${priceCarByDay * convertnumberLacationCar} $`
      }
}
rentalCarCost();


// 4- Définissez une fonction appelée totalVacationCost()qui renvoie le coût total des vacances de l'utilisateur en appelant les 3 fonctions que vous avez créées ci-dessus.
function totalVacationCost(){
    return ` 
    ${rentalCarCost()}, 
    ${hotelCost()}, 
    ${planeRideCost()} `;
}

// 5- Appelez la fonctiontotalVacationCost()
totalVacationCost();

// 6- Bonus : Au lieu d'utiliser un promptà l'intérieur des 3 premières fonctions, utilisez uniquement une invite à l'intérieur de la totalVacationCost()fonction. Vous devez modifier les 3 premières fonctions en conséquence.













