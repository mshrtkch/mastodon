import IconButton from '../../../components/icon_button';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
  upload: { id: 'upload_button.label', defaultMessage: 'Add media' }
});

const iconStyle = {
  lineHeight: '27px',
  height: null
};

class UploadButton extends React.PureComponent {

  constructor (props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  handleChange (e) {
    if (e.target.files.length > 0) {
      this.props.onSelectFile(e.target.files);
    }
  }

  handleClick () {
    this.fileElement.click();
  }

  setRef (c) {
    this.fileElement = c;
  }

  render () {
    const { intl, resetFileKey, disabled } = this.props;

    return (
      <div style={this.props.style}>
        <IconButton icon='camera' title={intl.formatMessage(messages.upload)} disabled={disabled} onClick={this.handleClick} style={iconStyle} size={18} inverted />
        <input key={resetFileKey} ref={this.setRef} type='file' multiple={false} onChange={this.handleChange} disabled={disabled} style={{ display: 'none' }} />
      </div>
    );
  }

}

UploadButton.propTypes = {
  disabled: PropTypes.bool,
  onSelectFile: PropTypes.func.isRequired,
  style: PropTypes.object,
  resetFileKey: PropTypes.number,
  intl: PropTypes.object.isRequired
};

export default injectIntl(UploadButton);
