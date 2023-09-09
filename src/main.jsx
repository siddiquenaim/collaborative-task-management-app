import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import Home from "./components/Home/Home";
import AuthProvider from "./provider/AuthProvider/AuthProvider";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Team from "./components/Team/Team";
import JoinedTeams from "./components/JoinedTeams/JoinedTeams";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateTeam from "./components/CreateTeam/CreateTeam";
import SingleTeam from "./components/SingleTeam/SingleTeam";
import CreateTask from "./components/CreateTask/CreateTask";
import SingleTask from "./components/SingleTask/SingleTask";
import MemberProfile from "./components/MemberProfile/MemberProfile";
import AssignMember from "./components/AssignMember/AssignMember";
import AddTeamMember from "./components/AddTeamMember/AddTeamMember";
import ViewTeamMembers from "./components/ViewTeamMembers/ViewTeamMembers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/team",
        element: <Team></Team>,
      },
      {
        path: "/joined-teams",
        element: <JoinedTeams></JoinedTeams>,
      },
      {
        path: "/create-team",
        element: <CreateTeam></CreateTeam>,
      },
      {
        path: "/create-task/:teamId",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "/visit-team/:teamId",
        element: <SingleTeam></SingleTeam>,
      },
      {
        path: "/view-team-members/:teamId",
        element: <ViewTeamMembers></ViewTeamMembers>,
      },
      {
        path: "/add-team-member/:teamId",
        element: <AddTeamMember></AddTeamMember>,
      },
      {
        path: "/task-details/:taskId",
        element: <SingleTask></SingleTask>,
      },
      {
        path: "/user-details/:userId",
        element: <MemberProfile></MemberProfile>,
      },
      {
        path: "/assign-member/:taskId",
        element: <AssignMember></AssignMember>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
