// Reduce

const myNums =[1,2,3]

const myTotal = myNums.reduce((acc,currval)=>{
    // console.log(`Accumlator : ${acc} and Curr val : ${currval}`);
    return acc+currval;
},0)
// console.log(`New num: ${myTotal}`);

const shoppingCart =[
    {
        itemName:"Js course",
        price: 1200
    },
    {
        itemName:"Python course",
        price: 4500
    },
    {
        itemName:"Html Css course",
        price: 3200
    },
    {
        itemName:"Php course",
        price: 999
    },
    {
        itemName:"Mobile dev course",
        price: 12000
    },
    {
        itemName:"Blockchain course",
        price: 15000
    }
]

const totalCart= shoppingCart.reduce((acc,item)=>{
    return acc+item.price;
},0)

console.log(totalCart);