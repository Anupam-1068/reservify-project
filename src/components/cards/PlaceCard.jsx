import React from "react";
// import { Card } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import image1 from '../../assets/Image1.jpg'
import image2 from '../../assets/Image2.jpg'
import image3 from '../../assets/Image3.jpg'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Image } from '@chakra-ui/react'


function getRandomImage() {
  const images = [image1, image2, image3];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// function PlaceCard({ place }) {
//     return (
//         <Card>
//             <Card.Img variant="top" src={getRandomImage()} />
//             <Card.Body>
//                 <Card.Title>{place.spaceName}</Card.Title>
//                 <Card.Text>{place.location}</Card.Text>
//                 <NavLink className="nav-link" to={`/studySpace/${place.spaceId}`}>Click to view</NavLink>

//             </Card.Body>
//         </Card>
//     );
// }

// export default PlaceCard;

function PlaceCard({ place }) {
    return (
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={getRandomImage()}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{place.spaceName}</Heading>

      <Text py='2'>
      {place.location}
      </Text>
    </CardBody>

    <CardFooter>
    <NavLink className="nav-link" to={`/studySpace/${place.spaceId}`}>Click to view</NavLink>
    </CardFooter>
  </Stack>
</Card>
    );
}
export default PlaceCard;
