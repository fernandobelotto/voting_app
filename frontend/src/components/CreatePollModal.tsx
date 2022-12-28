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
import { useCreatePollMutation } from "../store/api";
import { CreatePollForm } from "./CreatePollForm";

type Props = {};

export type FormType = {
  title: string;
  description: string;
};

function CreatePollModal({}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useForm<FormType>();

  const [createPoll, { isError, isLoading }] = useCreatePollMutation();

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  function onSubmit(values: any) {
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
            <ModalHeader>Create Poll </ModalHeader>
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
