import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Textarea
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., update user profile)
    toast({
      title: t('profileUpdatedSuccessfully'),
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    navigate('/reservify')
  };

  return (
    <Box p={8} maxWidth="500px" mx="auto">
      <Heading as="h1" size="xl" mb={8}>{t('profile')}</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name">
          <FormLabel>{t('name')}</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl id="email" mt={4}>
          <FormLabel>{t('email')}</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
        </FormControl>
        <FormControl id="bio" mt={4}>
          <FormLabel>{t('bio')}</FormLabel>
          <Textarea name="bio" value={formData.bio} onChange={handleChange} />
        </FormControl>
        <Button type="submit" mt={8} colorScheme="blue">{t('save')}</Button>
      </form>
    </Box>
  );
};

export default ProfilePage;
