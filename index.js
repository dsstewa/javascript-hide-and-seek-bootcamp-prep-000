
function getFirstSelector(selector) {
   return document.querySelector(selector)
}
var test = []

function nestedTarget() {
 
   return document.querySelector('div.target')
   
}

function increaseRankBy(n) {
var mainL = document.getElementsByClassName('ranked-list').length
for (var i = 0; i < mainL; i++) {
  var li = document.getElementsByClassName('ranked-list')[i]
  for (var d = 0; d < li.children.length; d++) {
    var update = li.children[d]
    update.textContent = parseInt(update.textContent,10) + n
  }
}
}

function deepestChild() {
  var node = document.getElementById('grand-node')
 while (node.chilren.lenght > 0) {
   
 }
 
  
  
  return node.children[]
  
}

//<div id="grand-node">
  //      <div>
   //       <div>
   //         <div>
  //            <div>
   //             boo!
   //           </div>
   //         </div>
   //       </div>
    //    </div>
   //   </div>


























function find(array, criteriaFn) {
  let current = array
  let next = []

  while (current) {
    if (criteriaFn(current)) {
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}

