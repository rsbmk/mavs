import Header from "../../components/Header";
import HeroList from "../../components/HeroList";

import { useGetCharacter } from "../../hooks/useGetCharacters";
import { useNearScreen } from "../../hooks/useNearScreen";

import debounce from "just-debounce-it";
import { useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";

export function Home() {
  const { characterContext, loading, page, setPage } = useGetCharacter();
  const { elementNearScreen, isIntersection } = useNearScreen({ once: false });

  const handleClickNextPage = useCallback(
    debounce(() => setPage(page + 1), 1000),
    [page]
  );

  useEffect(
    function () {
      if (isIntersection) handleClickNextPage();
    },
    [isIntersection]
  );

  return (
    <>
      <Helmet>
        <title>Mavs</title>
        <meta name="description" content=" This page is the Mavs home" />
      </Helmet>
      <Header />
      <HeroList characterContext={characterContext} loading={loading} />
      <div ref={elementNearScreen} />
    </>
  );
}
