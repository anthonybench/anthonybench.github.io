function underConstruction () { 
  const newDiv = document.createElement("div"); 
  const lineOne = document.createTextNode("This page is currently under construction,");
  const lineTwo = document.createTextNode("please come back later!");
  newDiv.appendChild(lineOne);
  var lineBreak = document.createElement('BR');
  newDiv.appendChild(lineBreak);
  newDiv.appendChild(lineTwo);
  newDiv.setAttribute('class', 'cntr');

  const myButton = document.getElementById('temp-btn');

  myButton.insertAdjacentElement('afterend', newDiv);
}