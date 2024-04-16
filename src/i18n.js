import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      home: 'Home',
      language: 'Language',
      estonian: 'Estonian',
      english: 'English',
      bookAppointment: "Book Appointment",
      name: "Name",
      email: "Email",
      place: "Place",
      date: "Date",
      dateFormat: "dd-mm-yyyy",
      timeSlot: "Time Slot",
      selectTimeSlot: "Select Time Slot",
      comment: "Comment",
      bookSpot: "Book Spot",
      empoweringStudyJourney: "Empowering your study journey — Reservify, where space meets efficiency!",
      topPicks: "Top Picks",
      reservifyRevolution: "Reservify revolutionizes the way you secure study spaces! This brings a seamless and user-friendly experience to the process of reserving study rooms and collaborative areas within educational institutions in Tallinn. Whether you're a student, researcher, or professional, Reservify ensures you have instant access to the perfect study environment, enhancing productivity and fostering collaboration." , 
      location: "Location: ",
      maxNumberOfPeople: "Max Number of People: ",
      bookNow: "Book Now",
      nameIsRequired: "Name is required",
      emailIsRequired: "Email is required",
      dateIsRequired: "Date is required",
      timeSlotIsRequired: "Time Slot is required",


    },
  },
  et: {
    translation: {
      home: 'Avaleht',
      language: 'Keel',
      estonian: 'Eesti',
      english: 'Inglise',
      bookAppointment: "Broneeri aeg",
    name: "Nimi",
    email: "E-post",
    place: "Asukoht",
    date: "Kuupäev",
    dateFormat: "pp-kuu-aaaa",
    timeSlot: "Ajavahemik",
    selectTimeSlot: "Vali ajavahemik",
    comment: "Kommentaar",
    bookSpot: "Broneeri koht",
    empoweringStudyJourney: "Sinu õppereisi tugevdamine - Reservify, kus ruum kohtub efektiivsusega!",
    topPicks: "Parimad valikud",
    reservifyRevolution: "Reservify revolutsioneerib viisi, kuidas saate õppimiseks ruume broneerida! See toob haridusasutuste Tallinnas õpperuumide ja koostööalade reserveerimise protsessi sujuva ja kasutajasõbraliku kogemuse. Olgu tegemist siis õpilase, teadlase või professionaaliga, tagab Reservify, et teil oleks kohene juurdepääs ideaalsele õpikeskkonnale, suurendades tootlikkust ja soodustades koostööd.",
    location: "Asukoht: ",
    maxNumberOfPeople: "Maksimaalne inimeste arv: ",
    bookNow: "Broneeri koht",
    nameIsRequired: "Nimi on nõutud",
    emailIsRequired: "E-post on nõutud",
    dateIsRequired: "Kuupäev on nõutud",
    timeSlotIsRequired: "Ajavahemik on nõutud",

  
  },

  },
};

i18n
  .use(LanguageDetector) // Detect user's preferred language
  .use(initReactI18next) // Initialize for React
  .init({
    resources,
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false, // Prevent escaping special characters
    },
  });

export default i18n;
