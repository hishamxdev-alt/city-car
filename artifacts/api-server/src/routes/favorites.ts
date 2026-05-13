import { Router, type IRouter } from "express";
import {
  ToggleFavoriteBody,
  ListFavoritesResponse,
  ToggleFavoriteResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

const favoritesStore = new Set<number>();

router.get("/favorites", async (_req, res): Promise<void> => {
  res.json(ListFavoritesResponse.parse(Array.from(favoritesStore)));
});

router.post("/favorites", async (req, res): Promise<void> => {
  const parsed = ToggleFavoriteBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { carId } = parsed.data;
  if (favoritesStore.has(carId)) {
    favoritesStore.delete(carId);
  } else {
    favoritesStore.add(carId);
  }

  res.json(ToggleFavoriteResponse.parse(Array.from(favoritesStore)));
});

export default router;
