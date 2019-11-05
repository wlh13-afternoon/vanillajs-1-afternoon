let newArr = []

function play(id) {
   const playerSpan = document.getElementById('player')
   const clickedElement = document.getElementById(id)
   if (playerSpan.innerText === 'X') {
       playerSpan.innerText = 'O'
       clickedElement.innerText = 'X'
       newArr[id] = 'X'
   } else if (playerSpan.innerText === 'O') {
       playerSpan.innerText = 'X'
       clickedElement.innerText = 'O'
       newArr[id] = 'O'
   }
   console.log(newArr)
   const topLeft = newArr[0]
   const topCenter = newArr[1]
   const topRight = newArr[2]
   const middleLeft = newArr[3]
   const middleCenter = newArr[4]
   const middleRight = newArr[5]
   const bottomLeft = newArr[6]
   const bottomCenter = newArr[7]
   const bottomRight = newArr[8]

   if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  let full = true
  for (let i = 0; i <= 8; i++){
      if(newArr[i] === undefined) {
          full = false
      }
  }
  if (full === true){
      alert('Cats Game')
  }
}