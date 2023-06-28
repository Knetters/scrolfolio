import express from "express"
import fetch from "node-fetch"

const app = express()

const content = "https://raw.githubusercontent.com/Knetters/scrolfolio/main/public/content.json?token=GHSAT0AAAAAABYNOP4T7M2F2SUOP46CI5TWZE4R3QA" 

// Set up EJS as the view engine
app.set('view engine', 'ejs')
app.set("views", "./views")

// Serve static files from the public directory
app.use(express.static('public'))

// Route to index.ejs file
app.get('/', (req, res) => {

    fetchJson(content).then((data) => {
        res.render('index', data)
        // console.log(data)
    })
});

// Start the server
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`

  ░██████╗███████╗██████╗░██╗░░░██╗███████╗██████╗░  ██████╗░███████╗░█████╗░██████╗░██╗░░░██╗
  ██╔════╝██╔════╝██╔══██╗██║░░░██║██╔════╝██╔══██╗  ██╔══██╗██╔════╝██╔══██╗██╔══██╗╚██╗░██╔╝
  ╚█████╗░█████╗░░██████╔╝╚██╗░██╔╝█████╗░░██████╔╝  ██████╔╝█████╗░░███████║██║░░██║░╚████╔╝░
  ░╚═══██╗██╔══╝░░██╔══██╗░╚████╔╝░██╔══╝░░██╔══██╗  ██╔══██╗██╔══╝░░██╔══██║██║░░██║░░╚██╔╝░░
  ██████╔╝███████╗██║░░██║░░╚██╔╝░░███████╗██║░░██║  ██║░░██║███████╗██║░░██║██████╔╝░░░██║░░░
  ╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝  ╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░

  Application available on: http://localhost:${port}
  `)
});

async function fetchJson(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
  
  async function postJson(url, data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
}