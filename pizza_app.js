module.exports = function pizza_app(){
const pizza_list = [] 

var totalS =0
var totalM =0
var totalL =0
var overallTotal = 0

function addS(pizza_small){
if(pizza_small==='small'){
    totalS+=31.99
    overallTotal += 31.99
}
}
function getSmall(){
    return totalS.toFixed(2)
}

function addM(pizza_medium){
    if(pizza_medium === 'medium'){
        totalM+= 76.99
        overallTotal += 76.99
    } 

}
function getMedium(){
    return totalM.toFixed(2)
}
function addL(pizza_large){
    if(pizza_large === 'large'){
        totalL += 98.99
        overallTotal += 98.99
    } 

}
function getLarge(){
    return totalL.toFixed(2)
}
function grandTotal(){
    return  overallTotal.toFixed(2)
}
    return{
        addS,
        addM,
        addL,
        getSmall,
        getMedium,
        getLarge,
        grandTotal


    }
}