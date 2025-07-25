// server.js

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 3001; // Port for our backend server

app.use(cors()); // Enable CORS for our React app

// --- The Scraper Logic ---
async function scrapeLeetCode() {
  try {
    // Fetch the HTML from LeetCode's contest page
    const { data } = await axios.get('https://leetcode.com/contest/');
    const $ = cheerio.load(data);

    const contests = [];
    
    // Find the container holding the contest cards
    // NOTE: This selector might change if LeetCode updates their website.
    $('.swiper-slide').each((i, element) => {
      const name = $(element).find('a > div > div:first-child').text().trim();
      const timeText = $(element).find('a > div > div:nth-child(2)').text().trim();
      const url = 'https://leetcode.com' + $(element).find('a').attr('href');

      if (name && timeText && url) {
        contests.push({
          name,
          platform: "LeetCode",
          // Basic parsing for date/time (can be improved with a date library)
          date: timeText,
          time: "",
          url,
        });
      }
    });

    return contests;
  } catch (error) {
    console.error('Error scraping LeetCode:', error);
    return []; // Return empty array on error
  }
}

// --- The API Endpoint ---
app.get('/api/contests', async (req, res) => {
  console.log('Fetching live contest data...');
  // In a real app, you would scrape multiple sites and combine the results
  const leetCodeContests = await scrapeLeetCode();
  
  // You could add more scrapers here:
  // const codeforcesContests = await scrapeCodeforces();
  // const allContests = [...leetCodeContests, ...codeforcesContests];
  
  res.json(leetCodeContests);
});

app.listen(PORT, () => {
  console.log(`Scraper server running on http://localhost:${PORT}`);
});