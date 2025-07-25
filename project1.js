const buttons=document.querySelectorAll('.button');//select elements with class button
console.log(buttons)
const body=document.querySelector('body');
// Get the element
const box = document.getElementById('myBox');

// Apply box shadow
box.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.3)';
buttons.forEach(function(button){//call back function for each button//
    console.log(button)
    
    button.addEventListener('click',function(event){
        console.log(event)//there are many types of events are there like ckick,dbclick,keydown etc//
        console.log(event.target)//target is used to grt the element which is clicked//
       if (event.target.id==='yellow'){
body.style.backgroundColor=event.target.id
        }
        if (event.target.id==='grey'){
            body.style.backgroundColor=event.target.id
                    }
                    if (event.target.id==='white'){
                        body.style.backgroundColor=event.target.id
                                }
                                if (event.target.id==='blue'){
                                    body.style.backgroundColor=event.target.id
                                            }
                                            if (event.target.id==='purple'){
                                                body.style.backgroundColor=event.target.id
                                                        }
        

        
    });
});
//by using switch case//

/*const buttons=document.querySelectorAll('.button');//select elements with class button
console.log(buttons)
const body=document.querySelector('body');
buttons.forEach(function(button){//call back function for each button//
    console.log(button)
    
    button.addEventListener('click',function(event){
        console.log(event)//there are many types of events are there like ckick,dbclick,keydown etc//
        console.log(event.target)//target is used to grt the element which is clicked//
        switch(event.target.id){
            case 'yellow':
                body.style.backgroundColor=event.target.id
                break;

        }


    });
});*/



    

