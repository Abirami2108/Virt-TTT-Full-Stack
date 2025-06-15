// 6. You have a module that exports a Movie class. The class stores movie details (title, director, year). Write a program that:
// •	Imports the Movie class.
// •	Uses a function fetchMovieDetails(id) that returns a Promise resolving after 2 seconds with a movie object.
// •	Uses destructuring and spread/rest operators in the process.
// •	Prints a formatted message about the movie using template literals.
// •	Use let and const appropriately and arrow functions where possible.

Here's a **TypeScript solution** split into two parts:

---

## 📦 Part 1: Movie Module (`Movie.ts`)

This is your module that exports the `Movie` class.

```ts
// Movie.ts
export class Movie {
    title: string;
    director: string;
    year: number;

    constructor(title: string, director: string, year: number) {
        this.title = title;
        this.director = director;
        this.year = year;
    }
}
```

