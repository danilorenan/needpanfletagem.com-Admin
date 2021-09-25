import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';


export const LoginContainer = styled.div`
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #272622;
    flex-direction: column;
`
export const LoginText = styled.h1`
    font-size: 2rem;
    margin: 2rem;
    color: #fff;
`
export const ContainerLogin = styled.div`
    height: 20rem;
    width: 20rem;
    border: 5px double #564929;
`
export const ContainerFormLogin = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        color: #e57878;
    }
`
export const EmailTextField = styled(TextField)`

`
export const PasswordTextField = styled(TextField)`
    color: #fff;
`
export const LoginButton = styled.input`
    color: #fff;
    margin: 2rem;
    background-color: #272622;
    padding: 0.2rem;
    width: 4rem;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 2rem;
    border-radius: 2px;
    &:hover {
        cursor: pointer;
        background-color: #564929;
        border: 1px solid #272622;
        color: #272622;
    }

    @media(max-width: 433px){
        height: 1.5rem;
        margin: 0.1rem;
        font-size: 0.7rem;
    }
`
export const AdminContainer = styled.div`
    background-color: #272622;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 2rem;
        margin: 2rem;
        color: #fff;
    }
`
export const ProductsPostContainer = styled.div`
    width: 30rem;
    display: flex;
    justify-content: center;
    padding: 1rem;
    border: 5px double #564929;
    margin: 1rem;
`
export const CarouselPostContainer = styled.div`
    width: 30rem;
    display: flex;
    justify-content: center;
    padding: 1rem;
    border: 5px double #564929;
    flex-direction: column;
    margin: 1rem;
`
