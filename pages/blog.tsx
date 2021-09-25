import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import posts from "../helpers/posts.json";

const Blog: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Blogg Page</h1>
      <ul>
        {Object.entries(posts).map((value, index) => {
          return (
            <li key={index}>
              <Link href="/blog/[id]" as={"/blog/" + value[0]}>
                <a>{value[1].title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
