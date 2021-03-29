const anims = document.querySelectorAll('.anim');

if (anims.length > 0){
    window.addEventListener('scroll',animScroll)
    function animScroll(p) {
        for (let i = 0; i < anims.length; i++) {
            const anim = anims[i];
            const animHeight = anim.offsetHeight;
            const animOffSet = offSet(anim).top;
            const animStart = 4;


            let animPoint = window.innerHeight - animHeight / animStart;
            if (animHeight > window.innerHeight)
                animPoint = window.innerHeight - window.innerHeight / animStart;
            if ((pageYOffset > animOffSet - animPoint)&& pageYOffset<(animOffSet + animHeight)){
                anim.classList.add('_active')
            }else{
                if(!anim.classList.contains('atop')){
                    anim.classList.remove('_active')
                }
            }
        }
    }
    function offSet(p) {
        const rect = p.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animScroll();
    }, 400);
}
