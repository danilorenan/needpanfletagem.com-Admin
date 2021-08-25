import React from 'react'
import { BannerContainer, 
    BannerImage, 
    ContainerMenu, 
    FaceIcon, 
    InstaIcon, 
    Menu, 
    NavbarContainer } from './styles';
import ImageBanner from '../../assets/logo.png';


const Navbar = () => {
    return (
        <NavbarContainer>
            <BannerContainer>
                <BannerImage src={ImageBanner} />
            </BannerContainer>
            <ContainerMenu>
                <Menu>
                    <ul>
                        <li>
                            <a>Adicionar post Instagram</a>
                        </li>
                        <li>
                            <a>Adicionar image á galeria</a>
                        </li>
                    </ul>
                    <div className='icons-container'>
                        <InstaIcon/>
                        <FaceIcon/>
                    </div>
                </Menu>
            </ContainerMenu>
        </NavbarContainer>
    )
}

export default Navbar;