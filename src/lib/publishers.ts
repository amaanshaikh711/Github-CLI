import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { publishers } from '../../db/schema';

export interface PublisherOption {
    id: number;
    name: string;
}

export async function getAllPublishers(db: Database): Promise<PublisherOption[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
