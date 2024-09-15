function easeInOutBack(x) {
  const f = Math.sin(x * Math.PI);
  const t = 4.5;
  const g = Math.sin((x + t) * Math.PI * 2);
  return f + g;
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}

function vLerp(A, B, t) {
  const res = {};
  for (let attr in A) {
    res[attr] = lerp(A[attr], B[attr], t);
  }
  return res;
}

function add(A, B) {
  const res = {};
  for (let attr in A) {
    res[attr] = A[attr] + B[attr];
  }
  return res;
}

function subtract(A, B) {
  const res = {};
  for (let attr in A) {
    res[attr] = A[attr] - B[attr];
  }
  return res;
}

function average(A, B) {
  const res = {};
  for (let attr in A) {
    res[attr] = (A[attr] + B[attr]) / 2;
  }
  return res;
}

function magnitude(A) {
  let len = 0;
  for (let attr in A) {
    len += A[attr] ** 2;
  }
  return Math.sqrt(len);
}

function scale(A, scaler) {
  const res = {};
  for (let attr in A) {
    res[attr] = A[attr] * scaler;
  }
  return res;
}

function distance(A, B) {
  const sub = subtract(A, B);
  return magnitude(sub);
}

function normalize(A) {
  return scale(A, 1 / magnitude(A));
}
