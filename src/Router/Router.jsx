import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/Shared/Login/SignIn";
import ForgetPassword from "../Pages/Shared/ForgetPassword/ForgetPassword";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import EmailVarify from "../Pages/Shared/Login/OTPLogin";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Legal from "../Pages/Legal/Legal";
import Help from "../Pages/Help/Help";
import Setting from "../Pages/Setting/Setting";
import ClientsManage from "../Pages/Clients/ClientsManage";
import Distributions from "../Pages/Distributions/Distributions";
import CatalogMusic from "../Pages/CatalogMusic/CatalogMusic";
import Inspections from "../Pages/Inspections/Inspections";
import ClientProfilePage from "../Pages/Clients/ClientProfilePage/ClientProfilePage";
import Financial from "../Pages/Financial/Financial";
import Royaltise from "../Pages/Royaltise/Royaltise";
import InspectDetails from "../Pages/Inspections/InspactDetails/InspectDetails";
import ViewRelease from "../Card/ViewRelease/ViewRelease";
import Profile from "../Pages/MyProfile/profile";
import NewInspectManage from "../Pages/Inspections/NewInspectManage/NewInspectManage";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <DashboardLayout></DashboardLayout>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/client",
        element: (
          <PrivateRoute>
            <ClientsManage></ClientsManage>
          </PrivateRoute>
        ),
      },
      {
        path: "/client/:id",
        element: (
          <PrivateRoute>
            <ClientProfilePage></ClientProfilePage>
          </PrivateRoute>
        ),
      },
      {
        path: "/financial",
        element: (
          <PrivateRoute>
            <Financial></Financial>
          </PrivateRoute>
        ),
      },
      {
        path: "/royalties",
        element: (
          <PrivateRoute>
            <Royaltise></Royaltise>
          </PrivateRoute>
        ),
      },
      {
        path: "/activity",
        element: (
          <PrivateRoute>
            <Distributions></Distributions>
          </PrivateRoute>
        ),
      },
      {
        path: "/inspection",
        element: (
          <PrivateRoute>
            <Inspections></Inspections>
          </PrivateRoute>
        ),
      },
      {
        path: "/inspection/:id",
        element: (
          <PrivateRoute>
            <NewInspectManage></NewInspectManage>
            {/* <InspectDetails></InspectDetails> */}
          </PrivateRoute>
        ),
      },
      {
        path: "/view-release/:id",
        element: (
          <PrivateRoute>
            <ViewRelease></ViewRelease>
          </PrivateRoute>
        ),
      },
      {
        path: "/legal",
        element: (
          <PrivateRoute>
            <Legal></Legal>
          </PrivateRoute>
        ),
      },
      {
        path: "/help",
        element: (
          <PrivateRoute>
            <Help></Help>
          </PrivateRoute>
        ),
      },
      {
        path: "/catalog-music",
        element: (
          <PrivateRoute>
            <CatalogMusic></CatalogMusic>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
           <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoute>
            <Setting></Setting>
          </PrivateRoute>
        ),
      },
    ],
  },
  // {
  //   path: "/booking",
  //   element: <PrivateRoute><BookingLayout></BookingLayout></PrivateRoute>,
  //   children: [
  //     {
  //       path: "/booking",
  //       element: <RecentBookings></RecentBookings>
  //     },
  //     {
  //       path: "/booking/complete",
  //       element: <BookingComplete></BookingComplete>
  //     },
  //     {
  //       path: "/booking/all",
  //       element: <AllOrder></AllOrder>
  //     },

  //   ]
  // },
  {
    path: "/login",
    element: <SignIn></SignIn>,
  },
  // {
  //   path: "/sign-up",
  //   element: <SignUp></SignUp>,
  // },
  {
    path: "/email-verify",
    element: <EmailVarify></EmailVarify>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword></ForgetPassword>,
  },
]);

export default router;
