// ---------------------------------------------------------------------------
// PROJECT DATA
// Cards in the Projects section are rendered from this array, so adding a
// project means adding one object here — no HTML to copy.
// `repo: null` means the source is private; the card shows a lock chip instead
// of a dead link.
// ---------------------------------------------------------------------------
const PROJECTS = [
    {
        slug: 'tokoray-web',
        title: 'TokoRay — Multi-Vendor Marketplace (Backend & Console)',
        group: 'web',
        featured: true, // shown in the dedicated section, not in the grid
        cover: { src: 'assets/images/webp/tokorayweb2.webp', w: 1600, h: 769 },
        summary: 'Marketplace platform with real payment, shipping, commission and payout flows.',
        tech: ['Node.js', 'Express 5', 'PostgreSQL', 'Prisma', 'Redis', 'Next.js', 'Midtrans', 'RajaOngkir'],
        images: [
            { src: 'assets/images/webp/tokorayweb1.webp', w: 1600, h: 760 },
            { src: 'assets/images/webp/tokorayweb2.webp', w: 1600, h: 769 },
            { src: 'assets/images/webp/tokorayweb3.webp', w: 1600, h: 767 }
        ],
        description: 'A marketplace where many sellers trade under one platform: 36 domain modules, 60 data models, 288 commits. Every store is isolated from every other store at the middleware layer, and the money path — payment, commission, refund, payout — is written so it cannot drift.',
        features: [
            'Midtrans Snap checkout with timing-safe SHA-512 webhook verification and idempotency keys, so a repeated callback never creates a second order',
            'Multi-wallet ledger held under pessimistic row locks (SELECT … FOR UPDATE) across commission, settlement, refund and seller payout',
            'RajaOngkir shipping: ranked region search, multi-courier rates quoted from the nearest warehouse, signature-verified tracking webhooks',
            'Multi-warehouse stock, store-staff RBAC, vouchers, flash sales, loyalty points and photo reviews',
            'Buyer↔seller live chat over Server-Sent Events, plus FCM push and transactional email',
            'PostgreSQL full-text search with pg_trgm and faceted filters, Redis cache and distributed rate limiting, BullMQ queues',
            '475 automated tests in 81 suites (Jest + Supertest), structured request-traced logging, immutable audit trail',
            '44-page admin and seller console (Next.js 16 + React 19) for catalog, orders, finance, payouts and analytics'
        ],
        repo: null
    },
    {
        slug: 'tokoray-mobile',
        title: 'TokoRay — Customer Mobile App',
        group: 'mobile',
        featured: true,
        cover: { src: 'assets/images/webp/tokoraymobile1.webp', w: 616, h: 903 },
        summary: 'Flutter shopping app on a four-layer Clean Architecture.',
        tech: ['Flutter', 'Riverpod', 'Clean Architecture', 'go_router', 'Dio', 'Freezed', 'Firebase FCM'],
        images: [
            { src: 'assets/images/webp/tokoraymobile1.webp', w: 616, h: 903 },
            { src: 'assets/images/webp/tokoraymobile2.webp', w: 617, h: 905 },
            { src: 'assets/images/webp/tokoraymobile3.webp', w: 617, h: 905 }
        ],
        description: 'The shopping app in front of the marketplace, built on a four-layer Clean Architecture with Riverpod DI and immutable Freezed models so every screen can be tested without an emulator. Covered by 748 tests in 94 suites.',
        features: [
            'Full checkout: live address search, courier and shipping cost selection, vouchers, then a Midtrans Snap handoff',
            'Order state is reconciled on return from the payment gateway, so a force-closed app never loses a paid order',
            'Buyer↔seller chat streamed over Server-Sent Events through a hand-written SSE client',
            'FCM device token registered on login and released on logout, so notifications never leak on a shared phone',
            'Wishlist, reviews, loyalty points, TokoPay wallet, RMA returns and filtered catalog search',
            'Tokens kept in Keystore/Keychain with silent refresh interceptors and typed offline/timeout handling'
        ],
        repo: null
    },
    {
        slug: 'scfs-web',
        title: 'SCFS Web Finance Platform',
        group: 'web',
        cover: { src: 'assets/images/webp/scfs1.webp', w: 1600, h: 787 },
        summary: 'Multi-tier wallet architecture routing scholarship funds down to campus merchants.',
        tech: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL', 'Sanctum'],
        images: [
            { src: 'assets/images/webp/scfs1.webp', w: 1600, h: 787 },
            { src: 'assets/images/webp/scfs2.webp', w: 1600, h: 787 }
        ],
        description: 'A supply-chain financing platform routing funds from donors and investors through the LKBB treasury down to merchants, suppliers and scholarship students. Built on a CI-enforced four-layer Clean Architecture: 317 files, 1,168 tests.',
        features: [
            'Real-time split-payment routing that separates cost of goods from platform fee on every merchant transaction',
            'Transaction-safe multi-wallet ledger with pessimistic locking and immutable money handling',
            'Unified macro-ledger auditing across multi-tier digital vaults',
            'Consignment stock and inventory financing controller',
            'Role-based dashboards for six roles, multi-level approval, and an immutable audit trail',
            'Sanctum-secured REST API consumed by the Flutter app'
        ],
        repo: null
    },
    {
        slug: 'scfs-mobile',
        title: 'SCFS Scholarship Mobile App',
        group: 'mobile',
        cover: { src: 'assets/images/webp/scfsmobile1.webp', w: 511, h: 945 },
        summary: 'Student e-wallet with time-limited QR payment at campus canteens.',
        tech: ['Flutter', 'REST API', 'Laravel Sanctum', 'Secure Storage'],
        images: [
            { src: 'assets/images/webp/scfsmobile1.webp', w: 511, h: 945 },
            { src: 'assets/images/webp/scfsmobile2.webp', w: 511, h: 943 }
        ],
        description: 'A cross-platform wallet that lets scholarship recipients spend their stipend cashless around campus, talking to merchant POS terminals through an encoded QR payload.',
        features: [
            'Fraud-resistant payment module: time-sensitive, auto-expiring QR codes with dynamic blur states',
            'End-to-end JSON QR handshake with the merchant point-of-sale',
            'Encrypted local token storage backed by Laravel Sanctum',
            'Real-time balance, allowance history and voucher allocation with infinite scroll',
            'Typed exception handling built for peak canteen traffic'
        ],
        repo: null
    },
    {
        slug: 'sso-iam',
        title: 'Enterprise IAM & Single Sign-On',
        group: 'web',
        cover: { src: 'assets/images/webp/sso2.webp', w: 1600, h: 786 },
        summary: 'Centralised authentication gateway on Keycloak with email OTP as a second factor.',
        tech: ['Keycloak', 'OAuth2 / OIDC', 'Java', 'Laravel', 'SMTP'],
        images: [
            { src: 'assets/images/webp/sso1.webp', w: 1600, h: 774 },
            { src: 'assets/images/webp/sso2.webp', w: 1600, h: 786 }
        ],
        description: 'One login for an institution\'s whole application estate, built on Keycloak and extended with a custom Java plugin for email-based multi-factor authentication.',
        features: [
            'Centralised SSO across separate applications',
            'Multi-factor authentication through email OTP',
            'Custom Java Keycloak plugin',
            'OAuth2 and OpenID Connect flows',
            'Stateless integration with Laravel services'
        ],
        repo: 'https://github.com/rayhan-afk/sso-lapi'
    },
    {
        slug: 'sipetam',
        title: 'SIPETAM — Cemetery Plot Booking System',
        group: 'web',
        cover: { src: 'assets/images/webp/sipetam1.webp', w: 1600, h: 762 },
        summary: 'Full-stack SPA for plot reservation with accrual-basis financial reporting.',
        tech: ['Laravel', 'React.js', 'Inertia.js', 'MySQL', 'DomPDF'],
        images: [
            { src: 'assets/images/webp/sipetam2.webp', w: 1600, h: 762 },
            { src: 'assets/images/webp/sipetam1.webp', w: 1600, h: 762 }
        ],
        description: 'A Laravel + React single-page application for booking cemetery plots, combining an interactive availability map with the accounting side of the operation.',
        features: [
            'Interactive booking engine with real-time plot availability and spatial mapping',
            'Accrual-basis accounting: revenue, validated cash and non-cash income, live outstanding receivables',
            'Automated PDF receipts (DomPDF) and Excel financial reports',
            'Order status tracking and payment verification workflow',
            'Role-based access control for admin and customer'
        ],
        repo: null
    },
    {
        slug: 'hotel-management',
        title: 'Hotel Management System — Hotel Sawunggaling',
        group: 'web',
        cover: { src: 'assets/images/webp/hotel1.webp', w: 1600, h: 788 },
        summary: 'Reservation, invoicing and room-move engine for a working hotel.',
        tech: ['Laravel', 'Tailwind CSS', 'MySQL', 'AJAX'],
        images: [
            { src: 'assets/images/webp/hotel1.webp', w: 1600, h: 788 },
            { src: 'assets/images/webp/hotel2.webp', w: 1600, h: 732 }
        ],
        description: 'An operations system for a hotel: pricing that adapts to guest type and calendar, and a room-move flow that keeps inventory and billing in step.',
        features: [
            'Dynamic pricing strategy across weekday and weekend rates',
            'Automated room-move logic tied to inventory',
            'Invoicing and billing management',
            'Stock deduction integrated with the inventory module',
            'Meeting room reservation module'
        ],
        repo: null
    },
    {
        slug: 'sirekap',
        title: 'SIREKAP — Data Recap System, BBSPGL',
        group: 'web',
        cover: { src: 'assets/images/webp/sirekap1.webp', w: 558, h: 273 },
        summary: 'Institutional data recap and news platform with ArcGIS mapping.',
        tech: ['Laravel 10', 'Bootstrap', 'MySQL', 'ArcGIS'],
        images: [
            { src: 'assets/images/webp/sirekap2.webp', w: 558, h: 268 },
            { src: 'assets/images/webp/sirekap3.webp', w: 558, h: 537 },
            { src: 'assets/images/webp/sirekap4.webp', w: 558, h: 455 }
        ],
        description: 'A management system for BBSPGL that pairs internal reporting and news with geospatial visualisation through ArcGIS.',
        features: [
            'Dynamic corporate landing page',
            'Centralised news and content management',
            'Data visualisation with ArcGIS',
            'Automated reporting',
            'Role-based access control'
        ],
        repo: 'https://github.com/rayhan-afk/bbspgl-project'
    },
    {
        slug: 'museum-app',
        title: 'Museum App — Museum Geologi Bandung',
        group: 'mobile',
        cover: { src: 'assets/images/webp/koleksi screen.webp', w: 720, h: 1600 },
        summary: 'QR-guided museum companion with quizzes and a global leaderboard.',
        tech: ['Flutter', 'Firebase', 'Provider', 'REST API'],
        images: [
            { src: 'assets/images/webp/setelah login.webp', w: 720, h: 1600 },
            { src: 'assets/images/webp/halaman detail dengan komentar.webp', w: 720, h: 1600 },
            { src: 'assets/images/webp/kuis leaderboard.webp', w: 720, h: 1600 },
            { src: 'assets/images/webp/scan screen.webp', w: 720, h: 1600 }
        ],
        description: 'A mobile guide for visitors of Museum Geologi Bandung: scan a collection item to read about it, then earn points for what you learned.',
        features: [
            'QR scanning for collection information',
            'Points system with a global leaderboard',
            'Interactive geology quizzes',
            'Comments and discussion per collection item',
            'Firebase authentication and realtime database'
        ],
        repo: null
    },
    {
        slug: 'study-management',
        title: 'Study Management System',
        group: 'mobile',
        cover: { src: 'assets/images/webp/study4.webp', w: 253, h: 562 },
        summary: 'Native Android app managing students, lecturers and courses.',
        tech: ['Kotlin', 'REST API', 'Android Studio'],
        images: [
            { src: 'assets/images/webp/study1.webp', w: 253, h: 562 },
            { src: 'assets/images/webp/study2.webp', w: 253, h: 562 },
            { src: 'assets/images/webp/study3.webp', w: 253, h: 562 }
        ],
        description: 'A native Android application that keeps student, lecturer and course records in one place, backed by a REST API.',
        features: [
            'CRUD for student and lecturer records',
            'Course schedule management',
            'Navigation drawer and bottom sheet UI',
            'REST API integration'
        ],
        repo: 'https://github.com/rayhan-afk/PraktikumPemogramanMobile'
    },
    {
        slug: 'rakamin-mandiri',
        title: 'Mobile Apps — Mandiri x Rakamin',
        group: 'mobile',
        cover: { src: 'assets/images/webp/rakamin.webp', w: 210, h: 427 },
        summary: 'Banking app built during the Mandiri x Rakamin programme.',
        tech: ['Kotlin', 'Retrofit', 'REST API'],
        images: [
            { src: 'assets/images/webp/rakamin.webp', w: 210, h: 427 }
        ],
        description: 'A mobile banking application built as part of the Bank Mandiri x Rakamin Academy programme, consuming secured banking endpoints.',
        features: [
            'Secure API integration with Retrofit',
            'Clean Architecture implementation',
            'Material Design interface'
        ],
        repo: null
    },
    {
        slug: 'budaya-jabar',
        title: 'West Javanese Culture — Interactive Learning',
        group: 'mobile',
        cover: { src: 'assets/images/webp/barat1.webp', w: 250, h: 518 },
        summary: 'Interactive learning media for local songs, instruments and dances.',
        tech: ['Adobe Animate', 'ActionScript', 'Photoshop'],
        images: [
            { src: 'assets/images/webp/barat2.webp', w: 250, h: 518 },
            { src: 'assets/images/webp/barat3.webp', w: 249, h: 518 },
            { src: 'assets/images/webp/barat4.webp', w: 250, h: 518 }
        ],
        description: 'Interactive learning media introducing West Javanese culture — songs, traditional instruments and dances — with hand-made assets.',
        features: [
            'Interactive multimedia content',
            'Video and audio playback',
            'Custom asset design and animation',
            'Culture knowledge quiz'
        ],
        repo: null
    }
];

