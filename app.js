// const fs=require('fs')

// fs.writeFileSync('notes.txt','My name is Nishad, this is an updation to notes txt')

// fs.appendFileSync('notes.txt','My name is Nishad, this is an updation to notes txt')

// const myname=require('./utils.js')


// console.log(myname)

// const validator=require('validator')

const chalk = require('chalk')
const {
    demandOption
} = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

// const msg=printt()

// console.log(msg)
// console.log(chalk.red.bold.inverse.underline("Error"))
// console.log(process.argv[2])

// console.log(validator.isEmail('gmail.com'))

//console.log(process.argv)

//Customize yargs version
yargs.version('1.1.0')

/* Add Command*/
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function (argv) {
    //     notes.addNote(argv.title, argv.body)
    // }ES6 Method Definition syntax
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

/* Remove Command*/
yargs.command({
    command: 'remove',
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

/* List Command*/
yargs.command({
    command: 'list',
    describe: "Listing all the notes",
    handler() {
        notes.listNotes()
    }
})

/* Read Note Command*/
yargs.command({
    command: 'read',
    describe: "Reading a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log("This is your requested note!")
        notes.readNote(argv.title)
    }
})


yargs.parse()
// console.log(yargs.argv)





// const command=process.argv[2]


// if(command==='add')
// {
// console.log("Adding node!")
// }

// else if(command==='remove')
// {
//     console.log("Removing Note!")
// }