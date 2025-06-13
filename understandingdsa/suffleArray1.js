const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

let arr = [2, 3, 4, 5, 6];

function render() {
  document.querySelector('#app').innerHTML = `
    <h1>${arr.join(', ')}</h1>
    <button id="shuffleBtn">Click it</button>
  `;
  document.getElementById('shuffleBtn').onclick = () => {
    shuffle(arr);
    render();
  };
}

render();