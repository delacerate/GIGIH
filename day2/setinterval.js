function startCountdown(seconds) {
    return new Promise((resolve, reject) => {
      let counter = seconds;
  
      const intervalId = setInterval(() => {
        console.log(counter);
        counter--;
  
        if (counter < 0) {
          clearInterval(intervalId);
          resolve();
        }
      }, 1000);
    });
  }
  
  console.log("Countdown started.");
  
  startCountdown(5)
    .then(() => {
      console.log("Countdown finished.");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  