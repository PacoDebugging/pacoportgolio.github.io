document.addEventListener('DOMContentLoaded', () => {
	const languageButtons = Array.from(document.querySelectorAll('.language-toggle'));
	if (!languageButtons.length) return;

	const storageKey = 'portfolio-language';
	let currentLanguage = 'en';

	const englishToDutch = new Map([
		['Home', 'Startpagina'],
		['Projects', 'Projecten'],
		['Contacts', 'Contact'],
		['Latest Projects', 'Nieuwste projecten'],
		['This is my solo project from year 3.', 'Dit is mijn soloproject uit jaar 3.'],
		['This is my solo project from year 3. where ive worked on a top down pixel art shooter game, i made all the code and all the sprites myself', 'Dit is mijn soloproject uit jaar 3. Ik heb een top-down pixelart-shooter gemaakt en alle code en sprites zelf ontworpen.'],
		['main-picture', 'Hoofdafbeelding'],
		['About Me', 'Over mij'],
		['Language selector', 'Taalselectie'],
		['Game developer • illustrator • people person', 'Game-ontwikkelaar • illustrator • mensenmens'],
		['Skills', 'Vaardigheden'],
		['Interests', 'Interesses'],
		['Unity', 'Unity'],
		['C#', 'C#'],
		['UI Design', 'UI-ontwerp'],
		['Gameplay', 'Gameplay'],
		['Gaming', 'Gamen'],
		['Drawing', 'Tekenen'],
		['Walking', 'Wandelen'],
		['Pixel Art', 'Pixelkunst'],
		['Projects Showcase', 'Projectoverzicht'],
		['my current projects', 'Mijn huidige projecten'],
		['project 1', 'Project 1'],
		['project 2', 'Project 2'],
		['project 3', 'Project 3'],
		['Open details for Project 1', 'Details van project 1 openen'],
		['Open details for Project 2', 'Details van project 2 openen'],
		['Open details for Project 3', 'Details van project 3 openen'],
		['View details', 'Bekijk details'],
		['a top down pixel art shooter with a focus on mining materials', 'Een top-down pixelart-shooter waarin je materialen delft.'],
		['its a top down pixel art shooter with athe goal of collecting the designated amount of matierials to progress the game, its made in Unity with C#.', 'Het is een top-down pixelart-shooter waarin je een bepaalde hoeveelheid materialen verzamelt om verder te komen. De game is gemaakt met Unity en C#.'],
		['A small Unity prototype focused on core gameplay systems, level flow, and polished player feedback.', 'Een kleine Unity-prototype gericht op de belangrijkste gameplay-systemen, levelverloop en duidelijke feedback voor de speler.'],
		['A puzzle-based concept with a strong visual identity, UI feedback, and a clean progression loop.', 'Een puzzelconcept met een sterke visuele stijl, feedback in de interface en een duidelijke voortgang.'],
		['An atmospheric project aimed at storytelling, polish, and improving gameplay readability through visual cues.', 'Een sfeervol project gericht op verhaal, afwerking en duidelijke gameplay met behulp van visuele aanwijzingen.'],
		['Close project details', 'Projectdetails sluiten'],
		['Project preview', 'Projectvoorbeeld'],
		['Map visualizer project screenshot', 'Schermafbeelding van de kaartvisualisatie van het project'],
		['Enlarge both code snippet images', 'Beide codefragmentafbeeldingen vergroten'],
		['Code snippet showing tilemap visualization logic', 'Codefragment met de visualisatielogica van de tilemap'],
		['Code snippet showing tilemap corner logic', 'Codefragment met de hoeklogica van de tilemap'],
		['this is the code for the procedial map generation in the game. It shows how the tilemap is created and how the corners are handled.', 'Dit is de code voor de procedurele kaartgeneratie in de game. Je ziet hoe de tilemap wordt gemaakt en hoe de hoeken worden afgehandeld.'],
		['These movement snippets show the player controls and animation blend trees.', 'Deze bewegingscodefragmenten laten de besturing van de speler en de animation blend trees zien.'],
		['Enlarge all movement code snippet images', 'Alle afbeeldingen van bewegingscode vergroten'],
		['Player movement sprites shown together', 'Sprites van de spelersbeweging samen weergegeven'],
		['Movement code snippet showing player controls', 'Codefragment met de besturing van de speler'],
		['Movement animation blend tree', 'Blend tree voor bewegingsanimatie'],
		['Idle animation blend tree', 'Blend tree voor inactieve animatie'],
		['Enlarged code snippets', 'Vergrote codefragmenten'],
		['Close enlarged code snippets', 'Vergrote codefragmenten sluiten'],
		['Random map generation', 'Willekeurige kaartgeneratie'],
		['Movement code', 'Bewegingscode'],
		['Code snippet', 'Codefragment'],
		['// Code snippet coming soon...', '// Codefragment komt binnenkort...'],
		['Project 2 code snippets', 'Project 2-codefragmenten'],
		['Project 3 code snippets', 'Project 3-codefragmenten'],
		['Code snippets coming soon.', 'Codefragmenten komen binnenkort.'],
		['Contact Me', 'Contact'],
		['Contact Info', 'Contactgegevens'],
		['Email:', 'E-mail:'],
		['Location', 'Locatie'],
		['Netherlands', 'Nederland'],
		['I previously worked as a waiter, which taught me how to stay calm under pressure, work efficiently, and communicate with customers and coworkers in a positive way. I’m still improving my drawing skills, and I enjoy experimenting with different styles like pixel art, anime, and more realistic work. I also spend a lot of time gaming with friends.', 'Ik heb eerder als ober gewerkt. Hierdoor heb ik geleerd om rustig te blijven onder druk, vlot te werken en positief te communiceren met klanten en collega\'s. Ik werk nog steeds aan mijn tekenvaardigheden en experimenteer graag met verschillende stijlen, zoals pixelart, anime en realistische kunst. Ook game ik veel met vrienden.'],
		['Hi, I’m Paco van der Aar. I’m 18 years old and I love gaming, drawing, and long walks. I’m a bit introverted, but I still enjoy meeting people and talking with others. I’m learning game development with C# and Unity, and I’ve worked on several small projects, mostly focused on UI design before shifting my attention toward gameplay. I’d love to grow my skills by learning more coding languages and improving my overall knowledge across different areas.', 'Hoi, ik ben Paco van der Aar. Ik ben 18 jaar oud en ik hou van gamen, tekenen en lange wandelingen. Ik ben een beetje introvert, maar ik geniet nog steeds van het ontmoeten van mensen en met anderen praten. Ik leer gameontwikkeling met C# en Unity, en ik heb aan verschillende kleine projecten gewerkt, vooral gericht op UI-design voordat ik me meer op gameplay ging richten. Ik wil graag mijn vaardigheden verbeteren door meer programmeertalen te leren en mijn algemene kennis over verschillende aspecten uit te breiden.'],
		['I previously worked as a waiter, which taught me how to stay calm under pressure, work efficiently, and communicate with customers and coworkers in a positive way. I’m still improving my drawing skills, and I enjoy experimenting with different styles like pixel art, anime, and more realistic work. I also spend a lot of time gaming with friends and meeting new people through games like Overwatch, Rainbow Six Siege, Content Warning, and Dragon Ball Legends.', 'Ik heb eerder als ober gewerkt, wat me heeft geleerd om rustig te blijven onder druk, vlot te werken en op een positieve manier te communiceren met klanten en collega\'s. Ik verbeter nog steeds mijn tekenvaardigheden en ik geniet ervan om met verschillende stijlen te experimenteren, zoals pixelkunst, anime en realistischer werk. Ik besteed ook veel tijd aan gamen met vrienden en het ontmoeten van nieuwe mensen via games zoals Overwatch, Rainbow Six Siege, Content Warning en Dragon Ball Legends.']
	]);

	const dutchToEnglish = new Map(
		[...englishToDutch].map(([english, dutch]) => [dutch, english])
	);

	function normalizeText(value) {
		return value.replace(/\s+/g, ' ').trim();
	}

	function translateValue(value, isDutch) {
		const cleanValue = normalizeText(value);
		const translatedValue = (isDutch ? englishToDutch : dutchToEnglish).get(cleanValue);
		if (!translatedValue) return value;
		return translatedValue;
	}

	function translateNode(node, isDutch) {
		if (node.nodeType === Node.TEXT_NODE) {
			const translatedValue = translateValue(node.nodeValue, isDutch);
			if (translatedValue !== node.nodeValue) node.nodeValue = translatedValue;
			return;
		}

		if (node.nodeType !== Node.ELEMENT_NODE) return;

		['aria-label', 'alt'].forEach((attribute) => {
			const value = node.getAttribute(attribute);
			if (!value) return;
			const translatedValue = translateValue(value, isDutch);
			if (translatedValue !== value) node.setAttribute(attribute, translatedValue);
		});

		node.childNodes.forEach((child) => translateNode(child, isDutch));
	}

	function setActiveLanguage(languageCode) {
		currentLanguage = languageCode;
		const isDutch = languageCode === 'nl';

		languageButtons.forEach((button) => {
			const selected = button.dataset.language === languageCode;
			button.classList.toggle('is-active', selected);
			button.setAttribute('aria-pressed', String(selected));
		});

		translateNode(document.body, isDutch);
		document.title = translateValue(document.title, isDutch);
		document.documentElement.lang = isDutch ? 'nl' : 'en';

		try {
			window.localStorage.setItem(storageKey, languageCode);
		} catch {
			// The page can still be translated when storage is unavailable.
		}
	}

	try {
		currentLanguage = window.localStorage.getItem(storageKey) === 'nl' ? 'nl' : 'en';
	} catch {
		// Default to English when storage is unavailable.
	}

	languageButtons.forEach((button) => {
		button.addEventListener('click', () => setActiveLanguage(button.dataset.language));
	});

	setActiveLanguage(currentLanguage);

	window.addEventListener('storage', (event) => {
		if (event.key !== storageKey) return;
		setActiveLanguage(event.newValue === 'nl' ? 'nl' : 'en');
	});

	const observer = new MutationObserver((records) => {
		records.forEach((record) => {
			if (record.type === 'characterData') {
				translateNode(record.target, currentLanguage === 'nl');
				return;
			}
			record.addedNodes.forEach((node) => translateNode(node, currentLanguage === 'nl'));
			if (record.type === 'attributes') translateNode(record.target, currentLanguage === 'nl');
		});
	});

	observer.observe(document.body, {
		attributes: true,
		attributeFilter: ['aria-label', 'alt'],
		characterData: true,
		childList: true,
		subtree: true
	});
});
