
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
  
  if (node.length === 1) {
    return true
  } else {
    return false
  }
  
  
  
  var i = node.children[0]
  var e = i.children[0]
  var d = e.children[0]
 if (d.children.length === 0) {
    return true
  } else {
    return false
  }
  
  return d.children[0]


 //while (node.chilren.length > 0) {
   //var node2 = node.children[i++]
 
 
  
  

  
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



