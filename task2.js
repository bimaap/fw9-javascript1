
const mth = 0;
const bInd = 100;
const bIng = 100;
const ipa = 100;
let average = 0
const error = "Nilai belum lengkap! Lengkapi nilai terlebih dahulu."

if(String(mth) && String(bInd) && String(bIng) && String(ipa)){
    if((mth && bInd && bIng && ipa) != null && (mth != "null" && bInd != "null" && bIng != "null" && ipa != "null")){
        average = (Number(mth) + Number(bInd) + Number(bIng) + Number(ipa)) / 4;
        if(average >= 90){
            console.log(average);
            console.log("Grade = A");
        }else if(average >= 80 && average <= 89){
            console.log(average);
            console.log("Grade = B");
        }else if(average >= 70 && average <= 79){
            console.log(average);
            console.log("Grade = C");
        }else if(average >= 60 && average <= 69){
            console.log(average);
            console.log("Grade = D");
        }else if(average >= 0 && average <= 59){
            console.log(average);
            console.log("Grade = E");
        }else{
            console.log(average);
            console.log("Grade = F");
        }
    }else{
        console.log(error);
    }
}
else{
    console.log(error);
}