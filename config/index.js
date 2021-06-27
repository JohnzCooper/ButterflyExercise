const PORT = 3010;
const company = "DEMO INC.";
const moods = {
    1: {
        v: 1,
        message: "Oops, something needs to change.",
        icon: "VeryUnhappy.svg"
    },
    2: {
        v: 2,
        message: "Mmmmh, things should improve.",
        icon: "Unhappy.svg"
    },
    3: {
        v: 3,
        message: "OK… things could be better.",
        icon: "Neutral.svg"
    },
    4: {
        v: 4,
        message: "Great!",
        icon: "Happy.svg"
    },
    5: {
        v: 5,
        message: "Awesome!",
        icon: "VeryHappy.svg"
    }
}

const questions = [
    {
        category: "Work/Life Balance",
        question: "I feel like I have a healthy work/life balance."
    },
    {
        category: "Management",
        question: "My direct manager gives me necessary support and clear objectives."
    },
    {
        category: "Workplace",
        question: "I feel like I have a healthy work/life balance."
    },
    {
        category: "Teamwork",
        question: "I feel comfortable working and interacting with the colleagues on my team."
    },
    {
        category: "Roles and Responsibilities",
        question: "I am satisfied with my roles and responsibilities."
    },
]

module.exports = {
    PORT,
    company,
    moods,
    questions
}