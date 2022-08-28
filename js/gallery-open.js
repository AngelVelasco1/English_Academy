const topicsItems = document.querySelectorAll('.topics .item');
const topicsItemsCount = topicsItems.length;
let currentIndex = 0;
const closeButton = document.querySelector('#close-button');

/* Abrir Galeria */
topicsItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    currentIndex = parseInt(item.getAttribute('data-id'));
    const contentArr = document.querySelectorAll('#details-container .item');

    document.querySelectorAll('#details-container .item').forEach(item => { item.classList.add('item-hide') });

    document.querySelectorAll('#details-container .item')[currentIndex].classList.toggle('item-hide');

    document.querySelector('#screen').style['animation-name'] = 'fade-in';

    document.querySelector('body').style['overflow'] = 'hidden';

    setTimeout(() => {
      document.querySelector('#details-container').style.display = 'block';
    }, 1000);
    setTimeout(() => {
      document.querySelector('#screen').style = '';
    }, 2000);
  });
});

/* Cerrar Galeria */
closeButton.addEventListener('click', e => {
  e.preventDefault();
  
  document.querySelector('#screen').style['animation-name'] = 'fade-in';
  document.querySelector('body').style['overflow'] = 'auto';

  setTimeout(() => {
    document.querySelector('#details-container').style.display = 'none';
  }, 1000);
  setTimeout(() => {
    document.querySelector('#screen').style = '';
  }, 2000);
})
