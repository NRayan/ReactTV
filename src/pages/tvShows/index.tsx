import { ItemList } from '../../components'
import { PageSubtitle, PageTitle } from '../../styles'
import { Container, Link } from './styles'

export function TVShows() {

  return (
    <Container>
      <PageTitle>ReactTV</PageTitle>
      <PageSubtitle>Search for your favorite TV shows. 😉<br />feel free to look up the <Link href="https://github.com/NRayan/ReactTV" target="_blank">{`<code>`}</Link>, provided data by <Link href="https://www.tvmaze.com/api" target="_blank">TVmaze.com</Link></PageSubtitle>
      <ItemList />
    </Container>
  )
}