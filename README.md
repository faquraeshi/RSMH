# RSMH
RSMH aka **React State Management** using **Hooks** is an outcome of practicing state management using `React Hooks` only for small projects.

** Bonus: I've also experimented with `ReactQuery` (*v2*)

## Getting Started
After cloning the repo, first install necessary node modules
```bash
yarn
```
and then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Follwing are the steps I followed
> 1. Started with local state(s)
> 2. Lifting state(s) up and consume with props drilling
> 3. Finally, with a global context using `useContext` hook
> 4. also used `memo` for memoization
> 5. (*experimental*) used `React Query` for fething external data