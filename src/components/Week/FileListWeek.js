import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';
import { ContainerFileList, FileInfo, Preview } from '../Gallery/styles';
import 'react-circular-progressbar/dist/styles.css';

const FileListWeek = ({ item, onDelete }) => {
    return (
        <ContainerFileList>
        <li key={item.id}>
            <FileInfo>
                <Preview src={item.preview} />
                <div className='infos-style'>
                    <div className='text-style'>
                        <strong>{item.name}</strong>
                    </div>
                    <span>{item.readableSize}{''}
                        { !!item.url && (
                            <button onClick={() => onDelete(item.id)} >Excluir</button>
                        ) } 
                    </span>
                </div>
            </FileInfo>
            <div className='icons-style'>
                { !item.uploaded && !item.error && (
                    <CircularProgressbar
                    styles={{
                        root: { width: 24 },
                        path: { stroke: '#30342F' }
                    }}
                    strokeWidth={10}
                    value={item.progress}
                    />
                ) }
                { item.url && (
                    <a 
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        <MdLink style={{ marginRight: 8 }} size={24} color='#222' />
                    </a>
                ) }
                { item.uploaded && <MdCheckCircle size={24} color='#78e5d5' /> }
                { item.error && <MdError size={24} color='#e57878' /> }
            </div>
        </li>
      
</ContainerFileList>
    )
}

export default FileListWeek;
