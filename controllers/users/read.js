//imortamos el modelo porque ya habla con la base de datos y necesitamos precisamente eso
import { request, response } from 'express'
import User from '../../models/User.js'


let req = request
let res = response

let allUsers = async (req, res, next) => {

    try {
        let all = await User.find()
        return res.status(200).json(

            {response: all}
        )     
    } catch (error) {
         return res.status(500).json(
            {response: error }
         )
    }
}


let usersByName = async (req, res, next) => {

    try {
        let nameQuery = req.params.nameParams
        console.log(nameQuery)
        //Aca se filtra para encontrar un solo name
        let all = await User.find({name:nameQuery})

        return res.status(200).json(

            {response: all}
        )     
    } catch (error) {
         return res.status(500).json(
            {response: error }
         )
    }
}


let usersById = async (req, res, next) => {

    try {
        let idQuery = req.params.idQuery
        console.log(idQuery)
        
        //Aca se filtra para encontrar un solo name
        let all = await User.findById(idQuery)

        return res.status(200).json(

            {response: all}
        )     
    } catch (error) {
         return res.status(500).json(
            {response: error }
         )
    }
}



export {allUsers, usersByName,usersById}


