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

let targets = [100,5,20];

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

targets;