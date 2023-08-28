import React,{Component} from 'react'
import { Box,TextField,Typography,Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';

class Login extends Component{

  constructor(){

    super()
    this.state={
      userName:'',
      password:'',
    }
    this.handleChange=this.handleChange.bind(this)

  }

  handleChange(key,value){

    this.setState({
      [key]:value
    })

  }

  loginHandle(){

    

  }


  render(){

    return(
      <Box sx={{
        display:'flex',flexDirection:"column",alignItems:"center",justifyItems:'center',gap:'15px',justifyContent:'center'
      }}>
        <Typography variant='h5' textAlign='center'>Login</Typography>
        <TextField
        size='small' 
        label="UserName"
        fullWidth
        variant='outlined'
        value={this.state.userName}
        onChange={(e)=>this.handleChange('userName',e.target.value)}
        />
        <TextField
        size='small' 
        label="password"
        fullWidth
        variant='outlined'
        value={this.state.password}
        onChange={(e)=>this.handleChange('password',e.target.value)}

        />
        <Box>
          <Button
          startIcon={<GoogleIcon/>}
          sx={{color:'black'}}
          >
            Login With Google
          </Button>
        </Box>
        <Box sx={{display:'flex',flexDirection:"row",gap:'5px',width:"100%"}}>
          <Button fullWidth>Cancel</Button>
          <Button fullWidth variant='contained'>Login</Button>
        </Box>
      </Box>
    )

  }


}

export default Login