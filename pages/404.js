import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oooops!</h1>
      <h2>The page can not be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