const bySlug = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));

// ---------------------------------------------------------------------------
// RENDER PROJECT CARDS
// ---------------------------------------------------------------------------
function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

const TECH_STYLES = {
    Laravel: 'bg-red-500/10 text-red-300 border-red-500/20',
    Flutter: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    Kotlin: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    'Node.js': 'bg-green-500/10 text-green-300 border-green-500/20',
    Firebase: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    Keycloak: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
};

function techChip(name, small) {
    const style = TECH_STYLES[name] || 'bg-white/5 text-slate-300 border-white/10';
    const size = small ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';
    return `<span class="${size} rounded-full border ${style}">${escapeHtml(name)}</span>`;
}

function repoLink(project, classes) {
    if (project.repo) {
        return `<a href="${project.repo}" target="_blank" rel="noopener"
                   class="${classes}" aria-label="Open the ${escapeHtml(project.title)} repository on GitHub">
                    <i class="fab fa-github" aria-hidden="true"></i>
                </a>`;
    }
    return `<span class="${classes} cursor-default" title="Private repository — source not published">
                <i class="fas fa-lock text-xs" aria-hidden="true"></i>
                <span class="sr-only">Private repository</span>
            </span>`;
}

function mobileCard(p) {
    return `
    <article class="group relative w-full max-w-[280px] aspect-[9/19] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl hover:border-accent/40 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]">
        <div class="relative w-full h-full rounded-[2rem] overflow-hidden bg-gray-900">
            <img src="${p.cover.src}" width="${p.cover.w}" height="${p.cover.h}" loading="lazy" decoding="async"
                 alt="${escapeHtml(p.title)} screenshot"
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-20"></div>
            <div class="absolute bottom-0 inset-x-0 pt-16 pb-6 px-5 bg-gradient-to-t from-black via-black/90 to-transparent z-10">
                <div class="flex flex-wrap gap-1 mb-2">${p.tech.slice(0, 2).map((t) => techChip(t, true)).join('')}</div>
                <h3 class="text-base font-bold text-white mb-1 leading-tight">${escapeHtml(p.title.split('—')[0].trim())}</h3>
                <p class="text-slate-300 text-[11px] line-clamp-2 mb-4">${escapeHtml(p.summary)}</p>
                <div class="flex gap-2">
                    <button data-project="${p.slug}" class="js-open-project flex-1 py-2.5 bg-accent hover:bg-accentHover text-white text-[11px] font-bold rounded-lg transition-colors shadow-lg">VIEW DETAILS</button>
                    ${repoLink(p, 'w-10 flex items-center justify-center bg-gray-800 rounded-lg text-white hover:bg-gray-700 border border-gray-700')}
                </div>
            </div>
        </div>
    </article>`;
}

