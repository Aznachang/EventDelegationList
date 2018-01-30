/*alert with name clicked*/
let ul = document.getElementById('list'),
    store = {},
    len = ul.children.length,
    ulChild = ul.children; 

for (let i=0; i<len; i++) {
  let name= ulChild[i].innerHTML;
  store[name] = 1;
}

// addEventListener to parent 'ul'
/*addEventListener('actionType', function()) */
ul.addEventListener('click', e=>{
  let li = e.target.closest('li'); // mouse-click find closest <li>
  // essentially get name before the ' ' (space)
  let liSplit = li.innerHTML.split(' '),
      liName = liSplit[0];
    
  // finds a closest parent 'li'
  if (liName) {
    let liNew = document.createElement('li'),
        count = ++store[liName]; 
    // add Name + #count to new <li></li> --> ex: <li>Jane 2</li>
    liNew.innerHTML = `${liName} ${count.toString()}`;
    //append 'AT THE END' to the parent 'ul' list
    ul.appendChild(liNew);
  }
});
