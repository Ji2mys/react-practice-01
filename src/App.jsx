import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModalHandler = () => {
    setIsModalOpen(true);
  };

  const hideModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          onStopPosting={hideModalHandler}
          isPosting={isModalOpen}
        />
      </main>
    </>
  );
}

export default App;
