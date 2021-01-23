let numArray = [];

function addNumber() {
    const num = parseInt(document.getElementById('input').value);
    if (!num || typeof(num) !== 'number') {
        alert('input a real number');
    } else {
        const newNumber = document.createElement('div');
        const displayNum = document.querySelector('.display-num');
        newNumber.innerText = num;
        newNumber.setAttribute('onClick', 'deleteNum(this)');
        newNumber.classList = "m-3 p-3 shadow addedNum";
        displayNum.appendChild(newNumber);
        numArray.push(num);
        showEven(numArray);
        showOdd(numArray);

    }

}


function showEven(values) {
    let sumEven = 0;
    for (let x = 0; x < values.length; x++) {
        if (values[x] % 2 === 0) {
            sumEven++;
        }
    }

    document.getElementById('show-even').innerText = sumEven;
}



function showOdd(values) {
    let sumOdd = 0;
    for (let x = 0; x < values.length; x++) {
        if (values[x] % 2 !== 0) {
            sumOdd++;
        }
    }

    document.getElementById('show-odd').innerText = sumOdd;
}


function unhideEven() {
    const unhide = document.querySelector('#show-even').value;
    const evenDis = document.getElementById('show-even');
    if (typeof unhide === "null") {
        evenDis.classList.add('hide');
    } else {
        evenDis.classList.toggle('hide');
    }

}

function unhideOdd() {
    const unhide = document.querySelector('#show-odd').value;
    const oddDis = document.getElementById('show-odd');
    if (typeof unhide === "null") {
        oddDis.classList.add('hide');
    } else {
        oddDis.classList.toggle('hide');
    }

}


function deleteNum(add) {
    let addedNum = document.querySelectorAll('.addedNum');
    for (let x = 0; x < addedNum.length; x++) {
        if (addedNum[x] === add) {
            let numToDelete = parseInt(addedNum[x].innerText);
            addedNum[x].classList.add('hide');
            numArray = numArray.splice(x, 1);

        }
    }

}