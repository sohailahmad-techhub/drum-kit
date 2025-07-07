let numberofbutton=document.querySelectorAll(".drum").length;
for(let i=0;i<numberofbutton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       let innerword= this.innerHTML;
       switch(innerword){
        case 'w':
            let sound1=new Audio("sounds/crash.mp3");
            sound1.play();
            break;
        case 'a':
            let sound2=new Audio("sounds/kick-bass.mp3");
            sound2.play();
        case 's':
             let sound3=new Audio("sounds/snare.mp3");
            sound3.play();
            break; 
        case 'd':
             let sound4=new Audio("sounds/tom-1.mp3");
            sound4.play();
            break; 
         case 'j':
             let sound5=new Audio("sounds/tom-2.mp3");
            sound5.play();
            break; 
        case 'k':
             let sound6=new Audio("sounds/tom-3.mp3");
            sound6.play();
            break;
        case 'l':
             let sound7=new Audio("sounds/tom-4.mp3");
            sound7.play();
            break;
       }
    });
    
}
let housekeeper{
     sname="khan",
     address="kohi salarzai"
};
alert("hello my name is".);