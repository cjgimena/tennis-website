const app = Vue.createApp({
    data() {
        return {
            school: "UCLA",
            location: "Los Angeles, CA",
            upcomingMatch: "UCLA vs Stanford on January 15th, 2025",
            roster: [
                { name: "Rudy Quan", position: "1" },
                { name: "Emon van Loben Sels", position: "2" },
                { name: "Kaylan Bigun", position: "3" },
                { name: "Alexander Hoogmartens", position: "4" }
            ],
            pastMatches: [
                { opponent: "USC", score: "4-2", date: "December 10th, 2024", result: "Win" },
                { opponent: "Oregon",  score: "4-2", date: "November 20th, 2024", result: "Loss" },
                { opponent: "Arizona",  score: "4-2", date: "October 30th, 2024", result: "Win" }
            ]
        }
    }
})