import React from 'react'
import { DropContainer, UploadMessage } from '../Gallery/styles';
import Dropzone from 'react-dropzone';

const Week = ({ setUpload }) => {
    const renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            return <UploadMessage>Arraste arquivos aqui ou clique</UploadMessage>
        }
        if (isDragReject) {
            return <UploadMessage type='error'>Arquivo não suportado</UploadMessage>
        }
        return <UploadMessage type='success'>Solte os arquivos aqui...</UploadMessage>
    } 
    return (
            <Dropzone accept='image/*' onDropAccepted={setUpload}>
                { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                     <DropContainer
                        { ...getRootProps() }
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                     >
                         <input { ...getInputProps() } />
                         { renderDragMessage(isDragActive, isDragReject) }
                     </DropContainer>
                ) }
            </Dropzone>
    )
}

export default Week;
