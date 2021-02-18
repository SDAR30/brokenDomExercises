
const disemvowel = () => {
    const el = document.querySelector("#name_to_disemvowel").value;
    const p = document.querySelector(".disemvowel-string");
    const str = el;

    let output = "";
    const vowels = "aeiou";
    for (const char in str) {
        if (!vowels.includes(str[char].toLowerCase())) {
            output += str[char];
        }
    }
    p.textContent = output;
}

const isPalindrome = () => {
    const str = document.querySelector("#is-palindrome-input").value;
    const p = document.querySelector("#is-palindrome-p");
    let result = "true";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i- 1]) {
            result = "false"
        }
    }
    p.textContent = result;
}
const sums = (arr) => {
    let sum = 0;
    for (let i = 0; i <= arr.length-1; i++) {
        let num = arr[i]
        sum += num
    }
    return sum;
}
const average = (arr) => {
    let sumOfNums = sums(arr)
    return sumOfNums / arr.length;
}

const onlyOdds = arr => {
    return arr.filter(num => num % 2 === 1)
}

const favoriteNumbers = () => {
    let list = document.querySelectorAll("li");
    let arr = [];
    list.forEach((listItem) => {
        arr.push(Number(listItem.textContent))
    })
    let sumOfNums = sums(arr);
    const averageOfNums = average(arr);
    const onlyOddsOfNums = onlyOdds(arr);

    const sumOfFav = document.querySelector("#sum-of-favorite-nums");
    sumOfFav.textContent += " " +sumOfNums;

    const aveOfFav = document.querySelector("#average-of-favorite-nums");
    aveOfFav.textContent += " " + averageOfNums;

    var oddList = document.querySelector("#list-of-odd-favorite-nums");


    onlyOddsOfNums.forEach((odd) => {
        const li = document.createElement("li");
        li.innerText = odd;
        oddList.appendChild(li);
    });
}

favoriteNumbers();

const incrementCount = () => {
    let counter = document.querySelector("#click-count");
    counter.textContent = Number(counter.textContent) + 1;
}

const reset = () => {
    const counter = document.querySelector("#click-count");
    counter.textContent = 0;
}

const addItem = () => {
    const shoppingList = document.querySelector(".shopping-list");
    const input = document.querySelector("#add-item");
    const item = input.value;
    const listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingList.appendChild(listItem)
    input.value = "";
}

const killButton = () => {
    const button = document.querySelector("#kill-button");
    button.remove()

    const header = document.querySelector("#kill-button-header");
    header.innerText = "Yay you were victorious!"
    header.style.color = "green";
}