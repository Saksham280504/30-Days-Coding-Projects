// This is an example of fetching data from a file
// fetch('file1.txt')
// .then(response => {
//     if(!response.ok) {
//         throw new Error('Network is not Responding');
//     }
//     return response.text();
// })
// .then(data => console.log(data))
// // .catch(error => console.log('error'));
// // .catch(error => console.log(error));
// .catch(error => console.error(error));

// Let's now understand fetching data by sending API requests on server

// API Call (method: 'GET') (getting a resource)
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// API Call (method: 'GET') (Listing all resources)

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then(json => json.forEach(element => {
//     console.log(element.title);
//   }));

// API Call (method: 'POST') (Creating a resource)

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// API Call (method: 'PUT') (Updating a resource)

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// API Call (method: 'DELETE') (Deleting a resource)

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});

// There are multiple other fetch API types, but these are the most commonly used



