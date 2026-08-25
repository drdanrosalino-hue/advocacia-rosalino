const phone='5544998080333';
document.querySelectorAll('[data-wa]').forEach(link=>{
  const text=link.getAttribute('data-wa')||'Olá, gostaria de atendimento.';
  link.href=`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  link.target='_blank';
  link.rel='noopener noreferrer';
});
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();
