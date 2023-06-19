import { z } from "zod"

export const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phoneNumber: z.string().regex(/^\+?[0-9]{6,}$/i, 'Invalid phone number'),
    address: z.string().min(5, 'Address must be at least 5 characters'),
    zipcode: z.string().min(4, 'Zipcode must be at least 4 characters'),
    city: z.string().min(2, 'City must be at least 2 characters'),
    country: z.string().min(2, 'Country must be at least 2 characters'),
});