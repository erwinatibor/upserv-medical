/* ============================================================
   APEX DENTAL — Site Content Data   js/data.js
   ============================================================ */
'use strict';
const SITE = {
  business: {
    name: 'Apex Dental',
    tagline: 'Modern Family & Cosmetic Dentistry · Chicago, IL',
    phone: '(312) 555-0147',
    email: 'hello@apexdental.com',
    address: {
      street: '233 S Wacker Drive, Suite 4800',
      city: 'Chicago', state: 'IL', zip: '60606',
      full: '233 S Wacker Drive, Suite 4800, Chicago, IL 60606',
    },
    hours: [
      {day:'Monday',    hours:'8:00 AM – 5:00 PM', open:true},
      {day:'Tuesday',   hours:'8:00 AM – 5:00 PM', open:true},
      {day:'Wednesday', hours:'8:00 AM – 7:00 PM', open:true},
      {day:'Thursday',  hours:'8:00 AM – 5:00 PM', open:true},
      {day:'Friday',    hours:'8:00 AM – 3:00 PM', open:true},
      {day:'Saturday',  hours:'9:00 AM – 2:00 PM', open:true},
      {day:'Sunday',    hours:'Closed',             open:false},
    ],
  },
  stats: [
    {value:5100, suffix:'+',  label:'Patients Treated'},
    {value:4.9,  suffix:'★', label:'Google Rating', float:true},
    {value:15,   suffix:'yr', label:'In Practice'},
    {value:45,   suffix:'+',  label:'Insurance Plans'},
  ],
  services: [
    {n:'01', icon:'🦷', title:'Preventive Care',   desc:'Cleanings, exams, X-rays, fluoride treatments, sealants. The foundation of a lifetime of great dental health.',         price:'From $89',       category:'preventive'},
    {n:'02', icon:'✨', title:'Teeth Whitening',   desc:'In-office Zoom! brightening (up to 8 shades in 60 min) or custom take-home trays. Long-lasting, natural-looking results.',price:'From $299',      category:'cosmetic'},
    {n:'03', icon:'💎', title:'Invisalign',        desc:'Certified Gold Invisalign provider. Discreet, removable clear aligners — no metal wires, no diet restrictions.',          price:'From $3,400',    category:'orthodontics'},
    {n:'04', icon:'🔩', title:'Dental Implants',   desc:'Nobel Biocare implants with ceramic crowns. Single tooth, full arch, or implant dentures — placed and restored in-house.',price:'From $1,800',    category:'restorative'},
    {n:'05', icon:'🪄', title:'Porcelain Veneers', desc:'Thin ceramic shells that reshape, brighten, and perfect your smile. Digital preview before any tooth preparation.',       price:'From $950/tooth',category:'cosmetic'},
    {n:'06', icon:'👶', title:'Pediatric Dentistry',desc:'Gentle, child-friendly care from first tooth through teen years. Making dentistry a positive experience for life.',     price:'From $69',       category:'preventive'},
    {n:'07', icon:'🚨', title:'Emergency Care',    desc:'Cracked tooth, sudden pain, knocked-out tooth — we reserve same-day slots every morning. Call first.',                   price:'Same day',       category:'emergency'},
    {n:'08', icon:'🌉', title:'Crowns & Bridges',  desc:'CEREC same-day ceramic crowns milled in-office in under 2 hours. Traditional bridges for one or more missing teeth.',   price:'From $850',      category:'restorative'},
    {n:'09', icon:'😴', title:'Sedation Dentistry', desc:'Nitrous oxide, oral sedation, and IV sedation for anxious patients or lengthy procedures. Board-certified support.',   price:'From $150',      category:'specialty'},
  ],
  team: [
    {initials:'MJ', name:'Dr. Maya Johnson',    cred:'DDS, FAGD',  role:'Lead & Cosmetic Dentist',  tags:['Invisalign','Cosmetics','Implants'], bg:'#C41C1C'},
    {initials:'TK', name:'Dr. Thomas Kim',      cred:'DMD',        role:'Family Dentist',            tags:['Pediatric','Preventive','Sedation'], bg:'#0A0A08'},
    {initials:'RP', name:'Dr. Rosa Perez',      cred:'DDS, AAACD', role:'Aesthetic Specialist',     tags:['Veneers','Whitening','Bonding'],     bg:'#4A7060'},
    {initials:'NF', name:'Dr. Noah Freeman',    cred:'OMS, FACS',  role:'Oral Surgeon',             tags:['Implants','Surgery','Extractions'],  bg:'#BF8C20'},
  ],
  reviews: [
    {stars:5, text:'"I hadn\'t been to the dentist in four years — mostly fear. Dr. Johnson was patient, unhurried, and completely non-judgmental. I\'ve now been back three times and actually look forward to coming."', name:'Priya S.', meta:'2024 · New Patient', initials:'PS'},
    {stars:5, text:'"Same-day crown with the CEREC machine is witchcraft. Called at 8:30 AM with a cracked molar, left at 12:30 PM with a permanent ceramic crown. Zero second appointment. Incredible."', name:'Marcus D.', meta:'2023 · Same-Day Crown', initials:'MD'},
    {stars:5, text:'"Both my kids (5 and 8) now ask when they can go back. Dr. Kim explained everything with toys and puppets. The hygienist remembered my daughter\'s favourite cartoon. Service like this is rare."', name:'Leila H.', meta:'2023 · Family', initials:'LH'},
    {stars:5, text:'"Dr. Perez designed my veneers with a digital preview first — I literally approved my new smile on a screen before any work was done. The final result is more natural-looking than I imagined."', name:'Carlos M.', meta:'2024 · Veneers', initials:'CM'},
    {stars:5, text:'"The photo report they texted me after my exam was a revelation. Photos of every tooth, colour-coded by urgency. No fear-mongering, just facts. I knew exactly what to prioritise and what could wait."', name:'Beth W.', meta:'2024 · Exam', initials:'BW'},
    {stars:5, text:'"Three members of my family now come here. Front desk remembers names, hygienists remember health notes, and Dr. Johnson asks follow-up questions about things mentioned at previous visits. Exceptional."', name:'James R.', meta:'4 Years · Family', initials:'JR'},
  ],
  pricing: [
    {name:'New Patient',   price:99,   period:'first visit', desc:'Everything you need to start your dental health journey with full confidence.', features:['Complete dental exam','Full digital X-rays','Professional cleaning','Oral cancer screening','Treatment roadmap'], cta:'Book New Patient Visit', featured:false},
    {name:'Complete Care', price:399,  period:'per year',    desc:'All the preventive care you need — no insurance required.', features:['Two cleanings per year','Two full exams','All necessary X-rays','20% off all treatments','Emergency exam access','Free whitening kit once'], cta:'Start Complete Care', featured:true},
    {name:'Family Plan',   price:699,  period:'per year',    desc:'Up to 4 family members under one plan. Our best value.', features:['Everything in Complete Care','Up to 4 members','25% off treatments','Priority scheduling','Free ortho consultation','Family coordinator'], cta:'Start Family Plan', featured:false},
  ],
  insurance: {
    primary:['Delta Dental','Cigna','Aetna','MetLife','Guardian'],
    secondary:['United Healthcare','Humana','Anthem','BlueCross','Principal'],
    note:'No insurance? Plans from $399/yr. 0% financing via CareCredit.',
  },
  faqs: [
    {q:'Are you accepting new patients?',a:'Yes — we always have openings for new patients and families. Book online 24/7, call (312) 555-0147, or walk in. Same-day new patient slots are available most mornings.'},
    {q:'What do I bring to my first appointment?',a:'Photo ID, insurance card (if applicable), and a list of current medications. Arriving 10 minutes early helps us complete paperwork before your exam.'},
    {q:'Do you treat children?',a:'Yes. Dr. Kim specialises in pediatric dentistry. We recommend bringing children in when their first tooth appears. Early, positive experiences set the tone for a lifetime.'},
    {q:'What CEREC same-day crowns work?',a:'CEREC uses in-office digital scanning and a milling machine to design and carve a ceramic crown in under 2 hours. No impressions, no temporaries, no second visit.'},
    {q:'Is sedation safe?',a:'Yes. Our sedation options — nitrous oxide, oral sedation, and IV sedation — are administered by certified professionals and continuously monitored. We tailor the level to your needs and medical history.'},
    {q:'Which insurance plans do you accept?',a:'We accept 45+ PPO plans and verify benefits before your appointment at no charge. For uncovered treatments, we offer transparent pricing, in-house plans, and 0% financing.'},
    {q:'How often should I get a cleaning?',a:'Every 6 months for most adults. Patients with higher cavity or gum disease risk may benefit from 3–4 month cleanings. We recommend a schedule tailored to your oral health.'},
    {q:'Do you offer payment plans?',a:'Yes. 0% financing through CareCredit and Sunbit, our in-house annual plans from $399/yr, and FSA/HSA compatibility. We work through options with you before treatment begins.'},
  ],
};
