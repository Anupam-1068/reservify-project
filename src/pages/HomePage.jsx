import { useState, useEffect } from 'react';
import { Flex, Box, Text, Image, Button } from '@chakra-ui/react';
import HomeImage from '../assets/Image1.jpg';
import PlaceCard from '../components/cards/PlaceCard';
import { spaceClient } from '../api/SpaceClient';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const {t} = useTranslation();

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
        <Text fontSize="xl">{t('empoweringStudyJourney')}</Text>
      </Box>

      <Box textAlign="center" my={4}>
        <Text fontSize="2xl" fontWeight="bold">{t('topPicks')}</Text>
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
            {t('reservifyRevolution')}
        </Text>
      </Box>

      <Box textAlign="center" my={4}>
        <Button colorScheme="blue" size="lg" as="a" href="/reservify/bookspace">{t('bookSpot')}</Button>
      </Box>
    </Flex>
    </Box>
  );
};

export default HomePage;
