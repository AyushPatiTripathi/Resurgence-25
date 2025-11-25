const eventsNames = [
    'Dance',
    'Drama',
    'Fine Art',
    'Music',
    'Photography',
    'Fashion',
    'Oratory',
    'Quizzing',
    'Humour',
    'Films',
    'Miscellaneous'
];

const ALL_EVENTS = [
    {
        "category_name": "Dance",
        "events": [
            {
               "name": "  Nrityanjali: The Rhythm of Roots (Folk Dance)",
                "details": "Tribute to India's diverse culture through traditional folk forms. Dance form assigned to each house. 46 min performance (including setup/exit). Mp3 tracks to be submitted 48 hrs prior.",
                "time": " 2:00PM-4:00PM",
                "venue": "",
                "date": "5 Dec",
                "Event Type": "Major",
                "Team/Individual": "Team (6-12 members)",
                "Max Participants" : " 5 teams",
                "Judging Criterias": " Authenticity (20), Synchronization (20), Costume (15), Creativity (20), Overall Impact (25) | Total: 100 marks",
            },
            {
                "name": "Urban Riot: Battle of Moves (Street Dance)",
                "details": " Urban hip-hop, breaking, popping, etc. 5-7 min performance with pre-mixed tracks (clean, no offensive lyrics). Props optional, must complement street style.",
                "time": " 5PM-7:00PM",
                "venue": "",
                "date": "2 Dec",
                "Event Type": "Major",
                "Team/Individual": " Team (8-14 members)",
                "Max Participants" : "  5 teams",
                "Judging Criterias": " Synchronization (20), Creativity (25), Energy (20), Technical Skill (20), Presentation (15) | Total: 100 marks",
            },
            {
                "name": "Aghosh: Beyond Sight (Blindfold Dance)",
                "details": "Symbolic dance performed blindfolded expressing a central theme. Open dance form (no classical/semi-classical). 4-6 min performance. Theme must be clearly represented.",
                "time": " 11:00AM-1:00PM",
                "venue": "",
                "date": "6 Dec",
                "Event Type": "Minor",
                "Team/Individual": " Team (6-8 members)",
                "Max Participants" : "5 teams",
                "Judging Criterias": "Theme Interpretation (20), Coordination (20), Creativity (20), Expression (20), Impact (20) | Total: 100 marks",
            },
            {
                "name": "RasRang: Two Souls, One Story (Theme Dance Drama Duo)",
                "details": " Two performers weave a story through dance, emotion, and synchronized acting. 3-4.5 min performance. Open dance form (classical, contemporary, lyrical, cinematic). Social/emotional depth required.",
                "time": " 2:00PM-3:00PM",
                "venue": "",
                "date": "29 Nov",
                "Event Type": "Minor",
                "Team/Individual": " Duo (2 members)",
                "Max Participants" : "Unlimited",
                "Judging Criterias": " Storytelling (20), Chemistry (20), Expression (20), Choreography (20), Appeal (20) | Total: 100 marks",
            }
        ]
    },
    {
        "category_name": "Music",
        "events": [
            {
                "name": " Symphony Showdown: Battle of the Bands",
                "details": " Group musical performance showcasing team coordination, musical creativity, and audience connection. Focus on originality and stage presence.",
                "time": " 2:00PM-5:00PM",
                "venue": "",
                "date": "6 Dec",
                "Event Type": "Major",
                "Team/Individual": "Group (4-8 members)",
                "Max Participants" : " 5 bands",
                "Judging Criterias": " Originality & Creativity (10), Coordination & Synchrony (10), Vocal Quality (10), Music & Rhythm (10), Stage Presence & Audience Impact (10) | Total: 50 marks",
            },
            {
                "name": " Musical Storytelling - Theme: Resurgence",
                "details": "5-7 minute act blending music, narration, and poetry to express the Resurgence theme. Focus on expression, originality, and emotional impact.",
                "time": "5:00PM-6:15PM",
                "venue": "",
                "date": "3 Dec",
                "Event Type": "Minor",
                "Team/Individual": " Group/Mixed-Form (3-7 members)",
                "Max Participants" : " 5 teams",
                "Judging Criterias": "Concept & Theme Portrayal (30), Creativity & Arrangement (25), Expression & Delivery (25), Overall Impact (20) | Total: 100 marks",
            },
            {
               "name": "SMVDU ke IDOLS: Duo Singing Competition",
                "details": "Duo singing competition. Karaoke allowed. Focus on vocal quality, expression, presentation, and stage presence.",
                "time": " 4:00PM-5:30PM",
                "venue": "",
                "date": "29 Nov",
                "Event Type": "Minor",
                "Team/Individual": "Individual (Duo format)",
                "Max Participants" : " Unlimited",
                "Judging Criterias": " Vocal Quality (10), Expression & Feel (15), Presentation (10), Stage Presence (5) | Total: 40 marks",
            },
            {
                "name": " Antakshari: Suron Ka Sangram",
                "details": " Lively musical showdown between houses. Spontaneous singing with quick recall. Teams battle through rapid-fire song choices.",
                "time": " 6:00PM-7:45PM",
                "venue": "",
                "date": "29 Nov",
                "Event Type": "Minor",
                "Team/Individual": "Team (2-4 members per house)",
                "Max Participants" : " 5 teams",
                "Judging Criterias": " Accuracy & Valid Song Choice (25), Team Coordination (15), Confidence & Presentation (10) | Total: 50 marks",
            },
            
        ]
    },
    {
        "category_name": "Drama",
        "events": [
            {
                "name": "Eklaa Chalo: Mono Act Competition",
                "details": " 5-8 min individual performance. Free topic choice (emotional, humorous, tragic). Background music/recorded voiceovers allowed. NO live offstage voiceovers. 50-word synopsis required before performance.",
                "time": "5:00PM-6:15PM",
                "venue": "",
                "date": "27 Nov",
                "Event Type": "Minor",
                "Team/Individual": "Individual",
                "Max Participants" : "Unlimited",
                "Judging Criterias": " Acting (30), Creativity in Script & Content (30), Dialogue Delivery & Voice Modulation (20), Stage Presence (20) | Total: 100 marks",
            
             },
             {
                "name": "Silent Drama: Mime Competition",
                "details": " 8-12 min team performance. NO dialogues or lip-syncing. Only expressions, physical movements, music. Face paint and small props allowed. Audio must be pre-submitted. Theme/title in one line required.",
                "time": "1:30PM-3:00PM",
                "venue": "",
                "date": "7 Dec",
                "Event Type": "Minor",
                "Team/Individual": "Team (5-10 members)",
                "Max Participants" : "5 teams",
                "Judging Criterias": " Expression & Body Language (25), Creativity & Presentation (25), Storyline & Message (25), Coordination & Synchronization (25) | Total: 100 marks",
            
            },
            {
                "name": "Rangmanch-e-Sadak: Street Play",
                "details": " 10-15 min street play. Unique theme assigned per house (randomized). NO recorded audio - all live. Street elements encouraged (claps, chants, dhaphli, placards). 150-word script outline mandatory. Open area venue.",
                "time": "4:15PM-6:15PM",
                "venue": "",
                "date": "30 Nov",
                "Event Type": "Minor",
                "Team/Individual": "Team (8-15 members)",
                "Max Participants" : "5 teams",
                "Judging Criterias": " Message & Relevance (25), Acting & Energy (25), Dialogue Delivery & Clarity (20), Team Coordination & Stage Use (15), Audience Engagement (15) | Total: 100 marks",
            },
            {
                "name": " Bollymania: Bollywood Recreation/Parody",
                "details": " 10-15 min street play. Unique theme assigned per house (randomized). NO recorded audio - all live. Street elements encouraged (claps, chants, dhaphli, placards). 150-word script outline mandatory. Open area venue.",
                "time": " 11:00PM-1:00PM",
                "venue": "",
                "date": "5 Dec",
                "Event Type": "Major",
                "Team/Individual": "Team (4-10 members)",
                "Max Participants" : "5 teams",
                "Judging Criterias": " Creativity & Adaptation (25), Acting & Comic Timing (25), Props & Costumes (20), Team Coordination (15), Audience Appeal (15) | Total: 100 marks",
            },
        ]       
    },
    {
        "category_name": "Fine Art",
        "events": [
            {
                "name": "Rangoli Competition",
                "details": "RULES: 60-90 minutes duration. Use colors, rice, flower petals, or sand on allocated space. No stencils allowed. Tools limited to hands, brushes, basic implements. Design must represent Resurgence theme or artistic expression. Safe materials only. No harsh chemicals. | RULEBOOK: Time 60-90 minutes. Traditional or contemporary design. Allocated space provided. No stencils. Colors/rice/petals/sand only. Hand/brush/basic tools. Resurgence theme recommended. Safe non-toxic materials only.",
                "time": "  11:15AM-12:30PM",
                "venue": "",
                "date": "29 Nov",
                "Event Type": "Minor",
                "Team/Individual": "Individual/Team",
                "Max Participants" : "Unlimited",
                "Judging Criterias": " Design Creativity & Originality (25), Color Harmony & Aesthetics (20), Theme Representation (20), Technical Precision (20), Overall Artistic Impact (15) | Total: 100 marks",
            },
            {
               "name": "Face Painting",
                "details": " RULES: Max 45 minutes per design. Open theme - animals, characters, abstract, or cultural themes allowed. Non-toxic, skin-safe colors only. Props and accessories optional. Volunteer canvas (person) provided. Minimal touch-up allowed. Hygiene maintained. | RULEBOOK: 45 minutes max per design. Non-toxic, skin-safe colors mandatory. Open theme. Volunteer provided. Props/accessories optional. Hygiene standards maintained. Depict animals, characters, abstract art, or cultural themes.",
                "time": "  10:00AM-11:15AM",
                "venue": "",
                "date": "30 Nov",
                "Event Type": "Minor",
                "Team/Individual": "Individual/Pair",
                "Max Participants" : "Unlimited",
                "Judging Criterias": "Artistic Design & Creativity (25), Color Blending & Technique (20), Theme Clarity & Execution (20), Use of Face Space (20), Originality (15) | Total: 100 marks",
            },{
                "name": "On spot Theme Painting",
                "details": "RULES: 60-90 minutes duration. Use colors, rice, flower petals, or sand on allocated space. No stencils allowed. Tools limited to hands, brushes, basic implements. Design must represent Resurgence theme or artistic expression. Safe materials only. No harsh chemicals. | RULEBOOK: Time 60-90 minutes. Traditional or contemporary design. Allocated space provided. No stencils. Colors/rice/petals/sand only. Hand/brush/basic tools. Resurgence theme recommended. Safe non-toxic materials only.",
                "time": " 1:45PM-4:00PM",
                "venue": "",
                "date": "29 Nov",
                "Event Type": "Minor",
                "Team/Individual": "Individual",
                "Max Participants" : "Unlimited",
                "Judging Criterias": "Theme Interpretation & Relevance (25), Composition & Visual Balance (20), Color Usage & Technique (20), Originality & Expression (20), Technical Skill & Finish (15) | Total: 100 marks",
            }
        ]
    },
    {
        "category_name": "Photography",
        "events": [
            {
                "name": "Campus Frame Hunt: Photo Scavenger Challenge",
                "details": "RULES: 60-minute challenge. Submit exactly 10 photos from theme list. Photos must be shot entirely on campus. Only basic editing allowed (exposure, contrast, crop). RAW/JPEG metadata may be checked. AI-generated images strictly prohibited. Teams can combine efforts. | RULEBOOK: Time limit 60 minutes. Photos shot entirely on campus. No AI-generated images. Basic editing only (exposure, contrast, crop). Submit 10 photos exactly. Metadata verification allowed. Safe non-flammable props only.",
                "time": " 6:00PM-7:30PM",
                "venue": "",
                "date": "29 Nov",
                "Event Type": "Major",
                "Team/Individual": "Individual/Team",
                "Max Participants" : "Unlimited",
                "Judging Criterias": " Photo Creativity & Composition (15), Theme Adherence & Originality (15), Technical Quality (10), Proper Submission Format (5), Editing Appropriateness (5) | Total: 50 marks",
            },
            {
               "name": " Fest Documentary Challenge: Videography",
                "details": " RULES: Duration 45-90 seconds. Handheld or gimbal only (no tripods blocking pathways). Interviews optional. Only real fest footage, no staged scenes. Must include natural ambient audio. Final output 1080p. Capture behind-the-scenes, participants, ambiance, reactions. | RULEBOOK: 45-90 second duration. Only real fest footage. Handheld/gimbal only. No tripods. Natural ambient audio required. 1080p output. Interviews optional. No staged scenes.",
                "time": " After battle of bands",
                "venue": "",
                "date": " 6 Dec",
                "Event Type": "Minor",
                "Team/Individual": " Individual/Team",
                "Max Participants" : "Unlimited",
                "Judging Criterias": " Concept & Documentary Style (20), Footage Quality & Cinematography (20), Storytelling & Narrative Flow (20), Audio Integration (15), Technical Execution & Format (15) | Total: 90 marks" ,
            },
            {
                "name": " Short Film Making Competition",
                "details": " RULES: Max team size 10. Final duration must be 8 minutes. Compulsory prop/line given at event start. Only campus-shot footage allowed. Use royalty-free or original music only. Video submitted in 1080p. Behind-the-scenes footage encouraged. No staged scenes outside campus. | RULEBOOK: Max 8 minutes. Team max 10 members. Campus only filming. Royalty-free or original music. 1080p submission. Compulsory prop/line at event start.",
                "time": " After battle of bands",
                "venue": "",
                "date": " 6 Dec",
                "Event Type": "Major",
                "Team/Individual": "Team (max 10 members)",
                "Max Participants" : "5 teams",
                "Judging Criterias": " Storytelling & Narrative Structure (25), Cinematography & Visual Quality (20), Creativity & Direction (20), Audio & Music Integration (15), Technical Execution (20) | Total: 100 marks",
            },
        ]
    },
    {
        "category_name": "Quizzing",
        "events": [
            {
                "name": "Genre Flip Challenge",
                "details": "Artist twist genre on the spot turning classics into unexpected masterpieces.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },{
                "name": "Hydro Thrust",
                "details": "A Science-meet-fun challenge where quizzing meets engineering.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },{
                "name": "Space Quiz",
                "details": "A cosmic Showdown testing the knowledge of participants on astronomy, space exploration, and celestial phenomena.",
                "time": "3:00 PM",
                "venue": "Amphitheatre",
                "date_time": "2025-11-21",
                "contact": "Priya Singh - 1122334455"
            },
        ]
    },{
        "category_name": "Oratory",
        "events": [
            {
                "name": "Behes: On-the-Spot English Debate",
                "details": " Two rounds - Round 1 (all 5 teams), Round 2 (top 3 teams). Topics drawn randomly. 30 min prep time llowed. No devices during performance.",
                "time": " 5:00PM-7:00PM",
                "venue": "",
                "date": " 1 Dec",
                "Event Type": "Minor",
                "Team/Individual": "Team (3 per house)",
                "Max Participants" : "5 teams",
                "Judging Criterias": " Content & Argument Strength (20), Delivery & Confidence (10), Interjections (10), Team Coordination (5), Time Management (5) | Total: 50 marks",
            },
            {
                "name": " Sansad'25: The Youth Parliament",
                "details": "10-hour event divided into 2 sessions. Simulated parliamentary debate. Bills submitted 48 hours prior. Government (3 houses) vs Opposition (2 houses).",
                "time": "9:00AM-7:00PM",
                "venue": "",
                "date": "4 Dec",
                "Event Type": "Major",
                "Team/Individual": " Team (10-15 per house)",
                "Max Participants" : " 50-75 total",
                "Judging Criterias": " Relevance & Argument Clarity (25), Creativity of Policy/Response (20), Delivery & Persuasion (20), Team Coordination (20), Decorum & Conduct (10) | Total: 100 marks",
            },
            {
               "name": " Voices Unbound: On-the-Spot Poetry Writing (Hindi & English)",
                "details": " 45-minute event. Write original poem (20-36 lines) based on theme revealed on spot. Recitation required (2-5 min). Hindi or English.",
                "time": "5:00PM- 6:00PM ",
                "venue": "",
                "date": " 26 Nov",
                "Event Type": " Minor",
                "Team/Individual": "Individual",
                "Max Participants" : " Unlimited",
                "Judging Criterias": " Theme Interpretation (15), Imagery & Creativity (15), Language & Poetic Devices (5), Emotional Impact (5), Recitation (10) | Total: 50 marks",
            },
            {
               "name": "  Vichaar Manthan: Hindi Debate",
                "details": " Topic revealed on spot. 30 minutes prep time with internet allowed. 2 minutes per speaker (no paper reading). Hinglish penalized.",
                "time": "5:00PM-6:30PM",
                "venue": "",
                "date": " 28 Nov ",
                "Event Type": " Minor",
                "Team/Individual": " Team (2 speakers per house)",
                "Max Participants" : " 5 teams",
                "Judging Criterias": "Argument Clarity (15), Language & Delivery (10), Persuasiveness (10), Structure & Flow (10), Adherence to Time (5) | Total: 50 marks",
            },
        ]
    }
    // Add other event categories here following the same structure
];


