import { NextResponse } from 'next/server'
import { Prisma, PrismaClient } from '@prisma/client';
import { FactionWithOwner } from './items';


export async function getData() : Promise<FactionWithOwner[]> {
    const prisma = new PrismaClient();
    const res = await prisma.item.findMany({
        where:{
            type: 'oil'
        },
        include: {
            currentChaos: true,
        },
        take:5,
    })
    
    
    return res as FactionWithOwner[];
}

