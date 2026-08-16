import { Project, ExperienceItem, EquipmentItem, ExpertiseItem, ServiceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Azharuddin',
  brand: 'AzzuDOP',
  title: 'Photographer & Cinematographer',
  experienceYears: '6+',
  location: 'Dubai, UAE',
  bornIn: 'India',
  email: 'azzudop@gmail.com',
  phone: '+971 50 291 0727',
  instagramHandle: '@azzu_dop',
  instagramUrl: 'https://www.instagram.com/azzu_dop?igsh=MXAyeTl3MDYzNjRoZw%3D%3D&utm_source=qr',
  youtubeHandle: '@azzu_dop',
  youtubeUrl: 'https://youtube.com/@azzu_dop?si=NMHuXsJJU6SF14mk',
  education: 'B.A. Pass — Bachelor of Arts, University of Delhi, India',
  languages: ['Urdu (Fluent)', 'Hindi (Fluent)', 'English (Basic Communication)'],
  bio: 'Azharuddin is a professional Photographer & Cinematographer based in Dubai with 6+ years of experience in cinematic shoots, luxury real estate media, corporate video productions, commercial films and high-impact social media visual storytelling.',
  tagline: 'Visual stories, captured with cinematic precision.'
};

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'GTA ( OFFICIAL VIDEO ) ARSHIYA ARSHI | REAL RAKA | AVINN SABARWAL',
    category: 'MUSIC VIDEO',
    year: '2025',
    location: 'Dubai, UAE',
    role: 'Director of Photography / Editor',
    description: 'A masterclass visual reel highlighting 6+ years of high-end camera operation, gimbal movement, low-light framing, and dynamic editing in Dubai.',
    client: 'AzzuDOP Productions',
    coverImage: '/images/ytb/dubai.jpg',
    youtubeId: 'YvklO8NG6dE',
    featured: true,
    // gallery: [
    //   'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1200&q=80',
    //   'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    //   'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'
    // ]
  },
  {
    id: 'proj-2',
    title: 'Haters God Bless You (Official Video) Arshiya Arshi | Real Raka | Official Hip-Hop Anthem',
    category: 'MUSIC VIDEO',
    year: '2025',
    location: 'Downtown Dubai, UAE',
    role: 'Cinematographer & Videographer',
    description: 'Ultra-smooth gimbal walkthrough and aerial perspectives showcasing a multi-million dollar luxury penthouse with panoramic Burj Khalifa views.',
    client: 'Riti Realty',
    coverImage: '/images/ytb/song.jpg',
    youtubeId: 'MdK_ccHh9kk',
    featured: true,
    // gallery: [
    //   'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    //   'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    //   'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    // ]
  },
  {
    id: 'proj-3',
    title: 'Mera Bhola (Official Video) Real Raka | MR. Cruz | MK Zala | Hard Rock Beats | Bhola Baba Song',
    category: 'COMMERCIAL & BRAND FILMS',
    year: '2024',
    location: 'Lahbab Desert, Dubai',
    role: 'Director of Photography',
    description: 'High-contrast commercial film shot on Sony FX3 featuring golden hour sand dunes, luxury supercar tracking shots, and cinematic color grading.',
    client: 'Luxury Brand Campaign',
    coverImage: '/images/ytb/bola.jpg',
    youtubeId: 'RY_KrEWsPVg',
    featured: true,
    // gallery: [
    //   'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    //   'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    // ]
  },
  {
    id: 'proj-4',
    title: '1UP | HARVI feat. IQBAL | Latest Punjabi Hit Song 2026 | Bang Music',
    category: 'MUSIC VIDEO',
    year: '2024',
    location: 'Dubai Marina',
    role: 'Cinematographer & Colorist',
    description: 'An atmospheric music visualizer with stylized neon lighting, hand-held camera motion, anamorphic lens flares, and rhythmic editing.',
    client: 'Independent Artist',
    coverImage: '/images/ytb/bang.jpg',
    youtubeId: 'GQrZprNaDEI',
    featured: true,
    // gallery: [
    //   'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    //   'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
    // ]
  },
  {
    id: 'proj-5',
    title: '307 - SHAWN | OFFICIAL MUSIC VIDEO',
    category: 'WEDDING FILMS',
    year: '2024',
    location: 'Jumeirah, Dubai',
    role: 'Lead Cinematographer',
    description: 'Heartfelt emotional storytelling documenting a high-profile luxury wedding, capturing candid smiles, intricate decor, and grand celebrations.',
    client: 'Pooja Studio',
    coverImage: '/images/ytb/ytb1.jpg',
    youtubeId: 'Fu1ive5gQvI',
    featured: true,
    // gallery: [
    //   'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    //   'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    // ]
  },
  {
    id: 'proj-6',
    title: 'Chris Chris (Official Music Video) | Kapil ft. Anisha Jain Safaya | Suuumix | New Punjabi Song 2026',
    category: 'REAL ESTATE',
    year: '2024',
    location: 'Dubai Hills Estate',
    role: 'Videographer & Editor',
    description: 'Precision interior cinematography, smooth gimbal panning, and modern color palette highlighting modern architecture.',
    client: 'Moti Associates Properties',
    coverImage: '/images/ytb/ytb2.jpg',
    youtubeId: 'NCU4QInicEE',
    featured: false,
    // gallery: [
    //   'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    // ]
  },
  {
    id: 'proj-7',
    title: 'Deepavali - Festival of Lights (Diwali) | Chalo Ri Sakhi | Manjeet Singh | Official Video',
    category: 'CORPORATE VIDEO',
    year: '2024',
    location: 'DIFC, Dubai',
    role: 'Cinematographer',
    description: 'Full multi-cam event coverage, crisp executive sound integration, dynamic highlights reel, and key interview lighting setups.',
    client: 'Corporate Client',
    coverImage: '/images/ytb/ytb3.jpg',
    youtubeId: 'gLhajd8ZlMo',
    featured: false,
    // gallery: [
    //   'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'
    // ]
  },
  {
    id: 'proj-8',
    title: 'Hasrat | Official Music Video | Harry Khan New Punjabi Song 2025 Latest Punjabi song',
    category: 'EVENTS & CELEBRATIONS',
    year: '2024',
    location: 'Atlantis The Royal, Dubai',
    role: 'Cinematographer & Photographer',
    description: 'High-energy celebration coverage, capturing red carpet arrivals, stage performances, light shows, and VIP guest moments.',
    client: 'Event Host',
    coverImage: '/images/ytb/ytb4.jpg',
    youtubeId: 'p0iD52Da_S0',
    featured: false,
    // gallery: [
    //   'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
    // ]
  },
  {
    id: 'proj-9',
    title: 'Loaded Gun (Out Now) | Latest Haryanvi Song -2025 | Bunty King Haryana',
    category: 'BEHIND THE SCENES',
    year: '2025',
    location: 'Dubai Production City',
    role: 'Director of Photography',
    description: 'Exclusive look behind the frame showing rig setups, Sony FX3 gimbal mounting, wireless video transmission, and field lighting.',
    client: 'AzzuDOP BTS',
    coverImage: '/images/ytb/ytb5.jpg',
    youtubeId: '-eQ19K9wukQ',
    featured: true,
    // gallery: [
    //   '/images/bts/bts_azharuddin_team.jpg',
    //   'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'
    // ]
  },
  {
    id: 'proj-10',
    title: 'J Daemon - CHAMAK ( Official Music video) 2026',
    category: 'PHOTOS',
    year: '2025',
    location: 'Studio & On-Location, Dubai',
    role: 'Photographer',
    description: 'High-end portraiture with dramatic key lighting, rich texture focus, editorial color styling, and sharp focus.',
    client: 'Fashion Editorial',
    coverImage: '/images/ytb/ytb6.jpg',
    youtubeId: 'mdwM84ExvMs',
    featured: false,
    // gallery: [
    //   'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    //   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    //   'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
    // ]
  },
  {
    id: 'proj-11',
    title: 'Shiv Shambho (Official Video) Gurnain Sanjana | MR Cruz l Real Raka | MK Zala | Hard Rock Beats',
    category: 'COMMERCIAL & BRAND FILMS',
    year: '2024',
    location: 'Business Bay, Dubai',
    role: 'Cinematographer & Drone Cam Op',
    description: 'Cinematic brand story celebrating architecture and modern urban lifestyle.',
    youtubeId: 'DipjigctDpk',
    coverImage: '/images/ytb/ytb7.jpg',
  },
  {
    id: 'proj-12',
    title: 'Wallah Habibi (Official Music Video)| Harry Khan | New Punjabi Song 2025 | Latest Punjabi song',
    category: 'MUSIC VIDEO',
    year: '2024',
    location: 'Al Serkal Avenue, Dubai',
    role: 'Director of Photography',
    description: 'Fast-paced choreography video with RGB tube lights and slow-motion transitions.',
    youtubeId: 'hvazCysXsZ0',
    coverImage: '/images/ytb/ytb14.jpg',
  },
  {
    id: 'proj-13',
    title: 'Zulfein - Sayhan (Official Music Video) New Hindi Romantic Songs 2026',
    category: 'REAL ESTATE',
    year: '2025',
    location: 'Palm Jumeirah',
    role: 'Cinematographer',
    description: 'Ultra-luxurious beachside villa walkthrough featuring indoor-outdoor flow.',
    youtubeId: 'MW3uKdbFiR4',
    coverImage: '/images/ytb/ytb8.jpg',
  },
  {
    id: 'proj-14',
    title: 'Milad Raza Qadri | Ya Rabbana Irhamlana | Hajj Kalam 2025 | Official Video Heart touching hamd',
    category: 'EVENTS & CELEBRATIONS',
    year: '2024',
    location: 'Dubai Opera',
    role: 'Lead Videographer',
    description: 'High profile celebrity event recap with dynamic motion graphics.',
    youtubeId: 'OOEmkmRNKDk',
    coverImage: '/images/ytb/ytb10.jpg',
  },
  {
    id: 'proj-15',
    title: 'Light G Smile (Official Music Video) Harry Khan | New Punjabi Song 2024 | latest punjabi song',
    category: 'WEDDING FILMS',
    year: '2024',
    location: 'Bab Al Shams, Dubai',
    role: 'Cinematographer & Editor',
    description: 'Desert sunset wedding film capturing rich traditions and emotional vows.',
    youtubeId: 'i7xgnSZPm-8',
    coverImage: '/images/ytb/ytb11.jpg',
  },
  {
    id: 'proj-16',
    title: 'Nationality | Official Music Video | Harry Khan | Karan Sarai | Tera Nobita New Punjabi Song 2025',
    category: 'CORPORATE VIDEO',
    year: '2024',
    location: 'JLT, Dubai',
    role: 'Cinematographer & Lighting Specialist',
    description: 'Engaging corporate documentary film highlighting company values and innovations.',
    youtubeId: 'iOluKqDLpOM',
    coverImage: '/images/ytb/ytb12.jpg',
  },
  {
    id: 'proj-17',
    title: 'Respect A- Jay Ft Gabruu | Xtatic Muzic | New Punjabi Songs 2024 |',
    category: 'BEHIND THE SCENES',
    year: '2025',
    location: 'Dubai Film Studio',
    role: 'DOP / Rig Operator',
    description: 'Behind the scenes video showing custom Sony FX3 gimbal rigs and lighting setups.',
    youtubeId: 'Etf-OPgakRs',
    coverImage: '/images/ytb/ytb13.jpg',
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2025 — PRESENT',
    company: 'Riti Realty',
    location: 'Dubai, UAE',
    title: 'Cinematographer & Videographer',
    description: 'Leading end-to-end video production for multi-million AED real estate listings. Operating cinema cameras, gimbals, and drone gear to create captivating property walkthroughs.',
    highlights: [
      'Filming high-end luxury villas & penthouse walkthroughs',
      'Conducting interior lighting setups and smooth motion shots',
      'Editing high-impact social media video tours'
    ],
    image: '/images/bts/img2.jpeg'
  },
  {
    id: 'exp-2',
    period: '2024 — 2025',
    company: 'Moti Associates Properties',
    location: 'Dubai, UAE',
    title: 'Videographer & Editor',
    description: 'Produced promotional property videos, agent branding reels, and commercial announcements for prime Dubai developments.',
    highlights: [
      'Created engaging property walkthrough videos',
      'Color graded footage for cinematic contrast & luxury aesthetics',
      'Managed rapid editing turnarounds for digital platforms'
    ],
    image: '/images/bts/img3.jpeg'
  },
  {
    id: 'exp-3',
    period: '2022 — 2024',
    company: 'Pooja Studio',
    location: 'Dubai, UAE',
    title: 'Cinematographer & Photographer',
    description: 'Filmed and photographed high-profile weddings, commercial campaigns, corporate events, and editorial portraits across Dubai.',
    highlights: [
      'Multi-camera video setups for major events & weddings',
      'Studio & outdoor portrait photography with precision lighting',
      'Directing talent and camera movement on set'
    ],
    image: '/images/bts/img.jpeg'
  }
];

