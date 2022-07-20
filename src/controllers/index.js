
function index(req, res) {
    res.render('index', {
        title: 'Ghost register'
    })
}

module.exports = {
    index
}