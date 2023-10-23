// Constantes para los elementos con los ID (ahorra código al no repetir lo mismo varias veces)
const SWITCH = document.getElementById("switch");
const INFO_SWITCH = document.getElementById("infoSwitch");
const DELAY = 2000;

// Listener que escucha cuando hay click en el checkbox (el switch)
SWITCH.addEventListener("click", modeDark);

// Cambia entre tema claro y tema oscuro
function modeDark() {
  if (SWITCH.checked) {
    SWITCH.disabled = true;
    setTimeout(() => {
      document.body.classList.add("dark");
      INFO_SWITCH.innerHTML = "Esta página tiene el tema oscuro";
      SWITCH.disabled = false;
    }, DELAY);
  } else {
    SWITCH.disabled = true;
    setTimeout(() => {
      document.body.classList.remove("dark");
      INFO_SWITCH.innerHTML = "Esta página tiene el tema claro";
      SWITCH.disabled = false;
    }, DELAY);
  }
}
