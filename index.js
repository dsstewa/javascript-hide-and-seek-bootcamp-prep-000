
function getFirstSelector(selector) {
   return document.querySelector(selector)
}
var test = []

function nestedTarget() {
 
   return document.querySelector('div.target')
   
}
var main = []
function increaseRankBy(n) {
mainL = document.getElementsByClassName('ranked-list').length
console.log(mainL)
var li = document.getElementsByClassName('ranked-list')[0]
console.log(li.children[0])
var update = li.children[0]
console.log(update)
update.textContent = update + 2

// for (var i = 0; i < mainL; i++) {
//   var li = document.getElementsByClassName('ranked-list')[i]
 // li.textContent[0] = li.children[0] + 1
  
 // return li.children[0]
   
 
 
 
// main = document.getElementsByClassName('ranked-list')[1]
 
 
 
 // return main.children[2]
  
}

// body>
//    <main id="app">
//      <ul class="unranked-list">
//      <li>2</li>
//      <li>5</li>
//      <li>4</li>
//      </ul>

//      <ul class="ranked-list">
//      <li>1</li>
//        <li>2</li>
//      </ul>

//      <ul class="ranked-list">
//        <li>12</li>
//        <li>11</li>
//        <li>10</li>
//   <ul>