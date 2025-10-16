import DetailsPage from "@/components/templates/DetailsPage";
import api from "@/utils/api";
import { notFound } from "next/navigation";
import React from "react";

export default function Details({ data }) {
  return <DetailsPage {...data} />;
}

export async function getServerSideProps(context) {
  const { id: tourId } = context.params;

  const res = await api.get(`/tour/${tourId}`);
  const data = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
