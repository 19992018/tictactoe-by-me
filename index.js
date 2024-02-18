for (let num = 1; num <= 9; num++) {
  const text = document.querySelector("#box" + num + " h1");
  const box = document.querySelector("#box" + num);
  let boxCounted = document.getElementsByClassName("square");

  //current click
  const xclick = function setToX() {
    text.innerHTML = "X";
  };

  //next click
  const oclick = function setToO() {
    text.innerHTML = "O";
  };

  let counter = 0;
  for (let i = 0; i < boxCounted.length; i++) {
    boxCounted[i].onclick = function clickCounter() {
      counter = counter + 1;

      if (counter % 2 == 0) {
        box.onclick = oclick; //not carried out/working
        console.log("Even");
      } else {
        box.onclick = xclick; //not carried out/working
        console.log("odd");
      }
    };
  }
}
