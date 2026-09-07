const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const members=[
['01','XPTO','Líder'],['02','_Hnrck_','Capitão'],['03','ABALADINHO','Capitão'],['04','aBalado','Capitão'],
['05','EZ4_SHINRI','Capitão'],['06','seveN','Capitão'],['07','_Spartano','Sargento'],['08','EZ4_DALSE','Sargento'],
['09','EZ4_JULINHA','Sargento'],['10','EZ4_Sambarilove','Sargento'],['11','JotaVe','Sargento'],['12','(PITBULL)','Recruta'],
['13','Floost-br','Recruta'],['14','Gener4l','Recruta'],['15','JVFP','Recruta'],['16','Manakeryt','Recruta'],
['17','Molodoyy','Recruta'],['18','noskins','Recruta'],['19','Toti_150','Recruta']
];
const roster=document.querySelector('#roster');
roster.innerHTML=members.map(([n,name,role])=>`<article class="member"><div class="num">${n}</div><h4>${name}</h4><small>${role}</small></article>`).join('');

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.section,.recruit,.member').forEach(el=>io.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
 const id=a.getAttribute('href'); if(id.length>1){const t=document.querySelector(id);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}
}));
