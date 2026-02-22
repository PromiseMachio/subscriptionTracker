import mongoose from "mongoose";
// import User from "./user.modules";

const subscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0

    },
    frequency:{
        type:String,
        required:true,
        enum:['Daily','Weekly','Monthly','Yearly'],
        default:'Monthly'
    },
    status:{
        type:String,
        enum:['active','cancelled','expired'],
        default:'active'
    },
    currency:{
        type:String,
        enum:['KES','USD','EUR'],
        default:'KES'
    },
    category:{
        type:String,
        enum:['Sports','Religion','Lifestyle','Entertainment','News','Music','Documentaries','Others'],
        
    },
    startDate:{
        type:Date,
        required:true,
        validate:{
            validatior:(value) => value < new Date(),
            message:"Start date should be in the past"
        } 
        
          },
    renewalDate:{
        type:Date,
        validate: {
            function(value){
            return value > this.startDate     
        },
        message:"The renewal date should be in the present"
        },
        User:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:true,
            index:true
       }
    }
    },{timestamps:true})

    // functions  validation

    subscriptionSchema.pre('save', function(next){
        if(!this.renewalDate){
            const periods = {
                Daily:1,
                Weekly:7,
                Monthly:30,
                Yearly:365
            }
            this.renewalDate = new Date(this.startDate)
        this.renewalDate = setDate(this.renewalDate.getDate() + periods[this.frequency])
        }
        
            if(this.renewalDate < new Date()){
                this.status = 'expired'
            }
            next();
    })

    const Subscription = mongoose.model('Subscription', subscriptionSchema)

    export default Subscription;