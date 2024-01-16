document.getElementById("gift").addEventListener("click", function() {
    var message = document.getElementById("message");
    message.style.display = "block";
    setTimeout(function() {
      message.style.opacity = "1";
    }, 100);
  });
  
  function hideMessage() {
    var message = document.getElementById("message");
    message.style.opacity = "0";
    setTimeout(function() {
      message.style.display = "none";
    }, 500);
  }