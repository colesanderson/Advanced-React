const Query = {
    dogs() {
        global.dogs = global.dogs || [];
        return global.dogs;
    },
};

module.exports = Query;
