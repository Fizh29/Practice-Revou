// Program untuk menentukan jenis segitiga berdasarkan panjang sisi
const readline = require('readline'); //ini fungsi keperluan buat ngejalanin fungsi readline module
//readline module bisa digunakan buat interface input
const rl = readline.createInterface({ //bikin fungsi baru namanya readline namanya interface interfacenya berupa input output
    input: process.stdin,
    output: process.stdout
})

rl.question("Masukkan panjang sisi 1: ", (sisi1) => { //nah ini adalah urutan interfacenya pertanyaan 1 sampe check triangle abis itu baru diclose

    rl.question("Masukkan panjang sisi 2: ", (sisi2) => {
            
            rl.question("Masukkan panjang sisi 3: ", (sisi3) => {

                checkTriangleType(sisi1, sisi2, sisi3);
                rl.close();
                
            });
        });
    }
);

function checkTriangleType(sisi1, sisi2, sisi3) {

    if (sisi1 === sisi2 && sisi2 === sisi3) {
        console.log("Segitiga tersebut adalah segitiga sama sisi");
    } else if (sisi1 === sisi2 || sisi1 === sisi3 || sisi2 === sisi3) {
        console.log("Segitiga tersebut adalah segitiga sama kaki");
    } else {
        console.log("Segitiga tersebut adalah segitiga sembarang");
    }

}