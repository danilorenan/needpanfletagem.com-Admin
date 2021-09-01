import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    h1 {
        color: var(--primary);
        text-align: center;
        margin: 2rem;
    }
`
export const GalleryContainer = styled.div`
    width: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem;
    padding: 1rem;
    border: 5px double var(--primary);

`
export const WeekContainer = styled.div`
    width: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem;
    padding: 1rem;
    border: 5px double var(--primary);
    background-color: #fff;
`
