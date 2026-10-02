# Expense Intelligence

A modern personal finance dashboard built with React and Tailwind CSS.

Expense Intelligence allows users to track income and expenses, manage transactions, and quickly search and filter their financial activity through a clean dashboard interface.

## Live Demo

[View Expense Intelligence](https://YOUR-GITHUB-USERNAME.github.io/expense-intelligence/)

## Preview

<!-- Add a screenshot of the application here -->

## Features

- Add income and expense transactions
- Edit existing transactions
- Delete transactions
- Automatic balance calculation
- Automatic income and expense summaries
- Search transactions by title
- Filter transactions by type
- Filter transactions by category
- Form validation
- Responsive dashboard layout
- Scrollable transaction history
- Global state management with React Context
- Predictable state updates with `useReducer`
- GitHub Pages deployment with GitHub Actions

## Tech Stack

### Frontend

- React
- JavaScript
- Tailwind CSS
- Vite

### State Management

- React Context API
- `useReducer`
- `useState`
- `useEffect`

### Development

- Git
- GitHub
- GitHub Actions
- GitHub Pages

## Project Architecture

```text
src/
├── components/
│   ├── Dashboard.jsx
│   ├── Header.jsx
│   ├── SummaryCards.jsx
│   ├── TransactionFilters.jsx
│   ├── TransactionForm.jsx
│   ├── TransactionItem.jsx
│   └── TransactionList.jsx
│
├── context/
│   └── TransactionContext.jsx
│
├── reducers/
│   └── transactionReducer.js
│
├── data/
│   └── initialTransactions.js
│
├── utils/
│   └── transactionUtils.js
│
├── App.jsx
├── main.jsx
└── index.css