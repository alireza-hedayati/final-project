import HomePage from "@/components/templates/HomePage";
import api from "@/utils/api";
import React from "react";

export default function Torino({ initialData }) {
  return <HomePage initialData={initialData} />;
}

export async function getServerSideProps() {
  const res = await api.get("/tour");
  const data = res.data;
  return {
    props: {
      initialData: data,
    },
  };
}
