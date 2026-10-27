# 724 Events — Debugging an existing React app

React · Jest · React Testing Library · React DevTools · Context API

> From OpenClassrooms 

724 Events is a one-page site for an events agency. A previous developer left it **broken and unfinished**,
with a short list of known issues ([`issues.md`](issues.md)). My job was to take over a codebase I didn't write,
find the bugs (known and unknown), fix them, and **get the whole test suite green** before release.

**Result: 16 test suites, 46 tests passing ✅** (`yarn test`)

## Bugs I found and fixed

| Area | Problem | Fix |
|---|---|---|
| **Slider** | Events showed in random order instead of newest first | Fixed the sort comparator (`<` → `>`) to get descending dates |
| **Slider** | Auto-play went one slide too far and showed a blank slide; timers piled up | Wrapped the index with `% length`, moved the timer into `useEffect` with a `clearTimeout` cleanup |
| **Slider** | The pagination dots didn't follow the current slide and couldn't be clicked | Compared against the real `index` state, added `onChange`, used stable `key`s |
| **Category filter** | Picking a type didn't filter anything | The `Select` never passed the chosen value to `onChange`. Added the missing `.filter(event.type === type)` before pagination |
| **Dates** | Every month label was off by one | `getMonth()` returns 0–11, so the lookup needed `+1` |
| **Contact form** | The form sent, but the success message never appeared | The `onSuccess()` callback was never called |
| **Footer** | The "latest event" card was empty | `last` didn't exist in the context. Got it from the events data instead |
| **Misc** | Slide images all had `alt="forum"`; React key warnings | Used the real event title as `alt`; fixed duplicate keys |

## How I worked

1. **Read the existing tests first.** The failing tests pointed straight at several bugs.
2. Used **React Developer Tools** to follow the state and Context data through the component tree.
3. Fixed one bug per commit, with a message that names the file and explains the change.
4. Re-ran the full suite after each fix so nothing else broke.

## Run it locally

Requires Node.js ≥ 16.14

```bash
yarn install
yarn start   # dev server
yarn test    # Jest + React Testing Library
```

## What I learned

- Reading and fixing **someone else's code**, a big part of real-world development
- Using a test suite as a map of how the app is supposed to behave
- Common React pitfalls: effects without cleanup, unstable keys, callbacks that are never called
- Debugging with React DevTools instead of guessing

<details>
<summary>🇫🇷 Version française</summary>

### 724 Events — Débogage d'une application React

Projet d'OpenClassrooms. Reprise d'un site vitrine d'agence événementielle
laissé **bugué et inachevé** par un autre développeur.

- Tri des événements du plus récent au plus ancien et défilement automatique du carrousel corrigés (nettoyage du `setTimeout`, index en boucle)
- Pagination du carrousel synchronisée et cliquable
- Filtre par catégorie réparé (valeur non transmise par le `Select`, filtre manquant)
- Décalage d'un mois corrigé dans `getMonth`
- Message de confirmation du formulaire (`onSuccess` jamais appelé)
- Dernier événement du footer affiché correctement

**Résultat : 16 suites, 46 tests au vert** — `yarn install && yarn test`

</details>