function webCard(p) {
    return `
    <article class="group relative bg-card rounded-2xl overflow-hidden border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-2 flex flex-col">
        <button data-project="${p.slug}" class="js-open-project relative h-56 overflow-hidden block w-full text-left">
            <img src="${p.cover.src}" width="${p.cover.w}" height="${p.cover.h}" loading="lazy" decoding="async"
                 alt="${escapeHtml(p.title)} screenshot"
                 class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110">
            <span class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="px-6 py-2 bg-accent rounded-full text-white text-sm font-semibold">View Details</span>
            </span>
        </button>
        <div class="p-6 flex flex-col flex-1">
            <div class="flex flex-wrap gap-2 mb-3">${p.tech.slice(0, 4).map((t) => techChip(t)).join('')}</div>
            <h3 class="text-xl font-bold text-white mb-2">${escapeHtml(p.title.split('—')[0].trim())}</h3>
            <p class="text-slate-400 text-sm mb-4 line-clamp-2">${escapeHtml(p.summary)}</p>
            <div class="flex justify-between items-center mt-auto">
                <button data-project="${p.slug}" class="js-open-project text-accent text-sm hover:underline">Project detail</button>
                ${repoLink(p, 'text-slate-400 hover:text-white transition-colors text-lg')}
            </div>
        </div>
    </article>`;
}

