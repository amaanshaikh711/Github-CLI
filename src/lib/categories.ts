import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { categories } from '../../db/schema';

export interface CategoryOption {
    id: number;
    name: string;
}

export async function getAllCategories(db: Database): Promise<CategoryOption[]> {
    return db
        .select({ id: categories.id, name: categories.name })
        .from(categories)
        .orderBy(asc(categories.name));
}
