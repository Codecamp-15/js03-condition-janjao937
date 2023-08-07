/*

- จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
- ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
- หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”
*/

let input1 = prompt("Enter First Number");
let input2 = prompt("Enter Secound Number");


//(num=== null || num.trim() === "" ||

if(input1===null||input1.trim === ""|| isNaN(input1) || input2===null||input2.trim === ""||isNaN(input2))
{
    alert("Invalid number");
}
else
{
    let num = (+ input1+ + input2);
    alert(`${num}`);
}


