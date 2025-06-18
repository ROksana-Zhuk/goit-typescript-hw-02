import Modal from 'react-modal';


type Props = {
    modalIsOpen: boolean;
    afterOpenModal: () => void;
    closeModal: () => void;
    modalImageRegular: string;
  };


export default function ImageModal ({
    modalIsOpen,
    afterOpenModal,
    closeModal,
    modalImageRegular
}: Props) {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'transparent',
          borderColor: 'black',
        },
        overlay: {
            backgroundColor: 'black',
        }

      };

      Modal.setAppElement('#root');


    return (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          shouldCloseOnEsc={true}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <img src={modalImageRegular}/>

      </Modal>
    );
};