import React from 'react';
import { AppContext } from '../appContext';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.confirmRemove = this.confirmRemove.bind(this);
  }

  openModal() {
    this.props.handleDelete();
    this.setState({
      isOpen: true,
    });
  }

  closeModal() {
    this.setState({
      isOpen: false,
    });
  }

  confirmRemove() {
    this.closeModal();
    this.context.removeCard();
  }

  render() {
    const { activeCard } = this.context;
    if (this.state.isOpen) {
      return (
        <div className='basic-modal' onClick={this.closeModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className='basic-modal-content'
          >
            <div onClick={this.closeModal} className='modal-close-btn'>
              X
            </div>
            <h5 className='delete-title mb-4'>
              Are you sure you want to delete this card?
            </h5>
            <p className='mb-2'>{`Q: ${activeCard.question}`}</p>
            <p className='mb-2'>{`A: ${activeCard.answer}`}</p>
            <div className='text-right mt-4'>
              <button
                type='button'
                className='btn btn-outline-secondary mr-2'
                onClick={this.closeModal}
              >
                Cancel
              </button>
              <button
                type='button'
                className='btn btn-danger'
                onClick={this.confirmRemove}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <i
        className='far fa-trash-alt fa-lg icon-btn'
        onClick={this.openModal}
      ></i>
    );
  }
}

DeleteModal.contextType = AppContext;

export default DeleteModal;
