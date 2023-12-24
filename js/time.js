window.addEventListener("load", function() {
    const pageEnd = performance.mark('pageEnd');
    const loadTime = pageEnd.startTime;

    var div_load_time = document.getElementsByClassName("footer__load_time")[0];
    div_load_time.textContent = `Page load time is ${loadTime / 1000} seconds`;
}());
