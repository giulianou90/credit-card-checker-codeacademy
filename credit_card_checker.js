const valid1 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


const validateCredit = array =>{
  const farray = []
  const inputa = array
  for (let i=(inputa.length)-1; i>=0;i--){
      if (i===((inputa.length)-1) || ((inputa.length/2)%1===0 && (i/2)%1!=0) || ((inputa.length/2)%1!=0 && (i/2)%1===0) ){
       farray.push(inputa[i])
  }else{
      farray.push(inputa[i]*2)
  }
  }
  //console.log(farray)
  const newArray = []
  for (let i=1; i<= (farray.length-1);i++){
    if(farray[i]>9){
      newArray.push(farray[i]-9)
    }else{
      newArray.push(farray[i])
    }
  }
  //console.log(newArray)
  let sum = 0;
  // iterate over each item in the array
  for (let i = 0; i < newArray.length; i++ ) {
  sum += newArray[i];
}
   let totalSum= sum+farray[0]

   //console.log(totalSum)

   if (totalSum % 10 ===0){
    return true
   }else{
    return false
   }
}

const invalidCards = [];

const findInvalidCards= nestedArray =>{
  //const invalidCards = [];
  for(let i=0; i<nestedArray.length;i++){
    if (validateCredit(nestedArray[i]) === false){
      invalidCards.push(nestedArray[i])
    }
  }
  //console.log(invalidCards)
}

const invalidCardCompanies = nestedInvalidCards =>{
    const cardCompanies=[]
    for(let i=0; i<nestedInvalidCards.length;i++){
        if((invalidCards[i])[0]===3 || (invalidCards[i])[0]===4 || (invalidCards[i])[0]===5 || (invalidCards[i])[0]===6){
            cardCompanies.push(invalidCards[i])
        }
    }
    //console.log(cardCompanies)
    for(let i=0; i<cardCompanies.length;i++){
      if((cardCompanies[i])[0]===3){
        cardCompanies[i]='Amex'
      }else if ((cardCompanies[i])[0]===4){
        cardCompanies[i]='Visa'
       }else if ((cardCompanies[i])[0]===5){
        cardCompanies[i]='MasterCard'
       }else if ((cardCompanies[i])[0]===6){
        cardCompanies[i]='Discover'
       }else{
        cardCompanies[i]='Company not found'
       }
    }
    //console.log(cardCompanies)
    function removeDuplicates(arr) {
      return arr.filter((item,
          index) => arr.indexOf(item) === index);
  }
  console.log(removeDuplicates(cardCompanies))
  }
//console.log(validateCredit(mystery5))
findInvalidCards(batch)
invalidCardCompanies(invalidCards)

