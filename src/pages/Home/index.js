import Header from 'components/Header'
import HeroList from 'components/HeroList'

import { useGetCharacter } from 'hooks/useGetCharacters'
import { useNearScreen } from 'hooks/useNearScreen'
import { useUser } from 'hooks/useUser'

import debounce from 'just-debounce-it'
import { useCallback, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'wouter'

export function Home () {
  // eslint-disable-next-line no-unused-vars
  const { logout, isLogged } = useUser()
  const { characterContext, loading, setPage } = useGetCharacter()
  const { elementNearScreen, isIntersection } = useNearScreen({ once: false })

  const handleClickNextPage = useCallback(debounce(
    () => setPage(prePage => prePage + 1), 1000
  ), [])

  const handleLogout = () => {
    logout()
  }

  useEffect(function () {
    if (isIntersection) handleClickNextPage()
  }, [isIntersection])

  return (
    <>
    <Helmet>
        <title>Mavs | Roberto Bocio</title>
        <meta name='description' content=' This page is the Mavs home'/>
    </Helmet>
    {
      isLogged
        ? <button onClick={handleLogout} >Logout</button>
        : <Link to='/mavs/login'>Login</Link>
    }
    <Header/>
    <HeroList characterContext={characterContext} loading={loading}/>
    <div ref={elementNearScreen}/>
    </>
  )
}
