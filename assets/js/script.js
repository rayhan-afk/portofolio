// ---------------------------------------------------------------------------
// PROJECT DATA
// Every project card and every detail dialog is rendered from this array, so
// adding a project means adding one object here — there is no card markup to
// copy. `repo: null` means the source is private; the card shows a lock chip
// instead of a dead link. `images: []` renders a typographic cover instead of
// a screenshot.
// ---------------------------------------------------------------------------
const PROJECTS = [
    {
        slug: 'tokoray-web',
        title: 'TokoRay',
        subtitle: 'Multi-Vendor Marketplace — Backend & Console',
        group: 'web',
        featured: true,
        period: 'Aug 2026 — Present',
        role: 'Solo build — API, console, mobile',
        summary: 'Marketplace platform with real payments, shipping, commission and seller payouts.',
        tech: ['Node.js', 'Express 5', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Next.js 16', 'Midtrans', 'RajaOngkir'],
        cover: { src: 'assets/images/webp/tokorayweb2.webp', w: 1600, h: 769 },
        images: [
            { src: 'assets/images/webp/tokorayweb1.webp', w: 1600, h: 760, caption: 'Operator console sign-in — one door for platform admins and sellers' },
            { src: 'assets/images/webp/tokorayweb2.webp', w: 1600, h: 769, caption: 'Analytics: GMV, order funnel, commission take rate, top stores' },
            { src: 'assets/images/webp/tokorayweb3.webp', w: 1600, h: 767, caption: 'Content manager: banners and flash sales' }
        ],
        description: 'A marketplace where many sellers trade under one platform: 36 domain modules, 60 data models, 288 commits. Store data is isolated at the middleware layer, and every write on the money path — payment, commission, refund, payout — is built so the ledger cannot drift.',
        highlights: [
            'Midtrans Snap checkout with timing-safe SHA-512 webhook verification and idempotency keys, so a repeated callback never becomes a second order',
            'Multi-wallet ledger held under pessimistic row locks across commission, settlement, refund and seller payout',
            'RajaOngkir shipping: ranked region search, multi-courier rates quoted from the nearest warehouse, signature-verified tracking webhooks',
            'Multi-warehouse stock, store-staff RBAC, vouchers, flash sales, loyalty points and photo reviews',
            'Buyer-to-seller live chat over Server-Sent Events, plus FCM push and transactional email',
            'PostgreSQL full-text search with pg_trgm, Redis cache and distributed rate limiting, BullMQ background queues',
            '475 automated tests in 81 suites, structured request-traced logging and an immutable audit trail',
            '44-page admin and seller console covering catalog, orders, finance, payouts and analytics'
        ],
        repo: null
    },
    {
        slug: 'tokoray-mobile',
        title: 'TokoRay',
        subtitle: 'Customer Mobile App',
        group: 'mobile',
        featured: true,
        period: 'Aug 2026 — Present',
        role: 'Solo build',
        summary: 'Flutter shopping app on a four-layer Clean Architecture, 748 tests.',
        tech: ['Flutter', 'Riverpod', 'go_router', 'Dio', 'Freezed', 'Firebase FCM', 'Clean Architecture'],
        cover: { src: 'assets/images/webp/tokoraymobile1.webp', w: 616, h: 903 },
        images: [
            { src: 'assets/images/webp/tokoraymobile1.webp', w: 616, h: 903, caption: 'Home: balance, points, flash sale and store discounts' },
            { src: 'assets/images/webp/tokoraymobile2.webp', w: 617, h: 905, caption: 'Checkout: address, courier, vouchers, then Midtrans Snap' },
            { src: 'assets/images/webp/tokoraymobile3.webp', w: 617, h: 905, caption: 'Account: wallet, loyalty points, orders, returns' }
        ],
        description: 'The shopping app in front of the marketplace, built on a four-layer Clean Architecture with Riverpod DI and immutable Freezed models so every screen is testable without an emulator. Covered by 748 tests in 94 suites.',
        highlights: [
            'Full checkout: live address search, courier and shipping cost selection, vouchers, then a Midtrans Snap handoff',
            'Order state is reconciled on return from the payment gateway, so a force-closed app never loses a paid order',
            'Buyer-to-seller chat streamed over Server-Sent Events through a hand-written SSE client',
            'FCM device token registered on login and released on logout, so notifications never leak on a shared phone',
            'Wishlist, reviews, loyalty points, wallet, RMA returns and filtered catalog search',
            'Tokens in Keystore/Keychain with silent refresh interceptors and typed offline and timeout handling'
        ],
        repo: null
    },
    {
        slug: 'scfs-web',
        title: 'SCFS Web Platform',
        subtitle: 'Supply Chain Financing System',
        group: 'web',
        period: 'Mar 2026 — Present',
        role: 'Fullstack Developer · PT LAPI ITB',
        summary: 'Multi-tier fund flow from donors through the LKBB treasury down to merchants and students.',
        tech: ['Laravel', 'MySQL', 'Livewire', 'Tailwind CSS', 'AlpineJS', 'Laravel Sanctum', 'GitHub Actions'],
        cover: { src: 'assets/images/webp/scfsgambarbaru1.webp', w: 1600, h: 771 },
        images: [
            { src: 'assets/images/webp/scfsgambarbaru1.webp', w: 1600, h: 771, caption: 'Executive dashboard: verified students, seller and supplier merchants, treasury balances and live ecosystem turnover' },
            { src: 'assets/images/webp/scfsgambarbaru3.webp', w: 1600, h: 768, caption: 'Merchant POS: canteen till with scholarship QR, cash and QRIS payment paths' },
            { src: 'assets/images/webp/scfsgambarbaru2.webp', w: 1600, h: 763, caption: 'Sign-in with captcha challenge, shared by every actor in the ecosystem' }
        ],
        description: 'An enterprise financial platform routing multi-tier fund flow from donors and investors, through the LKBB treasury, down to merchants, suppliers and scholarship students. Built on a CI-enforced four-layer Clean Architecture — 317 files, 1,168 tests — exposing a Sanctum-secured REST API for the mobile app.',
        highlights: [
            'Transaction-safe multi-wallet ledger with pessimistic locking and immutable money handling for zero-drift integrity',
            'Duplicate-payment protection on every debit path, verified by automated tests',
            'Role-based dashboards across six roles with multi-level approval chains',
            'Immutable audit trail on all critical operations',
            'CI quality pipeline: Larastan static analysis, Pint style gates, automated browser tests',
            'Redis-backed caching and queued background jobs for heavy reporting'
        ],
        repo: null
    },
    {
        slug: 'scfs-mobile',
        title: 'SCFS Mobile App',
        subtitle: 'Scholarship Wallet',
        group: 'mobile',
        period: 'Apr 2026 — Present',
        role: 'Mobile Developer · PT LAPI ITB',
        summary: 'Digital stipends and cashless canteen payment for scholarship students.',
        tech: ['Flutter', 'Dart', 'REST API', 'Flutter Secure Storage', 'Firebase'],
        cover: { src: 'assets/images/webp/scfsmobile2.webp', w: 759, h: 1600 },
        images: [
            { src: 'assets/images/webp/scfsmobile2.webp', w: 759, h: 1600, caption: 'Home: stipend balance, canteen discovery and the QR pay button in reach of the thumb' },
            { src: 'assets/images/webp/scfsmobile1.webp', w: 759, h: 1600, caption: 'Sign-in with the campus student email, over an encrypted connection' },
            { src: 'assets/images/webp/scfsmobile3.webp', w: 759, h: 1600, caption: 'Profile: verified scholarship status and academic record pulled from the platform' }
        ],
        description: 'A cross-platform Flutter app that lets university scholarship recipients manage their digital stipend and pay cashless at campus canteens, talking to merchant POS terminals through an encoded QR payload.',
        highlights: [
            'Fraud-resistant payment module: time-sensitive, auto-expiring QR codes with dynamic blur states',
            'Real-time balance tracking with infinite-scroll transaction history',
            'Token-secured REST API with encrypted local storage',
            'Async error handling tuned for peak campus traffic — no crash under load'
        ],
        repo: null
    },
    {
        slug: 'sipetam',
        title: 'SIPETAM',
        subtitle: 'Cemetery Plot Booking & Finance',
        group: 'web',
        period: 'Apr 2026 — May 2026',
        role: 'Freelance · PT Ganesa Jaya Sejahtra',
        summary: 'Booking engine with real-time availability and accrual-basis accounting.',
        tech: ['Laravel', 'React.js', 'Inertia.js', 'MySQL', 'Tailwind CSS', 'DomPDF', 'Maatwebsite/Excel'],
        cover: { src: 'assets/images/webp/sipetam1.webp', w: 1600, h: 762 },
        images: [
            { src: 'assets/images/webp/sipetam2.webp', w: 1600, h: 762, caption: 'Plot availability and spatial map' },
            { src: 'assets/images/webp/sipetam1.webp', w: 1600, h: 762, caption: 'Reservation and payment verification dashboard' }
        ],
        description: 'A full-stack single-page application built with Laravel and React over Inertia.js for cemetery plot reservation and financial management, pairing an interactive booking engine with the accounting side of the operation.',
        highlights: [
            'Interactive booking engine with real-time availability and dynamic spatial mapping',
            'Accrual-basis accounting module: revenue, validated cash and non-cash income, live outstanding receivables',
            'Automated PDF receipts with DomPDF and Excel financial exports with Maatwebsite/Excel',
            'Filterable dashboards that shortened the payment verification loop',
            'Delivered end to end, including deployment on Niagahoster'
        ],
        repo: null
    },
    {
        slug: 'hotel-management',
        title: 'Hotel Management System',
        subtitle: 'Hotel Sawunggaling',
        group: 'web',
        period: 'Oct 2025 — Jan 2026',
        role: 'Fullstack Developer',
        summary: 'Reservation engine with tiered pricing and an automated room-move module.',
        tech: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'AJAX', 'DataTables'],
        cover: { src: 'assets/images/webp/hotel1.webp', w: 1600, h: 788 },
        images: [
            { src: 'assets/images/webp/hotel1.webp', w: 1600, h: 788, caption: 'Front office dashboard and reservation board' },
            { src: 'assets/images/webp/hotel2.webp', w: 1600, h: 732, caption: 'Billing and room utilisation reporting' }
        ],
        description: 'An enterprise hotel platform on Laravel MVC with a reservation engine that prices by customer tier — OTA, corporate, walk-in — and by calendar, then keeps billing and inventory in step when a guest changes rooms.',
        highlights: [
            'Tiered customer groups with automated weekday and weekend pricing',
            'Room Move module that auto-deducts amenities stock, blocks double-booking and rebalances invoices through automated adjustments',
            'Front office billing with invoice adjustments written back automatically',
            'Room-utilisation reporting that exposed revenue leakage',
            'Flexible meeting-room booking module',
            'Delivered end to end through deployment on Niagahoster'
        ],
        repo: null
    },
    {
        slug: 'sso-iam',
        title: 'Enterprise IAM & SSO',
        subtitle: 'PT LAPI ITB',
        group: 'web',
        period: 'Mar 2026 — Apr 2026',
        role: 'Lead implementer',
        summary: 'Centralised Keycloak identity gateway with a custom Java email-OTP plugin.',
        tech: ['Keycloak', 'OAuth2 / OIDC', 'Laravel', 'Laravel Socialite', 'Java', 'MySQL', 'SMTP'],
        cover: { src: 'assets/images/webp/sso2.webp', w: 1600, h: 786 },
        images: [
            { src: 'assets/images/webp/sso1.webp', w: 1600, h: 774, caption: 'Keycloak realm and client configuration' },
            { src: 'assets/images/webp/sso2.webp', w: 1600, h: 786, caption: 'Unified sign-in portal shared by every LAPI application' }
        ],
        description: 'One login for the whole LAPI application estate. A Keycloak-driven identity gateway secured through OAuth2 and OpenID Connect, with Laravel Socialite handling stateless authentication on the application side.',
        highlights: [
            'Centralised SSO reusable by every future LAPI application',
            'MFA pipeline built by customising and deploying a Java email-OTP plugin into the Keycloak engine',
            'Custom execution sub-flows so OTP fires only where policy requires it',
            'StartTLS SMTP delivery for automated OTP mail',
            'Stateless integration with Laravel through Socialite'
        ],
        repo: 'https://github.com/rayhan-afk/sso-lapi'
    },
    {
        slug: 'museum-app',
        title: 'MuseumApp',
        subtitle: 'Museum Geologi Bandung',
        group: 'mobile',
        period: 'Feb 2025 — Jul 2025',
        role: 'Final year thesis project',
        summary: 'QR-guided museum companion with quizzes, XP and a global leaderboard.',
        tech: ['Flutter', 'Dart', 'Provider', 'Firebase', 'REST API'],
        cover: { src: 'assets/images/webp/koleksi-screen.webp', w: 720, h: 1600 },
        images: [
            { src: 'assets/images/webp/setelah-login.webp', w: 720, h: 1600, caption: 'Home after sign-in' },
            { src: 'assets/images/webp/scan-screen.webp', w: 720, h: 1600, caption: 'Scan a collection QR code on site' },
            { src: 'assets/images/webp/halaman-detail-dengan-komentar.webp', w: 720, h: 1600, caption: 'Collection detail with visitor comments' },
            { src: 'assets/images/webp/kuis-leaderboard.webp', w: 720, h: 1600, caption: 'Quiz results and global leaderboard' }
        ],
        description: 'My final year thesis: a mobile companion for visitors of Museum Geologi Bandung. Scan a collection item to read about it, discuss it, then earn XP for what you learned — built in Flutter with Provider, backed by Firebase and an external API, and shipped for Android.',
        highlights: [
            'QR scanning that opens the matching collection record on site',
            'Points, XP and a global leaderboard to keep visitors moving through the museum',
            'Interactive geology quizzes per collection',
            'Comments and discussion threads on each item',
            'Firebase authentication and realtime data, plus REST API integration'
        ],
        repo: null
    },
    {
        slug: 'museum-admin',
        title: 'MuseumApp Admin Panel',
        subtitle: 'Content engine behind the app',
        group: 'web',
        period: 'Feb 2025 — Jul 2025',
        role: 'Fullstack Developer',
        summary: 'Laravel + Livewire dashboard driving collections, QR codes, quizzes and visitor XP.',
        tech: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL', 'Simple-QRCode'],
        cover: { src: 'assets/images/webp/museumweb2.webp', w: 1600, h: 769 },
        images: [
            { src: 'assets/images/webp/museumweb2.webp', w: 1600, h: 769, caption: 'Dashboard: collections, registered visitors, media gallery and the quiz bank at a glance' },
            { src: 'assets/images/webp/museumweb3.webp', w: 1600, h: 768, caption: 'Quiz builder: each question is tied to a collection item and carries its own XP reward' },
            { src: 'assets/images/webp/museumweb1.webp', w: 1600, h: 755, caption: 'Staff sign-in for the Museum Geologi administration panel' }
        ],
        description: 'The web dashboard that powers the MuseumApp mobile experience. Built with Laravel and Livewire, it is where museum staff manage every collection, quiz and visitor statistic that the app displays.',
        highlights: [
            'Role-based access control across super admin, admin and visitor',
            'Full collection management with auto-generated QR codes for on-site scanning',
            'Educational quiz manager feeding the in-app quizzes',
            'Visitor and XP tracking with a real-time statistics dashboard',
            'Serves as the single content engine behind the mobile app'
        ],
        repo: 'https://github.com/rayhan-afk/museum-admin'
    },
    {
        slug: 'sirekap',
        title: 'SIREKAP',
        subtitle: 'BBSPGL — Marine Geology Agency',
        group: 'web',
        period: 'Sep 2022 — Nov 2022',
        role: 'Fullstack Developer Intern',
        summary: 'Institutional data recap and news platform, front end and back end.',
        tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        cover: { src: 'assets/images/webp/sirekap1.webp', w: 558, h: 273 },
        images: [
            { src: 'assets/images/webp/sirekap2.webp', w: 558, h: 268, caption: 'Public landing page' },
            { src: 'assets/images/webp/sirekap3.webp', w: 558, h: 537, caption: 'Content and news management' },
            { src: 'assets/images/webp/sirekap4.webp', w: 558, h: 455, caption: 'Data recap and reporting view' }
        ],
        description: 'Built during my internship at the Marine Geology Survey and Mapping Agency: a web application for internal data recap and public-facing news, developed and maintained across both the front end and the back end.',
        highlights: [
            'Dynamic corporate landing page with centralised news management',
            'Data recap and automated reporting for internal divisions',
            'Responsive interface integrated end to end with the backend',
            'Performance profiling and optimisation across the application',
            'Role-based access control for staff and administrators'
        ],
        repo: 'https://github.com/rayhan-afk/bbspgl-project'
    },
    {
        slug: 'study-management',
        title: 'Student & Lecturer Data System',
        subtitle: 'Android case study',
        group: 'mobile',
        period: 'Feb 2023 — Jun 2023',
        role: 'Android Developer',
        summary: 'Native Android app managing lecturers, students and courses over a REST API.',
        tech: ['Kotlin', 'Android Studio', 'REST API', 'GitHub'],
        cover: { src: 'assets/images/webp/study4.webp', w: 253, h: 562 },
        images: [
            { src: 'assets/images/webp/study1.webp', w: 253, h: 562, caption: 'Drawer navigation and entity list' },
            { src: 'assets/images/webp/study2.webp', w: 253, h: 562, caption: 'Record detail and edit flow' },
            { src: 'assets/images/webp/study3.webp', w: 253, h: 562, caption: 'Course schedule management' }
        ],
        description: 'A major coursework project: a native Android application managing three entities — lecturer, student and course — with data held both locally and on a server.',
        highlights: [
            'CRUD across all three entities against REST API endpoints',
            'Scaffold with drawer menu and bottom sheet navigation',
            'Local plus server-side storage kept in sync',
            'Full development cycle managed and versioned on GitHub'
        ],
        repo: 'https://github.com/rayhan-afk/PraktikumPemogramanMobile'
    },
    {
        slug: 'rakamin-mandiri',
        title: 'Mandiri x Rakamin App',
        subtitle: 'Banking programme project',
        group: 'mobile',
        period: '2024',
        role: 'Mobile Developer',
        summary: 'Banking app built during the Bank Mandiri x Rakamin Academy programme.',
        tech: ['Kotlin', 'Retrofit', 'REST API'],
        cover: { src: 'assets/images/webp/rakamin.webp', w: 210, h: 427 },
        images: [
            { src: 'assets/images/webp/rakamin.webp', w: 210, h: 427, caption: 'News feed consuming the banking API' }
        ],
        description: 'A mobile banking application built as part of the Bank Mandiri x Rakamin Academy programme, consuming secured banking endpoints through Retrofit.',
        highlights: [
            'Secure API integration with Retrofit',
            'Clean Architecture implementation',
            'Material Design interface'
        ],
        repo: null
    },
    {
        slug: 'budaya-jabar',
        title: 'West Javanese Culture',
        subtitle: 'Interactive learning game',
        group: 'mobile',
        period: 'Mar 2021 — Jun 2021',
        role: 'Game Developer',
        summary: 'End-to-end game build: design, assets, animation and interactivity.',
        tech: ['Adobe Animate', 'ActionScript', 'Adobe Illustrator', 'Adobe Photoshop'],
        cover: { src: 'assets/images/webp/barat1.webp', w: 250, h: 518 },
        images: [
            { src: 'assets/images/webp/barat2.webp', w: 250, h: 518, caption: 'Menu and chapter selection' },
            { src: 'assets/images/webp/barat3.webp', w: 249, h: 518, caption: 'Traditional instruments module' },
            { src: 'assets/images/webp/barat4.webp', w: 250, h: 518, caption: 'Knowledge quiz' }
        ],
        description: 'Interactive learning media introducing West Javanese culture — songs, traditional instruments and dances. I handled the whole build: design, asset integration, animation and interactivity.',
        highlights: [
            'Original assets drawn in Illustrator and Photoshop',
            'Interactive multimedia with audio and video playback',
            'Animation and interaction scripted in ActionScript',
            'Culture knowledge quiz to close each chapter'
        ],
        repo: null
    }
];

