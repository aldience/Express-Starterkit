import Users from '../models/UserModel.js'
import argon2 from 'argon2'

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      attributes: ['uuid', 'name', 'email', 'role']
    })
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const getUsersById = async (req, res) => {
  try {
    const response = await Users.findOne({
      attributes: ['uuid', 'name', 'email', 'role'],
      where: {
        uuid: req.params.id
      }
    })
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const createUsers = async (req, res) => {
  const { name, email, password, confpassword, role } = req.body
  if (password !== confpassword) return res.status(400).json({ msg: 'password tidak cocok' })
  const hashPassword = await argon2.hash(password)
  try {
    await Users.create({
      name,
      email,
      password: hashPassword,
      role
    })
    res.status(201).json({ msg: 'Register berhasil' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const updateUsers = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.id
    }
  })
  if (!user) return res.status(404).json({ msg: 'user tidak ditemukan' })
  const { name, email, password, confpassword, role } = req.body
  let hashPassword
  if (password === '' || password === null) {
    hashPassword = user.password
  } else {
    hashPassword = await argon2.hash(password)
  }
  if (password !== confpassword) return res.status(400).json({ msg: 'password dan cofirm password' })
  try {
    await user.update(
      {
        name,
        email,
        password: hashPassword,
        role
      },
      {
        where: {
          id: user.id
        }
      }
    )
    res.status(200).json({ msg: 'user update' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const deleteUsers = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.id
    }
  })
  if (!user) return res.status(404).json({ msg: 'user tidak ditemukan' })
  try {
    await user.destroy({
      where: {
        id: user.id
      }
    })
    res.status(200).json({ msg: 'user deleted' })
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}
