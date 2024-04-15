import { useState, useEffect } from 'react';
import { Flex, Box, Text, Image, Button } from '@chakra-ui/react';
import HomeImage from '../assets/Image1.jpg';
import PlaceCard from '../components/cards/PlaceCard';
import { spaceClient } from '../api/SpaceClient';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    try {
      const response = await spaceClient.getAllStudySpaces();
      console.log(response);
      
      // Check if response.data is an array before setting state
      if (Array.isArray(response.data)) {
        setBooks(response.data);
      } else {
        console.error("Data from the API is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <Box bg="#ECE8CD" minH="100vh" p={4}>
    <Flex direction="column" align="center">
      <Box maxW="70%" className="blurryImageContainer" w="100%">
        <Image src={HomeImage} alt="HomeImage" className="blurryImage" w="100%" />
      </Box>
      
      <Box textAlign="center" my={4}>
        <Text fontSize="xl">Empowering your study journey — Reservify, where space meets efficiency!</Text>
      </Box>

      <Box textAlign="center" my={4}>
        <Text fontSize="2xl" fontWeight="bold">Top Picks</Text>
      </Box>

      <Flex direction="column" align="center" w="100%">
        {books.slice(0, 2).map(book => (
          <Box key={`studySpace-${book.spaceId}`} my={3} w="50%">
            <PlaceCard place={book} />
          </Box>
        ))}
      </Flex>
      

      <Box textAlign="center" my={4}>
        <Text fontSize="lg">
          Reservify revolutionizes the way you secure study spaces! This brings a seamless and user-friendly experience to the process of reserving study rooms and collaborative areas within educational institutions in Tallinn. Whether you're a student, researcher, or professional, Reservify ensures you have instant access to the perfect study environment, enhancing productivity and fostering collaboration.
        </Text>
      </Box>

      <Box textAlign="center" my={4}>
        <Button colorScheme="blue" size="lg" as="a" href="/resevify/bookspace">Book space</Button>
      </Box>
    </Flex>
    </Box>
  );
};

export default HomePage;
