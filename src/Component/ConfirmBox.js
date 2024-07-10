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
  Button,
} from "@chakra-ui/react";
import { popmag } from "../App";

function ConfirmBox(props) {
  const { isOpen, onClose, onConfirm } = props;
  const color = popmag;
  return (
    <>
      <Modal size={"sm"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody fontSize={"20px"} fontWeight={"bold"} p={0}>
            <Center p={12}>
              <VStack textAlign={"center"} spacing={0}>
                {props.children}
              </VStack>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button variant={"ghost"} mr={3} onClick={onClose}>
              NO
            </Button>
            <Button
              bgColor={color}
              onClick={() => {
                onConfirm();
                onClose();
              }}
              color={"white"}
            >
              YES
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmBox;
