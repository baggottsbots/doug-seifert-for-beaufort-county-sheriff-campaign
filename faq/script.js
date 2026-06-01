// Measure the real banner height so the fixed nav sits exactly below it
// (fixes notch/safe-area devices where the banner renders taller than a hard-coded value)
function setBannerH(){var b=document.querySelector('.vote-banner');if(b){document.documentElement.style.setProperty('--banner-h',Math.ceil(b.getBoundingClientRect().height)+'px');}}
setBannerH();
window.addEventListener('resize',setBannerH);
window.addEventListener('orientationchange',function(){setTimeout(setBannerH,250);});
if(document.fonts&&document.fonts.ready){document.fonts.ready.then(setBannerH);}
var observer=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('visible');});},{threshold:.1});
document.querySelectorAll('.fade-up').forEach(function(el){observer.observe(el);});
document.querySelectorAll('.issue-trigger').forEach(function(btn){
  btn.addEventListener('click',function(){
    var issue=btn.closest('.issue');
    var open=issue.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
  });
});
var ED=new Date('2026-06-09T07:00:00-04:00');
function uc(){var n=new Date(),d=ED-n;var cd=document.getElementById('count-days'),b=document.getElementById('banner-countdown');if(d<=0){if(cd)cd.textContent='0';if(b)b.textContent='TODAY';return;}var ds=Math.floor(d/86400000);if(cd)cd.textContent=ds;if(b){if(ds>1)b.textContent=ds+' Days to June 9';else if(ds===1)b.textContent='1 Day to June 9';else b.textContent='Election Day';}}
uc();setInterval(uc,60000);
var hamburger=document.getElementById('hamburger');
var mobileDrawer=document.getElementById('mobile-drawer');
if(hamburger&&mobileDrawer){
  hamburger.addEventListener('click',function(){
    var isOpen=mobileDrawer.classList.toggle('open');
    hamburger.classList.toggle('open',isOpen);
    hamburger.setAttribute('aria-expanded',String(isOpen));
    mobileDrawer.setAttribute('aria-hidden',String(!isOpen));
  });
  mobileDrawer.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      mobileDrawer.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded','false');
      mobileDrawer.setAttribute('aria-hidden','true');
    });
  });
}