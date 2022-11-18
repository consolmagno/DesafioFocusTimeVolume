export default function () {
  const florestSound = new Audio('assets/Floresta.wav')
  const rainSound = new Audio('assets/Chuva.wav')
  const cafeSound = new Audio('assets/Cafeteria.wav')
  const fireSound = new Audio('assets/Lareira.wav')
  let FlorestValueRange = document.querySelector('#slider-florest')
  let RainValueRange = document.querySelector('#slider-rain')
  let CafeValueRange = document.querySelector('#slider-cafe')
  let FireValueRange = document.querySelector('#slider-fire')

  florestSound.loop = true
  rainSound.loop = true
  cafeSound.loop = true
  fireSound.loop = true

  FlorestValueRange.addEventListener('input', function () {
    florestSound.volume = FlorestValueRange.value
  })

  RainValueRange.addEventListener('input', function () {
    rainSound.volume = RainValueRange.value
  })

  CafeValueRange.addEventListener('input', function () {
    cafeSound.volume = CafeValueRange.value
  })

  FireValueRange.addEventListener('input', function () {
    fireSound.volume = FireValueRange.value
  })

  function BtnFlorestSound() {
    florestSound.play()
    rainSound.pause()
    cafeSound.pause()
    fireSound.pause()

    RainValueRange.value = 0
    CafeValueRange.value = 0
    FireValueRange.value = 0
  }

  function BtnRainSound() {
    florestSound.pause()
    rainSound.play()
    cafeSound.pause()
    fireSound.pause()
    FlorestValueRange.value = 0
    CafeValueRange.value = 0
    FireValueRange.value = 0
  }

  function BtnCafeSound() {
    florestSound.pause()
    rainSound.pause()
    cafeSound.play()
    fireSound.pause()
    FlorestValueRange.value = 0
    RainValueRange.value = 0
    FireValueRange.value = 0
  }

  function BtnFireSound() {
    florestSound.pause()
    rainSound.pause()
    cafeSound.pause()
    fireSound.play()
    FlorestValueRange.value = 0
    RainValueRange.value = 0
    CafeValueRange.value = 0
  }

  return {
    BtnFlorestSound,
    BtnRainSound,
    BtnCafeSound,
    BtnFireSound
  }
}
