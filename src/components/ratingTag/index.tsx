import React from 'react';
import { Container, Rate } from './styles';
import { BiStar } from "react-icons/bi"

type props =
    {
        value: number
    }

export function RatingTag({ value }: props) {
    return (
        <Container>
            <BiStar color='#FFAD49'/>
            <Rate>{value}</Rate>
        </Container>
    )
}