function renderProjects() {
    const mobileGrid = document.getElementById('mobile-projects');
    const webGrid = document.getElementById('web-projects');
    if (!mobileGrid || !webGrid) return;
    const listed = PROJECTS.filter((p) => !p.featured);
    mobileGrid.innerHTML = listed.filter((p) => p.group === 'mobile').map(mobileCard).join('');
    webGrid.innerHTML = listed.filter((p) => p.group === 'web').map(webCard).join('');
}

// ---------------------------------------------------------------------------
// NAVBAR, MOBILE MENU, SCROLL REVEAL
// ---------------------------------------------------------------------------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark/90', 'shadow-lg', 'py-2');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.remove('bg-dark/90', 'shadow-lg', 'py-2');
        navbar.classList.add('py-4');
    }
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden') === false;
    mobileMenu.classList.toggle('flex', open);
    menuBtn.setAttribute('aria-expanded', String(open));
});
mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        menuBtn.setAttribute('aria-expanded', 'false');
    }
});

function revealOnScroll() {
    const trigger = window.innerHeight - 150;
    document.querySelectorAll('.reveal:not(.active)').forEach((el) => {
        if (el.getBoundingClientRect().top < trigger) el.classList.add('active');
    });
}
window.addEventListener('scroll', revealOnScroll);

