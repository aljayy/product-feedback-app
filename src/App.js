import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuggestionPage from "./pages/SuggestionPage";
import RoadmapPage from "./pages/RoadmapPage";
import RequestDetailsPage from "./pages/RequestDetailsPage";
import EditRequestPage from "./pages/EditRequestPage";
import AddRequestPage from "./pages/AddRequestPage";

const router = createBrowserRouter([
  { path: "/", element: <SuggestionPage /> },
  { path: "/roadmap", element: <RoadmapPage /> },
  { path: "/request-discussion/:board/:id", element: <RequestDetailsPage /> },
  { path: "/edit-request/:board/:id", element: <EditRequestPage /> },
  { path: "/new-request", element: <AddRequestPage /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
