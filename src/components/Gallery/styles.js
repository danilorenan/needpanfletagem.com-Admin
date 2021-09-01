import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #78e5e5;
`
const dragReject = css`
    border-color: #e57878;
`

export const DropContainer = styled.div.attrs({
    className: 'dropzone'
})`
    border: 1px dashed #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: height 0.2s ease;
    padding: 1rem;
    display: flex;
    background-color: var(--primary);
    width: 100%;
    height: 5rem;
    justify-content: center;
    align-items: center;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`
const messageColors = {
    default: '#999',
    error: '#e57878',
    success: '#78e5d5'
}

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`
export const ContainerFileList = styled.ul`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444;
        & + li {
            margin-top: 15px;
        }

        .icons-style {
            display: flex;
            justify-content: center;
        }

        strong {
            max-width: 14rem;
            text-overflow: ellipsis;
            white-space: nowrap;

        }
    }
`
export const FileInfo = styled.div`
    display: flex;
    align-items: center;

    .infos-style {
        width: 14rem;
    }
    .text-style {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    div {
        display: flex;
        flex-direction: column;

        span{
            font-size: 12px;
            color: #999;
            margin-top: 5px;

            button {
                border: 0;
                background-color: transparent;
                color: #e57878;
                margin-left: 5px;
                cursor: pointer;
            }
        }
    }
`
export const Preview = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 5px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-right: 10px;
`