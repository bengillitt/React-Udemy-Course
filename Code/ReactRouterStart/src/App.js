import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// https://example.com/products - after the slash is the path

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />
//   </Route>
// );

// const router2 = createBrowserRouter(routeDefinitions);

// These two work

const router = createBrowserRouter([
  // We must store this in a variable
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [ //We make the bottom two definitions children of the route above it
      { index: true, element: <HomePage /> }, // Or path: '/'// Element is the page that is rendered
      { path: "/products", element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailPage />},
    ], // These are absolute paths
  },
  // {
  //   path: "/root",
  //   element: <RootLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [ //We make the bottom two definitions children of the route above it
  //     { path: "", element: <HomePage /> }, // Element is the page that is rendered
  //     { path: "products", element: <ProductsPage /> },
  //     { path: 'products/:productId', element: <ProductDetailPage />},
  //   ],
  // }, These are now Relative Paths
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
