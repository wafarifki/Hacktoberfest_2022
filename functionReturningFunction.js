// function returning function
function funct(){
    function func2(){
        console.log("Hello world");
    }
    return func2;
}

let ans  = funct();
ans();