const eventsImgUrl = [
    'images/events/dance.svg',
    'images/events/drama.svg',
    'images/events/fine arts.svg',
    'images/events/music.svg',
    'images/events/photography.svg',
    'images/events/fashion.svg',
    'images/events/oratory.svg',
    'images/events/quizzing.svg',
    'images/events/humour.svg',
    'images/events/film fest.svg',
    'images/events/misc.svg'
];

const eventsContainer = document.getElementsByClassName("events-container")[0];

const numberOfEvents = eventsNames.length;
let eventIndex = 1;

const createEvent = (parentAppend) => {
    for (j = 0; j < numberOfEvents; j++) {
        let eventsCard = document.createElement('div');
        eventsCard.className = "events-card";
        if (j == 1) {
            eventsCard.classList.add('active');
        }

        let eventsCardFront = document.createElement('div');
        eventsCardFront.className = "events-card-front";

        let eventsNameContainer = document.createElement('div');
        eventsNameContainer.className = "event-name";
        let eventsName = document.createTextNode(eventsNames[j]);
        eventsNameContainer.appendChild(eventsName);
        eventsCardFront.appendChild(eventsNameContainer);

        let eventsCardFrontImg = document.createElement('div');
        eventsCardFrontImg.className = "event-img"
        eventsCardFrontImg.setAttribute('style', "background-image: url('" + eventsImgUrl[j] + "')");
        eventsCardFront.appendChild(eventsCardFrontImg);

        let seperator = document.createElement('hr');
        seperator.align = 'center';
        seperator.width = '35%';
        seperator.size = '5px';
        seperator.color = '#9A6D9A';
        eventsCardFront.appendChild(seperator);

        let eventsCardFrontLink = document.createElement('div');
        eventsCardFrontLink.className = "event-link";
        eventsCardFrontLink.innerHTML = "View Details >";
        eventsCardFront.appendChild(eventsCardFrontLink);

        eventsCard.appendChild(eventsCardFront);

        parentAppend.appendChild(eventsCard);
        const eventType = eventsNames[j];
        eventsCardFrontLink.addEventListener('click', () => {
            openAllEvents(eventType)
        });
    }
}

