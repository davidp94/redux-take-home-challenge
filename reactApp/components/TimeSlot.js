import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {addEvent} from '../actions/index';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none'
    }
};

// class component
class TimeSlot extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            number: '',
            name: ''
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    scheduleSlot(e) {
        e.preventDefault();
        this.props.addEventClick(this.props.slot, this.state.name, this.state.phone, this.props.key);
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handlePhoneChange(e) {
        this.setState({phone: e.target.value});
    }

    render() {
        return (<div onClick={this.openModal}>
            <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Add to Schedule">
                <button className="close" onClick={this.closeModal}>X</button>
                <div>Schedule a call</div>
                <form onSubmit={(e) => this.scheduleSlot(e)}>
                    <input type="text" placeholder="Enter a name" onChange={(e) => this.handleNameChange(e)}/>
                    <input type="text" placeholder="+11234567899" onChange={(e) => this.handlePhoneChange(e)}/>
                    <button className="save">Save</button>
                </form>
            </Modal>
            <li className={this.props.event[this.props.slot] && this.props.event[this.props.slot].name
                    ? ''
                    : 'open'} key={this.props.slot}>
                <h1>{this.props.event[this.props.slot] && this.props.event[this.props.slot].name || "N/A"}</h1>
                <p>+{this.props.event[this.props.slot] && this.props.event[this.props.slot].phone || "#"}</p>
                <div className="time">{
                        this.props.slot > 8
                            ? this.props.slot + " am"
                            : this.props.slot + " pm"
                    }</div>
            </li>
        </div>);
    }
};

const mapStateToProps = (state) => {
    return {event: state};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEventClick: (slot, name, phone, key) => {
            dispatch(addEvent(slot, name, phone, key))
        }
    }
}

TimeSlot = connect(mapStateToProps, mapDispatchToProps)(TimeSlot);

export default TimeSlot;
