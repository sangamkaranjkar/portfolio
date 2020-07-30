

var time = new Date().getHours()

if(time >= 4 && time <= 12){
  document.getElementById('welcome').innerHTML='Welcome,Good Moring';
}
else if(time >= 13 && time <= 17){
  document.getElementById('welcome').innerHTML='Welcome,Good Afternoon';
}
else if(time >= 18  && time <= 22){
  document.getElementById('welcome').innerHTML='Welcome,Good Evening';
}
else{
  document.getElementById('welcome').innerHTML='Welcome,Good Night';
}



function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var d = new Date();
  var n = d.toLocaleTimeString();
  n = checkTime(n)
  document.getElementById('time').innerHTML = n;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();



function blue() {
  document.getElementById('s1').style.backgroundColor='#15202B'
  document.getElementById('s1').style.borderColor='#164D56'
  document.getElementById('ss1').style.backgroundColor='#15202B'
  document.getElementById('ss1').style.borderColor='#164D56'
  document.getElementById('s2').style.backgroundColor='#192734'
  document.getElementById('s2').style.borderColor='#164D56'
  document.getElementById('ss2').style.backgroundColor='#192734'
  document.getElementById('ss2').style.borderColor='#164D56'
  document.getElementById('intro').style.backgroundColor='#192734'
  document.getElementById('intro').style.borderColor='#164D56'
  document.getElementById('nav').style.backgroundColor='#15202B'
  document.getElementById('nav').style.borderColor='#164D56'
  document.getElementById('profile_pic').style.borderColor='#164D56'
  document.getElementById('preview-shadow').style.backgroundColor='#111921'
  document.getElementById('preview').style.backgroundColor='#111921'
  document.getElementById('skills').style.backgroundColor='#111921'
  document.getElementsByClassName('post').style.borderColor='#164D56'
  document.getElementById('contact-form').style.backgroundColor='#15202B'
  document.getElementById('contact-form').style.borderColor='#164D56'
  document.getElementsById('input-field').style.borderColor='#164D56'
  document.getElementsById('input-field').style.backgroundColor='#192734'
  document.getElementsById('submit-btn').style.borderColor='#17a2b8'

}
function green() {
  document.getElementById('s1').style.backgroundColor='#606B56'
  document.getElementById('s1').style.borderColor='#161914'
  document.getElementById('ss1').style.backgroundColor='#606B56'
  document.getElementById('ss1').style.borderColor='#161914'
  document.getElementById('s2').style.backgroundColor='#515a48'
  document.getElementById('s2').style.borderColor='#161914'
  document.getElementById('ss2').style.backgroundColor='#515a48'
  document.getElementById('ss2').style.borderColor='#161914'
  document.getElementById('intro').style.backgroundColor='#515a48'
  document.getElementById('intro').style.borderColor='#161914'
  document.getElementById('nav').style.backgroundColor='#606B56'
  document.getElementById('nav').style.borderColor='#161914'
  document.getElementById('profile_pic').style.borderColor='#161914'
  document.getElementById('preview-shadow').style.backgroundColor='#2a2f25'
  document.getElementById('preview').style.backgroundColor='#2a2f25'
  document.getElementById('skills').style.backgroundColor='#2a2f25'
  document.getElementsByClassName('post').style.borderColor='#161914'
  document.getElementById('contact-form').style.backgroundColor='#606B56'
  document.getElementById('contact-form').style.borderColor='#161914'
  document.getElementsById('input-field').style.borderColor='#161914'
  document.getElementsById('input-field').style.backgroundColor='#515a48'
  document.getElementsById('submit-btn').style.borderColor='#669966'

}

function purple() {
  document.getElementById('s1').style.backgroundColor='#46344E'
  document.getElementById('s1').style.borderColor='#1d1520'
  document.getElementById('ss1').style.backgroundColor='#46344E'
  document.getElementById('ss1').style.borderColor='#1d1520'
  document.getElementById('s2').style.backgroundColor='#382a3f'
  document.getElementById('s2').style.borderColor='#1d1520'
  document.getElementById('ss2').style.backgroundColor='#382a3f'
  document.getElementById('ss2').style.borderColor='#1d1520'
  document.getElementById('intro').style.backgroundColor='#382a3f'
  document.getElementById('intro').style.borderColor='#1d1520'
  document.getElementById('nav').style.backgroundColor='#46344E'
  document.getElementById('nav').style.borderColor='#1d1520'
  document.getElementById('profile_pic').style.borderColor='#1d1520'
  document.getElementById('preview-shadow').style.backgroundColor='#2b202f'
  document.getElementById('preview').style.backgroundColor='#2b202f'
  document.getElementById('skills').style.backgroundColor='#2b202f'
  document.getElementsByClassName('post').style.borderColor='#1d1520'
  document.getElementById('contact-form').style.backgroundColor='#46344E'
  document.getElementById('contact-form').style.borderColor='#1d1520'
  document.getElementsById('input-field').style.borderColor='#1d1520'
  document.getElementsById('input-field').style.backgroundColor='#382a3f'
  document.getElementsById('submit-btn').style.borderColor='#8534a3'

}

function light() {
  document.getElementById('s1').style.backgroundColor='#eaeaea'
  document.getElementById('s1').style.borderColor='#c1c1c1'
  document.getElementById('ss1').style.backgroundColor='#eaeaea'
  document.getElementById('ss1').style.borderColor='#c1c1c1'
  document.getElementById('s2').style.backgroundColor='#fff'
  document.getElementById('s2').style.borderColor='#c1c1c1'
  document.getElementById('ss2').style.backgroundColor='#fff'
  document.getElementById('ss2').style.borderColor='#c1c1c1'
  document.getElementById('intro').style.backgroundColor='#fff'
  document.getElementById('intro').style.borderColor='#c1c1c1'
  document.getElementById('nav').style.backgroundColor='#eaeaea'
  document.getElementById('nav').style.borderColor='#c1c1c1'
  document.getElementById('profile_pic').style.borderColor='#c1c1c1'
  document.getElementById('preview-shadow').style.backgroundColor='#f0ead6'
  document.getElementById('preview').style.backgroundColor='#f0ead6'
  document.getElementById('skills').style.backgroundColor='#f0ead6'
  document.getElementsByClassName('post').style.borderColor='#1d1520'
  document.getElementById('contact-form').style.backgroundColor='#eaeaea'
  document.getElementById('contact-form').style.borderColor='#c1c1c1'
  document.getElementsById('input-field').style.borderColor='#c1c1c1'
  document.getElementsById('input-field').style.backgroundColor='#fff'
  document.getElementsById('submit-btn').style.borderColor='black'

}