const bySlug = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

const TECH_STYLES = {
    Laravel: 'bg-red-500/10 text-red-300 border-red-500/20',
    Flutter: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    Dart: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    Kotlin: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    'Node.js': 'bg-green-500/10 text-green-300 border-green-500/20',
    Firebase: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    Keycloak: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    'React.js': 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    Midtrans: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    RajaOngkir: 'bg-orange-500/10 text-orange-300 border-orange-500/20'
};

function techChip(name, small) {
    const style = TECH_STYLES[name] || 'bg-white/5 text-slate-300 border-white/10';
    const size = small ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';
    return `<span class="${size} rounded-full border ${style}">${escapeHtml(name)}</span>`;
}

// Cover for projects with no screenshot: initials on a gradient.
function fallbackCover(p, extraClass) {
    const initials = p.title.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('');
    return `<div class="${extraClass} w-full h-full bg-gradient-to-br from-accent/25 via-card to-electric/20 flex flex-col items-center justify-center gap-2">
                <span class="text-4xl font-bold text-white/80 tracking-tight">${escapeHtml(initials)}</span>
                <span class="text-[10px] uppercase tracking-[0.2em] text-slate-400">No screenshot</span>
            </div>`;
}

function repoBadge(p) {
    if (p.repo) {
        return `<a href="${p.repo}" target="_blank" rel="noopener"
                   class="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                   aria-label="Open the ${escapeHtml(p.title)} repository on GitHub">
                    <i class="fab fa-github" aria-hidden="true"></i> Source
                </a>`;
    }
    return `<span class="inline-flex items-center gap-1.5 text-xs text-slate-500" title="Private repository — source not published">
                <i class="fas fa-lock text-[10px]" aria-hidden="true"></i> Private
            </span>`;
}

