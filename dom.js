/*******  Walking the DOM  *******/
console.log("----- Walking the DOM -----");
// ------ Task 1:
console.log("-----Task 1:");
// DOM children

/*
<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>
*/
// For each of the following, give at least one way of how to access them:
//The <div> DOM node?
console.log(document.body.firstElementChild);

//The <ul> DOM node?
// console.log(document.body.lastElementChild);
console.log(document.body.children[1]);

//The second <li> (with Pete)?
console.log(document.body.children[1].lastElementChild);


// -----Task 2:
// The sibling question
/*
If elem – is an arbitrary DOM element node…

Is it true that elem.lastChild.nextSibling is always null?
- Yes. This is always the last element and it has no siblings

Is it true that elem.children[0].previousSibling is always null ?
- No. elem.children[0] is the first child but may be non-element nodes before it.
*/

// -----Task 3:
console.log("-----Task 3:");
// Select all diagonal cells

let table = document.body.children[2];
// console.log(table);
for (let i=0; i< table.rows.length; i++ ) {
  let td = table.rows[i].cells[i];
  td.style.backgroundColor = 'red';
}

console.log(table);


//***************************************/
//**********  Searching elements DOM **********/
console.log("--Searching: getElement*, querySelector--");
// -----Task 1:
console.log("-----Task 1:");
// Search for elements

/*
Here’s the document with the table and form.

How to find?…
*/
// 1. The table with id="age-table".
 let ageTable = document.getElementById('age-table');
console.log(ageTable);

// 2. All label elements inside that table (there should be 3 of them).
let label = document.querySelectorAll('td > label');
console.log(label.length);

// 3. The first td in that table (with the word “Age”).
let age = ageTable.getElementsByTagName('td')[0];
console.log(age);

// 4. The form with name="search".
let search = document.getElementsByName('search')[0];
console.log(search);

// 5. The first input in that form.
let firstInput = document.querySelector('label > input');
console.log(firstInput);

// 6. The last input in that form.
let lastInput = document.querySelector('form > input');
console.log(lastInput);


//***************************************/
//**********  Basic DOM node properties **********/
console.log("--Basic DOM node properties--");
// -----Task 1:
console.log("-----Task 1:");
// Count descendants
/*
There’s a tree structured as nested ul/li.

Write the code that for each <li> shows:
*/


let ul = document.getElementsByTagName('ul')[1];
// console.log(ul);
let li = ul.querySelectorAll('li');
// console.log(li);
for (let i of li) {
  // 1. What’s the text inside it (without the subtree)
  let title = i.firstChild.data;
  // console.log(title);
  title = title.trim();
  // 2. The number of nested <li> – all descendants, including the deeply nested ones.
  let nr = i.getElementsByTagName('li').length;

  console.log(`${title}- ${nr}`);
}


// -----Task 2:
console.log("-----Task 2:");
// What's in the nodeType?

console.log(document.body.lastChild.nodeType);
// 1

// -----Task 3:
console.log("-----Task 3:");
// Tag in comment

// let body = document.body;

//   body.innerHTML = "<!--" + body.tagName + "-->";

//   console.log( body.firstChild.data ); // what's here? - BODY

// -----Task 4:
console.log("-----Task 4:");
// Where's the "document" in the hierarchy?

// Which class does the document belong to?
console.log(document.constructor.name);
// HTMLDocument class

// What’s its place in the DOM hierarchy?
console.log(document.__proto__.constructor.name); // HTMLDocument
console.log(document.__proto__.__proto__.constructor.name); // Document
console.log(document.__proto__.__proto__.__proto__.constructor.name); // Node
console.log(document.__proto__.__proto__.__proto__.__proto__.constructor.name); // EventTarget
console.log(document.__proto__.__proto__.__proto__.__proto__.__proto__.constructor.name); // Objects
// console.log(document.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.constructor.name); //null


// Does it inherit from Node or Element, or maybe HTMLElement?
console.dir(document instanceof Node); //true
console.dir(document instanceof Element); //false
console.dir(document instanceof HTMLDocument); //true


//***************************************/
//********** DOM attributes and  properties **********/
console.log("--DOM attributes and  properties--");
// -----Task 1:
console.log("-----Task 1:");
// Get the attribute

let element = document.querySelector('[data-widget-name]');
// console.log(element);

console.log(element.getAttribute('data-widget-name'));
// or so (element.dataset.widgetName);


