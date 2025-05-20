const button = document.querySelector("#button");
const heading = document.querySelector("#heading");

let count = 1;

button.onclick = () => {
    button.textContent = 'Try Again1';
    heading.textContent = '${count} clicks so far'
    count += 1;
    count -= 1;
}; 