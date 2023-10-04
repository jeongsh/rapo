const textScroll = () =>{
  const wrapTitles = document.querySelectorAll('.wrap-title')
  
  wrapTitles.forEach((wrapTitle) => {
    let upSize = null
    let downSize = null
    let x = 0
    let y = 0
    const wrapTitleRect = wrapTitle.getBoundingClientRect()
    let circleSize = 0
    const title = wrapTitle.querySelector('.title.fill')
    window.addEventListener('mousemove', (e) => {
      x = e.clientX - wrapTitleRect.left
      y = e.clientY - wrapTitleRect.top
    })
    wrapTitle.addEventListener('mouseenter', (e) => {
      clearInterval(downSize)
      upSize = setInterval(() => {
        circleSize += 1
        
        title.style.clipPath = `circle(${circleSize}vw at ${x / wrapTitleRect.width * 100}% ${y / wrapTitleRect.height * 100}%)`
        if (circleSize >= 80) {
          clearInterval(upSize)
        }
      }, 10)
    })
    wrapTitle.addEventListener('mouseleave', (e) => {
      clearInterval(upSize)
      downSize = setInterval(() => {
        circleSize -= 1
        title.style.clipPath = `circle(${circleSize}vw at ${x / wrapTitleRect.width * 100}% ${y / wrapTitleRect.height * 100}%)`
        if (circleSize <= 0) {
          clearInterval(downSize)
        }
      }, 10)
    })
  })
}

export default textScroll