// console.log("It worked");
const personForm = document.querySelector('form#personForm');
function handleSubmit(ev) {
  ev.preventDefault(); // The event continues to propagate as usual with only the exception that the event does nothing if no event listeners call stopPropagation(), which terminates propagation at once.
  // console.log('Submit!');
  const f = ev.target;
  // Use the values from both inputs in the 'h1'.
  const name = f.personName.value;
  const hairColor = f.personHairColor.value;
  const nameAndHairColor = "Name: " + name + "\n\Hair Color: " + hairColor;
  document.querySelector('p.special').innerText = nameAndHairColor;
  // document.querySelector('h1').textContent = age;
}
personForm.addEventListener('submit', handleSubmit); // Do not put () after handleSubmit because it gets the return value