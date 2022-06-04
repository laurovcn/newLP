import {
  Box,
  Button,
  chakra,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import "@fontsource/krona-one";
import { ReactNode } from "react";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { ModalPremium } from "../ModalPremium";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      boxShadow={"lg"}
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderRadius={"lg"}
    >
      {children}
    </Box>
  );
}

export function PagePlane() {
  return (
    <Stack
      textAlign={"left"}
      spacing={{ base: 8, md: 14 }}
      direction={{ base: "column", md: "row" }}
      py={{ base: 0, md: 10 }}
    >
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        {/** H1_1 */}
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          fontFamily={"Krona One"}
        >
          os melhores planos do mercado
        </chakra.h1>
        <VStack textAlign="center">
          <Text fontSize="lg" color={"whiteAlpha.500"}>
            Adquira um dos planos e tenha a sua página em até 5 dias. Parcele no
            cartão em até 4x SEM JUROS. Cancele quando quiser.
          </Text>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={16}
        >
          {/** Plano 1 */}
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl" color={"green.300"}>
                Lite
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600" color="green.300">
                  R$
                </Text>
                <Text fontSize="5xl" fontWeight="900" color="green.300">
                  600
                </Text>
                <Tag fontSize="sm" colorScheme="green">
                  à Vista
                </Tag>
              </HStack>
            </Box>
            <VStack
              bgGradient="linear(to-l, transparent, blackAlpha.600)"
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Logo Superior.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Sequência de Copys H1 e H2.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  CTA (simples, eficaz, frasal e quantitativo)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Imagem/Vídeo/Animação projetada sem invadir o texto.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Somente 1 Landing Page.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Manutenção mensal R$300.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button
                  textTransform={"uppercase"}
                  w="full"
                  colorScheme="green"
                  variant="outline"
                >
                  comprar o lite
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>
          {/** Plano 2 */}
          <PriceWrapper>
            <Box>
              <Box py={4} px={12}>
                <HStack justifyContent={"center"}>
                  <Text fontWeight="500" fontSize="2xl" color={"orange.300"}>
                    Plus
                  </Text>
                  <Tag
                    fontSize="sm"
                    colorScheme="orange"
                    textTransform={"uppercase"}
                    variant={"solid"}
                    size={"lg"}
                  >
                    mais queridinha
                  </Tag>
                </HStack>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600" color="orange.300">
                    R$
                  </Text>
                  <Text fontSize="5xl" fontWeight="900" color="orange.300">
                    1.200
                  </Text>
                  <Tag fontSize="sm" colorScheme="orange">
                    /2x de 600
                  </Tag>
                </HStack>
              </Box>
              <VStack
                bgGradient="linear(to-l, transparent, blackAlpha.600)"
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="orange.500" />
                    Logo Superior.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="orange.500" />
                    Sequência de Copys H1 e H2.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="orange.500" />
                    CTA (simples, eficaz, frasal e quantitativo)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="orange.500" />
                    Imagem/Vídeo/Animação projetada sem invadir o texto.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="orange.500" />
                    Até 5 Landing Pages.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="orange.500" />
                    Manutenção mensal R$300.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    textTransform={"uppercase"}
                    w="full"
                    colorScheme="orange"
                  >
                    comprar o plus
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
          {/** Plano 3 */}
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl" color={"blue.300"}>
                Premium
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600" color={"blue.300"}>
                  R$
                </Text>
                <Text fontSize="5xl" fontWeight="900" color={"blue.300"}>
                  2.400
                </Text>
                <Tag fontSize="sm" colorScheme="blue">
                  /4x de 600
                </Tag>
              </HStack>
            </Box>
            <VStack
              bgGradient="linear(to-l, transparent, blackAlpha.600)"
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  Logo Superior.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  Sequência de Copys H1 e H2.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  CTA (simples, eficaz, frasal e quantitativo)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  Imagem/Vídeo/Animação projetada sem invadir o texto.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  Até 10 Landing Pages.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="blue.500" />
                  Manutenção mensal R$300.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <ModalPremium />
              </Box>
            </VStack>
          </PriceWrapper>
        </Stack>
      </Box>
    </Stack>
  );
}
