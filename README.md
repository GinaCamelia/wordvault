# Word Vault
React-based application that allows users to explore words and their various associations.

## Description

**WordVault** is a search tool that allows users to explore and find various information about a particular word they are interested in. The app is built using React, a popular JavaScript library for building user interfaces.

It has several features that enable users to perform various searches and get different kinds of information about a word. These features include synonyms, rhyming words, means like, photos, direct meronyms(part of), and triggers.

The **synonyms** feature allows users to search for words that have the same or similar meanings as the search query.

The **rhyming** words feature allows users to search for words that rhyme with the search query.

The **means-like** feature allows users to search for words that are similar to the search query in terms of meaning.

The **photos** feature allows users to search for photos related to the search query. The app retrieves a list of photos from an API and displays them in a gallery format.

The direct **meronyms (part of)** feature allows users to search for words that are part of the search query.

The **triggers** feature allows users to search for words that are closely associated with the search query.

Users can search for a word by *typing it into the search box* and hitting **enter**. The app then retrieves and displays the relevant information.

Overall, this app provides a convenient and easy-to-use search tool for exploring and discovering information about words. Whether you're a writer, student, or just someone who loves words, this app can help you expand your vocabulary and deepen your understanding of language.

## Usage
Upon loading, the app displays a search bar where the user can input a keyword. The app will then display information about the keyword in various categories, including:

*   **Words that rhyme;**
*   **Synonyms;**
*   **Means Like (words with similar meanings);**
*   **Direct meronyms (parts of the word);**
*   **Triggers (words that are statistically associated with the query);**
*   **Photos (Pexels API).**

![](./src/resources/WordVault.png)

## Installation

1. Clone this repository: https://github.com/{Your-Username}/wordvault.git
2. Navigate to the repository: cd wordvault;
3. Install dependencies: npm install;
4. Start the app: npm start / npm run start;
5. Open http://localhost:3000 in a browser.

## Dependencies

This app requires the following dependecies:
*   "@testing-library/jest-dom": "^5.16.5",
*   "@testing-library/react": "^13.4.0",
*   "@testing-library/user-event": "^13.5.0",
*   "axios": "^1.3.4",
*   "bootstrap": "^5.2.3",
*   "react": "^18.2.0",
*   "react-dom": "^18.2.0",
*   "react-scripts": "5.0.1",
*   "web-vitals": "^2.1.4".

## Credits

This app was created by me (Gina Camelia). It makes use of the following API's:
* **Datamuse Api;**
* **Pexels Api;**

## License

*MIT License*



