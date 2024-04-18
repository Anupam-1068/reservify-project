import React from 'react';
import { useForm } from 'react-hook-form';
import { spaceClient } from '../api/SpaceClient';
import { useTranslation } from 'react-i18next';

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ContactUsPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toast = useToast();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Send email
      await spaceClient.sendEmailRequest({
        recipient:'reservifyy@gmail.com', // Enter your email address here
        subject: 'Contact Us Message',
        msgBody: `
          Message from: ${data.email}
          
          ${data.message}
        `,
      });

      toast({
        title: t('messageSentSuccessfully'),
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate('/resevify');
      }, 1000);    
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error, display error toast, etc.
    }
  };

  return (
    <Box p={8} maxWidth="500px" mx="auto">
      <Heading as="h1" size="xl" mb={8}>{t('contactUs')}</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="email" isInvalid={errors.email} mt={4}>
          <FormLabel>{t('email')}</FormLabel>
          <Input type="email" {...register('email', { required: t('emailIsRequired') })} />
        </FormControl>
        <FormControl id="message" isInvalid={errors.message} mt={4}>
          <FormLabel>{t('message')}</FormLabel>
          <Textarea {...register('message', { required: t('messageIsRequired') })} rows={6} />
        </FormControl>
        <Button type="submit" mt={8} colorScheme="blue">{t('send')}</Button>
      </form>
    </Box>
  );
};

export default ContactUsPage;
