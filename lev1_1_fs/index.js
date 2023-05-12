import fs from 'fs';


fs.writeFile('blog1.txt', "Hello World", (err) => {
    if (err) throw err;
    console.log('Die Datei blog1.txt hat erfolgreich einen text erstellt!')
})

fs.writeFile('blog2.txt', "Jojojo ihr geilen Säue", (err) => {
    if (err) throw err;
    console.log("Die Datei wurde erstellt und mit Text befüllt")
})

if (fs.existsSync('assets')) {
    fs.rmdirSync('assets', { recursive: true });
    console.log('Der Ordner "assets" wurde erfolgreich gelöscht')
}

fs.mkdir('assets', (err) => {
    if (err) throw err;
    console.log("assets Ordner wurde erfolgreich erstellt")
})

if (fs.existsSync('delete.')) {
    fs.rmdirSync('delete.txt', { recursive: true });
    console.log("Die Datei delete.txt wurde gelöscht")
}

fs.writeFile('delete.txt', "delete.txt wurde erfolgreich erstellt", (err) => {
    if (err) throw err;
    console.log("Die Datei delete.txt wurde erfolgreich erstellt")
})

fs.writeFile('Hello.txt', "Hello.txt Datei wurde erfolgreich erstellt", (err) => {
    if (err) throw err;
    console.log("Die Hello.txt Datei wurde erfolgreich erstellt")
})

fs.rename('Hello.txt', 'HelloWorld.txt', (err) => {
    if (err) throw err;
    console.log("Der Dateiname wurde erfolgreich zu HelloWorld.txt geändert")
})

