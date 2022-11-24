const samples = [...document.querySelectorAll('section')]
  .reduce((acc, section) => [...acc, ...toSamples(section)], []);

samples.forEach(sample => {
  const div = sample.payload;
  const rgb = getComputedStyle(div).background;
  
  div.title = sample.parentId.includes('rgb') ? rgb : toHex(rgb);
});

function toSamples(element) {
  const children = element.querySelectorAll('div');
  const samples = [...children].map(child => ({
    parentId: element.id,
    payload: child
  }));
  
  return samples;
}

function toHex(rgb) {
  const numbers = rgb
    .match(/\d+/g)
    .map(n => Number(n).toString(16).padStart(2, '0'))
    .join('');
  
  return '#' + numbers;
}