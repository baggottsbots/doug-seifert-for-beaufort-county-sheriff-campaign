const observer=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible');});},{threshold:.1});
document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el));
const ED=new Date('2026-06-09T07:00:00-04:00');
function uc(){const n=new Date(),d=ED-n;if(d<=0){['cd-days','cd-hours','cd-minutes','cd-seconds'].forEach(i=>{const e=document.getElementById(i);if(e)e.textContent='0';});const b=document.getElementById('banner-countdown');if(b)b.textContent='TODAY';return;}const ds=Math.floor(d/86400000),h=Math.floor(d/3600000%24),m=Math.floor(d/60000%60),sc=Math.floor(d/1000%60);document.getElementById('cd-days').textContent=ds;document.getElementById('cd-hours').textContent=String(h).padStart(2,'0');document.getElementById('cd-minutes').textContent=String(m).padStart(2,'0');document.getElementById('cd-seconds').textContent=String(sc).padStart(2,'0');const b=document.getElementById('banner-countdown');if(b){if(ds>1)b.textContent=ds+' Days to June 9';else if(ds===1)b.textContent='1 Day to June 9';else b.textContent='Election Day';}}
uc();setInterval(uc,1000);
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