import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const Dashboard = () => {
  // Sample venues data
  const [venues, setVenues] = useState([
    { id: 1, name: 'Venue 1', location: 'Location 1' },
    { id: 2, name: 'Venue 2', location: 'Location 2' },
  ]);

  // State for modal
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  // Function to handle modal open
  const handleOpen = () => {
    setIsOpen(true);
  };

  // Function to handle modal close
  const handleClose = () => {
    setIsOpen(false);
  };

  // Function to handle venue creation
  const handleCreateVenue = () => {
    const newVenue = {
      id: venues.length + 1,
      name: name,
      location: location,
    };
    setVenues([...venues, newVenue]);
    setIsOpen(false);
  };

  // Function to handle venue deletion
  const handleDeleteVenue = (id) => {
    const updatedVenues = venues.filter((venue) => venue.id !== id);
    setVenues(updatedVenues);
  };

  return (
    <div>
      <Button colorScheme="blue" onClick={handleOpen} mb={4}>
        Add Venue
      </Button>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Venues</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Location</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {venues.map((venue) => (
              <Tr key={venue.id}>
                <Td>{venue.name}</Td>
                <Td>{venue.location}</Td>
                <Td>
                  <Button colorScheme="red" onClick={() => handleDeleteVenue(venue.id)}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Venue</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreateVenue}>
              Create
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Dashboard;