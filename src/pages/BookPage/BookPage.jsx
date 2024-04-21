import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import PlaceCard from '../../components/cards/PlaceCard';
import { spaceClient } from '../../api/SpaceClient';



const BookPage = () => {

  const [spaces, setspaces] = useState([]);

  const loadspaces = async () => {
    try {
      const response = await spaceClient.getAllStudySpaces();
      // console.log(response);

      // Check if response.data is an array before setting state
      if (Array.isArray(response.data)) {
        setspaces(response.data);
      } else {
        console.error("Data from the API is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching spaces:", error);
    }
  }

  useEffect(() => {
    loadspaces();
  }, [])
return (
  <Box className="card-container" p={4} bg="#ECE8CD" borderRadius="md">
    {spaces.map(space => (
      <Box key={`studySpace-${space.spaceId}`} className="mb-3">
        <PlaceCard place={space} />
      </Box>
    ))}
  </Box>
);
    }
export default BookPage;