function changeCase(identifier, targetCase) {
  if (identifier.includes('-') && identifier.includes('_')) {
    return undefined;
  } else if (identifier.includes('-') && /[A-Z]/g.test(identifier)) {
    return undefined;
  } else if (identifier.includes('_') && /[A-Z]/g.test(identifier)) {
    return undefined;
  }

  if (targetCase == 'snake') {
    return toSnake(identifier);
  } else if (targetCase == 'camel') {
    return toCamelCase(identifier);
  } else if (targetCase == 'kebab') {
    return toKebab(identifier);
  } else {
    return undefined;
  }
}

function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function(match) {
    return match.charAt(1).toUpperCase();
  });
}
function toSnake(str) {
  if (str.includes('-')) {
    return str.split('-').join('_');
  }
  return str.replace(/[A-Z]/g, function($1) {
    return '_' + $1.toLowerCase();
  });
}

function toKebab(str) {
  if (str.includes('_')) {
    return str.split('_').join('-');
  }
  var regExp = /[A-Z]/g;
  return str.replace(regExp, function($1) {
    return '-' + $1.toLowerCase();
  });
}

// solution:
function changeCase(i, t) {
  if (/[A-Z]/.test(i) + /[_]/.test(i) + /[-]/.test(i) > 1) return undefined;
  else if (t == 'snake')
    return i
      .replace(/[A-Z]/g, a => '_' + a.toLowerCase())
      .replace(/-([a-z])/g, (_, a) => '_' + a);
  else if (t == 'camel')
    return i.replace(/_/g, '-').replace(/-([a-z])/g, (_, a) => a.toUpperCase());
  else if (t == 'kebab')
    return i.replace(/_/g, '-').replace(/[A-Z]/g, a => '-' + a.toLowerCase());
}
