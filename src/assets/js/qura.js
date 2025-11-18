// ═══════════════════════════════════════════════════════════════════════════
// QURA APP JAVASCRIPT
// Phone screen rotation, Lite YouTube embeds, and smooth scrolling
// ═══════════════════════════════════════════════════════════════════════════

(function() {
    'use strict';

    // ─────────────────────────────────────────────────────────────────────────
    // PHONE SCREEN ROTATION
    // Cycles through app screenshots every 5 seconds
    // ─────────────────────────────────────────────────────────────────────────
    function initPhoneScreenRotation() {
        const screens = document.querySelectorAll('.qura-screen-img');
        
        if (screens.length === 0) return;
        
        let currentIndex = 0;
        
        function rotateScreens() {
            screens[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % screens.length;
            screens[currentIndex].classList.add('active');
        }
        
        // Rotate every 5 seconds
        setInterval(rotateScreens, 5000);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // LITE YOUTUBE EMBED
    // Only loads YouTube iframe when user clicks play button
    // ─────────────────────────────────────────────────────────────────────────
    function initLiteYouTube() {
        const liteEmbeds = document.querySelectorAll('.qura-youtube-lite');
        
        liteEmbeds.forEach(function(embed) {
            const playBtn = embed.querySelector('.qura-youtube-play');
            
            if (!playBtn) return;
            
            playBtn.addEventListener('click', function() {
                const videoId = embed.getAttribute('data-video-id');
                
                if (!videoId) return;
                
                const iframe = document.createElement('iframe');
                iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0');
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', '');
                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                
                // Replace thumbnail with iframe
                embed.innerHTML = '';
                embed.appendChild(iframe);
            });
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // SMOOTH SCROLL
    // Smooth scrolling for anchor links
    // ─────────────────────────────────────────────────────────────────────────
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Ignore empty hash
                if (href === '#' || href === '#menu') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    // Offset for fixed header (adjust if needed)
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // INITIALIZE ALL
    // Run when DOM is ready
    // ─────────────────────────────────────────────────────────────────────────
    function init() {
        initPhoneScreenRotation();
        initLiteYouTube();
        initSmoothScroll();
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();