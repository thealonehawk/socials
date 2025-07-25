// Profile Configuration
// Edit this file to customize your profile

const CONFIG = {
	// Basic Profile Information
	profile: {
		image: "https://hawk.is-a.dev/img/hawk.png",
		name: "The Hawk",
		description: "Hi! I’m The <strong>Hawk</strong>, a passionate developer, open-source lover, and lifelong learner. I thrive on turning creative ideas into real-world projects and exploring the endless possibilities of technology.",

    // You may change the footer of your profile but keeping it intact will be appreciated.
		footer: "Powered by <a href='https://github.com/profilie/starter' target='_blank'>Profilie</a> - Free Templates for Social Profiles"
	},

	// Social Media Links
	// Set 'enabled' to 'true' to show the social media icon
	// Set 'enabled' to 'false' to hide the social media icon
	socials: {
		// Popular Development Platforms
		github: {
			enabled: true,
			url: "https://github.com/thealonehawk",
			title: "GitHub"
		},
		gitlab: {
			enabled: false,
			url: "https://gitlab.com/your-username",
			title: "GitLab"
		},
		bitbucket: {
			enabled: false,
			url: "https://bitbucket.org/your-username",
			title: "Bitbucket"
		},
		codepen: {
			enabled: false,
			url: "https://codepen.io/your-username",
			title: "CodePen"
		},
		replit: {
			enabled: false,
			url: "https://replit.com/@your-username",
			title: "Replit"
		},
		stackoverflow: {
			enabled: false,
			url: "https://stackoverflow.com/users/your-username",
			title: "Stack Overflow"
		},

		// Communication Platforms
		discord: {
			enabled: true,
			url: "https://discord.com/users/your-user-id",
			title: "Discord"
		},
		email: {
			enabled: true,
			url: "mailto:thealonehawk@gmail.com",
			title: "Email"
		},
		telegram: {
			enabled: false,
			url: "https://t.me/your-username",
			title: "Telegram"
		},
		whatsapp: {
			enabled: false,
			url: "https://wa.me/your-whatsapp-phone-number",
			title: "WhatsApp"
		},
		signal: {
			enabled: false,
			url: "https://signal.me/#p/+your-phone-number",
			title: "Signal"
		},
		skype: {
			enabled: false,
			url: "skype:YOUR_SKYPE_USERNAME?chat",
			title: "Skype"
		},

		// Social Media Platforms
		reddit: {
			enabled: false,
			url: "https://reddit.com/user/your-username/",
			title: "Reddit"
		},
		twitter: {
			enabled: false,
			url: "https://twitter.com/your-username",
			title: "Twitter"
		},
		facebook: {
			enabled: false,
			url: "https://facebook.com/your-username",
			title: "Facebook"
		},
		instagram: {
			enabled: false,
			url: "https://instagram.com/your-username",
			title: "Instagram"
		},
		tiktok: {
			enabled: false,
			url: "https://tiktok.com/@your-username",
			title: "TikTok"
		},
		snapchat: {
			enabled: false,
			url: "https://snapchat.com/add/your-username",
			title: "Snapchat"
		},
		mastodon: {
			enabled: false,
			url: "https://mastodon.social/@your-username",
			title: "Mastodon"
		},
		bluesky: {
			enabled: false,
			url: "https://bsky.app/profile/your-bluesky-handle",
			title: "Bluesky"
		},
		threads: {
			enabled: false,
			url: "https://threads.net/@your-username",
			title: "Threads"
		},

		// Professional Networks
		linkedin: {
			enabled: false,
			url: "https://linkedin.com/in/your-username",
			title: "LinkedIn"
		},
		behance: {
			enabled: false,
			url: "https://behance.net/your-username",
			title: "Behance"
		},
		dribbble: {
			enabled: false,
			url: "https://dribbble.com/your-username",
			title: "Dribbble"
		},
		upwork: {
			enabled: false,
			url: "https://upwork.com/freelancers/your-username",
			title: "Upwork"
		},
		fiverr: {
			enabled: false,
			url: "https://fiverr.com/your-username",
			title: "Fiverr"
		},

		// Content Creation Platforms
		youtube: {
			enabled: false,
			url: "https://youtube.com/@your-channel",
			title: "YouTube"
		},
		twitch: {
			enabled: false,
			url: "https://twitch.tv/your-username",
			title: "Twitch"
		},
		medium: {
			enabled: false,
			url: "https://medium.com/@your-username",
			title: "Medium"
		},
		devto: {
			enabled: false,
			url: "https://dev.to/your-username", // 
			title: "Dev.to"
		},
		hashnode: {
			enabled: false,
			url: "https://hashnode.com/@your-username",
			title: "Hashnode"
		},
		substack: {
			enabled: false,
			url: "https://your-username.substack.com",
			title: "Substack"
		},

		// Gaming Platforms
		steam: {
			enabled: false,
			url: "https://steamcommunity.com/id/your-username",
			title: "Steam"
		},
		epicgames: {
			enabled: false,
			url: "https://store.epicgames.com/u/your-username",
			title: "Epic Games"
		},
		xbox: {
			enabled: false,
			url: "https://account.xbox.com/profile?gamertag=your-username",
			title: "Xbox Live"
		},
		playstation: {
			enabled: false,
			url: "https://psnprofiles.com/your-username",
			title: "PlayStation"
		},

		// Music Platforms
		spotify: {
			enabled: false,
			url: "https://open.spotify.com/user/your-username",
			title: "Spotify"
		},
		soundcloud: {
			enabled: false,
			url: "https://soundcloud.com/your-username",
			title: "SoundCloud"
		},
		applemusic: {
			enabled: false,
			url: "https://music.apple.com/profile/your-username",
			title: "Apple Music"
		},
		bandcamp: {
			enabled: false,
			url: "https://your-username.bandcamp.com",
			title: "Bandcamp"
		},

		// Other Platforms
		pinterest: {
			enabled: false,
			url: "https://pinterest.com/your-username",
			title: "Pinterest"
		},
		tumblr: {
			enabled: false,
			url: "https://your-username.tumblr.com",
			title: "Tumblr"
		},
		flickr: {
			enabled: false,
			url: "https://flickr.com/people/your-username",
			title: "Flickr"
		},
		vimeo: {
			enabled: false,
			url: "https://vimeo.com/your-username",
			title: "Vimeo"
		},
		patreon: {
			enabled: false,
			url: "https://patreon.com/your-username",
			title: "Patreon"
		},
		kofi: {
			enabled: false,
			url: "https://ko-fi.com/your-username",
			title: "Ko-fi"
		},
		buymeacoffee: {
			enabled: false,
			url: "https://buymeacoffee.com/your-username",
			title: "Buy Me a Coffee"
		},

		// Personal Website/Portfolio
		website: {
			enabled: true,
			url: "https://hawk.is-a.dev/",
			title: "Website"
		}
	}
};
