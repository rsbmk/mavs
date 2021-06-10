import Header from 'components/Header'
import HeroList from 'components/HeroList'
import { useGetCharacter } from 'hooks/useGetCharacters'
import { Helmet } from 'react-helmet'

export function Search ({ params }) {
  const { keyword } = params
  const { characterContext, loading } = useGetCharacter(keyword)
  return (
    <>
      <Helmet>
          <title>{`${characterContext.length} results of ${keyword}`}</title>
          <meta name='description' content='This page is the results of the search'/>
      </Helmet>
      <Header/>
      <HeroList loading={loading} characterContext={characterContext} />
    </>
  )
}
