const express = require('express')
const hbs = require('hbs')

const app = express()

const { apiData } = require('./weather/weather')

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  })
})

app.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Projects'
  })
})

app.get('/weather/:id', (req, res) => {
  const location = req.params.id
  const data = async () => {
    const response = await apiData(location)
    res.render('weather', {
      data: response,
      location
    })
  }
  data()
})

app.listen(3000, () => {
  console.log('Server running in Port 3000')
})















// const  fs = require('fs')
// const yargs = require('yargs')
//
// const args = yargs
//   .command('add', 'Add name to note.txt', {
//     text: {
//       describe: 'Text of note.txt',
//       alias: 't',
//       demand: true
//     }
//   })
//   .command('read', 'Read note.txt')
//   .help()
//   .argv
//
// const command = args._[0]
//
// console.log(args)
// console.log(command)
//
// const addNote = (note) => {
//   fs.writeFileSync('note.txt', JSON.stringify(`${note}`))
// }
//
// const readNote = () => {
//   const contents = fs.readFileSync('note.txt')
//   console.log(JSON.parse(contents))
// }
//
// if (command === 'add') {
//   addNote(args.text)
// } else if (command === 'read') {
//   readNote()
// }
//
//
//
