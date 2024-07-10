module.exports = (sequelize,DataType )=>{
//creat a posts table
const Posts = sequelize.define("Posts",{
title:{
    type:DataType.STRING,
    allowNull: false,
},
postText:{
    type:DataType.STRING,
    allowNull: false,
},
userName:{
    type:DataType.STRING,
    allowNull: false,
},
});

Posts.associate = (models) =>{
    Posts.hasMany(models.Comments,{
        onDelete: "cascade",

    })

}


return Posts;
};