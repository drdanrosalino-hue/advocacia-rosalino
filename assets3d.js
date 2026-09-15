document.addEventListener('DOMContentLoaded',async()=>{
  try{
    const parts=await Promise.all([1,2,3,4].map(n=>fetch(`assets3d-${n}.txt`).then(r=>r.text())));
    const u='data:image/webp;base64,'+parts.join('');
    const pos=i=>`${(i%4)*33.333}% ${Math.floor(i/4)*33.333}%`;
    document.querySelectorAll('.icon3d').forEach((el,i)=>{
      const k=i<8?i:i+4;
      el.innerHTML='';
      Object.assign(el.style,{backgroundImage:`url(${u})`,backgroundSize:'400% 400%',backgroundPosition:pos(k),backgroundRepeat:'no-repeat',border:'0',boxShadow:'0 18px 30px #0009',borderRadius:'18px'});
    });
    document.querySelectorAll('.mini').forEach((el,i)=>{
      el.textContent='';
      Object.assign(el.style,{backgroundImage:`url(${u})`,backgroundSize:'400% 400%',backgroundPosition:pos(8+i),backgroundRepeat:'no-repeat',border:'0',boxShadow:'0 10px 18px #0008'});
    });
  }catch(e){console.error('assets3d',e)}

  const brand=document.querySelector('.brandmark');
  if(brand){
    brand.textContent='';
    Object.assign(brand.style,{width:'64px',height:'58px',background:'transparent',boxShadow:'none',borderRadius:'0'});
    const img=document.createElement('img');
    img.src='assets/logo_advocacia_rosalino_3d.png';
    img.alt='Advocacia Rosalino & Associados';
    Object.assign(img.style,{width:'100%',height:'100%',objectFit:'contain',filter:'drop-shadow(0 8px 10px #000b)'});
    brand.appendChild(img);
  }

  const map=document.querySelector('.map img');
  if(map){
    map.src='assets/mapa_brasil_3d.png';
    map.alt='Mapa 3D do Brasil';
    Object.assign(map.style,{width:'86%',maxHeight:'360px',objectFit:'contain',filter:'drop-shadow(0 22px 18px #000c)'});
  }

  const clock=document.querySelector('.clock');
  if(clock){
    clock.textContent='';
    Object.assign(clock.style,{width:'132px',height:'132px',background:'transparent',border:'0',borderRadius:'0'});
    const img=document.createElement('img');
    img.src='assets/plantao_24h_3d.png';
    img.alt='Plantão Jurídico 24h';
    Object.assign(img.style,{width:'100%',height:'100%',objectFit:'contain',filter:'drop-shadow(0 15px 16px #000b)'});
    clock.appendChild(img);
  }

  const wa=document.querySelector('.wa');
  if(wa){
    wa.textContent='';
    Object.assign(wa.style,{width:'68px',height:'68px',background:'transparent',border:'0',boxShadow:'none',borderRadius:'0'});
    const img=document.createElement('img');
    img.src='assets/whatsapp_3d.png';
    img.alt='WhatsApp';
    Object.assign(img.style,{width:'100%',height:'100%',objectFit:'contain',filter:'drop-shadow(0 12px 13px #000b)'});
    wa.appendChild(img);
  }
});