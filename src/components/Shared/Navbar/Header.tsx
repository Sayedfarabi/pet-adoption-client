import { Box, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Header = () => {
  return (
    <Stack
      py={1}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      color="white"
    >
      <Stack direction="row" alignItems="center">
        <Box mr={2} component="div" display="flex" alignItems="center">
          <Box mr={1}>
            <PlaceIcon />
          </Box>
          <Typography color="white">32 Bell South, Harley St. FL</Typography>
        </Box>
        <Box mr={2} component="div" display="flex" alignItems="center">
          <Box mr={1}>
            <LocalPhoneIcon />
          </Box>
          <Typography color="white">+(1) 234 567 8900</Typography>
        </Box>
        <Box mr={2} component="div" display="flex" alignItems="center">
          <Box mr={1}>
            <MarkunreadIcon />
          </Box>
          <Typography color="white">support@petenica.com</Typography>
        </Box>
      </Stack>
      <Stack direction="row" alignItems="center">
        <FaFacebookF className="mx-2" />
        <FaTwitter className="mx-2" />
        <FaPinterestP className="mx-2" />
        <FaInstagram className="mx-2" />
        <IoLogoWhatsapp className="mx-2" />
      </Stack>
    </Stack>
  );
};

export default Header;
