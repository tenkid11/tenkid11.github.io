// Typing effect
const typedEl = document.getElementById('typed');
const sentences = [
  "ผมชอบเขียนโค้ดและเรียนรู้เทคโนโลยีใหม่ๆ เช่น Web, Cloud และ DevOps.",
  "ผมสนใจการออกแบบระบบที่ยืดหยุ่น สร้างประสบการณ์ผู้ใช้ที่ดี และอัตโนมัติการทำงานซ้ำๆ."
];
let sIndex = 0, chIndex = 0, forward = true;

function typeLoop(){
  const current = sentences[sIndex];
  if(forward){
    chIndex++;
    if(chIndex > current.length){ forward = false; setTimeout(typeLoop,1200); return; }
  } else {
    chIndex--;
    if(chIndex === 0){ forward = true; sIndex = (sIndex+1)%sentences.length; }
  }
  typedEl.textContent = current.slice(0,chIndex);
  setTimeout(typeLoop, forward ? 40 : 24);
}
document.addEventListener('DOMContentLoaded', () => {
  typeLoop();

  // Contribution graph mock
  const contrib = document.getElementById('contrib');
  const weeks = 14, days = 7;
  for(let w=0; w<weeks; w++){
    for(let d=0; d<days; d++){
      const sq = document.createElement('div');
      const lvl = Math.floor(Math.random()*3)+1; // 1..3
      sq.className = `square level-${lvl}`;
      const dateStr = `Day ${d+1}, Week ${w+1}`;
      sq.title = `${dateStr} — ${lvl * 2} contributions`;
      contrib.appendChild(sq);
    }
  }
});
