document.addEventListener("DOMContentLoaded", function () {
  const headerElement = document.getElementById("headerMessage");
  const input = document.getElementById("customInput");
  input.addEventListener("input", () => {
    const inputValue = input.value.length; // Use input length as animation factor
    const position = (inputValue * 5) % 100; // Create repeating animation
    headerElement.style.backgroundPosition = `${position}% 50%`;
  });
});
