import React, { useState, useEffect, Component } from 'react';
import { uniqueId } from 'lodash';
import fileSize from 'filesize';
import Gallery from '../../components/Gallery/Gallery';
import { GalleryContainer, HomeContainer, WeekContainer } from './styles';
import Week from '../../components/Week/Week';
import FileList from '../../components/Gallery/FileList';
import FileListWeek from '../../components/Week/FileListWeek';
import api from '../../services/api';

class Home extends Component {
    // const [post, setPost] = useState([])

    // const handleUpload = files => {
    //     const uploadedFiles = files.map(file => ({
    //         file,
    //         id: uniqueId(),
    //         name: file.name,
    //         readableSize: fileSize(file.size),
    //         preview: URL.createObjectURL(file),
    //         progress: 0,
    //         uploaded: false,
    //         error: false,
    //         url: null,
    //     }))
    //     setPost([...post, ...uploadedFiles])
        
    //     post.forEach(processUpload);
    // }

    // const updateFile = (id, data) => {
    //     post.map(postFile => {
    //         return id === post.id ? setPost(post => ({...post, progress: data})) : postFile
    //     })
    // }

    // const processUpload = (post) => {
    //     const data = new FormData();

    //     data.append('file', post.file, post.name);

    //     api.post('posts', data, {
    //         onUploadProgress: e => {
    //             const progress = parseInt(Math.round((e.loaded * 100) / e.total));

    //             updateFile(post.id, {
    //                 progress,
    //             })
    //         }
    //     })
    // }
    state = {
        uploadedFiles: [],
        uploadedFilesWeek: []
    };

    async componentDidMount() {
        const res = await api.get('posts');
        const resWeek = await api.get('weekposts');

        this.setState({
            uploadedFiles: res.data.map(file => ({
                id: file._id,
                name: file.name,
                readableSize: fileSize(file.size),
                preview: file.url,
                uploaded: true,
                url: file.url
            }))
        })
        this.setState({
            uploadedFilesWeek: resWeek.data.map(fileWeek => ({
                id: fileWeek._id,
                name: fileWeek.name,
                readableSize: fileSize(fileWeek.size),
                preview: fileWeek.url,
                uploaded: true,
                url: fileWeek.url
            }))
        })

    }

    handleUpload = files => {
        const uploadedFiles = files.map(file => ({
          file,
          id: uniqueId(),
          name: file.name,
          readableSize: fileSize(file.size),
          preview: URL.createObjectURL(file),
          progress: 0,
          uploaded: false,
          error: false,
          url: null
        }));
    
        this.setState({
          uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
        });
    
        uploadedFiles.forEach(this.processUpload);
      };

      updateFile = (id, data) => {
        this.setState({
          uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
            return id === uploadedFile.id
              ? { ...uploadedFile, ...data }
              : uploadedFile;
          })
        });
      };

      processUpload = uploadedFile => {
        const data = new FormData();
    
        data.append("file", uploadedFile.file, uploadedFile.name);
    
        api
          .post("posts", data, {
            onUploadProgress: e => {
              const progress = parseInt(Math.round((e.loaded * 100) / e.total));
    
              this.updateFile(uploadedFile.id, {
                progress
              });
            }
          }).then(res => {
            this.updateFile(uploadedFile.id, {
                uploaded: true,
                id: res.data._id,
                url: res.data.url
            })
          }).catch(() => {
            this.updateFile(uploadedFile.id, {
                error: true,
            })
          })
        }

        handleDelete = async id => {
            await api.delete(`posts/${id}`);

            this.setState({
                uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
            })
        }

        
        // ------------------------- Week files ------------------------------ //
        
        handleUploadWeek = files => {
            const uploadedFilesWeek = files.map(file => ({
                file,
                id: uniqueId(),
                name: file.name,
                readableSize: fileSize(file.size),
                preview: URL.createObjectURL(file),
                progress: 0,
                uploaded: false,
                error: false,
                url: null
            }));
            
            this.setState({
                uploadedFilesWeek: this.state.uploadedFilesWeek.concat(uploadedFilesWeek)
            });
            
            uploadedFilesWeek.forEach(this.processUploadWeek);
        };
        
        updateFileWeek = (id, data) => {
            this.setState({
                uploadedFilesWeek: this.state.uploadedFilesWeek.map(uploadedFileWeek => {
                    return id === uploadedFileWeek.id
                    ? { ...uploadedFileWeek, ...data }
                    : uploadedFileWeek;
                })
            });
        };
        
        processUploadWeek = uploadedFileWeek => {
            const data = new FormData();
            
            data.append("file", uploadedFileWeek.file, uploadedFileWeek.name);
            
            api
            .post("weekposts", data, {
                onUploadProgress: e => {
                    const progress = parseInt(Math.round((e.loaded * 100) / e.total));
                    
                    this.updateFileWeek(uploadedFileWeek.id, {
                        progress
                    });
                }
            }).then(res => {
                this.updateFileWeek(uploadedFileWeek.id, {
                    uploaded: true,
                    id: res.data._id,
                    url: res.data.url
                })
            }).catch(() => {
                this.updateFileWeek(uploadedFileWeek.id, {
                    error: true,
                })
            })
        }

        handleDeleteWeek = async id => {
            await api.delete(`weekposts/${id}`);

            this.setState({
                uploadedFilesWeek: this.state.uploadedFilesWeek.filter(file => file.id !== id)
            })
        }
        
        componentWillUnmount() {
            this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
        }
        componentWillUnmount() {
            this.state.uploadedFilesWeek.forEach(file => URL.revokeObjectURL(file.preview));
        }
    render() {
        const { uploadedFiles, uploadedFilesWeek } = this.state;

        return (
            <HomeContainer>
                <h1>Adicionar imagens para galeria</h1>
                <GalleryContainer>
                  <Gallery setUpload={this.handleUpload} />
                    { !!uploadedFiles.length && uploadedFiles.map( item => 
                        <FileList onDelete={this.handleDelete} item={item}/>
                    ) }            
                </GalleryContainer>
                <h1>Adicionar imagens semanais</h1>
                <WeekContainer>
                    <Week setUpload={this.handleUploadWeek}/>
                    { !!uploadedFilesWeek.length && uploadedFilesWeek.map( item => 
                        <FileListWeek onDelete={this.handleDeleteWeek} item={item}/>
                    ) }
                </WeekContainer>
            </HomeContainer>
        )
    }
    
}

export default Home;
