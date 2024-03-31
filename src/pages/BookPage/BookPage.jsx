import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import PlaceCard from '../../components/cards/PlaceCard';
import { spaceClient } from '../../api/SpaceClient';



const BookPage = () => {

    const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    try {
      const response = await spaceClient.getAllStudySpaces();

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
  }, [])
return (
  <Box className="card-container" p={4} bg="#ECE8CD" borderRadius="md">
    {books.map(book => (
      <Box key={`studySpace-${book.id}`} className="mb-3">
        <PlaceCard place={book} />
      </Box>
    ))}
  </Box>
);
    }
export default BookPage;