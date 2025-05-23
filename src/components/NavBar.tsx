import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import {Link} from "react-router-dom";

interface Props {
    onSearch: (searchText: string) => void
}

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" padding="10px" width="100%">
            <Link to="/">
                <Image src={logo} boxSize='60px' objectFit={"cover"}/>
            </Link>

            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    )
}


export default NavBar;