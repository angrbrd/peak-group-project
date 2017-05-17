import React from 'react';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      display: 'block',
      backgroundColor: '#fff',
      borderRadius: 20,
      maxWidth: 350,
      maxHeight: 300,
      margin: 'auto',
      overflow: 'auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <div className="clearLabel">
            <p className="infoLabel">Name:</p><p className="infoContent">{this.props.stds.student_name}</p>
          </div>
          <div className="clearLabel">
            <p className="infoLabel">Birthdate:</p><p className="infoContent">{this.props.stds.birthdate}</p>
          </div>
          <div className="clearLabel">
            <p className="infoLabel">Last IEP Date:</p><p className="infoContent">{this.props.stds.last_IEP_date}</p>
          </div>
          <div className="clearLabel">
            <p className="infoLabel">Active:</p><p className="infoContent">{this.props.stds.active ? "Yes" : "No"}</p>
          </div>
          <div className="clearLabel">
            <p className="infoLabel">Parent E-mail:</p><p className="infoContent">{this.props.stds.parent_email}</p>
          </div>
          <div className="clearLabel">
            <p className="infoLabel">Eligibility:</p><p className="infoContent">{this.props.stds.eligibility}</p>
          </div>

          <div className="modalFooter">
            <button className="studentInfoClose" onClick={this.props.onClose}>
              close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node
};

export default Modal;