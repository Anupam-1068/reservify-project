import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { spaceClient } from '../../api/SpaceClient';
import { addDays, format, startOfToday } from 'date-fns'; // Importing addDays and format functions


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
  useToast,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BookingForm = ({ spaceName }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const toast = useToast();
  const { t } = useTranslation(); // Accessing the t function from useTranslation hook

  const today = startOfToday(); // Get the current date

// Calculate the date one week from today
const oneWeekFromToday = addDays(today, 7);

// Format the dates as strings
const formattedToday = format(today, 'yyyy-MM-dd');
const formattedOneWeekFromToday = format(oneWeekFromToday, 'yyyy-MM-dd');


  const onSubmit = async(data) => {
      try {
        const emailContent = `
        
Hello ${data.name},

You have successfully booked your spot at ${data.place} for ${data.time}.
        
We're excited to welcome you and ensure you have a wonderful experience. Should you have any questions or need assistance, feel free to reach out to us.
        
Thank you for choosing us, and we look forward to seeing you soon!
        
Best regards,
Reservify Support Team`;
                console.log(emailContent);
        // Send email
        await spaceClient.sendEmailRequest({
          recipient: data.email,
          subject: 'Appointment Confirmation',
          msgBody: emailContent,
          // from: 'anupamagarwalzzz@gmail.com',
          // to: data.recipient,
          // subject: data.subject,
          // text: data.msgBody,
        });
    toast({
      title: t('appointmentBookedSuccessfully'),
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate('/reservify');
    }, 1000);
  }catch (error) {
      console.error('Error sending email:', error);
      // Handle error, display error toast, etc.
    }
  
  };

  return (
    <Box p={8} maxWidth="500px" mx="auto">
      <Heading as="h1" size="xl" mb={8}>{t('bookAppointment')}</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="name" isInvalid={errors.name}>
          <FormLabel>{t('name')}</FormLabel>
          <Input type="text" {...register('name', { required: t('nameIsRequired') })} />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="email" isInvalid={errors.email} mt={4}>
          <FormLabel>{t('email')}</FormLabel>
          <Input type="email" {...register('email', { required: t('emailIsRequired') })} />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="place">
          <FormLabel>{t('place')}</FormLabel>
          <Input type="text" value={spaceName} isReadOnly />
        </FormControl>
        <FormControl id="date" mt={4} isInvalid={errors.date}>
          <FormLabel>{t('date')}</FormLabel>
            <Input type="date" {...register('date', { required: t('dateIsRequired') })} min={formattedToday} max={formattedOneWeekFromToday} />
          <FormErrorMessage>{errors.date && errors.date.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="time" mt={4} isInvalid={errors.time}>
          <FormLabel>{t('timeSlot')}</FormLabel>
          <Select placeholder={t('selectTimeSlot')} {...register('time', { required: t('timeSlotIsRequired') })}>
            <option value="1-2 pm">1-2 pm</option>
            <option value="3-4 pm">3-4 pm</option>
            <option value="5-6 pm">5-6 pm</option>
          </Select>
          <FormErrorMessage>{errors.time && errors.time.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="comment" mt={4}>
          <FormLabel>{t('comment')}</FormLabel>
          <Textarea {...register('comment')} rows={4} />
        </FormControl>
        <Button type="submit" mt={8} colorScheme="blue">{t('bookSpot')}</Button>
      </form>
    </Box>
  );
};

export default BookingForm;

