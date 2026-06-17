const params = new URLSearchParams(window.location.search);

if (params.get("error") === "1") {
  document.getElementById("mensaje-error").hidden = false;
}
