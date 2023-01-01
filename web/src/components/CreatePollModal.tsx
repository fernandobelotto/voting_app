import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { PollFormType } from "types";
import { useCreatePollMutation } from "types";
import { CreatePollForm } from "./CreatePollForm";

function CreatePollModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useForm<Partial<PollFormType>>();

  const [createPoll] = useCreatePollMutation();

  const { handleSubmit } = form;

  function onSubmit(values: Partial<PollFormType>) {
    createPoll(values);
    onClose();
  }

  return (
    <>
      <Button onClick={onOpen}>Create Poll</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Poll</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <CreatePollForm form={form} />
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" type="submit">
                Submit!
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default CreatePollModal;
