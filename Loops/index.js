//Normal Loop
for (let index = 0; index < 10; index++) {
    // const element = array[index];
    console.log(index+1);                                               //execute counting from 1 to 10
}

//For in Loop
let obj = {
    rahul : 22,
    mohit : 21,
    main : 12
}

for(let a in obj){
    console.log(`Student name ${a} and marks are ${obj[a]}`);               //execute key and values of Obj
}