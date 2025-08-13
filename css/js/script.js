// mobile nav toggle
const hamburger = document.getElementById('hamburger');
const hamburger2 = document.getElementById('hamburger2');
const hamburger3 = document.getElementById('hamburger3');
const hamburger4 = document.getElementById('hamburger4');
const hamburger5 = document.getElementById('hamburger5');

[ hamburger, hamburger2, hamburger3, hamburger4, hamburger5 ].forEach(btn=>{
  if(!btn) return;
  btn.addEventListener('click', ()=>{
    const nav = document.querySelector('.main-nav');
    if(nav) nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});
