/*
 * You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.
 */

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/**
 * Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:
 * 1. The first parameter is a number (no two organisms should have the same number).
 * 2. The second parameter is an array of 15 DNA bases.
 */
const pAequorFactory = (num, arr) => {
  // return an object that contains the properties specimenNum and dna that correspond to the parameters provided.
  return {
    specimenNum: num,
    dna: arr,
    // add the method .mutate() responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
    mutate() {
      const dnaBases = ["A", "T", "C", "G"];
      const randomIndex = Math.floor(Math.random() * 15);
      const currentBase = this.dna[randomIndex];
      const possibleBases = dnaBases.filter((base) => base !== currentBase);
      const newBase =
        possibleBases[Math.floor(Math.random() * possibleBases.length)];
      this.dna[randomIndex] = newBase; 
      return this.dna;
    },
    // add compareDNA() to the returned object of the factory function to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations.
    compareDNA(otherOrganism) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          count++;
        }
      }
      const percentage = (count / 15) * 100;
      console.log(
        `Specimen #${this.specimenNum} and Specimen #${
          otherOrganism.specimenNum
        } have ${percentage.toFixed(2)}% DNA in common.`,
      );
    },
    // add willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases.
    willLikelySurvive() {
      const cgBases = this.dna.filter((base) => base === "C" || base === "G");
      const cgCount = cgBases.length;
      const percentage = cgCount / 15;
      if (percentage >= 0.6) {
        return true;
      } else {
        return false;
      }
    },
  };
};
// create 30 instances of pAequor that can survive in their natural environment.
const survivingSpecimens = [];
let specimenNum = 1;
while (survivingSpecimens.length < 30) {
  const randomDNA = mockUpStrand();
  const organism = pAequorFactory(specimenNum, randomDNA);
  if (organism.willLikelySurvive()) {
    survivingSpecimens.push(organism);
  }
  specimenNum++;
}

console.log("30 organisms created:", survivingSpecimens.length);
