module.exports = {
    port: process.env.PORT || 3000,
    callback: function (text){
        console.log(text);
    }
}