import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <main className="font-inter scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-500">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
