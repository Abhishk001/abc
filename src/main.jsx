import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Protected, Login} from './components/index.js'
import Signup from './components/Signup.jsx'
import Home from './page/Home.jsx'
import AllPosts from './page/AllPosts.jsx'
import AddPost from './page/AddPost.jsx'
import EditPost from './page/EditPost.jsx'
import Post from './page/Post.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/login',
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path:'/all-posts',
        element: (
          <Protected authentication>
            {" "}
            <AllPosts />
          </Protected>
        )
      },
      {
        path:'/signup',
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        )
      },
      {
        path:'/add-post',
        element: (
          <Protected authentication>
            {" "}
            <AddPost />
          </Protected>
        )
      },
      {
        path:'/edit-post/:slug',
        element: (
          <Protected authentication>
            {" "}
            <EditPost />
          </Protected>
        )
      },
      {
        path:'/edit-post/:slug',
        element: (
          <Protected authentication>
            {" "}
            <EditPost />
          </Protected>
        )
      },
      {
        path:'/post/:slug',
        element: <Post />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