// ---------------------------------------------------------------------------
// CARDS
// ---------------------------------------------------------------------------
function mobileCard(p) {
    const cover = p.cover
        ? `<img src="${p.cover.src}" width="${p.cover.w}" height="${p.cover.h}" loading="lazy" decoding="async"
                alt="${escapeHtml(p.title)} screenshot"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105">`
        : fallbackCover(p, '');

    return `
    <article class="js-open-project group cursor-pointer flex flex-col" data-project="${p.slug}" tabindex="0" role="button"
             aria-label="Open details for ${escapeHtml(p.title)}">
        <div class="relative w-full max-w-[260px] mx-auto aspect-[9/18] rounded-[2rem] border-[7px] border-gray-800 bg-gray-900 overflow-hidden shadow-2xl
                    transition-all duration-500 group-hover:border-accent/50 group-hover:-translate-y-3 group-hover:shadow-[0_20px_50px_-12px_rgba(139,92,246,0.35)]
                    group-focus-visible:border-accent">
            ${cover}
            <span class="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-20" aria-hidden="true"></span>
            <span class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></span>
            <span class="absolute inset-x-0 bottom-0 p-4 flex items-center justify-center">
                <span class="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-semibold
                             opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 transition-all duration-300">
                    View case study
                </span>
            </span>
        </div>

        <div class="mt-5 text-center px-2 max-w-[280px] mx-auto">
            <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-1">${escapeHtml(p.period)}</p>
            <h3 class="text-lg font-bold text-white leading-tight">${escapeHtml(p.title)}</h3>
            <p class="text-slate-400 text-sm mt-2 leading-relaxed">${escapeHtml(p.summary)}</p>
            <div class="flex flex-wrap gap-1.5 justify-center mt-3">${p.tech.slice(0, 3).map((t) => techChip(t, true)).join('')}</div>
        </div>
    </article>`;
}