export const EQUIPMENTS: EquipmentItem[] = [
  {
    id: 'eq-1',
    name: 'SONY FX3',
    category: 'Cinema Camera System',
    specs: 'Full-Frame 4K 120fps / S-Cinetone / 15+ Stops Dynamic Range',
    description: 'The flagship compact cinema camera engineered for cinematic depth, handheld agility, low-light performance, and 10-bit 4:2:2 recording.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eq-2',
    name: 'SONY / CANON / NIKON',
    category: 'Professional Camera Bodies & Lenses',
    specs: 'Prime & Zoom Lenses (16-35mm f/2.8, 24-70mm f/2.8, 85mm f/1.4)',
    description: 'A versatile suite of high-grade glass delivering razor-sharp clarity, creamy bokeh, and ultra-wide real estate angles.',
    image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eq-3',
    name: 'GIMBAL STABILIZATION',
    category: '3-Axis Motion Control Systems',
    specs: 'DJI RS3 Pro / Heavy Payload Motor / Wireless Motion Control',
    description: 'Precision stabilization systems enabling continuous floating camera moves, seamless push-ins, and dynamic tracking shots.',
    image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eq-4',
    name: 'PROFESSIONAL LIGHTING',
    category: 'Indoor & Outdoor Light Rigs',
    specs: 'COB LEDs / Softboxes / RGB Tube Lights / Modifiers',
    description: 'Studio and location lighting setups designed to craft cinematic mood, sculpting highlights and dark contrast.',
    image: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=800&q=80'
  }
];

