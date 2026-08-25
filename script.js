const phone='5544998080333';
document.querySelectorAll('[data-wa]').forEach(link=>{
  const text=link.getAttribute('data-wa')||'Olá, gostaria de atendimento.';
  link.href=`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  link.target='_blank';
  link.rel='noopener noreferrer';
});

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

const toggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('main-nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const isOpen=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(isOpen));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
}
