##Projects Related to Dom

##project 1

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
