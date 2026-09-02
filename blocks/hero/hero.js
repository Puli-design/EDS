export default function decorate(block) {
  const picture = block.querySelector('picture');

  if (picture) {
    picture.classList.add('hero-background');
  }

  const content = document.createElement('div');
  content.className = 'hero-content';

  [...block.children].forEach((row) => {
    if (!row.querySelector('picture')) {
      content.append(row);
    }
  });

  block.append(content);
}
