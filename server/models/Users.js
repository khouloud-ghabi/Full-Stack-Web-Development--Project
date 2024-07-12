module.exports = (sequelize,DataType )=>{
    //creat a posts table
    const Users = sequelize.define("Users",{
   
    userName:{
        type:DataType.STRING,
        allowNull: false,
    },
    password:{
        type:DataType.STRING,
        allowNull: false,
    },
    });
    
   // Users.associate = (models) =>{
        //Users.hasMany(models.Posts,{
         //   onDelete: "cascade",
    
        //});
    
   // };

    
    return Users;
    };