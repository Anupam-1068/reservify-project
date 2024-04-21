import React from 'react';
import BookingForm from '../../components/Forms/BookingForm';
import { useParams } from 'react-router-dom';

const FormPage = () => {

  const { spaceName } = useParams();
  console.log(spaceName);
  return (
    <div>
      <BookingForm spaceName={spaceName} />
    </div>
  );
};

export default FormPage;
