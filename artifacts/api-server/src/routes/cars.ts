import { Router, type IRouter } from "express";
import { eq, and, gte, lte, ilike, sql } from "drizzle-orm";
import { db, carsTable } from "@workspace/db";
import {
  ListCarsQueryParams,
  GetCarParams,
  ListCarsResponse,
  GetCarResponse,
  ListCarMakesResponse,
  ListFeaturedCarsResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/cars/makes", async (_req, res): Promise<void> => {
  const makes = await db
    .selectDistinct({ make: carsTable.make })
    .from(carsTable)
    .orderBy(carsTable.make);
  const list = makes.map((r) => r.make);
  res.json(ListCarMakesResponse.parse(list));
});

router.get("/cars/featured", async (_req, res): Promise<void> => {
  const cars = await db
    .select()
    .from(carsTable)
    .where(eq(carsTable.isFeatured, true))
    .limit(8);
  res.json(ListFeaturedCarsResponse.parse(cars));
});

router.get("/cars", async (req, res): Promise<void> => {
  const parsed = ListCarsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const {
    type,
    make,
    minPrice,
    maxPrice,
    year,
    transmission,
    fuelType,
    featured,
    limit = 20,
    offset = 0,
  } = parsed.data;

  const conditions = [];

  if (type && type !== "all") {
    conditions.push(eq(carsTable.type, type));
  }
  if (make) {
    conditions.push(ilike(carsTable.make, `%${make}%`));
  }
  if (minPrice != null) {
    conditions.push(gte(carsTable.price, minPrice));
  }
  if (maxPrice != null) {
    conditions.push(lte(carsTable.price, maxPrice));
  }
  if (year != null) {
    conditions.push(eq(carsTable.year, year));
  }
  if (transmission) {
    conditions.push(eq(carsTable.transmission, transmission));
  }
  if (fuelType) {
    conditions.push(eq(carsTable.fuelType, fuelType));
  }
  if (featured != null) {
    conditions.push(eq(carsTable.isFeatured, featured));
  }

  const cars = await db
    .select()
    .from(carsTable)
    .where(conditions.length > 0 ? and(...conditions) : undefined)
    .orderBy(sql`${carsTable.isFeatured} DESC, ${carsTable.createdAt} DESC`)
    .limit(Number(limit))
    .offset(Number(offset));

  res.json(ListCarsResponse.parse(cars));
});

router.get("/cars/:id", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const parsed = GetCarParams.safeParse({ id: parseInt(raw, 10) });
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [car] = await db
    .select()
    .from(carsTable)
    .where(eq(carsTable.id, parsed.data.id));

  if (!car) {
    res.status(404).json({ error: "Car not found" });
    return;
  }

  res.json(GetCarResponse.parse(car));
});

export default router;
