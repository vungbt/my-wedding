import {
  PartialUserObjectResponse,
  RichTextItemResponse,
  UserObjectResponse
} from '@notionhq/client/build/src/api-endpoints';

export type NotionPropertiesType = Record<string, NotionPropertyType>;
export type NotionPropertyType =
  | {
      type: 'number';
      number: number | null;
      id: string;
    }
  | {
      type: 'url';
      url: string | null;
      id: string;
    }
  | {
      type: 'select';
      select: any | null;
      id: string;
    }
  | {
      type: 'multi_select';
      multi_select: Array<any>;
      id: string;
    }
  | {
      type: 'status';
      status: any | null;
      id: string;
    }
  | {
      type: 'date';
      date: any | null;
      id: string;
    }
  | {
      type: 'email';
      email: string | null;
      id: string;
    }
  | {
      type: 'phone_number';
      phone_number: string | null;
      id: string;
    }
  | {
      type: 'checkbox';
      checkbox: boolean;
      id: string;
    }
  | {
      type: 'files';
      files: Array<
        | {
            file: {
              url: string;
              expiry_time: string;
            };
            name: any;
            type?: 'file';
          }
        | {
            external: {
              url: any;
            };
            name: any;
            type?: 'external';
          }
      >;
      id: string;
    }
  | {
      type: 'created_by';
      created_by: PartialUserObjectResponse | UserObjectResponse;
      id: string;
    }
  | {
      type: 'created_time';
      created_time: string;
      id: string;
    }
  | {
      type: 'last_edited_by';
      last_edited_by: PartialUserObjectResponse | UserObjectResponse;
      id: string;
    }
  | {
      type: 'last_edited_time';
      last_edited_time: string;
      id: string;
    }
  | {
      type: 'formula';
      formula: any;
      id: string;
    }
  | {
      type: 'button';
      button: Record<string, never>;
      id: string;
    }
  | {
      type: 'unique_id';
      unique_id: {
        prefix: string | null;
        number: number | null;
      };
      id: string;
    }
  | {
      type: 'verification';
      verification: any | null | any | null;
      id: string;
    }
  | {
      type: 'title';
      title: Array<RichTextItemResponse>;
      id: string;
    }
  | {
      type: 'rich_text';
      rich_text: Array<RichTextItemResponse>;
      id: string;
    }
  | {
      type: 'people';
      people: Array<PartialUserObjectResponse | UserObjectResponse>;
      id: string;
    }
  | {
      type: 'relation';
      relation: Array<{
        id: string;
      }>;
      id: string;
    }
  | {
      type: 'rollup';
      rollup:
        | {
            type: 'number';
            number: number | null;
            function: any;
          }
        | {
            type: 'date';
            date: any | null;
            function: any;
          }
        | {
            type: 'array';
            array: Array<
              | {
                  type: 'number';
                  number: number | null;
                }
              | {
                  type: 'url';
                  url: string | null;
                }
              | {
                  type: 'select';
                  select: any | null;
                }
              | {
                  type: 'multi_select';
                  multi_select: Array<any>;
                }
              | {
                  type: 'status';
                  status: any | null;
                }
              | {
                  type: 'date';
                  date: any | null;
                }
              | {
                  type: 'email';
                  email: string | null;
                }
              | {
                  type: 'phone_number';
                  phone_number: string | null;
                }
              | {
                  type: 'checkbox';
                  checkbox: boolean;
                }
              | {
                  type: 'files';
                  files: Array<
                    | {
                        file: {
                          url: string;
                          expiry_time: string;
                        };
                        name: any;
                        type?: 'file';
                      }
                    | {
                        external: {
                          url: any;
                        };
                        name: any;
                        type?: 'external';
                      }
                  >;
                }
              | {
                  type: 'created_by';
                  created_by: PartialUserObjectResponse | UserObjectResponse;
                }
              | {
                  type: 'created_time';
                  created_time: string;
                }
              | {
                  type: 'last_edited_by';
                  last_edited_by: PartialUserObjectResponse | UserObjectResponse;
                }
              | {
                  type: 'last_edited_time';
                  last_edited_time: string;
                }
              | {
                  type: 'formula';
                  formula: any;
                }
              | {
                  type: 'button';
                  button: Record<string, never>;
                }
              | {
                  type: 'unique_id';
                  unique_id: {
                    prefix: string | null;
                    number: number | null;
                  };
                }
              | {
                  type: 'verification';
                  verification: any | null | any | null;
                }
              | {
                  type: 'title';
                  title: Array<RichTextItemResponse>;
                }
              | {
                  type: 'rich_text';
                  rich_text: Array<RichTextItemResponse>;
                }
              | {
                  type: 'people';
                  people: Array<PartialUserObjectResponse | UserObjectResponse>;
                }
              | {
                  type: 'relation';
                  relation: Array<{
                    id: string;
                  }>;
                }
            >;
            function: any;
          };
      id: string;
    };
