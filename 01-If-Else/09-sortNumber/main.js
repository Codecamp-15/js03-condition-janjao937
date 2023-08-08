/*
- เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
- แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย  
  เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1
*/
/*

let num1 = prompt("Assing Number");
let num2 = prompt("Assing Number");
let num3 = prompt("Assing Number");

let targets = [num1,num2,num3];

let currentIndexCheck = 0;
let index = 0;

let temp = 0;
 
while(currentIndexCheck <= targets.length-1)
{
    //findTarget
    index = 0;
    while(index <= targets.length-1)
    {
        //
        if(targets[currentIndexCheck] < targets[index])
        {
            temp = targets[currentIndexCheck];
            targets[currentIndexCheck] = targets[index];
            targets[index] = temp;
        }
        index++;
    }
    currentIndexCheck++;
}

targets.forEach(alert(targets));
*/


let currentIndexCheck = 0;
let index = 0;

let temp = 0;

let num1 = prompt("Assing Number1");
let num2 = prompt("Assing Number2");
let num3 = prompt("Assing Number3");
let targets;

if(isNaN(num1)||isNaN(num2)||isNaN(num3))
{
    while(isNaN(num1)||isNaN(num2)||isNaN(num3))
    {
        num1 = prompt("Assing Number1!!!");
        num2 = prompt("Assing Number2!!!");
        num3 = prompt("Assing Number3!!!");
    }
}

 targets = [+num1,+num2,+num3];

 while(currentIndexCheck <= targets.length-1)
 {
     //findTarget
     index = 0;
     while(index <= targets.length-1)
     {
         //
         if(targets[currentIndexCheck] > targets[index])
         {
             temp = targets[currentIndexCheck];
             targets[currentIndexCheck] = targets[index];
             targets[index] = temp;
         }
         index++;
     }
     currentIndexCheck++;
 }
 
//targets;
targets.forEach(alert(targets));

///============================================///

// /// Teacher Code ///
// let x = +prompt("Enter Number1!!!");
// let y = +prompt("Enter Number2!!!");
// let z = +prompt("Enter Number3!!!");

// let min = 0;
// let mid = 0;
// let maxValue = 0;

// if(x>=y&&x>=z)
// {
//     maxValue = x;
//     if(y>=z)
//     {
//         mid=y;
//         min = z;
//     }
//     else
//     {
//         mid = z;
//         min = y;
//     }

// }
// else if(y>=x&&y>=z)
// {
//     maxValue = y;
//     if(x>=z)
//     {
//         min = z;
//         mid = x;
//     }
//     else
//     {
//         min = x;
//         mid = z;
//     }
    
// }
// else if(z>=x && z>=y)
// {
//     maxValue = z;
//     if(y>=x)
//     {
//         min = x;
//         mid = y;
//     }
//     else
//     {
//         min=y;
//         mid = x;
//     }
// }
// console.log(`Max => Min${maxValue}/${mid}/${min}`);
