import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected option"
    ariaHideApp={false}
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title'>Selected Option</h3>
    {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
    <button className='button modal__button' onClick={props.handleClearSelectedOption}>Ok</button>
  </Modal>
);

export default OptionModal;
