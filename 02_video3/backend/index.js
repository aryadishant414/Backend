import express from 'express';
const app = express()


// filhaal mai root par kuch show nhi krwana chahta islie niche wale code ko comment krr rha hu
// app.get('/' , (req , res) => {
//     res.send("Server is ready");
// })


//get a list of 5 jokes
app.get('/api/jokes' , (req , res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 1,
            title: 'A third joke',
            content: 'This is another joke'
        },
        {
            id: 1,
            title: 'A fourth joke',
            content: 'This is fourth joke'
        },
        {
            id: 1,
            title: 'A fifth joke',
            content: 'This is fifth joke'
        },
        {
            id: 1,
            title: 'A sixth joke',
            content: 'This is sixth joke'
        },
        {
            id: 1,
            title: 'A seventh joke',
            content: 'This is seventh joke'
        },
        {
            id: 1,
            title: 'A eightth',
            content: 'This is eightth joke'
        },
        {
            id: 1,
            title: 'A nineth joke',
            content: 'This is nineth joke'
        },
        {
            id: 1,
            title: 'A tenth',
            content: 'This is tenth joke'
        },
    ];
    res.send(jokes);
})


const port = process.env.PORT || 3000;

app.get('/jokes' , (req , res) => {

});

app.listen(port , () => {
    console.log(`Serve at http://localhost:${port}`);
})