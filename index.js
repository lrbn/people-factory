// console.log("It worked");
const personForm = document.querySelector('form#personForm');
function handleSubmit(ev) {
  ev.preventDefault(); // The event continues to propagate as usual with only the exception that the event does nothing if no event listeners call stopPropagation(), which terminates propagation at once.
  // console.log('Submit!');
  const f = ev.target;
  // Use the values from both inputs in the 'h1'.
  const details = document.querySelector('#details');
  const name = f.personName.value;
  const favoriteColor = f.favoriteColor.value;
  const age = f.age.value;
  // Must put width and height (or element won't show)
  const colorDiv = `<div style="background-color: ${favoriteColor}; width: 100px; height: 50px"></div>`;
  // details.innerHTML = '<em>' + name + '<em>';
  // details.innerHTML = `<em>${name}</em>`; // ${} javascript expression
  // const em = document.createElement('em');
  // em.textContent = name;
  // details.appendChild(em);
  details.innerHTML = `
    <ul>
      <li>Name: ${name}</li>
      <li>Favorite Color: ${colorDiv}</li>
      <li>Age: ${age}</li>
    </ul>
  `; 
  
}
personForm.addEventListener('submit', handleSubmit); // Do not put () after handleSubmit because it gets the return value