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

function MovieModal({ title, overview }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Modal isOpen={Boolean(title)} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{overview}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

MovieModal.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
};

MovieModal.defaultProps = {
  overview: "No overview provided",
};

export default MovieModal;
