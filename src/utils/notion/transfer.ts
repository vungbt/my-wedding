import { NotionPropertiesType, NotionPropertyType } from '@/types/common';
import {
  PageObjectResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints';

export const transferRecordInTable = (res: QueryDatabaseResponse, noTransfer?: boolean) => {
  const results = (res.results as PageObjectResponse[]) ?? [];
  if (noTransfer) return res;

  return {
    type: res.type,
    pageOrDatabase: res.page_or_database,
    object: res.object,
    nextCursor: res.next_cursor,
    hasMore: res.has_more,
    results: results.map((item) => transferPageItem(item, noTransfer))
  };
};

export const transferPageItem = (item: PageObjectResponse, noTransfer?: boolean) => {
  if (!item) return null;
  if (noTransfer) return item;

  const createdBy = item.created_by;
  const parent = item.parent;
  const properties = item.properties;

  return {
    object: item.object,
    id: item.id,
    createdTime: item.created_time,
    lastEditedTime: item.last_edited_time,
    createdBy: {
      object: createdBy.object,
      id: createdBy.id
    },
    cover: item.cover,
    icon: item.icon,
    parent: {
      type: parent.type,
      databaseId: parent.type
    },
    archived: item.archived,
    inTrash: item.in_trash,
    properties: transferProperties(properties),
    url: item.url,
    publicUrl: item.url
  };
};

const transferProperties = (properties: NotionPropertiesType) => {
  if (!properties || Object.keys(properties).length <= 0) return null;
  const keys = Object.keys(properties);
  const newProperties: any = {};
  keys.forEach((item) => {
    newProperties[`${item}`] = transferProperty(properties[`${item}`]);
  });
  return newProperties;
};

const transferProperty = (property: NotionPropertyType) => {
  switch (property.type) {
    case 'checkbox':
      return property.checkbox;
    case 'rich_text':
    case 'title': {
      const text = (property as any)[`${property.type}`];
      if (!text || text.length <= 0) return null;
      const detailItem = text[0];
      return detailItem?.plain_text ?? (detailItem as any)?.text?.content;
    }
    case 'select':
      return property.select;
    case 'unique_id':
      return property.unique_id.number;

    case 'number':
      return property.number;
  }
};
