##Projects Related to Dom

##project 1
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-muuthh?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

```javascript
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});
```

##project 2
[Click here](https://dom-project-chaiaurcode-muuthh.stackblitz.io/2-BMICalculator/index.html)
```javascript
const form = document.querySelector('form');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  
  const height=parseInt(document.querySelector("#height").value);
  const weight=parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results")
  if(height==='' || height <0 || isNaN(height) )
  {
    results.innerHTML=`Please give a valid height ${height}`;
  } else if(weight==='' || weight <0 || isNaN(weight) )
  {
    results.innerHTML=`Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    
    let weight_flag="";
    if(bmi<18.6){
      weight_flag ="You are under weight";
    }else if(bmi>18.6 && bmi<24.9){
      weight_flag = "Your weight is normal range";
    }
    else{
      weight_flag ="You are overweight.";
    }
    results.innerHTML =`<span>${bmi}</span><div>${weight_flag}</div>`;
  }
  
})
```
