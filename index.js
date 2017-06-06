const personForm = document.querySelector('form#personForm');

function renderColor(color) {

  console.group('renderColor');
  console.log(`This: ${this}`);
  console.groupEnd('handleSubmit');

  const colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = color;
  colorDiv.style.width = '100px';
  colorDiv.style.height = '50px';
  return colorDiv;
}

function renderListItem(fieldName, value) {
  const li = document.createElement('li');
  li.innerHTML = `${fieldName}: ${value}`;
  return li;
}

function renderList(personData) {
  const list = document.createElement('ul');
  // Loop over ['name', 'favoriteColor', 'age']
  Object.keys(personData).map(function(fieldName) {
    const li = renderListItem(fieldName, personData[fieldName]);
    list.appendChild(li);
  });
  return list;
}

function handleSubmit(ev) {
  ev.preventDefault();
  const f = ev.target;
  const details = document.querySelector('#details');
  const person = {
    Name: f.personName.value,
    FavoriteColor: renderColor(f.favoriteColor.value).outerHTML,
    Age: f.age.value,
  };

  details.appendChild(renderList(person));
}

// renderColor() // this === window

personForm.addEventListener('submit', handleSubmit);