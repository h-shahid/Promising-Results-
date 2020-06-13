// slowMath.add(6, 2) // when using (1,1 ) it errors out b/c it won't add -2 and 98
//  .then((val)=> {  //Rejections stop the code from running once the error is caught
//     console.log(val)
//     return slowMath.multiply(val, 2)
// })
// .then((val) => {
//     console.log(val)
//     return slowMath.divide(val, 4 )
// })
// .then((val)=> {
//     console.log(val)
//     return slowMath.subtract(val, 3)
// })
// .then((val)=> {
//     console.log(val)
//     return slowMath.add(val, 98)
// })
// .then((val)=> {
//     console.log(val)
//     return slowMath.remainder(val, 2)
// })
// .then((val)=> {
//     console.log(val)
//     return slowMath.multiply(val, 50)
// })
// .then((val)=> {
//     console.log(val)
//     return slowMath.remainder(val, 40)
// })
// .then((val)=> {
//     console.log(val)
//     return slowMath.add(val, 32)
// })
// .then((val)=> {
//     console.log(val)
//     return console.log (`The final result is ${val}.`)
// }).catch((error)=>{
//         console.log(error)

//     })

//ASYNC/AWAIT


async function doMath() {
  try {
    let val = await slowMath.add(6, 2);
    console.log(val);
    val = await slowMath.multiply(val, 2);
    console.log(val);
    val = await slowMath.divide(val, 4);
    console.log(val);
    val = await slowMath.subtract(val, 3);
    console.log(val);
    val = await slowMath.add(val, 98);
    console.log(val);
    val = await slowMath.remainder(val, 2);
    console.log(val);
    val = await slowMath.multiply(val, 50);
    console.log(val);
    val = await slowMath.remainder(val, 40);
    console.log(val);
    val = await slowMath.add(val, 32);
    console.log(val);
    return console.log(`The final result is ${val}.`);
  } catch (error) {
    console.log(error);
  }
}
doMath();
