document.addEventListener('DOMContentLoaded', function () {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");
  
    if (cursorDot && cursorOutline) { // Check if elements are found
      document.addEventListener('mousemove', function (e) {
        console.log("Mouse moved"); // Debugging statement
  
        const posX = e.clientX;
        const posY = e.clientY;
  
        console.log(`Cursor position: ${posX}, ${posY}`); // Debugging statement
  
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
  
        cursorOutline.style.left = `${posX - 10}px`; // Adjust for the cursor dot size
        cursorOutline.style.top = `${posY - 10}px`; // Adjust for the cursor dot size
      });
    } else {
      console.error('Cursor elements not found');
    }
  });
  