export const EXPERTISES: ExpertiseItem[] = [
  {
    id: 'exp-cinematography',
    title: 'CINEMATOGRAPHY',
    subtitle: 'FRAME & LIGHT DISCIPLINE',
    description: 'Crafting atmospheric, filmic visuals using camera movement, intentional framing, dynamic lighting, and precise color science.',
    bgImage: '/images/bts/person.jpeg'
  },
  {
    id: 'exp-videography',
    title: 'PROFESSIONAL VIDEOGRAPHY',
    subtitle: 'ON-LOCATION EXCELLENCE',
    description: 'High-definition video production capturing live events, commercial storytelling, and brand promotions with speed and finesse.',
    bgImage: '/images/bts/img.jpeg'  },
  {
    id: 'exp-editing',
    title: 'VIDEO EDITING & COLOR',
    subtitle: 'POST-PRODUCTION CRAFT',
    description: 'Seamless narrative cutting, audio soundscapes, pacing, transitions, and professional color grading for high visual impact.',
    bgImage: '/images/bts/img5.jpeg'  },
  {
    id: 'exp-real-estate',
    title: 'REAL ESTATE MEDIA',
    subtitle: 'LUXURY SPACE SHOWCASING',
    description: 'Transforming architectural properties into captivating visual experiences through wide interior sweeps and detailed shots.',
    bgImage: '/images/bts/img2.jpeg'  },
  {
    id: 'exp-corporate',
    title: 'CORPORATE & EVENT SHOOTS',
    subtitle: 'EXECUTIVE & GALA COVERAGE',
    description: 'Discreet, high-end coverage for summits, galas, leadership interviews, and corporate brand documentaries.',
    bgImage: '/images/bts/img3.jpeg'  },
  {
    id: 'exp-gimbal',
    title: 'GIMBAL & LIGHTING',
    subtitle: 'DYNAMIC RIG OPERATION',
    description: 'Expertise in smooth tracking shots, low-angle reveals, lighting design, and operating active production gear.',
    bgImage: '/images/bts/img4.jpeg'  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'CINEMATOGRAPHY',
    description: 'High-end cinema camera production with full directional lighting and creative shot composition.',
    features: ['Sony FX3 Cinema Rig', 'Directional Lighting', 'Pro Audio Recording', 'Color Grading']
  },
  {
    id: 'srv-2',
    title: 'REAL ESTATE MEDIA',
    description: 'Luxury property video tours, interior photography, and high-converting video marketing assets for agents.',
    features: ['4K Video Walkthroughs', 'Architectural Stills', 'Social Media Reels', 'Fast 24-48h Delivery']
  },
  {
    id: 'srv-3',
    title: 'COMMERCIAL & BRAND FILMS',
    description: 'Cinematic commercials tailored to brand narratives, social media advertising, and product launches.',
    features: ['Concept Scripting', 'Model/Actor Directing', 'Stylized Lighting', '4K Master Delivery']
  },
  {
    id: 'srv-4',
    title: 'WEDDING & EVENT FILMS',
    description: 'Cinematic documentary coverage capturing genuine emotion, grandeur, and celebration moments.',
    features: ['Multi-Cam Coverage', 'Full Day Capture', 'Highlight Teasers', 'Feature Film Edit']
  }
];
