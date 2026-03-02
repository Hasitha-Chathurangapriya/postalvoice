document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    try {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    } catch (e) { console.error("Lucide error:", e); }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const navLogo = document.getElementById('nav-logo');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
            navbar.classList.remove('py-5');
            if (navLogo) {
                navLogo.classList.add('text-slate-900');
                navLogo.classList.remove('text-white');
            }
            navLinks.forEach(link => {
                if (link.classList.contains('text-white/90')) {
                    link.classList.replace('text-white/90', 'text-slate-600');
                }
            });
            if (mobileMenuBtn && mobileMenuBtn.classList.contains('text-white')) {
                mobileMenuBtn.classList.replace('text-white', 'text-slate-900');
            }
        } else {
            navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
            navbar.classList.add('py-5');
            if (navLogo) {
                navLogo.classList.remove('text-slate-900');
                navLogo.classList.add('text-white');
            }
            navLinks.forEach(link => {
                if (link.classList.contains('text-slate-600')) {
                    link.classList.replace('text-slate-600', 'text-white/90');
                }
            });
            if (mobileMenuBtn && mobileMenuBtn.classList.contains('text-slate-900')) {
                mobileMenuBtn.classList.replace('text-slate-900', 'text-white');
            }
        }
    });

    // Mobile Menu Toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Slideshow Logic
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide-item');
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // Reveal on Scroll Observer
    try {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => {
            el.classList.add('to-reveal');
            revealObserver.observe(el);
        });
    } catch (e) {
        // Fallback: just show everything if IntersectionObserver fails
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }

    // Contact Form WhatsApp
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameEl = document.getElementById('name');
            const membershipNoEl = document.getElementById('membershipNo');
            const postOfficeEl = document.getElementById('postOffice');
            const telEl = document.getElementById('tel');
            const messageEl = document.getElementById('message');

            if (!nameEl || !membershipNoEl || !postOfficeEl || !messageEl) return;

            const name = nameEl.value;
            const membershipNo = membershipNoEl.value;
            const postOffice = postOfficeEl.value;
            const tel = telEl ? telEl.value : '';
            const message = messageEl.value;

            const whatsappMessage = `ඔබගේ නම: ${name}%0Aසාමාජික අංකය: ${membershipNo}%0Aතැපැල් කාර්යාලය: ${postOffice}%0Aදුරකථන අංකය: ${tel}%0Aපණිවිඩය: ${message}`;
            window.open(`https://wa.me/94770533546?text=${whatsappMessage}`, '_blank');
        });
    }

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.remove('opacity-0', 'invisible');
                backToTop.classList.add('opacity-100', 'visible');
            } else {
                backToTop.classList.add('opacity-0', 'invisible');
                backToTop.classList.remove('opacity-100', 'visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Helper functions for Gratuity Calculation (User provided logic)
function calculateRetirementGratuity(previousTotal) {
    const baseAmount = 468;
    const percentage = 8.19;
    const currentTotal = previousTotal + baseAmount + ((previousTotal + baseAmount) * (percentage / 100)) / 2;
    return currentTotal;
}

function calculateGratuity() {
    const startYear = 2014;
    let endYear = document.getElementById("year2").value;
    endYear = parseInt(endYear);
    if (isNaN(endYear) || endYear <= startYear) {
        return 0; // Handled in main function
    } else {
        let totalForYear = calculateRetirementGratuity(487); 
        for (let year = startYear; year <= endYear - 2; year++) {
            totalForYear = calculateRetirementGratuity(totalForYear);
        }
        return totalForYear;
    }
}

function calculateGratuity1() {
    const startYear = parseInt(document.getElementById("year").value, 10);
    let endYear = document.getElementById("year2").value;
    endYear = parseInt(endYear);
    if (isNaN(endYear) || endYear <= startYear) {
        return 0;
    } else {
        let totalForYear = calculateRetirementGratuity(487); 
        for (let year = startYear; year <= endYear - 2; year++) {
            totalForYear = calculateRetirementGratuity(totalForYear);
        }
        return totalForYear;
    }
}

// Gratuity Calculator
function calculateResult() {
    const yearInput = document.getElementById('year');
    const year2Input = document.getElementById('year2');
    const cal1 = document.getElementById('cal1');
    const cal2 = document.getElementById('cal2');
    const resultDiv = document.getElementById('result');

    if (!yearInput || !year2Input || !cal1 || !cal2 || !resultDiv) return;

    const z = parseInt(yearInput.value, 10);
    const retireYear = parseInt(year2Input.value, 10);
    const x = cal1.value;
    const last2 = cal2.value;

    if (isNaN(z) || isNaN(retireYear)) {
        alert("කරුණාකර වර්ෂයන් ඇතුළත් කරන්න. / தயவுசெய்து ஆண்டுகளை உள்ளிடவும்.");
        return;
    }

    if (retireYear <= z) {
        alert("විශ්‍රාම යන වසර සේවයට බැඳුණු වසරට වඩා පසුව විය යුතුය. / ஓய்வு பெறும் ஆண்டு சேர்ந்த ஆண்டிற்கு பிந்தையதாக இருக்க வேண்டும்.");
        return;
    }

    // Show loading state
    resultDiv.innerHTML = `
        <div class="flex flex-col items-center justify-center py-4 space-y-3">
            <div class="w-10 h-10 border-4 border-red-600/20 border-t-red-600 rounded-full animate-spin"></div>
            <p class="text-slate-500 text-sm animate-pulse">ගණනය කරමින් පවතී... / கணக்கிடுகிறது...</p>
        </div>
    `;
    resultDiv.className = "mt-8 p-6 rounded-2xl text-center transition-all duration-500 bg-slate-50 border border-slate-100 opacity-100";

    setTimeout(() => {
        let y, n, l, k, j, s, g;
        let isError = false;

        if (z < 1995) {
            switch (x) {
                case "January": y = 108; break;
                case "February": y = 99; break;
                case "March": y = 90; break;
                case "April": y = 81; break;
                case "May": y = 72; break;
                case "June": y = 63; break;
                case "July": y = 54; break;
                case "August": y = 45; break;
                case "September": y = 36; break;
                case "October": y = 27; break;
                case "November": y = 18; break;
                default: y = 9;
            }

            k = calculateGratuity();

            switch (last2) {
                case "January": l = 39; break;
                case "February": l = 78; break;
                case "March": l = 117; break;
                case "April": l = 156; break;
                case "May": l = 195; break;
                case "June": l = 234; break;
                case "July": l = 273; break;
                case "August": l = 312; break;
                case "September": l = 351; break;
                case "October": l = 390; break;
                case "November": l = 429; break;
                default: l = 468;
            }
            j = k + l;
            n = y + (1995 - z - 1) * 100 + 4945 + j;
        } else if (z < 2013) {
            switch (x) {
                case "January": y = 108; break;
                case "February": y = 99; break;
                case "March": y = 90; break;
                case "April": y = 81; break;
                case "May": y = 72; break;
                case "June": y = 63; break;
                case "July": y = 54; break;
                case "August": y = 45; break;
                case "September": y = 36; break;
                case "October": y = 27; break;
                case "November": y = 18; break;
                default: y = 9;
            }

            g = 2012 - z;
            switch (g) {
                case 1: s = 112; break;
                case 2: s = 232; break;
                case 3: s = 362; break;
                case 4: s = 502; break;
                case 5: s = 654; break;
                case 6: s = 820; break;
                case 7: s = 1001; break;
                case 8: s = 1201; break;
                case 9: s = 1420; break;
                case 10: s = 1663; break;
                case 11: s = 1933; break;
                case 12: s = 2232; break;
                case 13: s = 2566; break;
                case 14: s = 2939; break;
                case 15: s = 3357; break;
                case 16: s = 3826; break;
                case 17: s = 4352; break;
                default: s = 4945;
            }

            k = calculateGratuity();

            switch (last2) {
                case "January": l = 39; break;
                case "February": l = 78; break;
                case "March": l = 117; break;
                case "April": l = 156; break;
                case "May": l = 195; break;
                case "June": l = 234; break;
                case "July": l = 273; break;
                case "August": l = 312; break;
                case "September": l = 351; break;
                case "October": l = 390; break;
                case "November": l = 429; break;
                default: l = 468;
            }
            j = k + l;
            n = y + s + j;
        } else if (z >= 2013) {
            switch (x) {
                case "January": y = 468; break;
                case "February": y = 429; break;
                case "March": y = 390; break;
                case "April": y = 351; break;
                case "May": y = 312; break;
                case "June": y = 273; break;
                case "July": y = 234; break;
                case "August": y = 195; break;
                case "September": y = 156; break;
                case "October": y = 117; break;
                case "November": y = 78; break;
                default: y = 39;
            }

            k = calculateGratuity1();

            switch (last2) {
                case "January": l = 39; break;
                case "February": l = 78; break;
                case "March": l = 117; break;
                case "April": l = 156; break;
                case "May": l = 195; break;
                case "June": l = 234; break;
                case "July": l = 273; break;
                case "August": l = 312; break;
                case "September": l = 351; break;
                case "October": l = 390; break;
                case "November": l = 429; break;
                default: l = 468;
            }
            j = y + k + l;
            n = j;
        } else {
            isError = true;
        }

        resultDiv.className = "mt-8 p-8 rounded-3xl text-center transition-all duration-700 transform scale-100 opacity-100 border shadow-2xl shadow-red-600/5";

        if (isError) {
            resultDiv.classList.add('bg-amber-50', 'text-amber-900', 'border-amber-200');
            resultDiv.innerHTML = `
                <div class="flex flex-col items-center gap-3">
                    <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                        <i data-lucide="alert-triangle"></i>
                    </div>
                    <h4 class="text-xl font-bold">වැරදි දත්ත ඇතුළත් කර ඇත</h4>
                    <p class="text-sm opacity-80">කරුණාකර දත්ත නැවත පරීක්ෂා කරන්න. / தரவை மீண்டும் சரிபார்க்கவும்.</p>
                </div>
            `;
        } else {
            const amount = parseFloat(n).toFixed(2);
            const years = retireYear - z;
            
            resultDiv.classList.add('bg-red-50', 'text-red-900', 'border-red-100');
            resultDiv.innerHTML = `
                <div class="space-y-6">
                    <div class="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full shadow-lg shadow-red-600/30 mb-2">
                        <i data-lucide="check-circle" class="w-8 h-8"></i>
                    </div>
                    <div>
                        <p class="text-xs uppercase tracking-[0.2em] font-bold text-red-600/60 mb-2">ඇස්තමේන්තුගත පාරිතෝෂිකය</p>
                        <h3 class="text-4xl md:text-5xl font-black tracking-tight">රු. ${parseFloat(amount).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
                    </div>
                    <div class="grid grid-cols-2 gap-4 pt-6 border-t border-red-200/50">
                        <div class="text-left p-4 bg-white/50 rounded-2xl">
                            <p class="text-[10px] uppercase font-bold text-red-600/40 mb-1">මුළු සේවා කාලය</p>
                            <p class="text-xl font-bold">වසර ${years}</p>
                        </div>
                        <div class="text-left p-4 bg-white/50 rounded-2xl">
                            <p class="text-[10px] uppercase font-bold text-red-600/40 mb-1">ගණනය කළ පදනම</p>
                            <p class="text-xl font-bold">සංගම් අනුපාත</p>
                        </div>
                    </div>
                    <div class="bg-white/40 p-4 rounded-2xl text-left text-xs space-y-2 border border-white/50">
                        <p class="font-bold text-red-800 flex items-center gap-2">
                            <i data-lucide="info" class="w-3 h-3"></i> වැදගත් උපදෙස්:
                        </p>
                        <ul class="list-disc list-inside space-y-1 text-red-900/70">
                            <li>මෙම ගණනය කිරීම සංගමයේ සම්මත අනුපාත මත පදනම් වූ ආසන්න අගයක් පමණි.</li>
                            <li>වැඩිදුර විස්තර සඳහා ඔබගේ ශාඛා ලේකම්වරයා හෝ මූලස්ථානය අමතන්න.</li>
                            <li>පාරිතෝෂිකය ගෙවීමේදී රජයේ අනුමත අඩුකිරීම් වලට යටත් විය හැක.</li>
                        </ul>
                    </div>
                </div>
            `;
        }
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, 1200);
}

function resetCalculator() {
    const year = document.getElementById('year');
    const year2 = document.getElementById('year2');
    const cal1 = document.getElementById('cal1');
    const cal2 = document.getElementById('cal2');
    const resultDiv = document.getElementById('result');

    if (year) year.value = '';
    if (year2) year2.value = '';
    if (cal1) cal1.selectedIndex = 0;
    if (cal2) cal2.selectedIndex = 0;
    
    if (resultDiv) {
        resultDiv.className = "mt-8 opacity-0 transition-all duration-500";
        setTimeout(() => {
            resultDiv.innerHTML = '';
        }, 500);
    }
}

