import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const financingApplicationsTable = pgTable("financing_applications", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  carId: integer("car_id").notNull(),
  downPayment: integer("down_payment").notNull(),
  months: integer("months").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertFinancingApplicationSchema = createInsertSchema(financingApplicationsTable).omit({ id: true, createdAt: true });
export type InsertFinancingApplication = z.infer<typeof insertFinancingApplicationSchema>;
export type FinancingApplication = typeof financingApplicationsTable.$inferSelect;
