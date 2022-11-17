import Sounds from './sounds.js'
import ToggleSounds from './ToggleSounds.js'
import Timer from './timer.js'

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.stop')
const btnAddTime = document.querySelector('.addTime')
const btnRemoveTime = document.querySelector('.removeTime')
const btnFlorest = document.querySelector('.florest')
const btnRain = document.querySelector('.rain')
const btnCafe = document.querySelector('.cafe')
const btnFire = document.querySelector('.fire')
const btnDay = document.querySelector('.day')
const btnNight = document.querySelector('.night')
const mode = document.body
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

const sounds = Sounds()
const toggleSounds = ToggleSounds({ btnFlorest, btnRain, btnCafe, btnFire })
const timer = Timer({ minutesDisplay, secondsDisplay })

btnPlay.addEventListener('click', function () {
  timer.countDown()
})

btnPause.addEventListener('click', function () {
  timer.hold()
})

btnAddTime.addEventListener('click', function () {
  timer.addTime()
})

btnRemoveTime.addEventListener('click', function () {
  timer.removeTime()
})

btnFlorest.addEventListener('click', function () {
  toggleSounds.BtnFlorestSelect()
  sounds.BtnFlorestSound()
})

btnRain.addEventListener('click', function () {
  toggleSounds.BtnRainSelect()
  sounds.BtnRainSound()
})

btnCafe.addEventListener('click', function () {
  toggleSounds.BtnCafeSelect()
  sounds.BtnCafeSound()
})

btnFire.addEventListener('click', function () {
  toggleSounds.BtnFireSelect()
  sounds.BtnFireSound()
})

btnDay.addEventListener('click', toggleMode)
btnNight.addEventListener('click', toggleMode)

function toggleMode() {
  btnDay.classList.toggle('hide')
  btnNight.classList.toggle('hide')
  mode.classList.toggle('dark')
}
