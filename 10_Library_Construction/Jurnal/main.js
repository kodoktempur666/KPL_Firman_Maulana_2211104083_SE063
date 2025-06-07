const MathLib = require('./matematikaLibraries');

console.log("FPB dari 60 dan 45:", MathLib.FPB(60, 45));         
console.log("KPK dari 12 dan 8:", MathLib.KPK(12, 8));           

const koefTurunan = [1, 4, -12, 9]; 
console.log("Turunan:", MathLib.Turunan(koefTurunan));           

const koefIntegral = [1, 4, -12, 9]; 
console.log("Integral:", MathLib.Integral(koefIntegral));        