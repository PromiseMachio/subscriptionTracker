const subscriptionErrorHandler = (err,req,res,next)=>{
    try {
        let error = {...err}

        error.message = err.message
        console.log(err)

        //Types of errors that we might encounter 
        // Cast error also know as "NOT_FOUND"
        if(err.name === "castError"){
            const message = "Resource not found!";
            error = new Error(message);
            err.statusCode=404;
        }
        // Duplication error 1100
        if(err.code === 1100){
            const message = "Duplicated objectsID";
            error = new Error(message);
            err.statusCode = 400;

        }
        // Validation error
        if(err.name === "ValidationError"){
            const message = Object.values(err.errors).map(val => val.message) // This is because the validation errors might be many so using map method we can use that to display all the error messages 
            error = new Error(message.join(" ,"));
            err.statusCode=400;
        }
        res.status(error.status || 500).json({success:false, error:error.message || 'server error' })
        next()
    } catch (error) {
        
    }
}
export default subscriptionErrorHandler;