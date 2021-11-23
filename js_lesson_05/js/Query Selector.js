var el = document.queryCommandSupported('li.hot');
el.className = 'cool';

var els = document.querySelectorAll('li.hot');
els[1].className ='cool';