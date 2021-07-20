import React from 'react';
import {Link} from 'react-router-dom';

function SignIn() {
  return(
    <div align="center" style={{color:'white'}}>
      <h1 style={{paddingTop:'150px',paddingBottom:'20px',textAlign:'center'}}>Sign In</h1>
      <button type="button" class="btn"><img style={{height:'50px',width:'50px'}} src="/imgs/google.png" alt=""/></button>
      <button type="button" class="btn"><img style={{height:'50px',width:'50px'}} src="/imgs/facebook.webp" alt=""/></button>
      <button type="button" class="btn"><img style={{height:'50px',width:'50px'}} src="/imgs/twitter.png" alt=""/></button>
      
      <div class="form-group"style={{width:'20%'}}>
        <label for="password"style={{paddingTop:'10px',paddingBottom:'10px'}}>Password</label>
        <input type="text" class="form-control" id="password"/>
      </div>
      <br/>
      <button type="button" class="btn"style={{background:'#313639',color:'#FFFAF1'}}>Sign In</button>
      <br/><br/>
      <Link to='/signUp'>Create an Account</Link>
    </div>
  );
}

export default SignIn;