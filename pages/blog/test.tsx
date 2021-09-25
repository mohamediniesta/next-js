import type { NextPage } from "next";
import { useRouter } from "next/router";

const Test: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <h1>Blog Post</h1>
      <p>Post id: {router.query.id}</p>
    </>
  );
};

export default Test;
