const box=document.getElementById('lightbox');
let previousFocus;
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{
 previousFocus=button; const image=document.getElementById('largeImage'); image.src=button.dataset.image;image.alt=button.dataset.caption;
 document.getElementById('imageCaption').textContent=button.dataset.caption;
 document.getElementById('originalImage').href=button.dataset.image;
 box.showModal();document.body.style.overflow='hidden';
}));
document.getElementById('closeImage').addEventListener('click',()=>box.close());
box.addEventListener('click',e=>{if(e.target===box)box.close()});
box.addEventListener('close',()=>{document.body.style.overflow='';previousFocus?.focus()});
let toastTimer;
document.querySelectorAll('.copy-email').forEach(button=>button.addEventListener('click',async()=>{
 const toast=document.getElementById('toast');clearTimeout(toastTimer);
 try{await navigator.clipboard.writeText('1137460619@qq.com');toast.textContent='邮箱已复制：1137460619@qq.com'}catch{toast.textContent='请选中邮箱地址进行复制：1137460619@qq.com'}
 toast.classList.add('visible');toastTimer=setTimeout(()=>toast.classList.remove('visible'),4000);
}));
const sections=document.querySelectorAll('.detail-body section[id], .sv-article section[id]');
if(sections.length&&'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('aside a').forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id));}})},{rootMargin:'-10% 0px -65% 0px'});sections.forEach(s=>observer.observe(s))}
