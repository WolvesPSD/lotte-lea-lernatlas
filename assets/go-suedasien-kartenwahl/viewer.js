'use strict';
const get=id=>document.getElementById(id);
const pane=get('pane');
const buttons=[...document.querySelectorAll('[data-map]')];
let image=null;
let level=0;
function resize(reset=false){
  if(!image)return;
  const fit=Math.min(pane.clientWidth,pane.clientHeight*image.naturalWidth/image.naturalHeight,image.naturalWidth);
  const widths=[fit,(fit+2*image.naturalWidth)/2,2*image.naturalWidth];
  image.style.width=widths[level]+'px';
  if(reset)pane.scrollTo(0,0);
  get('minus').disabled=level===0;
  get('plus').disabled=level===2;
  get('status').textContent=document.querySelector('[data-map="'+image.id+'"]').textContent+' · '+(level===0?'Übersicht':Math.round(widths[level]/image.naturalWidth*100)+' % der Originalgrösse');
}
async function start(){
  const missing=[];
  await Promise.all(buttons.map(async button=>{
    button.disabled=true;
    const img=get(button.dataset.map);
    try{await img.decode()}catch{missing.push(button.textContent);return}
    button.addEventListener('click',()=>{
      if(image)image.hidden=true;
      image=img;image.hidden=false;get('viewer').hidden=false;
      for(const b of buttons)b.setAttribute('aria-pressed',String(b===button));
      get('credits').replaceChildren(get(img.id+'-credit').content.cloneNode(true));
      level=0;resize(true);
    });
  }));
  for(const button of buttons)button.disabled=missing.includes(button.textContent);
  if(missing.length){get('error').textContent='Karte nicht verfügbar: '+missing.join(', ')+'. Für die freie Kartenwahl brauchst du beide Ansichten. Lass den betreffenden Vergleich offen.';get('error').hidden=false}
  get('status').textContent=missing.length?'Die beiden Karten stehen nicht vollständig zur Wahl.':'Beide Karten sind bereit.';
}
get('plus').onclick=()=>{level=Math.min(2,level+1);resize()};
get('minus').onclick=()=>{level=Math.max(0,level-1);resize()};
get('fit').onclick=()=>{level=0;resize(true)};
pane.addEventListener('keydown',event=>{
  const offsets={ArrowLeft:[-80,0],ArrowRight:[80,0],ArrowUp:[0,-80],ArrowDown:[0,80]};
  if(!offsets[event.key])return;
  event.preventDefault();pane.scrollBy(...offsets[event.key]);
});
window.addEventListener('resize',()=>resize());
start();
