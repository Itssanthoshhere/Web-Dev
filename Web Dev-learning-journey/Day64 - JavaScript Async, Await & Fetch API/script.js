console.log("Script.js initializing!!"); // Logs the initialization of the script

// Function to fetch data asynchronously
async function getData() {
    // Simulating data retrieval from a server (this function is overridden later)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455); // Resolving promise with value 455 after 3.5 seconds
        }, 3500);
    })
}

/* 
    "Settle" means a promise has either resolved or rejected:
    - resolve: promise is successfully completed
    - reject: promise failed
*/

// Overriding the previous getData() function with an API fetch request
async function getData() {
    // Fetch data from an API endpoint (JSONPlaceholder)
    // The commented-out line below fetches a single To-Do item
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // HTTP method
        body: JSON.stringify({ // Sending a JSON payload
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Setting content type
        },
    });

    let data1 = await x.json(); // Parse response as JSON
    // Alternative way to parse response as text (commented out)
    // let data1 = await x.text();
    
    return data1; // Returning parsed data
}

// Main function to execute script logic asynchronously
async function main() {
    console.log("Loading modules"); // Logs module loading

    console.log("Do something else"); // Placeholder for other operations

    console.log("Load data"); // Indicates start of data fetching

    let data = await getData(); // Calls getData() and waits for response
    console.log(data); // Logs the received data

    console.log("Process data"); // Indicates start of data processing

    console.log("Task 2"); // Another task after processing data
}

// Calling the main function to execute the script
main();

/* 
    The following commented-out section was an alternative way to handle the promise:
    It uses `.then()` instead of `await`, but since `await` is used in `main()`, this is redundant.

    // data.then((v) => {
    //     console.log(data);
    //
    //     console.log("process data");
    //
    //     console.log("task 2")
    // })
*/
