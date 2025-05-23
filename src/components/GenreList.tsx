import {useGenres} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";


const GenreList = () => {


    const {data, isLoading, error} = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

    if (error) return null


    if (isLoading) return <Spinner/>

    return (
        <>
            <Heading as='h1' fontSize='2xl' marginBottom={3}>

                Genres

            </Heading>
            <List>
                {data?.results.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                objectFit='cover'
                                boxSize='32px'
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}/>
                            <Button
                                whiteSpace={'normal'}
                                textAlign={'left'}
                                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
                                fontSize={'md'} onClick={() => setSelectedGenreId(genre.id)}
                                variant="link">
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>)}
            </List>

        </>
    )
}


export default GenreList