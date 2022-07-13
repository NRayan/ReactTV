import { useContext, useEffect, useState } from 'react';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { useParams } from 'react-router-dom';
import { ActivityIndicator, RatingTag } from '../../components';
import { ShowsContext } from '../../context';
import { requests } from '../../service';
import { Show } from '../../types';
import { noImageURL, removeHTMLTags } from '../../utils';
import { Container, ContentContainer, DetailsContainer, FavoriteContainer, Label, LabelValueContainer, Summary, ThumbContainer, ThumbImage, Title, Value } from './styles';

export function Details() {

    const { id } = useParams();
    const showId = parseInt(id?id:"");

    const [show, setShow] = useState<Show>({} as Show);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    
    const { addFavorite, removeFavorite, getFavorites } = useContext(ShowsContext);

    useEffect(() => { getShow() }, []);

    async function getShow() {
        try {
            const response = await requests.getById(showId);
            const favorites = getFavorites();
            setIsFavorite(favorites.includes(showId))
            setShow(response);

        } catch (error: any) {
            alert(error.message);
        }
    }

    function toogleFavorite() {
        isFavorite ? removeFavorite(showId) : addFavorite(showId);
        setIsFavorite(prevState => !prevState);
    }

    return (
        <Container>
            {
                Object.keys(show).length === 0 ?
                    <ActivityIndicator />
                    :
                    <ContentContainer>

                        <ThumbContainer>
                            <ThumbImage src={show.image?.original ? show.image.original : noImageURL} />
                            <FavoriteContainer onClick={toogleFavorite}>
                                {
                                    isFavorite ?
                                        <HiHeart size={32} color="#EE3555" />
                                        :
                                        <HiOutlineHeart size={26} color="#EE3555" />
                                }
                            </FavoriteContainer>
                        </ThumbContainer>

                        <DetailsContainer>

                            <Title>{show.name}</Title>

                            <Summary>{removeHTMLTags(show.summary)}</Summary>

                            {
                                show.rating?.average &&
                                <RatingTag value={show.rating.average} />
                            }

                            <LabelValueContainer>
                                <Label>Language:</Label>
                                <Value>{show.language}</Value>
                            </LabelValueContainer>

                            <LabelValueContainer>
                                <Label>Release date:</Label>
                                <Value>{show.premiered}</Value>
                            </LabelValueContainer>

                            {
                                show.genres.length > 0 &&
                                <LabelValueContainer>
                                    <Label>Genres:</Label>
                                    <Value>{show.genres.join(", ")}</Value>
                                </LabelValueContainer>
                            }

                            <LabelValueContainer>
                                <Label>Status:</Label>
                                <Value>{show.status}</Value>
                            </LabelValueContainer>

                        </DetailsContainer>

                    </ContentContainer>
            }
        </Container>
    )
}