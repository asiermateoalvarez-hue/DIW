const toastTrigger = document.getElementById('ToastBtn')
const toastLiveExample = document.getElementById('Toast1')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}