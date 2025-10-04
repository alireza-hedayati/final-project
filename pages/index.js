import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/torino");
  }, [router]);
  return <div>Home</div>;
}

export default Home;
