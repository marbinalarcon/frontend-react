import { AdminLayout } from "../layouts";
import {
  OrdersAdmin,
  UserAdmin,
  CategoriesAdmin,
  ProductAdmin,
  TablesAdmin,
} from "../pages/Admin";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: OrdersAdmin,
  },
  {
    path: "/admin/users",
    layout: AdminLayout,
    component: UserAdmin,
  },
  {
    path: "/admin/categories",
    layout: AdminLayout,
    component: CategoriesAdmin,
  },
  {
    path: "/admin/products",
    layout: AdminLayout,
    component: ProductAdmin,
  },
  {
    path: "/admin/tables",
    layout: AdminLayout,
    component: TablesAdmin,
  }

];

export default routesAdmin;
