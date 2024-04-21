import { Flex, Box, Spacer, Link,Image } from "@chakra-ui/react";
// import { useTranslation } from "react-i18next";
import logo from '../assets/logo.png';
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


function NavigationBar() {

  const {t} = useTranslation();
  const navigate = useNavigate();

  return (
    <Flex bg="#f7fff0" p={3} color="black">
      <Image src={logo} alt="Logo" h={10} mr={4} /> 
      <Box p="2">
        <Link onClick={() => navigate("/reservify")}>{t('home')}</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link onClick={() => navigate("/reservify/bookspace")}>{t('bookSpot')}</Link>
      </Box>
      {/* <Box p="2">
        <Link onClick={() => navigate("/reservify/profile")}>{t('profile')}</Link>
      </Box> */}
      <Box p="2">
        <Link onClick={() => navigate("/reservify/contact")}>{t('contactUs')}</Link>
      </Box>
      <Box p="2">
        <LanguageSwitcher/>
      </Box>
    </Flex>
  );
}

export default NavigationBar;
