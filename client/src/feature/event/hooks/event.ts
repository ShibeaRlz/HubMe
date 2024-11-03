import { EventSettingRequest, EventSettingSchema } from "@/feature/event/components/event";
import { apiClient } from "@/utils/client";

export const createEvent = async (data: EventSettingRequest) => {
  const response = await apiClient.post("/createdevent", data);
  return response.data;
};
