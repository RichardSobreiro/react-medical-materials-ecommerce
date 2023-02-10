/** @format */
import { NavLink } from "react-router-dom";

import classes from "./OrdersNavigation.module.css";

const OrdersNavigation = () => {
  return (
    <div className={classes["orders-nav-container"]}>
      <nav>
        <ul className={classes["orders-nav-list"]}>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                classes.navlink + " " + (isActive ? classes.active : undefined)
              }
              end
            >
              All Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders/new"
              className={({ isActive }) =>
                classes.navlink + " " + (isActive ? classes.active : undefined)
              }
              end
            >
              New Order
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OrdersNavigation;
