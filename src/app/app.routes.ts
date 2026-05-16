import { Routes } from "@angular/router";
import { CarDetailComponent } from "./pages/car-detail.component";
import { ContactComponent } from "./pages/contact.component";
import { FinancingComponent } from "./pages/financing.component";
import { HomeComponent } from "./pages/home.component";
import { InventoryComponent } from "./pages/inventory.component";
import { NotFoundComponent } from "./pages/not-found.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "inventory", component: InventoryComponent },
  { path: "car/:id", component: CarDetailComponent },
  { path: "financing", component: FinancingComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: NotFoundComponent },
];
