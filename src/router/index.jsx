import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../modules/Components/Home";
// import Index from "../modules/home/index";
import MainHome from "../modules/Components/MainHome";
import Books from "../modules/Components/Books";
import Content from "../modules/Components/Content";
import MainContent from "../modules/Components/MainContent";
import HadisContent from "../modules/Components/HadisContent";
import HadisOdday from "../modules/Components/HadisOdday";
// import ChapterDetails from "../modules/Components/chapterDetails";

// const HomePage = lazy(() => import("../modules/home"));

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="grid place-content-center h-screen w-screen"></div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Content />}>
            <Route path="/" element={<MainContent />}>
              <Route path="/:bookName" element={<HadisOdday />}></Route>
              <Route
                path="/:bookName/:chapterId"
                element={<HadisContent />}
              ></Route>
            </Route>
            <Route path="/books" element={<Books />} />
            <Route path="/subject" element={<MainContent />} />
            <Route path="/bookmarks" element={<MainContent />} />
            <Route path="/send" element={<MainContent />} />
          </Route>
        </Route>
        <Route path="/home" element={<MainHome />} />
        <Route path="/books" element={<Books />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
