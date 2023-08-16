import { NextResponse } from 'next/server'
import { Prisma, PrismaClient } from '@prisma/client';
import { FactionWithOwner } from './items';
import {prisma} from '../db'

export async function GET() {
    const res = await prisma.item.findMany({
        where:{
            type: 'oil'
        },
        include: {
            currentChaos: true,
        },
        take:5,
    })
    
    
    return NextResponse.json(res);
}

