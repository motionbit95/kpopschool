import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  Stack,
  VStack,
} from "@chakra-ui/react";

function MessageBox(props) {
  const { isOpen, onClose } = props;
  return (
    <>
      <Modal
        zIndex={"99999"}
        size={"sm"}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody fontSize={"20px"} fontWeight={"bold"} p={0}>
            <Center p={12}>
              <VStack spacing={0}>{props.children}</VStack>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MessageBox;
