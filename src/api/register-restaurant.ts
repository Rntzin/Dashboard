import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
  ecommerceName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaurant({
  ecommerceName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post("/restaurants", {
    ecommerceName,
    managerName,
    email,
    phone,
  });
}
