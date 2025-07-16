// 8. You have an object where keys are usernames and values are their scores. Write an async function that:
// •	Simulates fetching this data after 2 seconds.
// •	Uses Object.entries() to loop through the username-score pairs.
// •	Pads each username to 15 characters (right) and score to 5 digits (left).
// •	Logs the leaderboard in a clean, aligned format.

// Simulated score data
const userScores: Record<string, number> = {
    "alice": 985,
    "bob123": 10320,
    "charlie_longname": 745,
    "david": 5000
};

// Async function to simulate fetching after 2 seconds
const fetchScores = (): Promise<Record<string, number>> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(userScores);
        }, 2000);
    });
};

// Format and print leaderboard
const showLeaderboard = async (): Promise<void> => {
    const scores = await fetchScores();

    console.log("🏆 Leaderboard:");
    console.log("-------------------------------");

    Object.entries(scores).forEach(([username, score]) => {
        const paddedName = username.padEnd(15, ' ');
        const paddedScore = score.toString().padStart(5, '0');
        console.log(`${paddedName} | ${paddedScore}`);
    });

    console.log("-------------------------------");
};

// Run
showLeaderboard();