const createEventDots = () => {
    const dotsContainer = document.getElementsByClassName('events-nav-dots')[0];
    for (i = 0; i < ((window.innerWidth > 600) ? (numberOfEvents - 2) : numberOfEvents); i++) {
        let dot = document.createElement('div');
        dot.className = "event-nav-dot";
        dot.id = (i + 1);
        dot.setAttribute('onclick', 'navigateEvent(this.id)');
        if (i === 0) {
            dot.classList.add('active-dot');
        }
        dotsContainer.appendChild(dot);
    }
}

createEventDots();
createEvent(eventsContainer);
createEvent(document.getElementsByClassName('all-events-type-container')[0]);




const changeEventSet = () => {
    const limit = numberOfEvents;
    if (eventIndex < limit) {
        eventIndex++;
        if (window.innerWidth > 600) {
            eventsContainer.style.transform = "translate(" + (-27.15 * (eventIndex - 1)) + "%)";
        } else {
            eventsContainer.style.transform = "translate(" + (-100 * (eventIndex - 1)) + "%)";
        }
        (eventIndex == numberOfEvents) ? null : document.getElementsByClassName('events-card')[eventIndex].classList.add('active');
        for (dot of document.getElementsByClassName('event-nav-dot')) {
            dot.classList.remove('active-dot');
        }
        document.querySelectorAll('.events-nav-dots > .event-nav-dot')[eventIndex - 1].classList.add('active-dot')
    } else {
        eventIndex = 0;
        changeEventSet();
    }
}

