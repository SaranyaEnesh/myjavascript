var num1=10
var num2=20
var num3=30
if (num1>num2 && num1>num3){
    if(num2>num3){
    console.log("second greater"+num2)}
    else{
        console.log("second greater"+num3)
    }
}
else if(num2>num1 && num2>num3){
    if(num3>num1){
        console.log("second greater"+num3)

    }
    else{
        console.log("second greater"+num1)
    }

}
else{
    if(num2>num1){
        console.log("second greater"+num2)
    }
    else{
        console.log("second greater"+num1)

    }}