function webCard(p) {
    const cover = p.cover
        ? `<img src="${p.cover.src}" width="${p.cover.w}" height="${p.cover.h}" loading="lazy" decoding="async"
                alt="${escapeHtml(p.title)} screenshot"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]">`
        : fallbackCover(p, '');
    const rest = p.tech.length - 3;

    return `
    <article class="js-open-project group cursor-pointer relative flex flex-col rounded-2xl overflow-hidden bg-card/60 border border-white/5
                    transition-all duration-300 hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_rgba(139,92,246,0.5)]
                    focus-visible:border-accent" data-project="${p.slug}" tabindex="0" role="button"
             aria-label="Open details for ${escapeHtml(p.title)}">

        <div class="relative h-44 overflow-hidden bg-[#0b1120]">
            ${cover}
            <span class="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"></span>
            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm text-[10px] font-medium text-slate-200">
                ${escapeHtml(p.period)}
            </span>
        </div>

        <div class="p-6 pt-4 flex flex-col flex-1">
            <h3 class="text-xl font-bold text-white leading-tight">${escapeHtml(p.title)}</h3>
            <p class="text-accent/90 text-xs font-medium mt-1">${escapeHtml(p.subtitle || p.role || '')}</p>
            <p class="text-slate-400 text-sm mt-3 leading-relaxed">${escapeHtml(p.summary)}</p>

            <div class="flex flex-wrap gap-1.5 mt-4">
                ${p.tech.slice(0, 3).map((t) => techChip(t, true)).join('')}
                ${rest > 0 ? `<span class="px-2 py-0.5 text-[10px] rounded-full border border-white/10 text-slate-500">+${rest}</span>` : ''}
            </div>

            <div class="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                <span class="text-sm font-medium text-accent group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    View case study <i class="fas fa-arrow-right text-[11px]" aria-hidden="true"></i>
                </span>
                ${repoBadge(p)}
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
// NAVBAR, MOBILE MENU, SCROLL REVEAL, ACTIVE SECTION
// ---------------------------------------------------------------------------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('bg-dark/90', scrolled);
    navbar.classList.toggle('shadow-lg', scrolled);
    navbar.classList.toggle('py-2', scrolled);
    navbar.classList.toggle('py-4', !scrolled);
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
    const trigger = window.innerHeight - 120;
    document.querySelectorAll('.reveal:not(.active)').forEach((el) => {
        if (el.getBoundingClientRect().top < trigger) el.classList.add('active');
    });
}
window.addEventListener('scroll', revealOnScroll);

// Highlight the nav link for the section currently on screen.
const navLinks = [...document.querySelectorAll('.nav-link[href^="#"]')];
const watched = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window && watched.length) {
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((a) => {
                const active = a.getAttribute('href') === '#' + entry.target.id;
                a.classList.toggle('text-accent', active);
                a.classList.toggle('text-slate-300', !active);
            });
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    watched.forEach((s) => spy.observe(s));
}

// ---------------------------------------------------------------------------
// PROJECT DIALOG — gallery on the left, case study on the right
// ---------------------------------------------------------------------------
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalPeriod = document.getElementById('modal-period');
const modalRole = document.getElementById('modal-role');
const modalDesc = document.getElementById('modal-desc');
const modalTech = document.getElementById('modal-tech');
const modalHighlights = document.getElementById('modal-highlights');
const modalRepo = document.getElementById('modal-repo');
const modalPrivate = document.getElementById('modal-private');
const modalStage = document.getElementById('modal-stage');
const modalImg = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const modalThumbs = document.getElementById('modal-thumbs');
const modalCounter = document.getElementById('modal-counter');
const modalNoShots = document.getElementById('modal-no-shots');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

let activeProject = null;
let slideIndex = 0;
let lastFocused = null;

function renderThumbs() {
    modalThumbs.innerHTML = activeProject.images.map((img, i) => `
        <button data-thumb="${i}" aria-label="Show screenshot ${i + 1}"
                class="relative shrink-0 w-16 h-12 rounded-lg overflow-hidden border transition-all ${i === slideIndex ? 'border-accent ring-2 ring-accent/40' : 'border-white/10 opacity-60 hover:opacity-100'}">
            <img src="${img.src}" alt="" loading="lazy" class="w-full h-full object-cover object-top">
        </button>`).join('');
}

function updateSlide() {
    const total = activeProject.images.length;
    if (!total) return;
    const image = activeProject.images[slideIndex];
    modalImg.src = image.src;
    modalImg.width = image.w;
    modalImg.height = image.h;
    modalImg.alt = `${activeProject.title} — screenshot ${slideIndex + 1} of ${total}`;
    modalCaption.textContent = image.caption || '';
    modalCounter.textContent = `${slideIndex + 1} / ${total}`;
    [btnPrev, btnNext, modalCounter].forEach((el) => el.classList.toggle('hidden', total < 2));
    modalThumbs.classList.toggle('hidden', total < 2);
    renderThumbs();
}

function openProject(slug) {
    const project = bySlug[slug];
    if (!project) return;
    activeProject = project;
    slideIndex = 0;
    lastFocused = document.activeElement;

    modalTitle.textContent = project.title;
    modalSubtitle.textContent = project.subtitle || '';
    modalSubtitle.classList.toggle('hidden', !project.subtitle);
    modalPeriod.innerHTML = `<i class="fas fa-calendar text-[10px] text-slate-500" aria-hidden="true"></i>${escapeHtml(project.period)}`;
    modalRole.innerHTML = project.role
        ? `<i class="fas fa-user text-[10px] text-slate-500" aria-hidden="true"></i>${escapeHtml(project.role)}`
        : '';
    modalRole.classList.toggle('hidden', !project.role);
    modalDesc.textContent = project.description;
    modalTech.innerHTML = project.tech.map((t) => techChip(t)).join('');
    modalHighlights.innerHTML = project.highlights.map((h) => `
        <li class="flex gap-3">
            <i class="fas fa-circle-check text-accent/80 text-sm mt-1 shrink-0" aria-hidden="true"></i>
            <span>${escapeHtml(h)}</span>
        </li>`).join('');

    const hasShots = project.images.length > 0;
    modalStage.classList.toggle('hidden', !hasShots);
    modalNoShots.classList.toggle('hidden', hasShots);
    modalThumbs.classList.toggle('hidden', !hasShots);
    if (hasShots) updateSlide();

    modalRepo.classList.toggle('hidden', !project.repo);
    modalRepo.classList.toggle('inline-flex', !!project.repo);
    modalPrivate.classList.toggle('hidden', !!project.repo);
    modalPrivate.classList.toggle('inline-flex', !project.repo);
    if (project.repo) modalRepo.href = project.repo;

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
    if (total < 2) return;
    slideIndex = (slideIndex + direction + total) % total;
    updateSlide();
}

document.addEventListener('click', (e) => {
    const opener = e.target.closest('.js-open-project');
    if (opener) openProject(opener.dataset.project);
    if (e.target.closest('[data-close]')) closeModal();
    if (e.target.closest('[data-prev]')) changeSlide(-1);
    if (e.target.closest('[data-next]')) changeSlide(1);
    const thumb = e.target.closest('[data-thumb]');
    if (thumb) {
        slideIndex = Number(thumb.dataset.thumb);
        updateSlide();
    }
});

// Cards are focusable, so Enter and Space should open them too.
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.js-open-project');
    if (!card) return;
    e.preventDefault();
    openProject(card.dataset.project);
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
    const focusables = [...modal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')]
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
