module.exports =(theFunc) => (req, res, next) => {
    promises.resolve(theFunc(ReadableStreamBYOBRequest, res, next)).catch(next);
};