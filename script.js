// Favicon generation script
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, 32, 32);

  const faviconURL = canvas.toDataURL("image/png");

  const link = document.createElement("link");
  link.rel = "icon";
  link.href = faviconURL;
  document.head.appendChild(link);
});
// FIN - Favicon generation script
