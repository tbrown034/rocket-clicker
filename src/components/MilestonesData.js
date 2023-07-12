const milestones = [
  {
    distance: 10,
    step: "Lift off from earth",
    boost: 5,
    story:
      "With a deafening roar, Rocky Rocket takes off, his metallic body gleaming in the sunlight. 'See you soon, Earth!' he cheers.",
  },
  {
    distance: 50,
    step: "Enter the atmosphere",
    boost: 10,
    story:
      "Entering the Earth's atmosphere, Rocky Rocket feels the heat, but his durable exterior handles it with grace. 'I'm built tough!' he exclaims.",
  },
  {
    distance: 100,
    step: "First contact with a satellite",
    boost: 15,
    story:
      "Rocky gets his first taste of the unexpected as he narrowly avoids colliding with a man-made satellite. 'Phew, that was close!' he sighs with relief.",
  },
  {
    distance: 200,
    step: "First spacewalk",
    boost: 20,
    story:
      "Exiting the spacecraft, Rocky experiences the void of space firsthand, marveling at the silence and vastness. 'It's a beautiful ballet of stars,' he whispers, awestruck.",
  },
  {
    distance: 300,
    step: "Pass the International Space Station",
    boost: 25,
    story:
      "As he passes the International Space Station, Rocky salutes the astronauts. 'Keep up the good work, crew!' he hollers over the radio.",
  },
  {
    distance: 400,
    step: "Flyby the Moon",
    boost: 30,
    story:
      "Rocky grazes past the moon, admiring its craters and valleys. 'The moon is more than just cheese!' he chuckles to himself.",
  },
  {
    distance: 500,
    step: "Land on an asteroid",
    boost: 35,
    story:
      "Navigating to a nearby asteroid, Rocky experiences his first landing on an alien rock. He collects some samples for further study. 'What secrets will you reveal?' he wonders aloud.",
  },
  {
    distance: 700,
    step: "Dance with the Comets",
    boost: 40,
    story:
      "Rocky finds himself in the company of comets. He soars with them, their brilliant tails illuminating the dark canvas of space. 'Best dance partners ever!' he exclaims.",
  },
  {
    distance: 900,
    step: "Close encounter with Mars",
    boost: 45,
    story:
      "As Rocky swoops past Mars, he wonders about the possibility of life on the Red Planet. 'Are there little green men out there?' he muses.",
  },
  {
    distance: 1200,
    step: "Jupiter's mighty storm",
    boost: 50,
    story:
      "Encountering the gigantic storm on Jupiter, Rocky skillfully steers clear of the raging vortex. 'Hold on tight!' he shouts, barely escaping its pull.",
  },
  {
    distance: 1500,
    step: "Interact with Saturn's Rings",
    boost: 55,
    story:
      "Rocky ventures into Saturn's rings, marveling at the dazzling ice particles. 'It's like a cosmic merry-go-round!' he laughs.",
  },
  {
    distance: 1800,
    step: "Visit Uranus and Neptune",
    boost: 60,
    story:
      "Rocky visits the twin ice giants, Uranus and Neptune. 'Cold and beautiful. Just like a snow globe!' he chatters, shivering with excitement and cold.",
  },
  {
    distance: 2100,
    step: "Flyby Pluto",
    boost: 65,
    story:
      "Pluto may not be a planet anymore, but it's still a noteworthy milestone for Rocky. 'Size isn't everything!' he states, appreciating the small celestial body.",
  },
  {
    distance: 2400,
    step: "Navigate the Kuiper Belt",
    boost: 70,
    story:
      "Rocky finds himself in the Kuiper belt, a region filled with icy bodies. He skilfully dodges them, a little like an interstellar slalom.",
  },
  {
    distance: 2700,
    step: "Cross the Heliopause",
    boost: 75,
    story:
      "Crossing the boundary of the solar system, Rocky enters interstellar space. 'Uncharted territory, here I come!' he exclaims with a sense of pride and accomplishment.",
  },
  {
    distance: 3000,
    step: "Discover a new star",
    boost: 80,
    story:
      "Rocky discovers a new star, shining brightly in the vast expanse of space. He names it 'Rocky's Radiance'.",
  },
  {
    distance: 3500,
    step: "Land on an Exoplanet",
    boost: 85,
    story:
      "Rocky lands on an exoplanet, filled with strange alien flora and fauna. 'This place is out of this world... literally!' he says, exploring the alien ecosystem.",
  },
  {
    distance: 4000,
    step: "Navigate an Alien Asteroid Belt",
    boost: 90,
    story:
      "Dodging alien asteroids is much trickier with unfamiliar physics, but Rocky handles it like a pro. 'Challenge accepted and conquered!' he says, weaving through the rocky maze.",
  },
  {
    distance: 4500,
    step: "Meet Alien Lifeforms",
    boost: 95,
    story:
      "Rocky encounters friendly alien lifeforms and learns about their culture. 'The universe is full of surprises!' he muses, making new friends.",
  },
  {
    distance: 5000,
    step: "Witness a Supernova",
    boost: 100,
    story:
      "Witnessing a supernova, Rocky is astounded by the raw power of the universe. 'Now that's a fireworks show!' he exclaims, watching the star explode in a brilliant array of colors.",
  },
  {
    distance: 6000,
    step: "Encounter an Interstellar Storm",
    boost: 110,
    story:
      "Rocky navigates an interstellar storm, barely making it out. 'That was a wild ride!' he exclaims, catching his breath.",
  },
  {
    distance: 7000,
    step: "Travel Through a Wormhole",
    boost: 120,
    story:
      "In an unexpected turn of events, Rocky travels through a wormhole, emerging in a different part of the galaxy. 'Shortcuts are quite handy!' he says, pleasantly surprised.",
  },
  {
    distance: 8000,
    step: "Discover a Galaxy",
    boost: 130,
    story:
      "Rocky discovers a whole new galaxy! Filled with excitement, he names it 'Rocky's Realm'.",
  },
  {
    distance: 9000,
    step: "Survive a Black Hole",
    boost: 140,
    story:
      "In a thrilling escapade, Rocky manages to escape the pull of a black hole. 'I'm not ready to be spaghettified yet!' he jokes, a bit shaken.",
  },
  {
    distance: 10000,
    step: "Cross a Nebula",
    boost: 150,
    story:
      "Crossing a nebula, Rocky is amazed by the cosmic colors. 'It's like a stellar painting!' he exclaims, gazing in wonder.",
  },
  {
    distance: 12000,
    step: "Land on a Quasar",
    boost: 160,
    story:
      "Landing on a quasar, Rocky is thrilled by the high-energy jets. 'This place is electrifying!' he says, inspecting the quasar.",
  },
  {
    distance: 14000,
    step: "Navigate the Dark Matter",
    boost: 170,
    story:
      "Navigating through patches of dark matter is no easy task, but Rocky does it. 'Navigating the unseen... completed!' he says, visibly satisfied.",
  },
  {
    distance: 16000,
    step: "Enter a Parallel Universe",
    boost: 180,
    story:
      "Rocky enters a parallel universe, where everything is...different. 'Did I just see a square planet?' he wonders, startled.",
  },
  {
    distance: 18000,
    step: "Time Travel Through a Wormhole",
    boost: 190,
    story:
      "Rocky accidentally travels back in time through a wormhole. 'Did I just see the Big Bang?' he wonders, bewildered.",
  },
  {
    distance: 20000,
    step: "Return Home",
    boost: 200,
    story:
      "After an unforgettable adventure, Rocky returns home, bringing tales of parallel universes, new galaxies, and time travel. 'Home sweet home,' he says, appreciating the familiar blue planet.",
  },
];

export default milestones;
