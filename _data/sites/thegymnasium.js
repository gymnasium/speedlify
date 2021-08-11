module.exports = {
	name: "thegymnasium.com", // optional, falls back to object key
	description: "Gymnasium",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 60 * 6, // 6 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://thegymnasium.com/",
		"https://thegymnasium.com/about",
		"https://thegymnasium.com/accessibility",
		"https://thegymnasium.com/collections",
		"https://thegymnasium.com/courses",
		"https://thegymnasium.com/design-systems",
		"https://thegymnasium.com/jobs",
		"https://thegymnasium.com/webinars",
		// Add one of each of our most popular courses by type
		"https://thegymnasium.com/courses/GYM/103/0/about", // Full: UX Fundamentals
		"https://thegymnasium.com/courses/course-v1:GYM+016+0/about", // Gym Short: Designing Responsible & Accessible Websites
		"https://thegymnasium.com/courses/take5/adding-a-css-gradient-overlay-to-an-image", // Take 5
	]
};
