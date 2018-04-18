/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
For example:
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet" */

function domainName(url) {
  url = url
    .split('www')
    .slice(-1)
    .join('')
    .split('//')
    .slice(-1)
    .join('');
  var temp = url.split('.');
  return temp[0] == '' ? temp.slice(1, 2).join('') : temp.slice(0, 1).join('');
}

//best solution:
function domainName(url) {
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');
  return url.split('.')[0];
}
