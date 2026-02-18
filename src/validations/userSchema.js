import z from "zod";

export const userSchema = z.object({
  nameCharacter: z.string()
    .min(3, { message: "El nombre del personaje debe tener al menos 3 caracteres" })
    .max(100, { message: "El nombre del personaje debe tener menos de 100 caracteres" }),
  race: z.string()
    .min(1, { message: "Debes seleccionar una raza" }),
  genre: z.string()
    .min(1, { message: "Debes seleccionar un género" }),
  ki: z.number()
    .min(0, { message: "El Ki no puede ser negativo" })
    .max(100000000, { message: "El Ki máximo es 100,000,000" }),
  desc: z.string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" })
    .max(500, { message: "La descripción es demasiado larga" }),
});