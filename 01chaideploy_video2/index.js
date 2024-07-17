// console.log("Chai aur code");  // just to test


require('dotenv').config()
const express = require('express')  //This line exactly means the same as -> import express from "express" (chahe too yeh bhi likh skte hai hamm)
const app = express()  // ye 'app' variable apne aap mai bohot badi cheej hai just like our "MATH" library jisme bohott aare methods hote hai jine hamm access kar skte hai. isme bhi esa hee hai bohot saare methods hote hai. NOTE : app sirf ekk varible hai and usme abb jo bhi chije aayi hai wo express ki vajah sai aayi hai

// const port = 3000; // Before creating the environment variable hamne ye line likhi thi
const port = process.env.PORT || 4000;  // After creating our environment varible we have write this line for setting our `Port`

const githubData = {
    "login": "aryadishant414",
    "id": 121593973,
    "node_id": "U_kgDOBz9gdQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/121593973?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/aryadishant414",
    "html_url": "https://github.com/aryadishant414",
    "followers_url": "https://api.github.com/users/aryadishant414/followers",
    "following_url": "https://api.github.com/users/aryadishant414/following{/other_user}",
    "gists_url": "https://api.github.com/users/aryadishant414/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/aryadishant414/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/aryadishant414/subscriptions",
    "organizations_url": "https://api.github.com/users/aryadishant414/orgs",
    "repos_url": "https://api.github.com/users/aryadishant414/repos",
    "events_url": "https://api.github.com/users/aryadishant414/events{/privacy}",
    "received_events_url": "https://api.github.com/users/aryadishant414/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Dishant Arya",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Passionate and curious prefinal year CSE student. Consistently learning and exploring new technologies. Tech enthusiast with a fervent interest in coding.",
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 2,
    "following": 1,
    "created_at": "2022-12-29T03:54:42Z",
    "updated_at": "2024-07-13T02:03:20Z"
  }


//Ye niche wale code ka mtlb hai ki -> Example :  Ham jo bhi google par search krte hai too wo hame jo bhi chije show krwata hai wo iss niche wale code ki help sai hota hai. Jese hamne kuch google par search kiya then wo request (mostly "GET" request hee send hoti hai) backend mai server ke pass jaati hai then server aage ka kaam krta hai
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// 'GET' request example 2
app.get('/twitter' , (req , res) => {
    res.send('dishantarya')
})


// 'GET' request example 3
app.get('/login' , (req , res) => {
    res.send('<h1>please login at chai aur code</h1>')
} )



// 'GET' request example 4
app.get('/youtube' , (req , res) => {
    res.send("<h2>Chai aur code</h2>")
})


// // 'GET' request example 4
app.get('/github' , (req , res) => {
    res.json({githubData})
})



// ye niche wale code ka mtlb hai ki 'server' kuch listen kar rha hai. -> Example : abb jese hee user ne google par search kara too jab backend mai sever uss request ko dekhege too hawa mai too dekhega nhi usko koi too jagah chhahiye hogi and ussi jagah ko ham `port` kehte hai. ki hey server tum iss port number par request ko handle kro. without 'Port' koi bhi request server par handle hee nhi hogi
app.listen( port , () => {
  console.log(`Example app listening on port ${port}`)
})


// Note : ye `index.js` file -> Server hai jo ki hamne banaya hai. Yeh `.get` and `.listen` methods sai milke server bann gaya hai


// v.Imp Note: dont forget to put `/`(slash)  in our "GET" request from the server

