module.exports.helloWorld = (req, res) => {
    const responseObj = { msg: 'Hello world!' }; //mateix que json pero escrit en javaScript
    const responseStatus = 200;
    res.status(responseStatus).send(responseObj);
}

module.exports.exercici3 = (req, res) => {
    const nomsAlumnes = ["Alba", "Eric", "Miquel", "Biel", "Alejandro", "Albert", "Khadija", "Marcos", "Roger", "Jordi", "Pol", "Gerard", "Alex", "Xavi", "Marc", "Alvar"];
    const numAlumnes = nomsAlumnes.length;
    const responseObj = {
        nomsAl: nomsAlumnes,
        numAl: numAlumnes,
    };
    const responseStatus = 200;
    res.status(responseStatus).send(responseObj);
}