import { ItemList, SearchBar, Toolbar } from '../../components'
import { Container, Subtitle, Title } from './styles'

export function All() {

  return (
    <Container>
      <Title>ReactTV</Title>
      <Subtitle>Search for your favorite movies and TV shows. 😉<br />feel free to look up the code, provided data by TVmaze.com</Subtitle>
      <SearchBar />
      <ItemList />
    </Container>
  )
}