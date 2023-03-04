const eventHandler = () => {
  const x = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();

    if (currentTime === "9:02:00 AM") {
      document.getElementById("button-id").click();
    }

    if (currentTime === "1:01:00 PM") {
      document.getElementById("button-id").click();
    }

    if (currentTime === "7:00:00 PM") {
      clearInterval(x);
      removeEventListener("load", eventHandler);
      console.log("The end");
    }
  }, 1000);
};

const buttonClick = () => {
  const currentTime = new Date().toLocaleTimeString();

  document.getElementById(
    "log"
  ).innerHTML = `Foi clicado no botão às ${currentTime}`;
};

addEventListener("load", eventHandler);
