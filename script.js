const container = document.querySelector('.container');
let dragging = false;
for (let i = 0; i < 256; i++){
    const gridMember = document.createElement('div');
    gridMember.classList.add('gridMember');

    gridMember.addEventListener('mousedown', ()=>{                  // click vs mousedown          
        gridMember.classList.add('trail');
        dragging = true;
    });

    gridMember.addEventListener('mouseover',()=>{
        if (dragging) 
            gridMember.classList.add('trail');
    });

    gridMember.addEventListener('mouseup', ()=>{
        dragging = false;
    });

    container.appendChild(gridMember);
}

const promptUser = function(){
    let height;
    let width;
    height = prompt("Enter height");
    if (height){
        if (height > 100){

            alert("Maximum value is 100");
            promptUser();
            
        }
        width = prompt("Enter width");
        if (height > 100 || width > 100){

            alert("Maximum value is 100");
            promptUser();    
        }
    }

    return [height, width];
}

const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    var array = promptUser();
    alert(array);
})
