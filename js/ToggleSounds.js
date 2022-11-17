export default function ({ btnFlorest, btnRain, btnCafe, btnFire }) {
  function BtnFlorestSelect() {
    btnFlorest.classList.add('selector')
    btnRain.classList.remove('selector')
    btnCafe.classList.remove('selector')
    btnFire.classList.remove('selector')
  }

  function BtnRainSelect() {
    btnFlorest.classList.remove('selector')
    btnRain.classList.add('selector')
    btnCafe.classList.remove('selector')
    btnFire.classList.remove('selector')
  }

  function BtnCafeSelect() {
    btnFlorest.classList.remove('selector')
    btnRain.classList.remove('selector')
    btnCafe.classList.add('selector')
    btnFire.classList.remove('selector')
  }

  function BtnFireSelect() {
    btnFlorest.classList.remove('selector')
    btnRain.classList.remove('selector')
    btnCafe.classList.remove('selector')
    btnFire.classList.add('selector')
  }
  return {
    BtnFlorestSelect,
    BtnRainSelect,
    BtnCafeSelect,
    BtnFireSelect
  }
}
