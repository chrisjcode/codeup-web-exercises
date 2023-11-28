"use strict"
import { Octokit } from "https://esm.sh/@octokit/core";

// Needs to set token to this value
console.log(TOKEN);
let token = TOKEN;
let username = "chrisjcode";
let owner = username;
let repo = "codeup-web-exercises";
// time
let utc = new Date();
let offset = utc.getTimezoneOffset();


// Octokit.js
// https://github.com/octokit/core.js#readme

const octokit = new Octokit({
    auth: token
})
let commitAPI = `/repos/${owner}/${repo}/commits` ;
let eventsAPI = `/users/${username}/events/public`;
// const commitsResponse = await octokit.request(`GET ${commitAPI}`, {
//     username: username,
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
// })

// const eventsResponse = await octokit.request(`GET ${eventsAPI}`, {
//     username: username,
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
// })

// console.log(myGitHubCommitsData);
// myGitHubCommitsData.sort(function(a,b){
//     // Turn your strings into dates, and then subtract them
//     // to get a value that is either negative, positive, or zero.
//     return new Date(a.author.date) - new Date(b.author.date);
// });
// console.log(myGitHubCommitsData);
console.log(await getLatestCommitDate(username));

async function getLatestCommitDate(username){
    const commitsResponse = await octokit.request(`GET ${commitAPI}`, {
        username: username,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    console.log(commitsResponse?.data);


    return new Date(new Date(await commitsResponse?.data[0]?.commit?.author?.date)  + offset * 60000);
}

document.getElementById('lastCommitDate').innerHTML = await getLatestCommitDate(username);


