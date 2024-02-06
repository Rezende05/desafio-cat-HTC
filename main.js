const $principalCat = document.querySelector('.cat-emphasis');
const $catImage = document.querySelectorAll('.cat');

$catImage.forEach((cat) => {
  function handleClick() {
    $principalCat.innerHTML = cat.outerHTML;
  }
  cat.addEventListener('click', handleClick);
});
