import styled from "styled-components";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export const NavbarContainer = styled.div`
    height: 15rem;
`

export const BannerContainer = styled.div`
    height: 12rem;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BannerImage = styled.img`
    width: 20rem;
    height: 10rem;
`
export const ContainerMenu = styled.div`
    height: 3rem;
    width: 100%;
    background: var(--primary);  
`
export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;

    .icons-container {
        height: 3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 4rem;
        color: #fff;
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;

    }
    li {
        margin: 1rem;
        color: #fff;
    }
    a { 
        text-decoration: underline 0.15em rgba(255, 255, 255, 0);
        transition: text-decoration-color 300ms;
        font-size: 1.2rem;
        cursor: pointer;
        width: auto;
        :hover {
            text-decoration-color: rgba(255, 255, 255, 1);
        }
    }
`
export const InstaIcon = styled(InstagramIcon)`
    cursor: pointer;
    color: #fff;
     
    :hover {
        color: var(--grey);
    }
`
export const FaceIcon = styled(FacebookIcon)`
    cursor: pointer;
    :hover {
        color: var(--grey);
    }
`