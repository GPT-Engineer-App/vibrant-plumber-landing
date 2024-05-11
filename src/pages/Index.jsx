import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaPhone, FaWrench } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = "blue.500";

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" minHeight="100vh" bg={bgColor}>
        <Box as="header" width="full" py={4} px={8} shadow="sm" bg={bgColor}>
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg" color={textColor}>
              Reliable Plumbers
            </Heading>
            <Stack direction="row" spacing={4}>
              <Button leftIcon={<FaPhone />} colorScheme="teal" variant="solid">
                Call Now
              </Button>
            </Stack>
          </Flex>
        </Box>

        <Flex direction="column" align="center" flex="1" p={8}>
          <Image src="https://images.unsplash.com/photo-1523413555809-0fb1d4da238d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwZml4aW5nJTIwc2lua3xlbnwwfHx8fDE3MTU0NDI0MDd8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" alt="Plumber at work" mb={4} />
          <Heading as="h2" size="xl" fontWeight="bold" mb={2} color={textColor}>
            Professional Plumbing Services
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign="center" mb={4}>
            We handle all your plumbing needs with expertise and professionalism.
          </Text>
          <Button rightIcon={<FaWrench />} colorScheme={accentColor} size="lg">
            Get a Quote
          </Button>
        </Flex>

        <Box as="footer" width="full" py={4} px={8} bg={bgColor} shadow="md">
          <Flex justify="space-between" align="center">
            <Text fontSize="sm" color="gray.500">
              © 2023 Reliable Plumbers. All rights reserved.
            </Text>
            <Link color={accentColor} href="#">
              Privacy Policy
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
