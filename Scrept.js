<script>
  document.querySelectorAll(".boll").forEach(boll => {
    let percent = boll.getAttribute("data-percent");
    let degree = (percent / 100) * 360;
    boll.style.setProperty("--gradient", `conic-gradient(#f4c542 ${degree}deg, #eee ${degree}deg)`);
    boll.style.animation = "fill 2s forwards";
  });
</script>