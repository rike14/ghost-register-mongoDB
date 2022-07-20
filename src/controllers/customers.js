const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Register User'

function index(req, res) {
    res.render('register', {
        title: defaultTitle
    })
}

async function add(req, res){
   const {
       name,
       age,
       email,
       password,
   } = req.body

   const passwordCrypt =  await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypt,
    })

    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Successfully registered!!!'
    })
}

async function list(req, res){
    const users = await CustomersModel.find()


    res.render('list', {
        title: 'List Users',
        users,
    })
}

async function formEdit(req, res){
    const { id } = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Edit Users',
        user,
    })
}

async function edit(req, res){
    const {
        name,
        age,
        email,
        password
    } = req.body

    const { id } = req.params

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: 'Edit User',
        user,
        message: 'User successfully changed!',
    })

}

async function remove(req, res){
    const { id } = req.params

    const remove = await CustomersModel.deleteOne({_id: id})

    if (remove.deletedCount){
        res.redirect('/list')
    }
}
module.exports = {
    index,
    add,
    list,
    formEdit,
    edit,
    remove,
}