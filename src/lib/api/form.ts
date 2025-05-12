import { Form } from "@/types/form";
import { api } from "./client";

export async function submitForm(data: Form) {
  api.post('form', data)
}