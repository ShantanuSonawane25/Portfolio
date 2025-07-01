 // Theme toggle
        function toggleTheme() {
            const body = document.body;
            const icon = document.querySelector('.theme-toggle i');
            
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                icon.className = 'fas fa-moon';
            } else {
                body.setAttribute('data-theme', 'dark');
                icon.className = 'fas fa-sun';
            }
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission
        function handleSubmit(event) {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            
            // Simulate form submission
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                form.reset();
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 1500);
        }

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.8s ease';
            observer.observe(section);
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = document.body.getAttribute('data-theme') === 'dark' 
                    ? 'rgba(26,26,46,0.98)' 
                    : 'rgba(255,255,255,0.98)';
            } else {
                header.style.background = document.body.getAttribute('data-theme') === 'dark' 
                    ? 'rgba(26,26,46,0.95)' 
                    : 'rgba(255,255,255,0.95)';
            }
        });

        // Skill bar animation on scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => skillObserver.observe(bar));