// ---------------------------------------------------------------------------
// PROJECT MODAL — focus-trapped dialog
// ---------------------------------------------------------------------------
const modal = document.getElementById('project-modal');
const modalImg = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTech = document.getElementById('modal-tech');
const modalFeatures = document.getElementById('modal-features');
const modalRepo = document.getElementById('modal-repo');
const slideCounter = document.getElementById('slide-counter');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

let activeProject = null;
let slideIndex = 0;
let lastFocused = null;

function updateSlide() {
    const image = activeProject.images[slideIndex];
    modalImg.src = image.src;
    modalImg.width = image.w;
    modalImg.height = image.h;
    modalImg.alt = `${activeProject.title} — screenshot ${slideIndex + 1} of ${activeProject.images.length}`;
    slideCounter.textContent = `${slideIndex + 1} / ${activeProject.images.length}`;
    const many = activeProject.images.length > 1;
    [btnPrev, btnNext, slideCounter].forEach((el) => el.classList.toggle('hidden', !many));
}

function openProject(slug) {
    const project = bySlug[slug];
    if (!project) return;
    activeProject = project;
    slideIndex = 0;
    lastFocused = document.activeElement;

    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalTech.innerHTML = project.tech.map((t) => techChip(t)).join('');
    modalFeatures.innerHTML = project.features.map((f) => `<li>${escapeHtml(f)}</li>`).join('');

    if (project.repo) {
        modalRepo.href = project.repo;
        modalRepo.classList.remove('hidden');
    } else {
        modalRepo.classList.add('hidden');
    }

    updateSlide();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    modal.querySelector('[data-close]').focus();
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
}

function changeSlide(direction) {
    const total = activeProject.images.length;
    slideIndex = (slideIndex + direction + total) % total;
    updateSlide();
}

document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.js-open-project');
    if (trigger) openProject(trigger.dataset.project);
    if (e.target.closest('[data-close]')) closeModal();
    if (e.target.closest('[data-prev]')) changeSlide(-1);
    if (e.target.closest('[data-next]')) changeSlide(1);
});

modal.addEventListener('mousedown', (e) => {
    if (e.target.dataset.backdrop !== undefined) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return changeSlide(1);
    if (e.key === 'ArrowLeft') return changeSlide(-1);
    if (e.key !== 'Tab') return;

    // Focus trap: keep Tab inside the dialog while it is open.
    const focusables = [...modal.querySelectorAll('button:not(.hidden), a[href]:not(.hidden), [tabindex]:not([tabindex="-1"])')]
        .filter((el) => el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
});

renderProjects();
revealOnScroll();
