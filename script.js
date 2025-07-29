function check() {
  if ( document.forms[0].elements[0].checked == true && document.forms[0].elements[1].checked == true && document.forms[0].elements[2].checked == true ) {
    if ( ! $('.wrapper').hasClass('throb')) {
        
        $('.wrapper').addClass('throb');
    } 
  } else {
    if ($('.wrapper').hasClass('throb')) {
        
        $('.wrapper').removeClass('throb');
    }
  }
 }

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('falling-heart');
  heart.innerHTML = '';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

let heartInterval = null;

function check() {
  const ck1 = document.forms[0].elements[0].checked;
  const ck2 = document.forms[0].elements[1].checked;
  const ck3 = document.forms[0].elements[2].checked;
  const wrapper = $('.wrapper');

  if (ck1 && ck2 && ck3) {
    if (!wrapper.hasClass('throb')) {
      wrapper.addClass('throb');
      heartInterval = setInterval(createHeart, 200); // Começa a soltar corações
    }
  } else {
    if (wrapper.hasClass('throb')) {
      wrapper.removeClass('throb');
      clearInterval(heartInterval); // Para de soltar corações
    }
  }
}
