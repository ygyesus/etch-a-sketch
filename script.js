const container = document.querySelector('.container');

for (let i = 0; i < 16; i++){
    const gridMember = document.createElement('div');
    gridMember.classList.add('gridMember');
    gridMember.addEventListener('mouseover',()=>{
        gridMember.classList.add('trail');
    })
    
    container.appendChild(gridMember);
}