const navigateEvent = (dotIndex) => {
    if(dotIndex <= 0) {
        eventIndex = ((window.innerWidth > 600) ? (numberOfEvents - 3) : (numberOfEvents - 1));;
        changeEventSet();
        return;
    }
    if(dotIndex > ((window.innerWidth > 600) ? (numberOfEvents - 2) : numberOfEvents)) {
        eventIndex = 0;
        changeEventSet();
        return;
    }
    if (eventIndex != dotIndex) {
        (eventIndex == numberOfEvents) ? null : document.getElementsByClassName('events-card')[eventIndex].classList.remove('active');
        eventIndex = dotIndex - 1;
        changeEventSet();
    }
}


if (window.innerWidth < 500) {
    let initialXContact = null;
    let initialYContact = null;

    function startTouchContact(e) {
        initialXContact = e.touches[0].clientX;
        initialYContact = e.touches[0].clientY;
    };

    function moveTouchContact(e) {

        if (initialXContact === null) {
            return;
        }

        if (initialYContact === null) {
            return;
        }

        let currentX = e.touches[0].clientX;
        let currentY = e.touches[0].clientY;

        let diffX = initialXContact - currentX;
        let diffY = initialYContact - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped leftevent.events.splice(i, 1);
                navigateEvent(eventIndex + 1);
            } else {
                // swiped right
                navigateEvent(eventIndex - 1);
            }
        }
        initialXContact = null;
        initialYContact = null;

        e.preventDefault();

    };

    document.getElementsByClassName('events')[0].addEventListener("touchstart", startTouchContact, false);
    document.getElementsByClassName('events')[0].addEventListener("touchmove", moveTouchContact, false);
}


