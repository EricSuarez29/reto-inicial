let d = document;

d.addEventListener(`click`, (e)=>{
    if(e.target.matches(`.nav-link`)){
        let $links = d.querySelectorAll(`.nav-link`);
        $links.forEach(el => el.classList.remove(`active`));
        e.target.classList.add(`active`);
        if(d.getElementById(`btn-menu`).matches(`.navbar-toggler`)
        && window.innerWidth < 1000){
            d.getElementById(`btn-menu`).click();
        }
    }
});

function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries) =>{
        entries.forEach(entry =>{
            const id = entry.target.getAttribute("id");
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        });
    }
    const observer = new IntersectionObserver(cb,{ // Criterios
        //rootMargin: "-500px"
        // Entre el 50% y el 75% se visualiza
        threshold: [0.5,0.75] // Se ejecuta despues de que el 50% del contenido sea visible
    });

    $sections.forEach(el => observer.observe(el));
}

scrollSpy();