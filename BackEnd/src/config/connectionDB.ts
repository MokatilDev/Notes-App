import mongoose from "mongoose"

const connectionWithDB = () => {
    mongoose.connect(process.env.MONGOOSE_URI)
        .then(() => {
            console.log("Connected with database")
        }).catch((e: Error) => {
            console.log(e, "Error")
        })
}

export default connectionWithDB