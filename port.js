document.getElementById(`home`).addEventListener(`click`, (e) => {e.preventDefault();
    document.getElementById(`homesection`).scrollIntoView({behavior: `smooth`})
})

document.getElementById(`about`).addEventListener(`click`, (e) => {e.preventDefault();
    document.getElementById(`aboutsection`).scrollIntoView({behavior: `smooth`})
})

document.getElementById(`skill`).addEventListener(`click`, (e) => {e.preventDefault();
    document.getElementById(`skillsection`).scrollIntoView({behavior: `smooth`})
})

document.getElementById(`experiences`).addEventListener(`click`, (e) => {e.preventDefault();
    document.getElementById(`experincesection`).scrollIntoView({behavior: `smooth`})
})

document.getElementById(`hobbies`).addEventListener(`click`, (e) => {e.preventDefault();
    document.getElementById(`hobbiessection`).scrollIntoView({behavior: `smooth`})
})

document.getElementById(`contact`).addEventListener(`click`, (e) => {e.preventDefault();
    document.getElementById(`contactsection`).scrollIntoView({behavior: `smooth`})
})

const reveals = document.querySelectorAll(`.reveal`);

function revealOnScroll() {
    const height = window.innerHeight;
    const point = 100;

    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if(top < height - point){
            section.classList.add("active");
        }
    })
}

window.addEventListener("scroll", revealOnScroll);