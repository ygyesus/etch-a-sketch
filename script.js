const container = document.querySelector('.container');

let containerSideLength = '625px';
container.style.width = containerSideLength;
container.style.height = containerSideLength;

containerSideLength = containerSideLength.slice(0, -2);
let containerHeight = container.style.height.slice(0,-2);
let dragging = false;

let currentColors = [];                             // of all grid members
let toBeDecreasedColors = [];                        // of all grid members
let listOfGridMembers = [];

//  FIRST RECORD 256 GRIDS' ORIGINAL COLORS 
for (let i = 0; i < 256; i++){
    const gridMember = document.createElement('div');
    gridMember.classList.add('gridMember');

    setGridMemberSideLength(gridMember, containerSideLength/16)
    addColorANDThreeEventListeners(gridMember);
    container.appendChild(gridMember);
}


// THEN RECORD 10% OF 256 GRIDS' COLORS THAT SHALL BE SUBTRACTED
function promptUser(){
    let numberOfSquares;

    numberOfSquares = prompt("Enter number of squares per side for square grid");
    if (numberOfSquares){
        if (numberOfSquares > 100){
            alert("Maximum value is 100");
            return promptUser();
        }
        else{
            container.replaceChildren();
        }
    }
    return numberOfSquares;
};

function generateSingleRGBNumber(){
    let randomRGBNumber = Math.random();                    // [0, ~1]
    randomRGBNumber = randomRGBNumber * 256;                // [0, ~256]
    randomRGBNumber = Math.floor(randomRGBNumber);          // [0, 255]

    return randomRGBNumber;
}

function composeRGBColor(generatedRGBNumber1, generatedRGBNumber2, generatedRGBNumber3){
    let color = 'rgba' + '('+
        generatedRGBNumber1 + ',' + generatedRGBNumber2 + ',' + generatedRGBNumber3 +
    ')';
    return color;
}

function decomposeRGBColor(RGBColor){
    let list = RGBColor.slice(5, -1);       // RRR,GGG,BBB
    let array = list.split(',');            // [RRR, GGG, BBB]
    return array;

}

function decreaseToBlack(gridMember){
 
    for (let i = 0; i < currentColors.length; i++){
        console.log(currentColors);
    //     let currentColor = currentColors[i];
    //     console.log("my index", i);
    //     console.log("CURRENT COLORS ABOUT TO DECREASE:", currentColor);
    //     let toBeDecreasedBy = toBeDecreasedColors[i];
    //     let gridMember = gridMembers[i];

    //     let red = toBeDecreasedBy[0];
    //     let green = toBeDecreasedBy[1];
    //     let blue = toBeDecreasedBy[2];

    //     currentColor[0] = currentColor[0] - red;
    //     currentColor[1] = currentColor[1] - green;
    //     currentColor[2] = currentColor[2] - blue;

    //     if (currentColor[0]<=0 && currentColor[1]<=0 && currentColor[2]<=0){
    //         gridMember = document.createElement('div');
    //         gridMember.classList.add('.gridMember');
    //     }
    //     let finalColor = composeRGBColor(currentColor[0], currentColor[1], currentColor[2]);
        
    //     setGridMemberColor(gridMember, finalColor);
    }
}


function addColorANDThreeEventListeners(gridMember){

    let red = generateSingleRGBNumber();
    let green = generateSingleRGBNumber();
    let blue = generateSingleRGBNumber();

    currentColors = [];
    toBeDecreasedColors = [];
    listOfGridMembers = [];

    
    let color = composeRGBColor(red, green, blue);
    gridMember.addEventListener('mousedown', ()=>{                  // click vs mousedown          
        dragging = true;
        setGridMemberColor(gridMember, color);

        currentColors.push([red, green, blue]);
        toBeDecreasedColors.push([red/10, green/10, blue/10]);
        listOfGridMembers.push()
        decreaseToBlack();
    });

    gridMember.addEventListener('mouseover',()=>{
        if (dragging){
            setGridMemberColor(gridMember, color);

            currentColors.push([red, green, blue]);
            toBeDecreasedColors.push([red/10, green/10, blue/10]);
            // decreaseToBlack();
        }
    });

    gridMember.addEventListener('mouseup', ()=>{
        dragging = false;
    });
}

function setGridMemberColor(gridMember, color){
    gridMember.style.backgroundColor = color;
}


function setGridMemberSideLength(gridMember, sideLength){
    gridMember.style.width = sideLength +"px";
    gridMember.style.height = sideLength +"px";
}


const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    let numberOfSquares = promptUser();
    currentColors = [];
    toBeDecreasedColors = [];
    for (let i = 0; i < Math.pow(numberOfSquares, 2); i++){
        const gridMember = document.createElement('div');
        gridMember.classList.add('gridMember');
        let sideLength = containerSideLength/numberOfSquares;

        setGridMemberSideLength(gridMember, sideLength);    
        addColorANDThreeEventListeners(gridMember);
        container.appendChild(gridMember);
    }
});