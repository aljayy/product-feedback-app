import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuggestionPage from "./pages/SuggestionPage";
import RoadmapPage from "./pages/RoadmapPage";

const router = createBrowserRouter([
  { path: "/", element: <SuggestionPage /> },
  { path: "/roadmap", element: <RoadmapPage /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
