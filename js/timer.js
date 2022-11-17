export default function ({ minutesDisplay, secondsDisplay }) {
  const minutesSet = Number(minutesDisplay.textContent)
  let updateSeconds = 0

  let timerTimeOut

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      if (minutes <= 0 && seconds <= 0) {
        reset()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        minutes--
      }
      updateTimerDisplay(minutes, seconds - 1)
      updateSeconds = seconds - 1

      countDown()
    }, 1000)
  }

  function addTime() {
    updateTimerDisplay(Number(minutesDisplay.textContent) + 5, updateSeconds)
  }

  function removeTime() {
    let RemoveMinutes = Number(minutesDisplay.textContent) - 5
    if (RemoveMinutes <= 0) {
      RemoveMinutes = 0
      updateSeconds = 0
    }
    updateTimerDisplay(RemoveMinutes, updateSeconds)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function reset() {
    updateTimerDisplay(minutesSet, 0)
  }

  return {
    updateTimerDisplay,
    countDown,
    addTime,
    removeTime,
    hold
  }
}
