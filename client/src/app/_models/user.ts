export interface User{
    username: string;
    token: string;
    photoUrl: string;
}

//ts infers type of data (number here)
/* let data : number | string = 42;
let data2 = "45";
data = 10;
data = "10";

interface Car {
    color: string;
    model: string;
    topSpeed?: number;
}

const car1 : Car = {
    color: 'blue',
    model:'BMW'
}

const car2 : Car= {
    color: 'black',
    model:'Mercedes',
    topSpeed: 100
}

const multiply = (x : number, y : number) => {
    return x*y;
} */