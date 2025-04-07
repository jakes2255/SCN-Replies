//original
const list = document.getElementById('myList');
const items = ['Item 1', 'Item 2', 'Item 3'];

items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
});

//Performance tuned
const list = document.getElementById('myList');
const items = ['Item 1', 'Item 2', 'Item 3'];
const fragment = document.createDocumentFragment();
