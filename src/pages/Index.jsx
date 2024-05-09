import { Container, Text, VStack, Heading, SimpleGrid, Box, Link, Image, Flex } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">Further</Heading>
          <Text fontSize="xl">With experience and commitment we take you further than capital!</Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" textAlign="center">Portfolio companies</Heading>
          <Text textAlign="center" mb={4}>Not a comprehensive list</Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5}>
            {/* Example of a company logo and description */}
            <VStack>
              <Image src="path/to/logo1.png" alt="Motorica" boxSize="100px" />
              <Text>Motorica</Text>
            </VStack>
            {/* Repeat for other companies */}
          </SimpleGrid>
        </Box>
        <Box>
          <Heading as="h2" size="xl" textAlign="center">Joint investments</Heading>
          <Text textAlign="center">Through other vehicles</Text>
        </Box>
        <Box>
          <Heading as="h2" size="xl" textAlign="center">Who are we?</Heading>
          <Flex justify="center" gap="5">
            <Link href="https://www.linkedin.com/in/stefan-lindeberg" isExternal>
              <FaLinkedin size="24px" />
              <Text>Stefan Lindeberg</Text>
            </Link>
            <Link href="https://www.linkedin.com/in/per-björklund" isExternal>
              <FaLinkedin size="24px" />
              <Text>Per Björklund</Text>
            </Link>
          </Flex>
        </Box>
        <Box textAlign="center" p={5}>
          <Image src="path/to/footer-logo.png" alt="Best AI Website Maker" boxSize="50px" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;