document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 900
                }
            },
            "color": {
                "value": ["#ff6699", "#9368e9", "#36d7b7"]
            },
            "shape": {
                "type": ["circle", "triangle", "polygon"],
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 6
                }
            },
            "opacity": {
                "value": 0.6,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.8,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ff6699",
                "opacity": 0.3,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": true,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.6
                    }
                },
                "push": {
                    "particles_nb": 3
                }
            }
        },
        "retina_detect": true
    });

    setTimeout(function() {
        document.querySelectorAll('.skill-level').forEach(function(skill) {
            skill.style.width = skill.getAttribute('data-level');
        });
    }, 500);

    document.querySelector('.card-inner').addEventListener('click', function() {
        this.classList.toggle('flipped');
    });

    document.querySelector('.card').style.opacity = '0';
    setTimeout(function() {
        document.querySelector('.card').style.opacity = '1';
        document.querySelector('.card').style.transition = 'opacity 1s ease-in-out';
    }, 200);

    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        });
        
        tag.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    document.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        
        document.querySelectorAll('.decorative-element').forEach(function(element) {
            const speed = element.getAttribute('data-speed') || 1;
            element.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
        });
    });
    
    function adjustResponsiveness() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        if (windowWidth <= 480 || windowHeight <= 600) {
            const card = document.querySelector('.card');
            if (card) {
                card.style.height = 'auto';
                card.style.minHeight = '550px';
                card.style.maxHeight = `${windowHeight * 0.9}px`;
            }
            
            const cardFront = document.querySelector('.card-front');
            const cardBack = document.querySelector('.card-back');
            if (cardFront && cardBack) {
                cardFront.style.overflowY = 'auto';
                cardBack.style.overflowY = 'auto';
            }
            
            const description = document.querySelector('.description');
            if (description) {
                description.style.maxHeight = '60px';
                description.style.overflowY = 'auto';
            }
            
            const skillsContainers = document.querySelectorAll('.skills');
            skillsContainers.forEach(container => {
                container.style.flexWrap = 'wrap';
                container.style.justifyContent = 'center';
            });
            
            const skillBars = document.querySelector('.skill-bars');
            if (skillBars) {
                skillBars.style.maxHeight = '130px';
                skillBars.style.overflowY = 'auto';
            }
        } else {
            const card = document.querySelector('.card');
            if (card) {
                card.style.height = '580px';
                card.style.maxHeight = '';
            }
            
            const cardFront = document.querySelector('.card-front');
            const cardBack = document.querySelector('.card-back');
            if (cardFront && cardBack) {
                cardFront.style.overflowY = '';
                cardBack.style.overflowY = '';
            }
            
            const description = document.querySelector('.description');
            if (description) {
                description.style.maxHeight = '';
                description.style.overflowY = '';
            }
            
            const skillBars = document.querySelector('.skill-bars');
            if (skillBars) {
                skillBars.style.maxHeight = '';
                skillBars.style.overflowY = '';
            }
        }
    }
    
    adjustResponsiveness();
    window.addEventListener('resize', adjustResponsiveness);
});