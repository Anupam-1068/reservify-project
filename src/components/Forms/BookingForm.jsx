import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Select,
  Button,
  useToast
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

const BookingForm = ({ placeName }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const toast = useToast();


  const onSubmit = (data) => {
    toast({
      title: 'Appointment booked successfully!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  

  return (
    <Box p={8} maxWidth="500px" mx="auto">
      <Heading as="h1" size="xl" mb={8}>Book Appointment</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="name" isInvalid={errors.name}>
          <FormLabel>Name</FormLabel>
          <Input type="text" {...register('name', { required: 'Name is required' })} />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="place">
          <FormLabel>Place</FormLabel>
          <Input type="text" value={placeName} isReadOnly />
        </FormControl>
        <FormControl id="date" mt={4} isInvalid={errors.date}>
          <FormLabel>Date</FormLabel>
          <Input type="date" {...register('date', { required: 'Date is required' })} />
          <FormErrorMessage>{errors.date && errors.date.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="time" mt={4} isInvalid={errors.time}>
          <FormLabel>Time Slot</FormLabel>
          <Select placeholder="Select Time Slot" {...register('time', { required: 'Time Slot is required' })}>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </Select>
          <FormErrorMessage>{errors.time && errors.time.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="comment" mt={4}>
          <FormLabel>Comment</FormLabel>
          <Textarea {...register('comment')} rows={4} />
        </FormControl>
        <Button type="submit" mt={8} colorScheme="blue">Book Now</Button>
      </form>
    </Box>
  );
};

export default BookingForm;

