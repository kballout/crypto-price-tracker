// --- Docusaurus Documentation (docs/intro.md) ---

---
Intro: Crypto Price Tracker Documentation
---

## Project Setup

1.  **Clone the repository:** `git clone <repository_url>`
2.  **Navigate to the project directory:** `cd crypto-price-tracker`
3.  **Install dependencies:** `npm install` (for Next.js) and `npx create-docusaurus@latest website classic` (for Docusaurus in a seperate directory)
4.  **Run the Next.js app:** `npm run dev`
5. **Run the Docusaurus App:** `npm run start` in the website directory.

## API Integration

The application uses the CoinGecko API (`https://api.coingecko.com/api/v3/simple/price`) to fetch cryptocurrency prices.

* **Fetching Data:**
    * We use `axios` to make HTTP requests to the CoinGecko API.
    * The `useQuery` hook from `react-query` handles data fetching, caching, and error handling.
    * The `cryptoIds` array stores the names of the cryptocurrencies to fetch.
    * The API endpoint is constructed dynamically based on the `cryptoIds` array.
* **Updating Data:**
    * The "Refresh" button triggers the `refetch` function provided by `react-query`, which fetches the latest prices.
    * `refetchInterval` is set to false, so updates are manual.

## State Management

We use `react-query` for state management.

* **Why `react-query`?**
    * It simplifies data fetching, caching, and updating.
    * It provides built-in mechanisms for handling loading states and errors.
    * It provides automatic caching, resulting in a better user experience.
* **How it Works:**
    * The `useQuery` hook fetches data and stores it in the query cache.
    * The `isLoading` flag indicates whether data is being fetched.
    * The `data` variable stores the fetched data.
    * The `refetch` function allows us to manually update the data.

## Challenges and Solutions

1.  **Challenge:** Handling API errors.
    * **Solution:** `react-query` automatically handles errors and provides an `isError` flag. I added a conditional render to display an error message.
2.  **Challenge:** Filtering cryptocurrencies based on the search term.
    * **Solution:** I used the `filter` method on the `cryptoIds` array to create a filtered array based on the search term. I then mapped the filtered array to display the corresponding prices.
3. **Challenge:** Setting up Docusaurus.
    * **Solution:** Followed the Docusaurus documentation, and focused on clarity and structure in my documentation.