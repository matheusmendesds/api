import app from './app.js'

const PORT = process.env.PORT || 3001

// escutar a porta 3000
app.listen(PORT, ()=>{
    console.log(`o servidor esta rodando no endereço http://localhost:${PORT}`)
})

