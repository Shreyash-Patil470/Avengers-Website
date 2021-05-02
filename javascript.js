// ---------- Parallax Scrolling Effect Start ----------

// let thanos = document.getElementById('thanos');
let text = document.getElementById('avengers');
// let others = document.getElementById('others');
let btn = document.getElementById('btn-exp');

window.addEventListener('scroll', function(){
  let value = window.scrollY;

  text.style.top = 45 + value * -0.1 + '%';
  btn.style.marginTop = value * 1.5 + 'px';
})

// ---------- END ----------