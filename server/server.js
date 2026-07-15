import express from 'express'
import cors from 'cors'
import groq from './groq.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
    const start = Date.now()
    res.on('finish', () => {
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${Date.now() - start}ms`)
    })
    next();
})

app.post(`/api/groq`,async (req, res)=>{
    const question = req.body.question
    try {
        const answer = await groq(question)
        res.json({answer});
    } catch (err) {
        console.error(err)
        res.status(502).json({ error: err.message })
    }
});

const port = process.env.PORT ?? 3000
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
