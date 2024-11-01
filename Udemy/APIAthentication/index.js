import express, { json } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "ella";
const yourPassword = "cinderella";
const yourAPIKey = "76724c9f-6c6c-42b5-8082-97c96e7fba96";
const yourBearerToken = "97464483-fc7e-41b7-b6b8-db9d3ef15e47";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth",async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const result=await axios.get(API_URL+"/random");
    res.render("index.ejs",{content:JSON.stringify(result.data)})
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth",async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  try {
     const result=await axios.get(API_URL+"/all?page=2",{
      auth:{
        username:yourUsername,
        password:yourPassword,
      },
     });
     res.render("index.ejs",{content:JSON.stringify(result.data)})
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    const result=await axios.get(API_URL+"/filter",{
     params:{
       score:5,
       apiKey:yourAPIKey,
     },
    });
    res.render("index.ejs",{content:JSON.stringify(result.data)})
 } catch (error) {
   res.status(404).send(error.message);
 }
});
const config={
  headers: { 
    Authorization: yourBearerToken, 
  },
};
app.get("/bearerToken", async(req, res) => {


  try {
    const result=await axios.get(API_URL+"/secrets/2", config);
    res.render("index.ejs",{content:JSON.stringify(result.data)})
  } catch (error) {
    res.status(404).send("error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
