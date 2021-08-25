import React from 'react'
import { InstagramButton, InstagramContainer, InstagramForm, InstagramTitle, InstagramUrl } from './styles';

const Instagram = () => {
    return (
        <InstagramContainer>
            <InstagramTitle>Insira a URL do Post do Instagram aqui</InstagramTitle>
            <InstagramForm>
                <InstagramUrl></InstagramUrl>
                <InstagramButton>Enviar</InstagramButton>
            </InstagramForm>
        </InstagramContainer>
    )
}

export default Instagram;
