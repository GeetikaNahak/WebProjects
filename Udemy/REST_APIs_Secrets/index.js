import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = "6861b48b-095c-40ff-b0f2-5ec6386a8069";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  let data = JSON.stringify({
    "secret": "This is a new secret.",
    "score": "Embarrassment score"
  });
  
  let config1 = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://secrets-api.appbrewery.com/secrets',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${yourBearerToken}`,
    },
    data : req.body,
  };

  axios.request(config1)
.then((response) => {
  console.log(response);
  res.render("index.ejs",{content:JSON.stringify(response.data)});
})
.catch((error) => {
  console.log("Error Occured");
  res.render("index.ejs",{content:JSON.stringify(error.response.data)});
});
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
  try {
    const result=await axios.put(API_URL+"/secrets/"+searchId,req.body,config);
    res.render("index.js",{content:JSON.stringify(result.data)});
  } catch (error) {
    console.log(error);
    res.render("index.js",{content:JSON.stringify(error.response.data)});
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
  try {
    const result=await axios.patch(API_URL+"/secrets/"+searchId,req.body,config);
    res.render("index.js",{content:JSON.stringify(result.data)});
  } catch (error) {
    console.log(error);
    res.render("index.js",{content:JSON.stringify(error.response.data)});
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
  try {
    const result=await axios.delete(API_URL+"/secrets/"+searchId,req.body,config);
    res.render("index.js",{content:JSON.stringify(result.data)});
  } catch (error) {
    console.log(error);
    res.render("index.js",{content:JSON.stringify(error.response.data)});
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
