import UserResult from "../users/UserResult";
import UserSearch from "../users/UserSearch";

function Home({ handleAlert }) {
  return (
    <>
      <UserSearch handleAlert={handleAlert} />
      <UserResult />
    </>
  );
}

export default Home;
