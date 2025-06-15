// 9. Imagine you are receiving user data from an async generator which yields user objects. Each user has an email field. You need to:
// •	Extract the domain from each email using a regular expression with named groups.
// •	Store all unique domains using a Set.
// •	Use for-await-of to handle the incoming stream.
// •	Use Promise.finally() to print “Stream completed” at the end, even if errors occur.
// Simulated async generator yielding user data
async function* getUserStream() {
    yield { email: "alice@example.com" };
    yield { email: "bob@work.org" };
    yield { email: "carol@example.com" };
    yield { email: "dave@school.edu" };
}

async function processUserStream() {
    const domainSet = new Set<string>();
    const emailRegex = /@(?<domain>[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

    const streamPromise = (async () => {
        try {
            for await (const user of getUserStream()) {
                const match = user.email.match(emailRegex);
                if (match?.groups?.domain) {
                    domainSet.add(match.groups.domain);
                }
            }

            console.log("Unique domains:", domainSet);
        } catch {
            console.error("Error while processing stream.");
        }
    })();

    
    return streamPromise.finally(() => {
        console.log("Stream completed");
    });
}

processUserStream();