// -----Task 2:
console.log("-----Task 2:");
// Make external links orange

// setting style for a single link
let links = document.getElementsByTagName('a');
console.log(links);

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // no attribute

  if (!href.includes('://')) continue; // no protocol

  if (href.startsWith('http://internal.com')) continue; 
  link.style.color = 'orange';
}


//***************************************/
//********** Modifying the document **********/
console.log("--Modifying the document--");
// -----Task 1:
// console.log("-----Task 1:");
// createTextNode vs innerHTML vs textContent
/*
Which of these 3 commands will do exactly the same?

1. elem.append(document.createTextNode(text))
2. elem.innerHTML = text
3. elem.textContent = text

Answer- 1 and 3 will add text into the element.
*/


// -----Task :
// Clear the element

const clear = (elem) => {
 return elem.remove();
}

clear(elem); 


//  -----Task 3:
console.log("-----Task 3:");
// Why does "aaa" remain?

console.log(table); // the table, as it should be

  table.remove();

  // Answer: because, in DOM the "aaa" is before the table

//  -----Task 4:
// Create a list

const interface = () => {
  let pr = prompt('Enter the text for the list item', '');

  let h1 = document.createElement('h1');
  h1.innerText = "Create a list";
  document.body.append(h1);
  let ul = document.createElement('ul');
  document.body.append(ul);

  while(true) {
    let pr = prompt('Enter the text for the list item', '');

    if (!pr) {
      break;
    }
  
    let li = document.createElement('li');
    li.textContent = pr;
    ul.append(li);
  }
}

interface();

//  -----Task 5:
//  Create a tree from the object

let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

const createTree = (container, obj) => {
  container.append(createTreeDom(obj));
}

const createTreeDom = (obj) => {

  if(!Object.keys(obj).length) return;
  let ul = document.createElement('ul');

  for (let key in obj) {
    let li = document.createElement('li');
    li.innerHTML = key;

    let uiChildren = createTreeDom(obj[key]);
    if (uiChildren) {
      li.append(uiChildren);
    }

    ul.append(li);
  }
  return ul;

}

let container = document.getElementById('container');

createTree(container, data);

//  -----Task 6:
//  Show descendants in a tree

const descendatsTree = () => {
  let ul = document.getElementsByClassName('countLi');
  // console.log(ul);
  for (let i of ul) {
    let liNr = document.getElementsByTagName("li");

    for (let li of liNr) {
      let countLi = li.getElementsByTagName('li').length;
      if (!countLi) continue;

      li.firstChild.data += `[${countLi}]`;
    }
  }
}
descendatsTree();

//  -----Task 7:
//  Create a calendar

const createCalendar = (elem, year, month) => {

  let mon = month - 1;
  let d = new Date(year, mon);

  let table = `
      <table>
      <tr>
        <th>MO</th>
        <th>TU</th>
        <th>WE</th>
        <th>TH</th>
        <th>FR</th>
        <th>SA</th>
        <th>SU</th>
      </tr>
      <tr>`;

  for (let i=0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while (d.getMonth() == mon) {
    table += `<td>${d.getDate()}</td>`;

    //newline
    if( getDay(d) % 7 == 6) {
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for(let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  elem.innerHTML = table;
}

const getDay = (date) => {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}
createCalendar(calendar, 1988, 12);

//  -----Task 8:
//  Colored clock with setInterval

const clockUpdate = () => {
  let clock = document.getElementById('clock');
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = `0${hours}`;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = `0${seconds}`;
  clock.children[2].innerHTML = seconds;
}

let timerId;

const startClock = () => {
  if (!timerId) {
    timerId = setInterval(clockUpdate, 1000);
  }
  clockUpdate();
}

const stopClock = () => {
  clearInterval(timerId);
  timerId = null;
}


//  -----Task 9:
//  Insert the HTML in the list

const insertLi = () => {
  const one = document.getElementById('one');
  
  one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

}
insertLi();


//  -----Task 10:
//  Sort the table

const sort = () => {
  let table = document.getElementById('table');
  let sortName = Array.from(table.tBodies[0].rows)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));

  table.tBodies[0].append(...sortName);
  
}

sort();


//***************************************/
//********** Styles and classes **********/
// -----Task 1:
// Create a notification

const showNotification = ({top = 0, right = 0, className, html}) => {
  let notification = document.createElement('div');
  notification.className = 'notification';
  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;
  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 1500);

}


setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello!',
    className: "welcome"
  });
}, 2000);