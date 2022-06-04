import {
  FormLabel,
  FormControl,
  Input,
  Button,
  HStack,
  FormHelperText,
} from "@chakra-ui/react";

export function FormEmail() {
  return (
   <FormControl>
      <Input type="text" name="_honey" style={{ display: "none" }} />
      <Input type="hidden" name="_captcha" value="false" />
      <Input
        type="hidden"
        name="_next"
        value="https://lpbarretolobato.vercel.app/Success"
      />
      <FormControl isRequired>
        <FormLabel htmlFor="name">Nome</FormLabel>
        <Input
          aria-required={true}
          focusBorderColor={"beige"}
          border={"1px"}
          color={"beige"}
          variant="filled"
          type="text"
          name="name"
          pattern=".{4,0}"
          required
        />
        <FormHelperText>Coloque o nome corretamente.</FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Input
          aria-required={true}
          focusBorderColor={"beige"}
          border={"1px"}
          color={"beige"}
          variant="filled"
          type="email"
          name="email"
          pattern={
            "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
          }
        />
        <FormHelperText>Coloque o e-mail corretamente.</FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="tel">WhatsApp</FormLabel>
        <Input
          aria-required={true}
          focusBorderColor={"beige"}
          border={"1px"}
          color={"beige"}
          variant="filled"
          type="tel"
          name="tel"
          pattern="^\d{3}\d{5}\d{4}$"
        />
        <FormHelperText>
          Coloque o número correto, com o 0 na frente.
        </FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="text">Profissão</FormLabel>
        <Input
          aria-required={true}
          focusBorderColor={"beige"}
          border={"1px"}
          color={"beige"}
          variant="filled"
          type="text"
          name="text"
          pattern=".{10,0}"
        />
        <FormHelperText>Coloque a profissão corretamente.</FormHelperText>
      </FormControl>
      <FormControl>
        <HStack spacing={4} mt={4}>
          <Button colorScheme="pink" type="submit" width="lg">
            Enviar
          </Button>
          <Button variant="outline" colorScheme="pink" type="reset" width="lg">
            Cancelar
          </Button>
        </HStack>
      </FormControl>
      </FormControl>

  );
}
