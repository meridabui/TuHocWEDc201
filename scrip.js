// let a=4;
// let b=5;
// let c=a+b;
// console.log(c+1);

// alert("hello");

// confirm("are u sure want to continue?")

// prompt("what is your name") 
//prompt dùng để nhập liệu

// const headings=document.getElementsByClassName('heading');
// console.log(headings);
// const heading1=document.getElementById('h1');
// const heading =document.querySelector('#id');
// với querySelector thì #id, .class, body

 const body=document.querySelector('body');
// body.append('Hello World');
const newDiv=document.createElement('div');
newDiv.textContent='Hello World';
newDiv.innerHTML='<b>bye</b>'
body.append(newDiv);


// cách khác
const newDi2v2=document.createElement('div');
const bold=document.createElement('b');  //bold là biến chứa thẻ <b> này.
bold.innerText='Hello WOrld';
newDiv2.append(bold)
body.append(newDiv2);


const doan2=document.getElementById('p2');
doan2.remove();



// | Việc làm          | Code                                     |
// | ----------------- | ---------------------------------------- |
// | Lấy phần tử       | `document.querySelector("p")`            |
// | Thay đổi nội dung | `element.innerText = "abc"`              |
// | Thay đổi style    | `element.style.color = "red"`            |
// | Thêm phần tử      | `document.createElement("div")`          |
// | Xóa phần tử       | `element.remove()`                       |
// | Gắn sự kiện       | `element.addEventListener("click", ...)` |
