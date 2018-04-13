sd = x =>
  parseInt(
    String(x)
      .split('')
      .map(y => y * y)
      .join('')
  );

sd = x =>
  +(x + '')
    .split('')
    .map(y => y * y)
    .join('');
