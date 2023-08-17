import express, {json} from 'express'
import mongoose from "mongoose";
import Comment from "./Comment.js";
import router from "./router.js";

const PORT = 5000
const dbURL = 'mongodb+srv://drug2334:drug2334@cluster0.qcqfjbr.mongodb.net/?retryWrites=true&w=majority'

const app = express();
app.use(express.json())
app.use('/api', router)



async function startApp () {
    try {
        await mongoose.connect(dbURL)
        console.log("DB connected successfully")

        app.listen(PORT, () => {
            console.log(`Server started correctly on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp();
