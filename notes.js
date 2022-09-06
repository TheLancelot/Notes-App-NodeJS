const chalk = require('chalk')
const fs = require('fs')

// const getNotes = function () {
//     return "These are your Notes...."
// }
const getNotes =()=>{
    return "These are your Notes...."
}

const addNote =(title, body)=>{

    const notes = loadNotes()
    // console.log(notes)

    //gotta check if title is already present in notes

    // const duplicateNotes = notes.filter(
    //     function (note) {
    //         return note.title === title
    //     }
    // )

   // const duplicateNotes = notes.filter((note)=>note.title === title)
     // if (duplicateNotes.length === 0) //there are no duplicates found
    // {
    //     //push an json object, note
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     saveNotes(notes)
    //     console.log(chalk.green.inverse.bold("New Note Added!"))
    // } else {
    //     console.log(chalk.red.bold.inverse("Your entered note title already exists"))
    // }
    //inner function is called for every note checks if cl arg wala title is present in our notes or not

  //but this iterates over all the notes which is not needed, agar our entered string mil gaya toh we have to stop only, so well use .find method

  //more efficient
const duplicateNote = notes.find((note)=>note.title === title)
 if (!duplicateNote) //there are no duplicates found
    {
        //push an json object, note
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold("New Note Added!"))
    } else {
        console.log(chalk.red.bold.inverse("Your entered note title already exists"))
    }
   

}

const removeNote = (title)=>{
    //load notes,filter to remove matching,save new updated
    const notes = loadNotes()

    // const notesToKeep = notes.filter(
    //     function (note) {
    //         return note.title !== title
    //     } //for every note, will check if its title is same to input, if yes then will not append to keep array, else it will
    // )
    
    const notesToKeep=notes.filter((note)=>note.title!==title)
    //so in notestokeep, itll have all notes whose title dont match cl arg title, so weve filtereed, basically deleted the note big brain massive

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.bold.inverse("Note with given title doesnt exist"))
    } else {
        console.log(chalk.green.bold.inverse("Note Removed!"))
        saveNotes(notesToKeep)
    }

}

const listNotes=()=>{

    console.log(chalk.inverse('Your Notes'))
    notes=loadNotes()
   
    notes.forEach((note)=>{
        console.log(note.title)
    })
}
const saveNotes =(notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON) //overwrite coz upar we are appending to notes, so here append not needed
}

const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const readNote=(title)=>{
const notes=loadNotes()

const note= notes.find((note)=>note.title === title)

 if (!note) //note not found
    {
console.log(chalk.red.bold.inverse("Error! No such note found"))
}
else{
    console.log(chalk.italic.underline(note.title))
    console.log(note.body)
}
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
}