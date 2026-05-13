import { Router, type IRouter } from "express";
import { db, financingApplicationsTable } from "@workspace/db";
import {
  SubmitFinancingApplicationBody,
  CalculateFinancingBody,
  CalculateFinancingResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/financing/calculate", async (req, res): Promise<void> => {
  const parsed = CalculateFinancingBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { price, downPayment, months, interestRate = 4.5 } = parsed.data;
  const principal = price - downPayment;
  const monthlyRate = (interestRate ?? 4.5) / 100 / 12;
  let monthlyInstallment: number;

  if (monthlyRate === 0) {
    monthlyInstallment = Math.round(principal / months);
  } else {
    monthlyInstallment = Math.round(
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
        (Math.pow(1 + monthlyRate, months) - 1)
    );
  }

  const totalAmount = monthlyInstallment * months + downPayment;
  const totalInterest = totalAmount - price;

  const result = {
    monthlyInstallment,
    totalAmount,
    totalInterest,
    downPayment,
    months,
  };

  res.json(CalculateFinancingResponse.parse(result));
});

router.post("/financing", async (req, res): Promise<void> => {
  const parsed = SubmitFinancingApplicationBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [application] = await db
    .insert(financingApplicationsTable)
    .values({
      ...parsed.data,
      status: "pending",
    })
    .returning();

  res.status(201).json({
    ...application,
    createdAt: application.createdAt.toISOString(),
  });
});

export default router;
