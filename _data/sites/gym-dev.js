module.exports = {
	name: "gymnasium.dev", // optional, falls back to object key
	description: "Gymnasium dev",
	skip: false,
	options: {
    // to set minimum time needed before next measurement
		frequency: 15 * 1, // Max of once every 15 min (see the github action for the actual CRON run time)
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://courses.gymna.si/",
		"https://courses.gymna.si/about",
		"https://courses.gymna.si/accessibility",
		"https://courses.gymna.si/courses",
		"https://courses.gymna.si/jobs",
		// Add one of each of our most popular courses by type
		"https://courses.gymna.si/courses/GYM/103/0/about", // Full: UX Fundamentals
		"https://courses.gymna.si/courses/course-v1:GYM+016+0/about", // Gym Short: Designing Responsible & Accessible Websites
		"https://courses.gymna.si/courses/take5/adding-a-css-gradient-overlay-to-an-image", // Take 5
	]
};
