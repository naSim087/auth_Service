const UserRepository=require('../repository/user-repository')
const jwt=require('jsonwebtoken')
const {JWT_KEY}= require('../config/server-config')
const bcrypt= require('bcrypt')
class UserService{
  constructor(){
    this.userRepository= new UserRepository();
  }
  async create(data){
    try{
      const user = await this.userRepository.create(data);
      return user;
    }
    catch(error){
      console.log("something error occured at service layer");
      throw error;
    }
  }
  async createToken(user){
    try{
const result = await jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
    }
    catch(error){
      console.log("something went wrong at the token creation")
      throw error;
    }
  }
  async verifyToken(token){
    try{
      const response=await jwt.verify(token,JWT_KEY);
      return response;
    }
    catch(error){
      console.log("something went wrong at the token verification");
      throw error;
    }
  }

  async checkPassword(userInputPlainPassword,encryptedPassword){
    try{
      return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
    }
    catch(error){
      throw error;
    }
  }

}
module.exports=UserService;