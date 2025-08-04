import React from "react";

export default function Note({ params }) {
  const { id } = params;
  return <div>{`Note ${id}`}</div>;
}
