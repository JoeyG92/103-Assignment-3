function calculate(){
    console.log("Calculator function");
    let num1=Number(prompt("Enter the number 1: "));
    console.log(num1);
    let num2=Number(prompt("Enter the number 2: "));
    console.log(num2);
    let num3=Number(prompt("Enter the number 3: "));
    console.log(num3);
    let num4=Number(prompt("Enter the number 4: "));
    console.log(num4);
    let num5=Number(prompt("Enter the number 5: "));
    console.log(num5);
    let num6=Number(prompt("Enter the number 6: "));
    console.log(num6);
    let num7=Number(prompt("Enter the number 7: "));
    console.log(num7);
    let num8=Number(prompt("Enter the number 8: "));
    console.log(num8)
    let sum,subs,mult,div;
    //display the sum
    sum=num1+num2;
    console.log(sum);
    //display the subs
    sum=num3-num4;
    console.log(sum);
    //display the mult
    sum=num5*num6;
    console.log(sum);
    //display the div
    sum=num7/num8;
    console.log(sum)
    document.getElementById("results").innerHTML=`
    <p>${num1} + ${num2} = ${sum}</p>
    <p>${num3} - ${num4} = ${sum}</p>
    <p>${num5} * ${num6} = ${sum}</p>
    <p>${num7} / ${num8} = ${sum}</p>
    `;


}