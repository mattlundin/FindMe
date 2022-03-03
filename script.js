const userList = document.querySelector('.user-list');
const filter = document.querySelector('#filter');
const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
	const res = await fetch('https://randomuser.me/api?results=100');

	const { results } = await res.json();

	//clear results
	userList.innerHTML = '';

	results.forEach((user) => {
		const li = document.createElement('li');

		listItems.push(li);

		li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h3>${user.login.username}</h3>
        <h4>${user.name.first}, ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;
		userList.appendChild(li);
	});
}

function filterData(search) {
	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
			item.classList.remove('hide');
		} else {
			item.classList.add('hide');
		}
	});
}
