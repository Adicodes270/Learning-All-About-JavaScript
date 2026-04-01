const URL = "https://jsonplaceholder.typicode.com/posts";

const getFacts= async() => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].title);

};

getFacts();

// sending post requests