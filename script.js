// script.js
const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Do not wait for the perfect moment. Take the moment and make it perfect.", author: "Unknown" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
];

// const quoteText = document.getElementById("quote");
// const quoteAuthor = document.getElementById("author");
// const generateButton = document.getElementById("generateQuote");

// generateButton.addEventListener("click", () => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
//     quoteText.textContent = `"${randomQuote.text}"`;
//     quoteAuthor.textContent = `- ${randomQuote.author}`;
// });

const quoteText = document.querySelector(".quote")
const authorText = document.querySelector(".author")
const generateButton = document.querySelector(".generateQuote")

generateButton.addEventListener("click" , ()=>{
    const randomIndex = Math.floor(Math.random() * quotes.length) 
    const randomQuote = quotes[randomIndex]
    quoteText.textContent = `"${randomQuote.text}"`
    authorText.textContent = `-${randomQuote.author}`
})