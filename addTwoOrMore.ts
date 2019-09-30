//we have parameters and in TS we assign type to them, so we know what
//type of data to exect.colon after function tells us what expected
//type is to be.

function add(param1: number, param2: number) : number {
    return param1 + param2;

}

console.log(add(1,2));

//ADD AS MANY AS WE WISH
//we will use rest which will turn param1 into an array

function add2(...param1:number[]): number {
    let total = 0;
    param1.forEach((num) => {
        total += num;
    })
    return total;
}