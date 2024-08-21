// This code makes each square change to a random color when the mouse hovers over it (mouseover).

function changeSquareColor(){
  const squares=document.querySelectorAll('.square');
  squares.forEach((square)=>{

    square.addEventListener('mouseover',()=>{
      const randomBetween=(min,max)=>min+Math.floor(Math.random() * (max - min +1));
      const r = randomBetween(0, 255);
      const g = randomBetween(0, 255);
      const b = randomBetween(0, 255);
      square.style.backgroundColor=`rgb(${r},${g},${b})`;
    })
  })
}

// This code creates a grid consisting of 16 rows and 16 columns,
// where each cell in the grid is represented by a square.
const gridContainer=document.querySelector('.GridContainer');
for(let i=0;i<16;i++){
  for(let j=0;j<16;j++){
    const square=document.createElement('div');
    square.classList.add('square');
    square.style.width='31.25px';
    square.style.height='31.25px';
    square.style.border="1px solid black";
    square.style.backgroundColor='transparent';
    gridContainer.appendChild(square);
  }
}
changeSquareColor();
// This code resizes the grid based on the user's input. 
// When the button is clicked, a prompt asks the user for a new grid size, 
// and the grid is then resized to the specified dimensions.
const resizeButton=document.querySelector('.GridSizeAdjustButton');
resizeButton.addEventListener('click',()=>{
    let n=16;
    let width;
    let height;
    const gridContainer=document.querySelector('.GridContainer');
    do{
     n=parseInt(prompt('Enter the new grid size'));
    }
    while(n>100||isNaN(n)||n<0);
    gridContainer.innerHTML = '';
    width=500/n +"px";
    height=500/n+"px";
   for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        const square=document.createElement('div');
        square.classList.add('square');
        square.style.width=width;
        square.style.height=height;
        square.style.border='1px solid black';
        square.style.backgroundColor='transparent';
        gridContainer.appendChild(square)
      }
    }
    changeSquareColor();
})