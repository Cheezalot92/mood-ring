import "./styles.css";

const submitMood = document.querySelector('#submitMood');

function toggleClasses(element, className){
  //remove existing class and replace with new class.
if (element.classList.contains(className)){
  element.classList.remove(className)
}
 else {
   element.classList.add(className);
 }
}

submitMood.addEventListener('click', function(event){
 event.preventDefault();
  const moodInput= document.querySelector("[name=mood]:checked");
  const myMood= document.querySelector("#myMood");
  const moodValue = moodInput.value;
  myMood.innerHTML= moodInput.value;
  const classes= myMood.classList;
  classes.toggle('default-mood');
  switch(moodValue){
 case 'Content' :
   classes.add('content');
   classes.remove('happy', 'sleepy');
   break
   case 'Happy':
     classes.add('happy');
     classes.remove('content','sleepy');
     break
     case 'Sleepy':
   classes.add('sleepy');
   classes.remove('happy', 'content');
     break
     default:
       
  }
})

