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
  const { onClose } = useDisclosure();

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
  title: PropTypes.string,
};

MovieModal.defaultProps = {
  overview: "No overview provided",
  title: "",
};

export default MovieModal;
