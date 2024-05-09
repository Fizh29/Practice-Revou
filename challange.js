const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan batas bawah: ", (batasBawah) => {

    rl.question("Masukkan batas atas: ", (batasAtas) => {
        
        // Panggil fungsi untuk mencari dan mencetak bilangan prima
        findPrimeNumbers(parseInt(batasBawah), parseInt(batasAtas));
        rl.close();
        
    });
});


// Fungsi untuk mencari bilangan prima di antara batas bawah dan batas atas, lalu mencetaknya
function findPrimeNumbers(batasBawah, batasAtas) {
    console.log("Bilangan prima di antara " + batasBawah + " dan " + batasAtas + ":");

    for (let i = batasBawah; i <= batasAtas; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}


// Fungsi untuk mengecek apakah sebuah bilangan prima
function isPrime(number) {
    if (number <= 1) { //4
        return false;
        //true
    }
    for (let i = 2; i <= Math.sqrt(number); i++) { // akar 4 = 2
        // i = 4 <= 2
        if (number % i === 0) {
            return false;
            
        }
    }
    return true;
}
