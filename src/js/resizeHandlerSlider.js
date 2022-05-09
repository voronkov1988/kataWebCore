const resizeHandlerSlider = () => {
   if (document.body.clientWidth >= 768 && document.body.clientWidth < 1440) {
       readButton.style.display = 'flex'
       closeButton.style.display = 'none'
       readButtonTech.style.display = 'flex'
       closeButtonTech.style.display = 'none'
       mediumTech.forEach(item => {
           item.style.display = 'none'
       })
       medium.forEach (item => {
           item.style.display = 'none'
       })
       if (swiper) {
           swiper.destroy();
           swiperTech.destroy()
       }
   }
   if(document.body.clientWidth < 768){
       createSwiper()
       createTechSlider()
       createPriceSlider()
       medium.forEach (item => {
           item.style.display = 'flex'
       })
       readButton.style.display = 'none'
       closeButton.style.display = 'none'
       readButtonTech.style.display = 'none'
       closeButtonTech.style.display = 'none'
   }
   if(document.body.clientWidth > 1440){
       readButton.style.display = 'flex'
       closeButton.style.display = 'none'
       readButtonTech.style.display = 'flex'
       closeButtonTech.style.display = 'none'
       mediumTech.forEach(item => {
           item.style.display = 'flex'
       })
       medium.forEach (item => {
           item.style.display = 'flex'
       })
       large.forEach (item => {
           item.style.display = 'none'
       })
   }
}

export default resizeHandlerSlider