import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuggestionPage from "./pages/SuggestionPage";
import RoadmapPage from "./pages/RoadmapPage";
import RequestDetailsPage from "./pages/RequestDetailsPage";

const router = createBrowserRouter([
  { path: "/", element: <SuggestionPage /> },
  { path: "/roadmap", element: <RoadmapPage /> },
  { path: "/request-discussion/:board/:id", element: <RequestDetailsPage /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
