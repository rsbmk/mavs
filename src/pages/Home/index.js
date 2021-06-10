import Header from 'components/Header'
import HeroList from 'components/HeroList'
import { Helmet } from 'react-helmet'
import { useGetCharacter } from 'hooks/useGetCharacters'

export function Home () {
  const { characterContext, loading } = useGetCharacter()

  return (
    <>
    <Helmet>
        <title>Mavs | Roberto Bocio</title>
        <meta name='description' content=' This page is the Mavs home'/>
    </Helmet>
      <Header/>
      <HeroList characterContext={characterContext} loading={loading}/>
    </>
  )
}
