class ErrorHandler extends Error{
    constructor(message,statiscode){
        super(message);
        this.statuscode = statuscode || 500;

        Error.captureStactTrace(this,this.constructor);

    }

}
module.exports = ErrorHandler 