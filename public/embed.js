(function () {
  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.src = "https://ai-backend-1ymr.onrender.com/widget-ui";
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "350px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "10px";
  iframe.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
  iframe.style.zIndex = "9999";
  iframe.setAttribute("title", "AI Chatbot Widget");

  document.body.appendChild(iframe);
})();
