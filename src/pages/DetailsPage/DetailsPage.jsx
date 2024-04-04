import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Image, Button, Flex } from '@chakra-ui/react';
import { useParams,NavLink } from 'react-router-dom';
import { spaceClient } from '../../api/SpaceClient';
import image1 from '../../assets/Image1.jpg'
import image2 from '../../assets/Image2.jpg'
import image3 from '../../assets/Image3.jpg'


function getRandomImage() {
  const images = [image1, image2, image3];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

const DetailsPage = () => {
  const { spaceId } = useParams();
  const [space, setSpace] = useState(null);
  const randomImageUrl = getRandomImage();

  useEffect(() => {
    const fetchSpace = async () => {
      try {
        const response = await spaceClient.getStudySpaceById(spaceId);
        if (response.data) {
          setSpace(response.data);
        } else {
          console.error('No data found for space:', spaceId);
        }
      } catch (error) {
        console.error('Error fetching space:', error);
      }
    };

    fetchSpace();
  }, [spaceId]);

  if (!space) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        {space.spaceName}
      </Heading>
      <Box display="flex" flexDirection={['column', 'row']} alignItems="center" mb={4}>
        <Image src={randomImageUrl} maxW={['100%', '50%']} mb={[4, 0]} />
        <Box ml={[0, 8]} flex="1">
          <Text fontSize="xl" mb={2}>
            Capacity: {space.capacity}
          </Text>
          <Text fontSize="xl" mb={2}>
            Location: {space.location}
          </Text>
          <Text fontSize="xl">
            Availability: {space.availability}
          </Text>
        </Box>
      </Box>
      <Flex justify="flex-end">
        <NavLink to="/form">
          <Button colorScheme="blue">Book Appointment</Button>
        </NavLink>
      </Flex>
      </Box>
  );
};

export default DetailsPage;
