import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function MovieModal({ title, overview, handler }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Modal isOpen={Boolean(title)} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton onClick={handler} />
        <ModalBody>{overview}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

MovieModal.propTypes = {
  handler: PropTypes.func.isRequired,
  overview: PropTypes.string,
  title: PropTypes.string.isRequired,
};

MovieModal.defaultProps = {
  overview: "No overview provided",
};

export default MovieModal;
