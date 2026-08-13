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
    title: 'DUBAI CINEMATIC SHOWREEL 2025',
    category: 'REEL',
    year: '2025',
    location: 'Dubai, UAE',
    role: 'Director of Photography / Editor',
    description: 'A masterclass visual reel highlighting 6+ years of high-end camera operation, gimbal movement, low-light framing, and dynamic editing in Dubai.',
    client: 'AzzuDOP Productions',
    coverImage: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1600&q=80',
    youtubeId: 'YvklO8NG6dE',
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-2',
    title: 'EMIRATES LUXURY PENTHOUSE TOUR',
    category: 'REAL ESTATE',
    year: '2025',
    location: 'Downtown Dubai, UAE',
    role: 'Cinematographer & Videographer',
    description: 'Ultra-smooth gimbal walkthrough and aerial perspectives showcasing a multi-million dollar luxury penthouse with panoramic Burj Khalifa views.',
    client: 'Riti Realty',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    youtubeId: 'MdK_ccHh9kk',
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-3',
    title: 'DESERT PULSE — BRAND FILM',
    category: 'COMMERCIAL & BRAND FILMS',
    year: '2024',
    location: 'Lahbab Desert, Dubai',
    role: 'Director of Photography',
    description: 'High-contrast commercial film shot on Sony FX3 featuring golden hour sand dunes, luxury supercar tracking shots, and cinematic color grading.',
    client: 'Luxury Brand Campaign',
    coverImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80',
    youtubeId: 'RY_KrEWsPVg',
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-4',
    title: 'MIDNIGHT RHYTHM — MUSIC VISUAL',
    category: 'MUSIC VIDEO',
    year: '2024',
    location: 'Dubai Marina',
    role: 'Cinematographer & Colorist',
    description: 'An atmospheric music visualizer with stylized neon lighting, hand-held camera motion, anamorphic lens flares, and rhythmic editing.',
    client: 'Independent Artist',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    youtubeId: 'GQrZprNaDEI',
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-5',
    title: 'ROYAL ARABIAN WEDDING VISUALS',
    category: 'WEDDING FILMS',
    year: '2024',
    location: 'Jumeirah, Dubai',
    role: 'Lead Cinematographer',
    description: 'Heartfelt emotional storytelling documenting a high-profile luxury wedding, capturing candid smiles, intricate decor, and grand celebrations.',
    client: 'Pooja Studio',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    youtubeId: 'Fu1ive5gQvI',
    featured: true,
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-6',
    title: 'MOTI ASSOCIATES PROPERTY SHOWCASE',
    category: 'REAL ESTATE',
    year: '2024',
    location: 'Dubai Hills Estate',
    role: 'Videographer & Editor',
    description: 'Precision interior cinematography, smooth gimbal panning, and modern color palette highlighting modern architecture.',
    client: 'Moti Associates Properties',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    youtubeId: 'NCU4QInicEE',
    featured: false,
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-7',
    title: 'DUBAI CORPORATE LEADERSHIP SUMMIT',
    category: 'CORPORATE VIDEO',
    year: '2024',
    location: 'DIFC, Dubai',
    role: 'Cinematographer',
    description: 'Full multi-cam event coverage, crisp executive sound integration, dynamic highlights reel, and key interview lighting setups.',
    client: 'Corporate Client',
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80',
    youtubeId: 'gLhajd8ZlMo',
    featured: false,
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-8',
    title: 'VIP GALA & CELEBRATION FILM',
    category: 'EVENTS & CELEBRATIONS',
    year: '2024',
    location: 'Atlantis The Royal, Dubai',
    role: 'Cinematographer & Photographer',
    description: 'High-energy celebration coverage, capturing red carpet arrivals, stage performances, light shows, and VIP guest moments.',
    client: 'Event Host',
    coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80',
    youtubeId: 'p0iD52Da_S0',
    featured: false,
    gallery: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-9',
    title: 'BEHIND THE LENS — PRODUCTION DIARY',
    category: 'BEHIND THE SCENES',
    year: '2025',
    location: 'Dubai Production City',
    role: 'Director of Photography',
    description: 'Exclusive look behind the frame showing rig setups, Sony FX3 gimbal mounting, wireless video transmission, and field lighting.',
    client: 'AzzuDOP BTS',
    coverImage: '/images/bts/bts_azharuddin_team.jpg',
    youtubeId: '-eQ19K9wukQ',
    featured: true,
    gallery: [
      '/images/bts/bts_azharuddin_team.jpg',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-10',
    title: 'EDITORIAL FASHION & PORTRAIT STILLS',
    category: 'PHOTOS',
    year: '2025',
    location: 'Studio & On-Location, Dubai',
    role: 'Photographer',
    description: 'High-end portraiture with dramatic key lighting, rich texture focus, editorial color styling, and sharp focus.',
    client: 'Fashion Editorial',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80',
    youtubeId: 'mdwM84ExvMs',
    featured: false,
    gallery: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'proj-11',
    title: 'THE SKYLINE EXPERIENCE',
    category: 'COMMERCIAL & BRAND FILMS',
    year: '2024',
    location: 'Business Bay, Dubai',
    role: 'Cinematographer & Drone Cam Op',
    description: 'Cinematic brand story celebrating architecture and modern urban lifestyle.',
    youtubeId: 'i7xgnSZPm-8',
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'proj-12',
    title: 'NEON WAVE DANCE VISUAL',
    category: 'MUSIC VIDEO',
    year: '2024',
    location: 'Al Serkal Avenue, Dubai',
    role: 'Director of Photography',
    description: 'Fast-paced choreography video with RGB tube lights and slow-motion transitions.',
    youtubeId: 'iOluKqDLpOM',
    coverImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'proj-13',
    title: 'LUXURY VILLA ARCHITECTURE',
    category: 'REAL ESTATE',
    year: '2025',
    location: 'Palm Jumeirah',
    role: 'Cinematographer',
    description: 'Ultra-luxurious beachside villa walkthrough featuring indoor-outdoor flow.',
    youtubeId: 'Etf-OPgakRs',
    coverImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'proj-14',
    title: 'CELEBRITY EVENT REEL',
    category: 'EVENTS & CELEBRATIONS',
    year: '2024',
    location: 'Dubai Opera',
    role: 'Lead Videographer',
    description: 'High profile celebrity event recap with dynamic motion graphics.',
    youtubeId: 'DipjigctDpk',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'proj-15',
    title: 'DESTINATION WEDDING STORY',
    category: 'WEDDING FILMS',
    year: '2024',
    location: 'Bab Al Shams, Dubai',
    role: 'Cinematographer & Editor',
    description: 'Desert sunset wedding film capturing rich traditions and emotional vows.',
    youtubeId: 'hvazCysXsZ0',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'proj-16',
    title: 'CORPORATE BRAND STORY',
    category: 'CORPORATE VIDEO',
    year: '2024',
    location: 'JLT, Dubai',
    role: 'Cinematographer & Lighting Specialist',
    description: 'Engaging corporate documentary film highlighting company values and innovations.',
    youtubeId: 'MW3uKdbFiR4',
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'proj-17',
    title: 'CREATIVE CAMERA RIGS & BTS',
    category: 'BEHIND THE SCENES',
    year: '2025',
    location: 'Dubai Film Studio',
    role: 'DOP / Rig Operator',
    description: 'Behind the scenes video showing custom Sony FX3 gimbal rigs and lighting setups.',
    youtubeId: 'OOEmkmRNKDk',
    coverImage: '/images/bts/bts_azharuddin_team.jpg'
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
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80'
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
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'
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
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80'
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
    bgImage: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'exp-videography',
    title: 'PROFESSIONAL VIDEOGRAPHY',
    subtitle: 'ON-LOCATION EXCELLENCE',
    description: 'High-definition video production capturing live events, commercial storytelling, and brand promotions with speed and finesse.',
    bgImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'exp-editing',
    title: 'VIDEO EDITING & COLOR',
    subtitle: 'POST-PRODUCTION CRAFT',
    description: 'Seamless narrative cutting, audio soundscapes, pacing, transitions, and professional color grading for high visual impact.',
    bgImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'exp-real-estate',
    title: 'REAL ESTATE MEDIA',
    subtitle: 'LUXURY SPACE SHOWCASING',
    description: 'Transforming architectural properties into captivating visual experiences through wide interior sweeps and detailed shots.',
    bgImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'exp-corporate',
    title: 'CORPORATE & EVENT SHOOTS',
    subtitle: 'EXECUTIVE & GALA COVERAGE',
    description: 'Discreet, high-end coverage for summits, galas, leadership interviews, and corporate brand documentaries.',
    bgImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'exp-gimbal',
    title: 'GIMBAL & LIGHTING',
    subtitle: 'DYNAMIC RIG OPERATION',
    description: 'Expertise in smooth tracking shots, low-angle reveals, lighting design, and operating active production gear.',
    bgImage: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=1600&q=80'
  }
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
