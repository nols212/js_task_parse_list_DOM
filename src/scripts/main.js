'use strict';

// write code here
const list = document.querySelectorAll('ul');

function sortList(lists) {
  lists.forEach((ul) => {
    const items = Array.from(ul.querySelectorAll('li'));

    const sort = items.sort(
      (a, b) =>
        Number(b.dataset.salary.replace(/[$,]/g, '')) -
        Number(a.dataset.salary.replace(/[$,]/g, '')),
    );

    sort.forEach((li) => ul.appendChild(li));
  });
}

function getEmployees(lists) {
  const result = [];

  lists.forEach((ul) => {
    ul.querySelectorAll('li').forEach((li) => {
      result.push({
        name: li.textContent.trim(),
        position: li.dataset.position,
        salary: Number(li.dataset.salary),
        age: Number(li.dataset.age),
      });
    });
  });

  return result;
}

sortList(list);

getEmployees(list);
