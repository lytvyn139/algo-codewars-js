//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function DNAStrand(dna) {
    dna = dna.split(' ');
    console.log(dna);

}
console.log(DNAStrand('ATTGC'))//TAACG
// ATTGC

// TAACG //replace A with T || T with A
//         replace C with G || G with C




// function DNAStrand(dna) {
//     switch (dna) {
//         case 'A':
//             return dna.replace(/[A]/ig, 'T');
//             break;
//         case 'T':
//             return dna.replace(/[T]/ig, 'A');
//             break;
//         case 'C':
//             return dna.replace(/[C]/ig, 'G');
//             break;
//         case 'G':
//             return dna.replace(/[G]/ig, 'C');
//             break;
//         default:
//             console.log('ERROR 404')
//     }





