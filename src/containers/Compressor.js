import React, { Component } from 'react';
import Compression from 'browser-image-compression'
import downloadIcon from '../assests/download.png'
import jszip from 'jszip'
import { save } from 'save-file'


import UploadImage from '../components/Image/Image'
import ImagePreview from '../components/Image/ImagePreview/ImagePreview';
import Button from '../components/UI/Button/Button'
import Aux from '../hoc/Aux';
import Spinner from '../components/UI/Spinner/Spinner'

class Compressor extends Component {
    state = {
        images: null,
        compressImages: [],
        show: null,
    }

    onChangeHandler = (e) => {
        const newImages = Array.from(e.target.files);
        this.setState({ 'images': newImages, compressImages: [] })

    }

    onCompressedHandler = async () => {
        this.setState({ show: true })
        const imgCompress = [...this.state.images]
        let compressImage = []

        if (imgCompress.length > 0) {
            for (let i in imgCompress) {
                const file = imgCompress[i]
                await Compression(file, {
                    initialQuality: 0.6,
                    onProgress: function (progress) {
                        console.log(progress);

                    }
                    // eslint-disable-next-line no-loop-func
                }).then(res => {

                    const AfterCompression = compressImage.concat(res);
                    compressImage = [...AfterCompression]


                }).catch(err => console.log(err))
            }
        }

        this.setState({ compressImages: compressImage, show: false })
    }

    downloadAllImage = () => {
        var zip = new jszip();

        var img = zip.folder("images");

        for (let i in this.state.compressImages) {
            const imgData = this.state.compressImages[i]

            img.file(imgData.name, imgData, { base64: true });
        }

        zip.generateAsync({ type: "blob" }).then(function (content) {
            // see FileSaver.js
            save(content, "compress.zip");
        });
    }



    render() {
        let preview = ''

        if (this.state.images !== null) {
            preview = < ImagePreview images={this.state.images}
            />
        }

        let compressImg = this.state.show ? < Spinner /> : null
        console.log(this.state.show);
        if (this.state.compressImages.length > 0) {
            compressImg = <Aux>
                <Button class={['btnPrimary', 'center']} onclicked={this.downloadAllImage} text='Download All Images' />
                < ImagePreview images={this.state.compressImages}
                    icon={downloadIcon}
                />
            </Aux>

        }

        return (
            <Aux >
                < UploadImage onchange={this.onChangeHandler} />
                < Button class={['btnSuccess', 'center']}
                    onclicked={this.onCompressedHandler}
                    text='Compress Image' />
                {preview}
                {compressImg}
            </Aux>

        );
    }
}

export default Compressor