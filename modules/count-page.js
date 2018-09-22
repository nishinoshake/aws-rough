module.exports = function() {
  this.nuxt.hook('generate:extendRoutes', routes => {
    console.log('***************************')
    console.log(`page : ${routes.length}`)
    console.log('***************************')
  })
}
