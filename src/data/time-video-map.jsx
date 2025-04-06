// Time of day mapping with friendly greetings
export const timeOfDayMap = {
  morning: {
    label: "Morning",
    hours: [6, 7, 8, 9, 10, 11],
    greeting: "Good Morning, Sunshine!",
  },
  afternoon: {
    label: "Afternoon",
    hours: [12, 13, 14, 15, 16, 17],
    greeting: "Good Afternoon, Friend!",
  },
  evening: {
    label: "Evening",
    hours: [18, 19, 20, 21],
    greeting: "Good Evening, Explorer!",
  },
  night: {
    label: "Night",
    hours: [22, 23, 0, 1, 2, 3, 4, 5],
    greeting: "Welcome, Night Owl!",
  },
}

// Video mapping for each time of day
export const videoMap = {
  // Default fallback video
  default: "https://assets.mixkit.co/videos/preview/mixkit-setting-up-a-tent-in-the-forest-10061-large.mp4",

  // Time of day videos
  morning: "/videos/morning.mp4",
  afternoon: "/videos/afternoon.mp4",
  evening: "/videos/evening.mp4",
  night: "/videos/night.mp4",
}

// For development/testing, you can replace the actual video paths with placeholders
const placeholderVideos = {
  morning:
    "https://assets.mixkit.co/videos/preview/mixkit-morning-fog-in-a-forest-with-the-sun-peeking-through-42096-large.mp4",
  afternoon:
    "https://assets.mixkit.co/videos/preview/mixkit-meadow-surrounded-by-trees-on-a-sunny-afternoon-40647-large.mp4",
  evening: "https://assets.mixkit.co/videos/preview/mixkit-sunset-over-the-sea-1113-large.mp4",
  night: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4",
}

// Uncomment this to use placeholder videos for testing
// Object.keys(placeholderVideos).forEach(key => {
//   videoMap[key] = placeholderVideos[key];
// });

