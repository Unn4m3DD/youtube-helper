setTimeout(() => { try { document.getElementsByClassName("video-stream html5-main-video")[0].focus() } catch { } }, 1000)
document.addEventListener('keydown', (e) => {
  if (e.key == "n") {
    try {
      document.getElementsByClassName("video-stream html5-main-video")[0].focus()
      document.getElementsByClassName("ytp-left-controls").click()
      let ad = document.getElementsByClassName("ytp-ad-skip-button ytp-button")
      for (let i = 0; i < ad.length; i++)
        ad[i].click()
      let banner = document.getElementsByClassName("ytp-ad-overlay-close-button")
      for (let i = 0; i < banner.length; i++)
        banner[i].clik()
    }catch { }
  }
});