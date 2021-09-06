const Mentor = require("../models/Mentor");

/**
 *  This module consists of methods which will be called inside other methods to do some simple tasks 
 *  They acts as a helper to other functions in performing some specific tasks.
 *  
 *  *** This module consists all the helper function for Mentor
 */
module.exports = {

    // this method fetch all the mentors from the db and returns it
    getAllMentors: async () => {
    
        const mentors = await Mentor.find().select('id name avatar');
        return mentors; 
    }
}