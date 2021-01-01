console.log("Hey this is aashu here we are making a tiny calculator");

const scr =  document.getElementById('scr');
let scrValue = "";

 buttons = document.querySelectorAll('button');

for(item of buttons){
    item.addEventListener('click',(e)=>{
buttonText = e.target.innerText
console.log('Button text is =',buttonText);

if(buttonText == '*')
{
    buttonText = '*';
    scrValue += buttonText;
    scr.value = buttonText;
}

else if(buttonText == 'Cl')
{
    scrValue=  '';
    scr.value = scrValue;
}

else if(buttonText  ==  '=')
{
 scr.value = eval(scrValue);
}
else
{
    scrValue += buttonText;
    scr.value = scrValue;
}

    })
}