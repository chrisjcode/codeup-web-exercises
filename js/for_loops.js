// 2
function showMultiplicationTable(factor1Input, timesTableNumCap = 10) {
    if (!timesTableNumCap) {
        console.log('Number cant be 0');
        return;
    }
    for (let factor2 = 1; factor2 <= timesTableNumCap; factor2++) {
        console.log(`${factor1Input} x ${factor2} = ${factor1Input * factor2}`)
    }
}

showMultiplicationTable(2);

// 3

for (let counter = 0; counter <= 10; counter++) {

    let randomNumber = ((Math.random() * 180) + 20).toFixed(0);
    if (!(randomNumber % 2)) {
        console.log(`${randomNumber} is even`);
        continue;
    }
    console.log(`${randomNumber} is odd`);
}

// 4

for (let counter = 1; counter <= 9; counter++) {
    console.log(counter.toString().repeat(counter));
}

// 5

for (let num = 100; num >= 5; num-=5) {
    console.log(num);
}