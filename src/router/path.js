export default [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/Home"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/asset",
    name: "asset",
    component: () => import("../pages/Asset"),
    meta: {
      title: "Manage Asset",
    },
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../pages/Settings"),
    meta: {
      title: "Settings",
    },
  },
  {
    path: "/asset/add",
    name: "add-asset",
    component: () => import("../pages/AddAsset"),
    meta: {
      title: "Manage Asset",
    },
  },
];
