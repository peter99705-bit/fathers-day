const particles = document.getElementById("particles");
for(let i=0;i<55;i++){
  const p=document.createElement("span");
  p.className="particle";
  p.style.left=Math.random()*100+"%";
  p.style.animationDuration=(5+Math.random()*10)+"s";
  p.style.animationDelay=(-Math.random()*10)+"s";
  p.style.opacity=Math.random();
  particles.appendChild(p);
}

document.getElementById("startBtn").addEventListener("click",()=>{
  document.querySelector(".about").scrollIntoView({behavior:"smooth"});
});

const modal=document.getElementById("modal");
document.getElementById("surpriseBtn").addEventListener("click",()=>{
  modal.classList.add("show");
  burst();
});
document.getElementById("closeModal").addEventListener("click",()=>modal.classList.remove("show"));
modal.addEventListener("click",(e)=>{if(e.target===modal)modal.classList.remove("show")});

document.getElementById("topBtn").addEventListener("click",()=>{
  window.scrollTo({top:0,behavior:"smooth"});
});

document.querySelectorAll(".gallery-grid img").forEach(img=>{
  img.addEventListener("click",()=>window.open(img.src,"_blank"));
});

function burst(){
  for(let i=0;i<45;i++){
    const s=document.createElement("span");
    s.style.position="fixed";
    s.style.left="50%"; s.style.top="50%";
    s.style.width="4px"; s.style.height="4px";
    s.style.borderRadius="50%";
    s.style.background=Math.random()>0.5?"#00e5ff":"#8a5cff";
    s.style.zIndex="200";
    document.body.appendChild(s);
    const angle=Math.random()*Math.PI*2;
    const dist=80+Math.random()*280;
    s.animate([
      {transform:"translate(-50%,-50%)",opacity:1},
      {transform:`translate(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist}px)`,opacity:0}
    ],{duration:800+Math.random()*600,easing:"cubic-bezier(.2,.8,.2,1)"}).onfinish=()=>s.remove();
  }
}

// 如果之後要加入背景音樂，把 music.mp3 放進 music 資料夾，
// 再把下面註解拿掉即可。
// const music = new Audio("music/music.mp3");
// music.loop = true;
// document.getElementById("musicBtn").onclick = () => {
//   if(music.paused){ music.play(); } else { music.pause(); }
// };
