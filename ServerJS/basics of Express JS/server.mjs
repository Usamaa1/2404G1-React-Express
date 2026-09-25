import express from 'express';
import path from 'path';
import productRoute from './route/productRoutes.mjs';
const app = express();
const port = 3000;

app.use(express.json())


const dirname =path.resolve();

console.log(dirname)

app.get('/', (req, res) => {
  res.send('Hello World!....');
});

app.get('/users',(req,res)=>{
  res.send({
    username: "Arif",
    age: 23,
    job: "Peon",
    qualification: "ADSE"
  })
});

app.get('/employees',(req,res)=>{
  res.json([
    {
      employeeName: "Haris",
      employeeNumber: "+92784375843",
      employeeJob: "Faculty",
      employeeSalary: 1400000,
    },
    {
      employeeName: "Anas",
      employeeNumber: "+92784375843",
      employeeJob: "Shohar",
      employeeSalary: 20000,
    },
    {
      employeeName: "Umer",
      employeeNumber: "+92784375843",
      employeeJob: "English Teacher",
      employeeSalary: 10000,
    }
  ])
})


app.get('/google',(req,res)=>{
  res.redirect('https://www.google.com/')
})


app.get('/vs-code',(req,res)=>{
  res.download('./softwares/VSCodeUserSetup-x64-1.129.0.exe')
})


app.get('/image',(req,res)=>{
  res.sendFile(`${dirname}/images/1.jpg`)
})


// REQUEST METHODS

app.post('/addUser',(req,res)=>{

  const userData = req.body;


  console.log(userData);
  res.send(userData);

})

app.post('/addProduct',(req,res)=>{
  
  const prod = req.query;

  console.log(prod);
  res.send(prod)

})

app.post('/addCity/:cityName',(req,res)=>{
  
  const cityName = req.params;
  console.log(cityName)

  res.send(cityName)
})


app.use("/api",productRoute)
















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});