import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import usePlatform from "../hooks/usePlatform";


const PlatformSelector = () => {

    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
    const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);
    const {data, error} = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);


    return (

        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {"Platform" || selectedPlatform?.name}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform => <MenuItem onClick={() => setSelectedPlatformId(platform.id)}
                                                         key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}


export default PlatformSelector;