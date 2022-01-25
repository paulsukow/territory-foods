const express = require('express')
const csv = require('csv-parser')
const fs = require('fs')

const app = express()
const port = 3000

app.get('/meals', (req, res) => {
  const meals = []
  const filePath = './data/meals.csv'
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
      const tags = data.tags
        .replace('[', '')
        .replace(']', '')
        .replace(/'/g, '')
        .split(',')
        .map(it => it.trim())
      const mealType = data.mealType.split('/')
      meals.push({
        ...data,
        tags,
        mealType,
      })
    })
    .on('end', () => {
      console.log(meals)
      res.send(meals)
    })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
