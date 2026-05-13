import { pgTable, serial, text, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const carsTable = pgTable("cars", {
  id: serial("id").primaryKey(),
  make: text("make").notNull(),
  model: text("model").notNull(),
  year: integer("year").notNull(),
  price: integer("price").notNull(),
  monthlyInstallment: integer("monthly_installment"),
  type: text("type").notNull().default("sell"),
  mileage: integer("mileage").notNull().default(0),
  fuelType: text("fuel_type").notNull().default("Petrol"),
  transmission: text("transmission").notNull().default("Automatic"),
  color: text("color"),
  imageUrl: text("image_url").notNull(),
  gallery: jsonb("gallery").default([]).$type<string[]>(),
  bodyType: text("body_type"),
  isFeatured: boolean("is_featured").notNull().default(false),
  description: text("description"),
  specs: jsonb("specs").$type<Record<string, string>>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCarSchema = createInsertSchema(carsTable).omit({ id: true, createdAt: true });
export type InsertCar = z.infer<typeof insertCarSchema>;
export type Car = typeof carsTable.$inferSelect;
