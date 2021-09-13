module.exports = function pizza_app(){
const pizza_list = [] 
const pizzaS = 0
const pizzaM = 0
const pizzaL=0

var totalS =0
var totalM =0
var totalL =0
var overallTotal = 0

function addS(pizza_small){
if(pizza_small==='small'){
    totalS+=31.99
    overallTotal += 31.99
}


// if(pizza_sizeS === pizzaS){
//     pizza_sizeS += 31.99
// } 
//   pizza_list.push(pizza_sizeS)

}
function getSmall(){
    return totalS
}
function grandTotal(){
    return  overallTotal
}
function addM(){
    if(pizza_medium === 'medium'){
        totalM+= 76.99
    } 

}
function addL (pizza_sizeL){
    if(pizza_sizeL === 'large'){
        totalL += 98.99
    } 

}
function totals(){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

}
    return{
        addS,
        addM,
        addL,
        getSmall,
        totals,
        grandTotal


    }
}