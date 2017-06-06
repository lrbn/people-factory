// console.log("It worked");
const personForm = document.querySelector('form#personForm');

function renderColor(color) {
  const colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = color;
  colorDiv.style.width = '100px';
  colorDiv.style.height = '50px';
  return colorDiv;
}

function handleSubmit(ev) {
  ev.preventDefault(); // The event continues to propagate as usual with only the exception that the event does nothing if no event listeners call stopPropagation(), which terminates propagation at once.
  // console.log('Submit!');
  const f = ev.target;
  // Use the values from both inputs in the 'h1'.
  const details = document.querySelector('#details');
  const name = f.personName.value;
  const favoriteColor = f.favoriteColor.value; // hex value
  const age = f.age.value;
  // Must put width and height (or element won't show)

  details.innerHTML = `
    <ul>
      <li>Name: ${name}</li>
      <li>Favorite Color: ${renderColor(favoriteColor).outerHTML}</li>
      <li>Age: ${age}</li>
    </ul>
  `;  
}
// outerHTML includes opening and closing tags
// innerHTML includes only the inside between the opening and closing tags

personForm.addEventListener('submit', handleSubmit); // Do not put () after handleSubmit because it gets the return value