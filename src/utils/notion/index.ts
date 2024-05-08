import 'server-only';

import { Client } from '@notionhq/client';
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { cache } from 'react';
import { transferPageItem, transferRecordInTable } from './transfer';

export enum NotionTableType {
  Message = 'message',
  Post = 'Post'
}

export type GetRecordInTablesParams = {
  type: NotionTableType;
  pageSize?: number;
  noTransfer?: boolean;
};

export const notionClient = new Client({
  auth: process.env.NOTION_SECRET
});

export const getRecordInTables = cache(async (params: GetRecordInTablesParams) => {
  const res = await notionClient.databases.query({
    filter: {
      property: 'type',
      rich_text: {
        equals: params.type
      }
    },
    page_size: params?.pageSize,
    database_id: process.env.NOTION_DATABASE_ID!
  });
  return transferRecordInTable(res);
});

export const getPageById = cache(async (id: number, noTransfer?: boolean) => {
  const res = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'id',
      unique_id: {
        equals: id
      }
    }
  });
  const results = res.results;
  if (!results || results.length <= 0) return null;
  return transferPageItem(results[0] as PageObjectResponse, noTransfer);
});

// get detail content in page
export const getPageContent = cache(async (pageId: string) => {
  const res = await notionClient.blocks.children.list({ block_id: pageId });
  return res.results as BlockObjectResponse[];
});
