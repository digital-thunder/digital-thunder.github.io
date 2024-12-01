"use client";

import { Main } from "./components/Main/Main";
import { useEffect, useState } from "react";

export default function Home() {
 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [])

  if (isLoading) {
    return null
  } else {
    return <Main></Main>
  }
}
