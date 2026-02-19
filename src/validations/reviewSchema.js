import z from "zod";

export const reviewSchema = z.object({
    body: z.string()
        .min(10, { message: "La reseña debe tener al menos 10 caracteres" })
        .max(500, { message: "La reseña no puede exceder 500 caracteres" }),
    
    rating: z.number()
        .min(1, { message: "Debes seleccionar al menos 1 estrella" })
        .max(5, { message: "El máximo es 5 estrellas" }),
});

export const reviewWithAuthorSchema = reviewSchema.extend({
    author: z.string()
        .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
        .max(50, { message: "El nombre no puede exceder 50 caracteres" }),
});
