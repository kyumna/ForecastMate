import React from 'react'
import '../../src/ss.css'
function Pp() {
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var midground = document.querySelector('.parallax-midground');
        var foreground = document.querySelector('.parallax-foreground');
        midground.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
        foreground.style.transform = 'translateY(' + scrollPosition * 0.8 + 'px)';
    });
    return (
        <>
            <div className="parallax-background"></div>
            <div className="parallax-midground"></div>
            <div className="parallax-foreground"></div>
        </>
    )
}

export default Pp