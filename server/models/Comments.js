module.exports = (sequelize,DataType )=>{
    //creat a comments table
    const Comments = sequelize.define("Comments",{
   
    commentBody:{
        type:DataType.STRING,
        allowNull: false,
    },
    });
    return Comments;
    };