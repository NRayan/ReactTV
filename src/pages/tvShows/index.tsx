import { ItemList, SearchBar } from '../../components'
import { Container, Link, Subtitle, Title } from './styles'

export function TVShows() {

  return (
    <Container>
      <Title>ReactTV</Title>
      <Subtitle>Search for your favorite TV shows. 😉<br />feel free to look up the <Link href="https://github.com/NRayan/ReactTV" target="_blank">{`<code>`}</Link>, provided data by <Link href="https://www.tvmaze.com/api" target="_blank">TVmaze.com</Link></Subtitle>
      <SearchBar/>
      <ItemList />
    </Container>
  )
}