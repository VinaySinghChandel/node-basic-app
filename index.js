const express = require('express');
const app = express();

require('dotenv').config();

let myData = {
    "login": "VinaySinghChandel",
    "id": 48399865,
    "node_id": "MDQ6VXNlcjQ4Mzk5ODY1",
    "avatar_url": "https://avatars.githubusercontent.com/u/48399865?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/VinaySinghChandel",
    "html_url": "https://github.com/VinaySinghChandel",
    "followers_url": "https://api.github.com/users/VinaySinghChandel/followers",
    "following_url": "https://api.github.com/users/VinaySinghChandel/following{/other_user}",
    "gists_url": "https://api.github.com/users/VinaySinghChandel/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/VinaySinghChandel/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/VinaySinghChandel/subscriptions",
    "organizations_url": "https://api.github.com/users/VinaySinghChandel/orgs",
    "repos_url": "https://api.github.com/users/VinaySinghChandel/repos",
    "events_url": "https://api.github.com/users/VinaySinghChandel/events{/privacy}",
    "received_events_url": "https://api.github.com/users/VinaySinghChandel/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 13,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2019-03-10T04:40:36Z",
    "updated_at": "2025-04-30T15:16:10Z"
    };

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/twitter', (req, res) => {
    res.send('Vinay Singh Chandel');
});

app.get('/login', (req, res) => {
    res.send('<h1>Welcome Vinay</h1>');
});

app.get('/vinay', (req, res) => {
    res.json(myData);
});

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
