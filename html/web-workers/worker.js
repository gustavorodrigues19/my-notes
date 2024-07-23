let counter = 0;

function incrementCounter() {
  counter++;
  postMessage(counter);
  setTimeout(incrementCounter, 1000);
}

incrementCounter();
