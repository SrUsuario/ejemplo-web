// Constantes para los elementos con los ID (ahorra código al no repetir lo mismo varias veces)
const SWITCH = document.getElementById("switch");
const INFO_SWITCH = document.getElementById("infoSwitch");

// Listener que escucha cuando hay click en el checkbox (el switch)
SWITCH.addEventListener("click", modeDark, false);

// Cambia entre tema claro y tema oscuro
function modeDark() {
  if (SWITCH.checked) {
    document.body.classList.add("dark");
    INFO_SWITCH.innerHTML = "Esta página tiene el tema oscuro";
  } else {
    document.body.classList.remove("dark");
    INFO_SWITCH.innerHTML = "Esta página tiene el tema claro";
  }
}
