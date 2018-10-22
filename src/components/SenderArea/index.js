import React from 'react'
import './index.scss'

class SenderArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasFiles: false,
    }
  }

  handleStateToggle() {
    const nextHasFiles = !this.state.hasFiles
    this.setState({
      hasFiles: nextHasFiles,
    })
  }

  renderNoFiles() {
    return (
      <div className="sender-area sender-area--no-files">
        <div className="sender-area__draggable">
          <div className="sender-area__plus-icon" />
          <h3 className="sender-area__title">Drop Files Here</h3>
          <h4 className="sender-area__subtitle">or click to select files</h4>
          <button
            onClick={() => this.handleStateToggle()}
            className="sender-area__button"
          >
            Select files to upload
          </button>
        </div>
      </div>
    )
  }

  renderWithFiles() {
    return (
      <div className="sender-area sender-area--files">
        <div className="sender-area__draggable">
          <div className="sender-area__file-list">
            <div className="file" />
            <div className="file" />
          </div>
          <button
            onClick={() => this.handleStateToggle()}
            className="sender-area__button"
          >
            <div className="sender-area__plus-icon" />
            Add more files
          </button>
        </div>
        <div className="upload-controls">
          <div>
            expires after <span>200 downloads</span> or <span>
              5 minutes
            </span>
          </div>
          <button className="upload-controls__button">
            Ready to Send
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <>
        {!this.state.hasFiles && this.renderNoFiles()}
        {this.state.hasFiles && this.renderWithFiles()}
      </>
    )
  }
}

export default SenderArea
