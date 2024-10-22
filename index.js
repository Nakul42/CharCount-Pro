const inputText = document.getElementById('text');
const count = document.getElementById('count');

const result = () => {
    const countingNUmber = inputText.value.length;
    count.textContent = `${countingNUmber}`;
};