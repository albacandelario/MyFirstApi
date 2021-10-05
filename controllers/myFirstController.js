module.exports.helloWorld = (req, res) => {
    const responseObj = { msg: 'Hello world!' }; //mateix que json pero escrit en javaScript
    const responseStatus = 200;
    res.status(responseStatus).send(responseObj);
}