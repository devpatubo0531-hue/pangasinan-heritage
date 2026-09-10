// Decoupled content: swapping/adding a site means editing this file only —
// no component code changes required, supporting the "maintainable" requirement.
// NOTE on images: `photo`/`gallery` point to local files in public/images/.
// If a filename here doesn't exactly match the actual file (case, spelling,
// extension), AppImage silently falls back to the `illustration` SVG instead
// of throwing an error — so a "wrong" image usually means a typo in the path
// below, not a bug in the component. `rating`/`reviewCount` are placeholder
// sample data for layout purposes, not real figures. `bestTime`/
// `howToGetThere`/`entranceFee` are shown on the site's detail screen.
export const heritageSites = [
  {
    id: 'hundred-islands',
    name: 'Hundred Islands National Park',
    town: 'Alaminos',
    category: 'Beaches & Islands',
    rating: 4.8,
    reviewCount: 320,
    description:
      'A protected seascape of over a hundred limestone islands, ideal for island-hopping, kayaking, and snorkeling.',
    fullDescription:
      'Hundred Islands National Park was the first national park declared in the Philippines, protecting 124 limestone islands scattered across Lingayen Gulf. Only a handful are developed for visitors — Governor, Quezon, and Children\u2019s Island — each reachable by hired outrigger boat from Lucap Wharf. Expect white sand coves, shallow reef swimming, sea-cave kayaking, and a steep climb up Governor\u2019s Island for a panoramic view of the whole cluster.',
    bestTime:
      'November to May (dry season) for calm seas and clear water. Avoid June–October, which is typhoon season in the gulf.',
    howToGetThere:
      'From Manila, bus or drive about 3.5–4 hours to Alaminos via SCTEX/TPLEX. From the Alaminos terminal, take a tricycle to Lucap Wharf, then hire an outrigger boat to the islands.',
    entranceFee: 'Environmental fee \u20b140; boat rental \u20b11,200\u20131,500 per group (covers 2–3 islands).',
    illustration: 'islands',
    photo: '/images/hundred_island.jpg',
    gallery: [{ url: '/images/hundred_island.jpg' }]
  },
  {
    id: 'bolinao-lighthouse',
    name: 'Cape Bolinao Lighthouse',
    town: 'Bolinao',
    category: 'Historical & Cultural',
    rating: 4.7,
    reviewCount: 280,
    description:
      'One of the tallest lighthouses in the Philippines, standing on Punta Piedra Point since 1905 with sweeping coastal views.',
    fullDescription:
      'Built by the Spanish and completed by American engineers in 1905, Cape Bolinao Lighthouse sits atop Punta Piedra Point and remains one of the tallest lighthouses in the country. The grounds are open to visitors most afternoons, and the short climb up the point rewards you with a wide view over the West Philippine Sea — best timed for sunset, when the whitewashed tower catches the last light.',
    bestTime:
      'Late afternoon for sunset views over the coast. December to May brings the driest, clearest skies.',
    howToGetThere:
      'From Alaminos, take a jeepney or van to Bolinao (about 1 hour), then a tricycle to Punta Piedra Point.',
    entranceFee: 'Free entry; a small donation box is on-site.',
    illustration: 'lighthouse',
    photo: '/images/bolinao_lighthouse.jpg',
    gallery: [{ url: '/images/bolinao_lighthouse.jpg' }]
  },
  {
    id: 'balungao-hot-spring',
    name: 'Balungao Hot Spring',
    town: 'Balungao',
    category: 'Wellness & Relaxation',
    rating: 4.6,
    reviewCount: 210,
    description:
      'A mineral hot spring resort at the foot of Mt. Balungao, popular for its therapeutic pools and forest trails.',
    fullDescription:
      'Tucked at the base of Mt. Balungao, this mineral hot spring resort draws day-trippers looking to soak in naturally heated pools said to ease joint and skin conditions. Beyond the pools, marked forest trails wind up the slopes of the extinct volcano, with picnic huts and cold spring pools further up for those who want to cool off after the hike.',
    bestTime:
      'Weekday mornings to avoid crowds. Cooler months (November–February) make the hot pools especially inviting.',
    howToGetThere:
      'From Urdaneta or Rosales, take a jeepney or tricycle to Balungao town proper, then a habal-habal to the resort at the base of the mountain.',
    entranceFee: 'Resort entrance \u20b150\u2013100; cottage rental charged separately.',
    illustration: 'hotspring',
    photo: '/images/balungao_hotspring.jpg',
    gallery: [{ url: '/images/balungao_hotspring.jpg' }]
  },
  {
    id: 'patar-beach',
    name: 'Patar Beach',
    town: 'Bolinao',
    category: 'Beaches & Islands',
    rating: 4.7,
    reviewCount: 190,
    description:
      'A long stretch of golden-white sand facing the West Philippine Sea, known for calm waters and postcard sunsets.',
    fullDescription:
      'Patar Beach runs along Bolinao\u2019s western shoreline and is best known for calm, swimmable water and some of the province\u2019s most reliable sunsets. Resorts and cottages line the sand for day use or overnight stays, and it pairs easily with a stop at Cape Bolinao Lighthouse a short tricycle ride away.',
    bestTime:
      'Sunset, around 5:30–6:30 PM, for the best light. Dry season (December–May) keeps the water calmest for swimming.',
    howToGetThere:
      'From Bolinao town proper, take a tricycle to Patar (about 20–30 minutes).',
    entranceFee: 'Free public beach access; beachfront resorts charge separately for cottages.',
    illustration: 'beach',
    photo: '/images/patar_whitesand.jpg',
    gallery: [{ url: '/images/patar_whitesand.jpg' }]
  },
  {
    id: 'manaoag-church',
    name: 'Basilica of Our Lady of Manaoag',
    town: 'Manaoag',
    category: 'Religious Sites',
    rating: 4.9,
    reviewCount: 410,
    description:
      'A centuries-old pilgrimage church housing the venerated image of Our Lady of Manaoag, drawing devotees from across the country.',
    fullDescription:
      'One of the most visited pilgrimage sites in the Philippines, this basilica houses the centuries-old image of Our Lady of Manaoag, believed by many devotees to be miraculous. Masses run through the day, and the plaza outside is lined with vendors selling candles and religious items — busiest on Wednesdays, the day traditionally associated with the devotion.',
    bestTime:
      'Wednesdays for the weekly novena crowd and vendor stalls, or weekday mornings for a quieter visit.',
    howToGetThere:
      'From Dagupan or Urdaneta, take a jeepney or van directly to Manaoag town center — the basilica sits right on the plaza.',
    entranceFee: 'Free entry.',
    illustration: 'church',
    photo: '/images/manaog.jpg',
    gallery: [{ url: '/images/manaog.jpg' }]
  },
  {
    id: 'bolinao-falls',
    name: 'Bolinao Falls',
    town: 'Bolinao',
    category: 'Nature & Adventure',
    rating: 4.6,
    reviewCount: 240,
    description:
      'A cascading waterfall tucked into a lush ravine, with a natural swimming pool at its base — a favorite side trip from the beach.',
    fullDescription:
      'A short habal-habal ride inland from the coast, Bolinao Falls (there are a few, numbered in sequence) drops into a turquoise pool ringed by limestone and forest. It\u2019s a popular cliff-jumping spot, with rope swings and bamboo rafts for hire at the more developed of the falls.',
    bestTime:
      'Mornings to early afternoon on weekdays. Dry season gives the clearest, bluest water.',
    howToGetThere:
      'From Bolinao town, take a tricycle or habal-habal inland to the falls (about 20–30 minutes); some falls require a short hike from the parking area.',
    entranceFee: 'Environmental fee \u20b120\u201330; life vest or rope swing rental extra.',
    illustration: 'waterfall',
    photo: '/images/bolinao_falls.jpg',
    gallery: [{ url: '/images/bolinao_falls.jpg' }]
  }
]

// Full-bleed hero background — same sourcing note as above.
export const heroPhoto = {
   url:'/images/bolinao.jpg'
}