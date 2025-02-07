document.getElementById("startButton").addEventListener("click", function() {
    // Hide landing page
    document.getElementById("landing").classList.add("hidden");
  
    // Fake challenge sequence
    setTimeout(() => {
      // Show jumpscare
      document.getElementById("jumpscare").classList.remove("hidden");
      document.getElementById("scream").play();
  
      // Fake crash after 2 seconds
      setTimeout(() => {
        document.body.innerHTML = `
          <h1 style="color: red;">SYSTEM ERROR: Ghost detected. Run while you still can!</h1>
          <p>404: Soul Not Found. Rest in peace.</p>
        `;
      }, 2000);
    }, 3000); // 5 seconds of fake challenge
  });