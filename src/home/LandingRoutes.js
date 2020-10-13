import React from "react";

const IKDORoutes = [
  {
    path: "/Accueil",
    component: React.lazy(() => import("./AccueuseStateil")),
  },

  {
    path: "/Praticien",
    component: React.lazy(() => import("./Praticien")),
  },
  
  {
    path: "/Formations",
    component: React.lazy(() => import("./Formations")),
  },

  {
    path: "/Massages",
    component: React.lazy(() => import("./Massages")),
  },

  {
    path: "/Inscription",
    component: React.lazy(() => import("./Inscription")),
  },

  {
    path: "/Authentification",
    component: React.lazy(() => import("./Authentification")),
  }
];

export default IKDORoutes;
