let b=10;

// useCallback() function
function greet(){
    let a=20;
    let b=30;
    function meet()
    {
        console.log(a); // a ka reference ko Heap mein store krke rkhta hai
        console.log(b);
    }
    return meet;
}
const num=greet();
//console.log(num);
num();