function openAllEvents(type) {
    document.getElementById('event-details').style.display = 'flex';
    document.getElementsByClassName('event-type')[0].innerHTML = type;
    setTimeout(() => {
        document.getElementById('event-details').style.opacity = 1;
    }, 10);

    document.getElementsByClassName('all-events')[0].innerHTML = '';

    const eventNames = [];
    
    ALL_EVENTS.map(event => {
        if (event.category_name == type) {
            event.events.map(eve => {
                eventNames.push(eve.name);
            });
        }
        if (type == 'Miscellaneous') {
            if (event.category_name == 'Entertainment') {
                event.events.map(eve => {
                    eventNames.push(eve.name);
                });
            }
            if (event.category_name == 'Writing') {
                event.events.map(eve => {
                    eventNames.push(eve.name);
                });
            }
        }
    });
    
    let expSet = false;
    let tripSet  = false;
    eventNames.map(eventName => {
        if (!eventName.includes('Exposure') && !eventName.includes('TRIPPED: A VR Gaming Event')) {
            const event = document.createElement('div');
            const eventText = document.createElement('span');
            eventText.innerHTML = eventName;
            event.className = 'event';
            event.appendChild(eventText);
            document.getElementsByClassName('all-events')[0].appendChild(event);
            eventText.addEventListener('click', () => viewEventDetails(eventName, type));
        } else {
            console.log(eventName, expSet)
            if (eventName.includes('Exposure')) {
                if (!expSet) {
                    expSet = true;
                    const event = document.createElement('div');
                    const eventText = document.createElement('span');
                    eventText.innerHTML = eventName;
                    event.className = 'event';
                    event.appendChild(eventText);
                    document.getElementsByClassName('all-events')[0].appendChild(event);
                    eventText.addEventListener('click', () => viewEventDetails(eventName, type));
                }
            }
            if (eventName.includes('TRIPPED: A VR Gaming Event')) {
                if (!tripSet) {
                    tripSet = true;
                    const event = document.createElement('div');
                    const eventText = document.createElement('span');
                    eventText.innerHTML = eventName;
                    event.className = 'event';
                    event.appendChild(eventText);
                    document.getElementsByClassName('all-events')[0].appendChild(event);
                    eventText.addEventListener('click', () => viewEventDetails(eventName, type));
                }
            }
        }
    });
}

