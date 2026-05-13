import { Router, type IRouter } from "express";
import { eq, count, avg } from "drizzle-orm";
import { db, carsTable } from "@workspace/db";
import { GetMarketplaceStatsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/stats", async (_req, res): Promise<void> => {
  const [totalRow] = await db.select({ count: count() }).from(carsTable);
  const [forSaleRow] = await db
    .select({ count: count() })
    .from(carsTable)
    .where(eq(carsTable.type, "sell"));
  const [forRentRow] = await db
    .select({ count: count() })
    .from(carsTable)
    .where(eq(carsTable.type, "rent"));
  const makesRows = await db
    .selectDistinct({ make: carsTable.make })
    .from(carsTable);
  const [avgRow] = await db
    .select({ avg: avg(carsTable.price) })
    .from(carsTable)
    .where(eq(carsTable.type, "sell"));

  const stats = {
    totalCars: totalRow?.count ?? 0,
    carsForSale: forSaleRow?.count ?? 0,
    carsForRent: forRentRow?.count ?? 0,
    totalMakes: makesRows.length,
    avgPrice: Math.round(Number(avgRow?.avg ?? 0)),
    happyCustomers: 1240,
  };

  res.json(GetMarketplaceStatsResponse.parse(stats));
});

export default router;
