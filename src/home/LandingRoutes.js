import React from "react";

const IKDORoutes = [
  {
    path: "/accueil",
    component: React.lazy(() => import("./Aaccueil")),
  },

  {
    path: "/praticien",
    component: React.lazy(() => import("./Patrick")),
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
   {
    path: "/compte",
    component: React.lazy(() => import("./UserAccount")),
  },
  
];

export default IKDORoutes;
