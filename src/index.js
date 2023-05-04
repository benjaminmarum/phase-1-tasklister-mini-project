document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector('#create-task-form');
  initializeForm();
  console.log('Initialization complete. Click Task Lister Heavy to show Stretch Deliverables')

  // function that automatically calls and creates stretchDelivarables button
  function initializeForm() {
    let btn = document.createElement('button')
    btn.addEventListener('click', heavyMode)
    btn.textContent = ' Task Lister Heavy ';
    document.querySelector('h1').appendChild(btn);
  }

  //stretchDelivarables;
  //button to toggle additional changes

  function heavyMode(e) {
    let select = document.createElement('select');
    const options = ['low', 'medium', 'high'];

    options.forEach(buildOptionElement)
    document.querySelector('#create-task-form').appendChild(select);

    let btn2 = document.createElement('button')
    btn2.addEventListener('click', filterTodo)
    btn2.textContent = ' Filter Todo List ';
    document.querySelector('h2').appendChild(btn2);


    function buildOptionElement(option) {
      let optionHTML = document.createElement("option");
      optionHTML.value = `${option}`;
      optionHTML.innerHTML = `${option}`;
      //console.log(optionHTML);
      //console.log(`${optionHTML}`);
      select.appendChild(optionHTML);
    };

    //filter function
    function filterTodo() {
      let pCollection = document.getElementsByTagName("p");
      const paraArray = [].slice.call(pCollection)
      console.log(paraArray);

      paraArray.forEach(colorFilter);

      function colorFilter (p){
        if (p.attributes.style.nodeValue === 'color:#3ed9c9;') {
          console.log('low priority')
        } else if (p.style === 'color:#f6f700;') {
          console.log('medium priority')
        } else {
          console.log('high priority')
        }


      }
    };

    // console.log(e);
    // console.log(e.target);
    // console.log(select);
  };

  //Actions Triggered from Creating a New Task
  form.addEventListener('submit', (e) => {
    // console.log(e);
    e.preventDefault();
    buildToDo(e.target['new-task-description'].value);
    //form.reset();


    function buildToDo(todo) {
      // console.log(todo);
      let p = document.createElement('p');
      let btn = document.createElement('button');
      btn.addEventListener('click', handleDelete)
      p.textContent = `${todo}     `;
      btn.textContent = ' x ';

      //console.log( document.querySelector('select'))
      //checks if heavy mode is on => 
      if (document.querySelector('select') !== null) {
        //function to color
        //console.log(p);
        colorText(p)
      };

      function colorText(p) {
        //console.log(document.querySelector('select').value)
        if (document.querySelector('select').value === 'low') {
          p.style = 'color:#3ed9c9;';
        } else if (document.querySelector('select').value === 'medium') {
          p.style = 'color:#f6f700;';
        } else {
          p.style = 'color:#eb0021;';
        }
      }

      p.appendChild(btn);
      // console.log(p)
      document.querySelector('#tasks').appendChild(p);

    }

    function handleDelete(e) {
      e.target.parentNode.remove();
    };

  })

});
// console.log('Dom hasn\'t loaded yet');