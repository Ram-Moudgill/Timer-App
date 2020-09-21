const runningTimer=document.getElementById('timer-back');
const InputValue=document.getElementById('set-timer');
const btn=document.getElementById('btn');
let newsetValue=runningTimer.innerHTML;
btn.addEventListener('click',()=>
{
  if(InputValue.value==="" || InputValue.value<=0)
  {
      runningTimer.innerHTML="Please enter valid value";
  }
  else
  {
    runningTimer.innerHTML=InputValue.value;
    InputValue.value=0;
    const inervv=setInterval(()=>
    {
        let para= runningTimer.innerHTML;
        if(para<=1)
        {
            clearInterval(inervv);
        }
        runningTimer.innerHTML=para-1;
    }, 1000);}
})