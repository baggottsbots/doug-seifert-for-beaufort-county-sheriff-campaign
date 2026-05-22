const testimonialsData=[
  {name:'Sheriff P.J. Tanner',title:'Beaufort County Sheriff (Retiring)',quote:"No one can out-work him. You don't find that in everyone today.",excerpt:'Doug Seifert has spent 20 years serving Beaufort County and now has the full endorsement of Sheriff Tanner to lead next.',imageSrc:'https://paymegpt.com/objects/quick-uploads/2/78fe3d764bcaa206.png',articleLink:'https://amp.islandpacket.com/news/local/crime/article315210908.html'},
  {name:'Chief Alexander',title:'Yemassee Police Department',quote:"Doug's leadership and vision for the future of law enforcement in this region is exactly what we need.",excerpt:"Chief Alexander welcomed Doug Seifert for a tour of Yemassee's future police department.",imageSrc:'https://i.ibb.co/6RY9jX2z/Chief-Alexander.jpg',articleLink:null},
  {name:'Galen Miller',title:'Community Leader &middot; 6-Year Colleague',quote:"I am proud to support Doug Seifert for Beaufort County Sheriff. He has my vote!",excerpt:"Over the past six years, I've worked alongside Doug on everything from MLK parade logistics to our MLK Children's Fun Day. He has consistently demonstrated professionalism, reliability, and a deep commitment to the people of Beaufort County. Beyond his work, Doug is a loving husband and father and a wonderful role model.",imageSrc:'https://paymegpt.com/objects/quick-uploads/2/0a7370eb8aae34a3.jpg',articleLink:null}
];
const observer=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible');});},{threshold:.1});
function renderTestimonials(){const c=document.getElementById('testimonials-container');if(!c)return;testimonialsData.forEach(t=>{const d=document.createElement('div');d.className='testimonial-card fade-up';d.innerHTML=`<span class="quote-mark" aria-hidden="true">&ldquo;</span><div class="testimonial-header"><img src="${t.imageSrc}" alt="${t.name}" class="testimonial-avatar" loading="lazy"><div class="testimonial-author-info"><h3>${t.name}</h3><div class="testimonial-author-title">${t.title}</div></div></div><div class="testimonial-quote">${t.quote}</div><div class="testimonial-meta">${t.excerpt}${t.articleLink?`<br><a href="${t.articleLink}" target="_blank" rel="noopener noreferrer">Read More &rarr;</a>`:''}</div>`;c.appendChild(d);observer.observe(d);});}
document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el));
const ED=new Date('2026-06-09T07:00:00-04:00');
function uc(){const n=new Date(),d=ED-n;const cd=document.getElementById('count-days'),b=document.getElementById('banner-countdown');if(d<=0){if(cd)cd.textContent='0';if(b)b.textContent='TODAY';return;}const ds=Math.floor(d/86400000);if(cd)cd.textContent=ds;if(b){if(ds>1)b.textContent=`${ds} Days to June 9`;else if(ds===1)b.textContent='1 Day to June 9';else b.textContent='Election Day';}}
uc();setInterval(uc,60000);
document.addEventListener('DOMContentLoaded',renderTestimonials);
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