declare const _globalThis: {
  [key: string]: any;
  Zotero: _ZoteroTypes.Zotero;
  ZoteroPane: _ZoteroTypes.ZoteroPane;
  Zotero_Tabs: typeof Zotero_Tabs;
  window: Window;
  document: Document;
  ztoolkit: typeof ztoolkit;
  addon: typeof addon;
};

// declare const ztoolkit: import("../src/addon").MyToolkit;
declare const ztoolkit: import("E:/Github/zotero-plugin-toolkit").ZoteroToolkit;

declare const rootURI: string;

declare const addon: import("../src/addon").default;

declare const __env__: "production" | "development";

interface CitationData {
  [searchKey: string]: {
    sessionID: string,
    plainCitation: string
  }
}

interface SessionData {
  search: undefined | Zotero.Search,
  itemIDs: number[],
  pending: boolean
}