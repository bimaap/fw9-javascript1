
let printSegitiga = 10;
let hasil = "";

for(let i = printSegitiga; i >= 1; i--){
    if(typeof(printSegitiga) != "number"){
        console.log("Data harus number");
        break;
    }

    for(let j = 1; j <= i; j++){
        hasil = hasil + String(j) + ' ';
    }
    console.log(hasil);
    hasil = "";
}