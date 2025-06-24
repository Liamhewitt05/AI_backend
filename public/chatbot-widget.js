(function () {
  const iframe = document.createElement("iframe");
  iframe.src = "https://ai-backend-1ymr.onrender.com/widget-ui";
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "300px";
  iframe.style.height = "400px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  document.body.appendChild(iframe);
})();
