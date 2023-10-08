# React Dictionary App

This is a simple dictionary app built with React. It allows users to search for word definitions, and preview searches.

## Features

- **Word Definitions:** Look up detailed definitions of words.
- **Preview Searches:** Revisit words which have been previously been searched up.
- **User-Friendly Interface:** Easy-to-use interface for seamless word search.

## Technologies Used

- HTML, CSS, JavaScript(React.js)
- [Your Dictionary API](https://yourdictionary.com): API for retrieving word data.

## Usage

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd Dictionary-Search`
3. Install dependencies: `npm install` (if not already installed)
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000`
6. Enter a word in the search bar and press enter key/search icon to see the results.

## Challenges Faced
I faced initial challenges while learning React, spending a week to understand components, JSX rendering, and state management. Transitioning from Python's event listeners to React's synthetic events was a learning curve. Implementing search history was tricky, but research helped me grasp local and session storage, ultimately choosing session storage for the feature.

## Design decisions 
I opted for a simplistic design to ensure a clean and intuitive user interface.  By keeping the design minimalistic, users can easily focus on the main functionality of the app without unnecessary distractions. Enabling the enter key(on top of the search button) to trigger the search functionality enhances efficiency. Users can quickly input their search query and press enter, eliminating the need to reach for the mouse and click a search button. Implementing scrollable results ensures a smooth user experience, especially when dealing with lengthy definitions. The results box appears only when a word is being searched, optimizing space utilization and adhering to the minimalist design. I center-aligned the contents of the app and utilized a flex layout. This decision ensures that the app is responsive and usable across various devices and screen sizes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


