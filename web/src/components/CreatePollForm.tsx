import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";
import { PollFormType } from "types";
type Props = {
  form: UseFormReturn<Partial<PollFormType>, any>;
};

export const CreatePollForm = ({ form }: Props) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <VStack spacing={2}>
      <FormControl
        isInvalid={!!errors.title}
        rounded="md"
        borderColor="gray.500"
      >
        <FormLabel htmlFor="title">Poll Title</FormLabel>
        <Input
          id="title"
          placeholder="title"
          {...register("title", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        {errors?.title?.message && (
          <FormErrorMessage>{errors.title.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl
        isInvalid={!!errors.description}
        rounded="md"
        borderColor="gray.500"
      >
        <FormLabel htmlFor="description">Poll Description</FormLabel>
        <Textarea
          id="description"
          placeholder="description"
          {...register("description", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        {errors?.description?.message && (
          <FormErrorMessage>{errors.description.message}</FormErrorMessage>
        )}
      </FormControl>
    </VStack>
  );
};
