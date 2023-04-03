import express from 'express';
const dir = ""
const app = express()
const port = 4747
app.get('/'+ dir,(req,res)=>{
  res.send('I am index')
})

app.get('/hoody',(req,res)=>{
  console.log(req)
  res.send("I am a hoody")
})



app.listen(port,()=>{
  console.log(`Listening on http://localhost:${port}...`)
})