function closeEventDetails() {
    document.getElementById('event-details').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('all-events-tab').style.opacity = 1;
        document.getElementById('event-details-tab').style.opacity = 0;
        document.getElementById('all-events-tab').style.display = 'flex';
        document.getElementById('event-details-tab').style.display = 'none';
        document.getElementById('event-details').style.display = 'none';
    }, 500);
}

function viewEventDetails(eventName, eventType) {
    document.getElementById('all-events-tab').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('all-events-tab').style.display = 'none';
        document.getElementById('event-details-tab').style.display = 'flex';

        document.getElementsByClassName('event-detail-name')[0].innerHTML = eventName;

        let foundEvent = null;

        // Find the category that matches the eventType
        const category = ALL_EVENTS.find(cat => cat.category_name === eventType);

        if (category) {
            // Find the event within that category
            foundEvent = category.events.find(eve => eve.name === eventName);
        } else if (eventType === 'Miscellaneous') {
            // Handle Miscellaneous category by searching in others
            const miscCategories = ['Entertainment', 'Writing']; 
            for (const catName of miscCategories) {
                const miscCat = ALL_EVENTS.find(cat => cat.category_name === catName);
                if (miscCat) {
                    foundEvent = miscCat.events.find(eve => eve.name === eventName);
                    if (foundEvent) break;
                }
            }
        }

        if (foundEvent) {
            changeEventData(foundEvent);
        } else {
            // If no event is found, display a 'not found' message
            changeEventData({
                date_time: '',
                time: 'Not Found',
                venue: 'Not Found',
                details: 'Details for this event could not be found.',
                contact: ''
            });
        }
        
        setTimeout(() => {
            document.getElementById('event-details-tab').style.opacity = 1;
        }, 10);
    }, 250);
}

function backEventDetails() {
    document.getElementById('event-details-tab').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('event-details-tab').style.display = 'none';
        document.getElementById('all-events-tab').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('all-events-tab').style.opacity = 1;
        }, 10);
    }, 250);
}

function changeEventData(event) {
    if (!event) {
        return;
    }
    document.querySelector('.event-day > span').innerHTML = event.date_time ? event.date_time.substr(0, 10) : 'TBA';
    document.querySelector('.event-time > span').innerHTML = event.time || 'TBA';
    document.querySelector('.event-venue > span').innerHTML = event.venue || 'TBA';
    
    document.querySelector('.event-description').innerHTML = event.details || 'No description available.';
    
    const contactElement = document.querySelectorAll('.event-contact > div')[1];
    contactElement.innerHTML = event.contact || 'NA';
}


function showAllEvents() {
    document.getElementsByClassName('all-events-type')[0].style.display = 'block';
    setTimeout(() => {
        document.getElementsByClassName('all-events-type')[0].style.opacity = 1;
    }, 10)
}

function backAllEvents() {
    document.getElementsByClassName('all-events-type')[0].style.opacity = 0;
    setTimeout(() => {
        document.getElementsByClassName('all-events-type')[0].style.display = 'none';
    }, 500)
}