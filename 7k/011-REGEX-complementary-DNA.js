//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

//this one is actually faster
function DNAStrand(dna) {
    dna = dna.split('');
    let result = []
    for (let i = 0; i <= dna.length; i++) {
        if (dna[i] === 'A') {
            result.push('T');
        } else if (dna[i] === 'T') {
            result.push('A');
        } else if (dna[i] === 'C') {
            result.push('G');
        } else if (dna[i] === 'G') {
            result.push('C');
        }
    }
    return result.join('');
}
console.log(DNAStrand('ATTGC'))//TAACG




function DNAStrand(dna) {
    return dna.replace(/./g, function (c) {
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}
console.log(DNAStrand('ATTGC'));

