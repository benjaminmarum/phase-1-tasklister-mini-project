document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) => {
    //console.log(e);
    e.preventDefault();
    buildToDo(e.target['new-task-description'].value);
    form.reset();
  })

});

function buildToDo(todo) {
  console.log(todo);
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  p.textContent = `${todo}     `;
  btn.textContent = ' x ';
  p.appendChild(btn);
  console.log(p)
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete (e){
e.target.parentNode.remove();
};





console.log('Dom hasn\'t loaded yet');