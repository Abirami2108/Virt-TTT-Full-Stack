
---

## 🚀 Part 2: Main Program (`index.ts`)

This file:

* Imports `Movie`
* Defines `fetchMovieDetails(id)`
* Uses destructuring and spread/rest
* Uses `const`, `let`, and arrow functions appropriately
* Prints a formatted message

```ts
// index.ts
import { Movie } from "./Movie";

// Simulated async fetch function
const fetchMovieDetails = (id: number): Promise<{ title: string; director: string; year: number; genre?: string }> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                title: "Inception",
                director: "Christopher Nolan",
                year: 2010,
                genre: "Sci-Fi"
            });
        }, 2000);
    });
};

// Main function to run the flow
const showMovieDetails = async (id: number): Promise<void> => {
    const movieData = await fetchMovieDetails(id);

    // Destructuring
    const { title, director, year, ...rest } = movieData;

    // Create Movie instance
    const movie = new Movie(title, director, year);

    // Output using template literal
    console.log(`🎬 Movie: "${movie.title}"`);
    console.log(`🎥 Directed by: ${movie.director}`);
    console.log(`📅 Released in: ${movie.year}`);

    // Optional: show extra details using spread/rest
    if (Object.keys(rest).length > 0) {
        console.log("📂 Additional Info:", rest);
    }
};

// Run
showMovieDetails(1);
```

---

### 🧠 Key Concepts Used

* `import/export` syntax for modules
* `async/await` with `Promise`
* Destructuring `{ title, ...rest }`
* Spread/rest operators
* `const` for fixed values, `let` if reassignment is needed
* Template literals for formatting output
* Arrow functions

---

### 🛠️ Compile & Run

Make sure your `tsconfig.json` has `"module": "ES6"` or `"commonjs"` depending on the environment. Run using:

```bash
tsc
node dist/index.js
```

Let me know if you'd like to test it with multiple movies or use `fetch()` from an API.