const observer=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');if(x.target.classList.contains('chart-card')){x.target.querySelectorAll('.bar').forEach(b=>{b.style.height=b.dataset.h+'%';});}}});},{threshold:.12});
document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el));
const ED=new Date('2026-06-09T07:00:00-04:00');
function uc(){const n=new Date(),d=ED-n;const b=document.getElementById('banner-countdown');if(!b)return;if(d<=0){b.textContent='TODAY';return;}const ds=Math.floor(d/86400000);if(ds>1)b.textContent=ds+' Days to June 9';else if(ds===1)b.textContent='1 Day to June 9';else b.textContent='Election Day';}
uc();setInterval(uc,60000);
const hamburger=document.getElementById('hamburger');
const mobileDrawer=document.getElementById('mobile-drawer');
if(hamburger&&mobileDrawer){
  hamburger.addEventListener('click',()=>{
    const isOpen=mobileDrawer.classList.toggle('open');
    hamburger.classList.toggle('open',isOpen);
    hamburger.setAttribute('aria-expanded',String(isOpen));
    mobileDrawer.setAttribute('aria-hidden',String(!isOpen));
  });
  mobileDrawer.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click',()=>{
      mobileDrawer.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded','false');
      mobileDrawer.setAttribute('aria-hidden','true');
    });
  });
}