[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com"
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "email": "jane.doe@example.com"
    },
    {
        "id": 3,
        "name": "Bob Smith",
        "email": "bob.smith@example.com"
    },
    {
        "id": 4,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com"
    },
    {
        "id": 5,
        "name": "Charlie Brown",
        "email": "charlie.brown@example.com"
    },
    {
        "id": 6,
        "name": "Diana Prince",
        "email": "diana.prince@example.com"
    }
]
fetch('data.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    ;fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(record => {
            console.log(record.name); // Display the 'name' key-value pair
        });
    })
    .catch(error => console.error('Error:', error));
    // Function to get the total number of records
    function getTotalRecords(data) {
        return `The total number of records is ${data.length}.`;
    }

    // Function to get the first record's name
    function getFirstName(data) {
        return `The first record's name is ${data[0].name}.`;
    }

    // Function to get the last record's email
    function getLastEmail(data) {
        return `The last record's email is ${data[data.length - 1].email}.`;
    }

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(getTotalRecords(data));
            console.log(getFirstName(data));
            console.log(getLastEmail(data));
        })
        .catch(error => console.error('Error:', error));
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Write data to console

                // Write data to browser window as HTML
                let html = '';
                data.forEach(record => {
                    html += `<p>ID: ${record.id}, Name: ${record.name}, Email: ${record.email}</p>`;
                });
                document.body.innerHTML += html; // Append the HTML to the existing content
            })
            .catch(error => console.error('Error:', error));