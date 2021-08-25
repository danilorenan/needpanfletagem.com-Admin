import styled from 'styled-components';

export const InstagramContainer = styled.div`
    height: 30rem;
    background-color: var(--dark);
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const InstagramTitle = styled.h1`
    color: #fff;
    margin: 2rem;
`
export const InstagramForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InstagramUrl = styled.input`
    width: 18rem;
    height: 2rem;
    padding: 1rem;
    margin: 1rem;
    font-size: 1.2rem;
`
export const InstagramButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: var(--primary);
    height: 2.2rem;
    width: 4rem;

    :hover {
        background-color: var(--grey);
    }
` 