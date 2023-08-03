import { createWebHistory, createRouter } from "vue-router";
import Home from "@/view/Home.vue"; 
import About from "@/view/About.vue";
import Contact from "@/view/Contact.vue";
import Produk from "@/view/Produk.vue";
import Detail from "@/view/Detail.vue";
import Kategori from "@/view/Kategori.vue";
import KategoriProduk from "@/view/KategoriProduk.vue";

import NotFound from "@/view/NotFound.vue";
import Login from "@/view/Login.vue";
import { users } from "../assets/user";

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/kategoriproduk/:id_kategori",
    name: "DetailE",
    component: KategoriProduk,
    props: true,
  },
  {
    path: "/:pathMatch(.)",
    name: "NotFound",
    component: NotFound
  },
  
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = true;
      if (loggedInUser) {
        next(); // Lanjutkan navigasi ke halaman produk jika sudah login
      } else {
        next("/login"); // Alihkan ke halaman login jika belum login
      }
    },
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;