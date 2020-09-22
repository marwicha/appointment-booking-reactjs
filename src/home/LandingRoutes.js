import React from "react";

const IKDORoutes = [
  {
    path: "/Accueil",
    component: React.lazy(() => import("./Accueil")),
  },
  {
    path: "/Formations",
    component: React.lazy(() => import("./Formations")),
  },

  {
    path: "/Massages",
    component: React.lazy(() => import("./Massages")),
  }
];

export default IKDORoutes;
