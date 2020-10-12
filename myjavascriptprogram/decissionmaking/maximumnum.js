var num1=int(prompt("entr a num1"));
var num2=int(prompt("entr a num2"));
var num3=int(prompt("entr a num3"));

if(num1>num2 && num1>num3){
    console.log("max",num1);
    }
else if(num2>num1 && num2<num3){
    console.log("max ",num2);
    }
else if(num3>num1 && num3>num2){
    console.log("max",num3);
    }
else{
    print("numbers are equal");
    }