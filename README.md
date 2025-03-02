# Crypto Price Tracker

This project consists of a simple cryptocurrency price tracker built with Next.js and a documentation site built with Docusaurus.

## Prerequisites

* Node.js (>= 18)
* npm or yarn

## Setup Instructions

### 1. Web Application (Next.js)

1.  **Clone the repository:**

    ```bash
    git clone <https://github.com/kballout/crypto-price-tracker.git>
    cd crypto-price-tracker
    ```

2.  **Navigate to the Next.js app directory:**

    ```bash
    cd web
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will be available at `http://localhost:3000`.

### 2. Documentation (Docusaurus)

1.  **Navigate to the Docusaurus documentation directory:**

    ```bash
    cd ../docs
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run start
    # or
    yarn start
    ```

    The documentation will be available at `http://localhost:3000`.

### 3. Installation of required packages.

Within the web directory, install the required packages.

```bash
cd ../web
npm install axios @tanstack/react-query