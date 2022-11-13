let Initialize = () => {
    let el_autohide = document.querySelector(".autohide");
    let autohide_height = el_autohide.offsetHeight;

    let el_notice = document.getElementById("bok-notice");
    let notice_height = 0;

    if (el_notice != null) {
        notice_height = el_notice.offsetHeight;
        let el_bok_close_notice = document.getElementById("bok-close-notice");
        if(el_bok_close_notice){
            el_bok_close_notice.addEventListener("click", ()=>{
                el_notice.remove();
                Initialize();
            })
        }
    }

    let el_sub_nav_div = document.querySelector("#bok-sub-navbar div");
    let sub_nav_div_height = 0;

    if (el_sub_nav_div != null) {
        sub_nav_div_height = el_sub_nav_div.offsetHeight;
    }

    let top_nav = document.getElementById("top-navbar");
    if (top_nav !== null) {
        let h = top_nav.offsetHeight;
        let main_container = document.getElementById("main-container");
        console.log("Height",h,sub_nav_div_height,notice_height);
        if (main_container != null) {
            main_container.style.paddingTop = `${h}px`;
        }
    }

    if (el_autohide) {
        let last_scroll_top = 0;
        window.removeEventListener("scroll",()=>{});
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top <= last_scroll_top) {

                //show notice and nav
                if (scroll_top <= 100) {
                    el_autohide.style.transition = "all 0.1s linear";
                    el_autohide.style.transform = `translateY(0)`;
                } else {
                    el_autohide.style.transition = "all 0.1s linear";
                    el_autohide.style.transform = `translateY(-${notice_height}px)`;
                }
            }
            else {
                console.log("Scrolling Down")
                el_autohide.style.transition = "all 0.1s linear";
                el_autohide.style.transform = `translateY(-${autohide_height+sub_nav_div_height+notice_height}px)`;
            }
            last_scroll_top = scroll_top;
        });
    }
}

document.addEventListener("DOMContentLoaded", Initialize);
