import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActivityIndicator, RatingTag } from '../../components';
import { requests } from '../../service';
import { Show } from '../../types';
import { noImageURL, removeHTMLTags } from '../../utils';
import { Container, ContentContainer, DetailsContainer, Label, LabelValueContainer, Summary, ThumbImage, Title, Value } from './styles';

export function Details() {

    const { id } = useParams();
    const [show, setShow] = useState<Show>({} as Show);

    async function getShow() {
        try {
            if (!id) return;
            const response = await requests.getById(id);
            setShow(response);
            console.log(response)
        } catch (error: any) {
            alert(error.message);
        }
    }

    useEffect(() => { getShow() }, []);

    return (
        <Container>
            {
                Object.keys(show).length === 0 ?
                    <ActivityIndicator />
                    :
                    <ContentContainer>
                        <ThumbImage src={show.image?.original ? show.image.original : noImageURL} />
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