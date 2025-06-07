const MatematikaLibraries = {
  FPB: function(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  },

  KPK: function(a, b) {
    return Math.abs(a * b) / this.FPB(a, b);
  },

  Turunan: function(coefficients) {
    const result = [];

    for (let i = 0; i < coefficients.length - 1; i++) {
      const pangkat = coefficients.length - 1 - i;
      const turunan = coefficients[i] * pangkat;
      if (turunan === 0) continue;

      let term = `${turunan}`;
      if (pangkat - 1 === 1) term += 'x';
      else if (pangkat - 1 > 1) term += `x^${pangkat - 1}`;
      result.push(term);
    }

    return result.join(' + ');
  },

  Integral: function(coefficients) {
    const result = [];

    for (let i = 0; i < coefficients.length; i++) {
      const pangkat = coefficients.length - i;
      const integral = coefficients[i] / pangkat;
      let term = `${integral}`;
      if (pangkat === 1) term += 'x';
      else term += `x^${pangkat}`;
      result.push(term);
    }

    result.push('C');
    return result.join(' + ');
  }
};

module.exports = MatematikaLibraries;