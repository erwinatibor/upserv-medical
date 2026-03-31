/* ============================================================
   LUMINA DENTAL — Site Content Data
   js/data.js
   ============================================================ */
'use strict';

const SITE = {
  business: {
    name:    'Lumina Dental',
    tagline: 'Luxury Cosmetic & Restorative Dentistry · Beverly Hills, CA',
    phone:   '(310) 555-0182',
    email:   'concierge@luminadental.com',
    address: {
      street: '414 N Camden Drive, Suite 900',
      city: 'Beverly Hills', state: 'CA', zip: '90210',
      full: '414 N Camden Drive, Suite 900, Beverly Hills, CA 90210',
    },
    hours: [
      {day:'Monday',    hours:'9:00 AM – 6:00 PM', open:true},
      {day:'Tuesday',   hours:'9:00 AM – 6:00 PM', open:true},
      {day:'Wednesday', hours:'9:00 AM – 7:00 PM', open:true},
      {day:'Thursday',  hours:'9:00 AM – 6:00 PM', open:true},
      {day:'Friday',    hours:'9:00 AM – 4:00 PM', open:true},
      {day:'Saturday',  hours:'10:00 AM – 3:00 PM',open:true},
      {day:'Sunday',    hours:'By appointment',     open:false},
    ],
  },
  stats: [
    {value:4800, suffix:'+',  label:'Smiles Transformed'},
    {value:4.9,  suffix:'★', label:'Google Rating', float:true},
    {value:22,   suffix:'yr', label:'In Practice'},
    {value:50,   suffix:'+',  label:'Insurance Plans'},
  ],
  services: [
    {icon:'💎', title:'Smile Makeover', desc:'Complete aesthetic transformation combining veneers, whitening, gum contouring, and bonding — custom-designed to your facial features.', price:'From $8,500', category:'cosmetic'},
    {icon:'✨', title:'Porcelain Veneers', desc:'Ultra-thin, ultra-lifelike ceramic shells crafted in our partner lab. Same-day digital previews before any tooth preparation.', price:'From $1,400/tooth', category:'cosmetic'},
    {icon:'💎', title:'Invisalign Platinum', desc:'Elite-tier clear aligner therapy. Platinum provider status — among the top 1% of Invisalign practitioners in the country.', price:'From $5,200', category:'orthodontics'},
    {icon:'🔩', title:'Dental Implants', desc:'Nobel Biocare implants with zirconia crowns. Full arch, single tooth, or implant-supported dentures placed and restored in-house.', price:'From $3,400', category:'restorative'},
    {icon:'🌟', title:'Zoom Whitening', desc:'In-office Philips Zoom! with custom take-home trays for touch-ups. Up to 8 shades brighter in a single 75-minute session.', price:'From $750', category:'cosmetic'},
    {icon:'🛡️', title:'Full-Mouth Rehab', desc:'Comprehensive restoration of all teeth — crowns, implants, bridges, and soft-tissue procedures — under one unified treatment plan.', price:'Custom quote', category:'restorative'},
    {icon:'🌊', title:'Gum Recontouring', desc:'Laser-sculpted gum line correction for a balanced, symmetrical smile. No scalpel, no sutures, minimal recovery.', price:'From $600', category:'cosmetic'},
    {icon:'🚨', title:'Emergency Care', desc:'24-hour concierge dental emergencies. Priority booking, same-day slots, private treatment suites for discrete urgent care.', price:'Priority booking', category:'emergency'},
    {icon:'😴', title:'IV Sedation', desc:'Board-certified anesthesiology support for complete dental sedation. Wake up with a transformed smile — no anxiety, no memory.', price:'From $800', category:'specialty'},
  ],
  team: [
    {initials:'AV', name:'Dr. Alexandra Voss', cred:'DDS, FAGD', role:'Lead Cosmetic Dentist', tags:['Smile Design','Veneers','Implants'], gradient:'linear-gradient(135deg,#C9A84C,#DDB96A)'},
    {initials:'RK', name:'Dr. Rafael Kim', cred:'DMD, MS', role:'Orthodontics & Invisalign', tags:['Invisalign','Braces','TMJ'], gradient:'linear-gradient(135deg,#1D2436,#2A3654)'},
    {initials:'NS', name:'Dr. Naomi Sato', cred:'DDS, AAACD', role:'Aesthetic Specialist', tags:['Veneers','Whitening','Bonding'], gradient:'linear-gradient(135deg,#2ABFAD,#22A596)'},
    {initials:'ML', name:'Dr. Marcus Levy', cred:'OMS, FACS', role:'Oral Surgeon', tags:['Implants','Surgery','Sedation'], gradient:'linear-gradient(135deg,#334155,#475569)'},
  ],
  reviews: [
    {stars:5, text:'"The smile makeover Dr. Voss designed for me is beyond anything I imagined. She listened to every concern, showed me digital previews, and the final result looks completely natural. Worth every cent."', name:'Isabella M.', meta:'2024 · Full Smile Makeover', initials:'IM'},
    {stars:5, text:'"I\'ve been to dentists all over LA and Lumina is in a different league. The suite is gorgeous, the staff remember every detail, and the work is flawless. This is luxury in the truest sense."', name:'Brandon T.', meta:'3 Years · Implants & Crowns', initials:'BT'},
    {stars:5, text:'"IV sedation was the only way I could get my dental work done. Dr. Levy\'s team was professional, safe, and completely reassuring. I woke up with veneers and didn\'t feel a thing."', name:'Sophia R.', meta:'2024 · Sedation & Veneers', initials:'SR'},
    {stars:5, text:'"As an actor I need my smile to photograph perfectly. Dr. Voss understands proportions, symmetry, and natural aesthetics at a level I haven\'t found elsewhere. My headshots have transformed."', name:'James A.', meta:'2023 · Smile Makeover', initials:'JA'},
    {stars:5, text:'"The 0% financing made the full rehab I needed financially possible. The team guided me through every step and the results are life-changing. I can smile without thinking for the first time in years."', name:'Clara D.', meta:'2024 · Full-Mouth Rehab', initials:'CD'},
    {stars:5, text:'"Concierge service means exactly what it says. They confirmed my appointment by phone, had champagne water waiting, played my preferred music — and the Invisalign is progressing perfectly ahead of schedule."', name:'David K.', meta:'2024 · Invisalign Platinum', initials:'DK'},
  ],
  pricing: [
    {name:'Lumina Welcome', price:199, period:'first visit', desc:'An unhurried, comprehensive introduction to Lumina and your dental health.', features:['Full oral health assessment','Digital X-rays & 3D scan','Cosmetic consultation','Custom treatment roadmap','Complimentary whitening tray'], cta:'Book Welcome Visit', featured:false},
    {name:'Lumina Signature', price:699, period:'per year', desc:'Our flagship annual membership. Everything you need, nothing you don\'t.', features:['Two premium cleanings per year','Full diagnostic exams','All X-rays included','20% off all treatments','Emergency same-day access','Free annual whitening refresh'], cta:'Start Signature Plan', featured:true},
    {name:'Lumina Family', price:1290, period:'per year', desc:'Up to 5 family members, one seamless plan.', features:['Everything in Signature','Up to 5 family members','25% off all treatments','Priority booking for all','Free orthodontic consult','Dedicated family coordinator'], cta:'Start Family Plan', featured:false},
  ],
  insurance: {
    primary:['Delta Dental','Cigna','Aetna','MetLife','Guardian'],
    secondary:['United Healthcare','Humana','Anthem','BlueCross','Principal'],
    note:'No insurance? Our membership plans start at $699/yr. 0% financing available through CareCredit & Sunbit.',
  },
  faqs: [
    {q:'What makes Lumina different from other dental practices?', a:'Lumina is a concierge-level practice. We cap our patient roster to ensure unhurried appointments, offer same-day emergency access, work with a master ceramist lab for all restorations, and have a dedicated patient coordinator who manages every aspect of your care.'},
    {q:'How does a smile makeover consultation work?', a:'We begin with a comprehensive digital scan and photographic analysis. Dr. Voss creates a digital smile design using DSD (Digital Smile Design) software — you see your results before any treatment begins. We then discuss options, refine the design together, and build a phased treatment plan.'},
    {q:'Do you offer sedation for anxious patients?', a:'Yes. We offer nitrous oxide, oral conscious sedation, and full IV sedation with board-certified anesthesiology support. Dr. Levy has performed over 1,200 sedation cases. We cater to highly anxious patients and complex multi-procedure days.'},
    {q:'How long do porcelain veneers last?', a:'High-quality porcelain veneers typically last 15–25 years with proper care. We use only master-ceramist-crafted restorations in IPS e.max or zirconia-based materials. All veneers are covered by our 5-year cosmetic warranty.'},
    {q:'What financing options are available?', a:'We offer 0% financing through CareCredit (12–24 months) and Sunbit (up to 60 months). Our patient coordinator will walk through your options before any treatment begins. We also work with your FSA/HSA accounts.'},
    {q:'Are Lumina\'s services covered by dental insurance?', a:'We accept 50+ PPO insurance plans. Preventive care, restorative work, and many cosmetic-adjacent procedures are partially or fully covered. Our billing team verifies your benefits before your appointment and provides a clear cost breakdown.'},
    {q:'How long does a full smile makeover take?', a:'A straightforward veneer case typically takes 2–3 appointments over 3–4 weeks. Comprehensive rehabilitation with implants and orthodontics can take 12–18 months. We\'ll give you a precise timeline at your consultation.'},
    {q:'Do you see patients outside Beverly Hills?', a:'Many of our patients travel from across California and internationally for smile makeovers and complex rehabilitation cases. We coordinate with your travel schedule and can accommodate intensive multi-day treatment sessions.'},
  ],
};
