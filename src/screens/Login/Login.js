import React, {useState, useEffect} from 'react'
import { ContainerFormLogin, 
    LoginContainer,
    ContainerLogin,
    PasswordTextField,
    EmailTextField, 
    LoginText,
    LoginButton} from './styles';
import { makeStyles } from '@material-ui/core/styles';


const Login = ({ handleSubmit, password, setPassword, email, setEmail, passError }) => {
    

    const useStyle = makeStyles(theme => ({
        root: {
            '& .MuiFormLabel-root': {
                color: '#fff'
            },
            '& .MuiInputBase-input': {
                color: '#fff'
            }
        }
        
    }))

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const res = await api.post('login', {"email": "dsadssdsadaadas@hotmail", "password": "dasdsadsadasd"})
    //         console.log(res.data)
    //     }
    //     fetchUser();
    // },[])
    
    const classes = useStyle();
    return (
        <LoginContainer>
            <LoginText>Login</LoginText>
            <ContainerLogin>
                <ContainerFormLogin className={classes.root}>
                    <EmailTextField
                        name="email" 
                        required id="standard-basic" 
                        label="Email"
                        margin='none'
                        fullWidth
                        variant='filled'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        >
                    </EmailTextField>
                    <PasswordTextField
                        name="password"
                        type='password' 
                        required id="standard-basic" 
                        label="Senha"
                        margin='dense'
                        fullWidth
                        variant='filled'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        >
                    </PasswordTextField>
                    <LoginButton value='Entrar' type='submit'onClick={handleSubmit}/>
                    { passError === 'Senha ou email não cadastrado' && <span>Email ou senha incorretos</span>}
                </ContainerFormLogin>
            </ContainerLogin>
        </LoginContainer>
    )
}

export default Login;
