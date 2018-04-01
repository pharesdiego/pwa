if('serviceWorker' in navigator){
  navigator.serviceWorker
    .register('swTutorial.js')
      .then(_ => console.log('registered sw'))
      .catch(err => console.log('error: ', err))
}