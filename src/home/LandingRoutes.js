import React from "react";

const IKDORoutes = [
  {
    path: "/Accueil",
    component: React.lazy(() => import("./Accueil")),
  },

  {
    path: "/praticien",
    component: React.lazy(() => import("./Praticien")),
  },
  
  {
    path: "/formations",
    component: React.lazy(() => import("./Formations")),
  },

  {
    path: "/massages",
    component: React.lazy(() => import("./Massages")),
  },

  {
    path: "/somatotherapie",
    component: React.lazy(() => import("./Somathoterapie")),
  },

   {
    path: "/coaching",
    component: React.lazy(() => import("./Coaching")),
  },

  {
    path: "/inscription",
    component: React.lazy(() => import("./Inscription")),
  },

  {
    path: "/authentification",
    component: React.lazy(() => import("./Authentification")),
  },

  {
    path: "/prendre-rendez-vous",
    component: React.lazy(() => import("./Appointment")),
  },
  
];

export default IKDORoutes;
