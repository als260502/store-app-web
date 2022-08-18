import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  count: Scalars["Int"];
};

/** Asset system model */
export type Asset = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars["String"];
  /** The file handle */
  handle: Scalars["String"];
  /** The height of the file */
  height?: Maybe<Scalars["Float"]>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars["String"]>;
  productImages: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars["Float"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars["String"];
  /** The file width */
  width?: Maybe<Scalars["Float"]>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

/** Asset system model */
export type AssetProductImagesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductWhereInput>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: InputMaybe<Scalars["Float"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  productImages?: InputMaybe<ProductCreateManyInlineInput>;
  size?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  productImages_every?: InputMaybe<ProductWhereInput>;
  productImages_none?: InputMaybe<ProductWhereInput>;
  productImages_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  productImages?: InputMaybe<ProductUpdateManyInlineInput>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars["String"]>;
  productImages_every?: InputMaybe<ProductWhereInput>;
  productImages_none?: InputMaybe<ProductWhereInput>;
  productImages_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type AuthUser = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<AuthUser>;
  email: Scalars["String"];
  /** List of AuthUser versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  password: Scalars["String"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  token?: Maybe<Scalars["String"]>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type AuthUserCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthUserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type AuthUserHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type AuthUserPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthUserScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AuthUserUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AuthUserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AuthUserWhereUniqueInput;
};

/** A connection to a list of items. */
export type AuthUserConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AuthUserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AuthUserCreateInput = {
  cl50z94w218md01um0s6phmjg?: InputMaybe<StoreUserCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  password: Scalars["String"];
  token?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type AuthUserCreateManyInlineInput = {
  /** Connect multiple existing AuthUser documents */
  connect?: InputMaybe<Array<AuthUserWhereUniqueInput>>;
  /** Create and connect multiple existing AuthUser documents */
  create?: InputMaybe<Array<AuthUserCreateInput>>;
};

export type AuthUserCreateOneInlineInput = {
  /** Connect one existing AuthUser document */
  connect?: InputMaybe<AuthUserWhereUniqueInput>;
  /** Create and connect one AuthUser document */
  create?: InputMaybe<AuthUserCreateInput>;
};

/** An edge in a connection. */
export type AuthUserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: AuthUser;
};

/** Identifies documents */
export type AuthUserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  password?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  password_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  token?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  token_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  token_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  token_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  token_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  token_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  token_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AuthUserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PasswordAsc = "password_ASC",
  PasswordDesc = "password_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TokenAsc = "token_ASC",
  TokenDesc = "token_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type AuthUserUpdateInput = {
  cl50z94w218md01um0s6phmjg?: InputMaybe<StoreUserUpdateManyInlineInput>;
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
};

export type AuthUserUpdateManyInlineInput = {
  /** Connect multiple existing AuthUser documents */
  connect?: InputMaybe<Array<AuthUserConnectInput>>;
  /** Create and connect multiple AuthUser documents */
  create?: InputMaybe<Array<AuthUserCreateInput>>;
  /** Delete multiple AuthUser documents */
  delete?: InputMaybe<Array<AuthUserWhereUniqueInput>>;
  /** Disconnect multiple AuthUser documents */
  disconnect?: InputMaybe<Array<AuthUserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AuthUser documents */
  set?: InputMaybe<Array<AuthUserWhereUniqueInput>>;
  /** Update multiple AuthUser documents */
  update?: InputMaybe<Array<AuthUserUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AuthUser documents */
  upsert?: InputMaybe<Array<AuthUserUpsertWithNestedWhereUniqueInput>>;
};

export type AuthUserUpdateManyInput = {
  password?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
};

export type AuthUserUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AuthUserUpdateManyInput;
  /** Document search */
  where: AuthUserWhereInput;
};

export type AuthUserUpdateOneInlineInput = {
  /** Connect existing AuthUser document */
  connect?: InputMaybe<AuthUserWhereUniqueInput>;
  /** Create and connect one AuthUser document */
  create?: InputMaybe<AuthUserCreateInput>;
  /** Delete currently connected AuthUser document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected AuthUser document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single AuthUser document */
  update?: InputMaybe<AuthUserUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AuthUser document */
  upsert?: InputMaybe<AuthUserUpsertWithNestedWhereUniqueInput>;
};

export type AuthUserUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AuthUserUpdateInput;
  /** Unique document search */
  where: AuthUserWhereUniqueInput;
};

export type AuthUserUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthUserCreateInput;
  /** Update document if it exists */
  update: AuthUserUpdateInput;
};

export type AuthUserUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AuthUserUpsertInput;
  /** Unique document search */
  where: AuthUserWhereUniqueInput;
};

/** Identifies documents */
export type AuthUserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  password?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  password_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  token?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  token_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  token_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  token_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  token_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  token_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  token_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References AuthUser record uniquely */
export type AuthUserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars["Long"];
};

/** Category of products, e.g. Menswear. */
export type Category = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** List of Category versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Category>;
  name: Scalars["String"];
  products: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars["String"];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Category of products, e.g. Menswear. */
export type CategoryCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Category of products, e.g. Menswear. */
export type CategoryCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Category of products, e.g. Menswear. */
export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Category of products, e.g. Menswear. */
export type CategoryHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

/** Category of products, e.g. Menswear. */
export type CategoryLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

/** Category of products, e.g. Menswear. */
export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductWhereInput>;
};

/** Category of products, e.g. Menswear. */
export type CategoryPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Category of products, e.g. Menswear. */
export type CategoryPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Category of products, e.g. Menswear. */
export type CategoryScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Category of products, e.g. Menswear. */
export type CategoryUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Category of products, e.g. Menswear. */
export type CategoryUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** description input for default locale (pt_BR) */
  description?: InputMaybe<Scalars["String"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CategoryCreateLocalizationsInput>;
  /** name input for default locale (pt_BR) */
  name: Scalars["String"];
  products?: InputMaybe<ProductCreateManyInlineInput>;
  /** slug input for default locale (pt_BR) */
  slug: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CategoryCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  slug: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CategoryCreateLocalizationInput = {
  /** Localization input */
  data: CategoryCreateLocalizationDataInput;
  locale: Locale;
};

export type CategoryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Category;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CategoryOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type CategoryUpdateInput = {
  /** description input for default locale (pt_BR) */
  description?: InputMaybe<Scalars["String"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<CategoryUpdateLocalizationsInput>;
  /** name input for default locale (pt_BR) */
  name?: InputMaybe<Scalars["String"]>;
  products?: InputMaybe<ProductUpdateManyInlineInput>;
  /** slug input for default locale (pt_BR) */
  slug?: InputMaybe<Scalars["String"]>;
};

export type CategoryUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type CategoryUpdateLocalizationInput = {
  data: CategoryUpdateLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CategoryUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertLocalizationInput>>;
};

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  /** description input for default locale (pt_BR) */
  description?: InputMaybe<Scalars["String"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CategoryUpdateManyLocalizationsInput>;
};

export type CategoryUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
};

export type CategoryUpdateManyLocalizationInput = {
  data: CategoryUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CategoryUpdateManyLocalizationInput>>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput;
  /** Document search */
  where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Category document */
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

export type CategoryUpsertLocalizationInput = {
  create: CategoryCreateLocalizationDataInput;
  locale: Locale;
  update: CategoryUpdateLocalizationDataInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Collection of products, e.g. Winter Sale. */
export type Collection = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<Collection>;
  /** List of Collection versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Collection>;
  name: Scalars["String"];
  products: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars["String"];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductWhereInput>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CollectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CollectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CollectionConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CollectionCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** description input for default locale (pt_BR) */
  description?: InputMaybe<Scalars["String"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CollectionCreateLocalizationsInput>;
  /** name input for default locale (pt_BR) */
  name: Scalars["String"];
  products?: InputMaybe<ProductCreateManyInlineInput>;
  /** slug input for default locale (pt_BR) */
  slug: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CollectionCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  slug: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CollectionCreateLocalizationInput = {
  /** Localization input */
  data: CollectionCreateLocalizationDataInput;
  locale: Locale;
};

export type CollectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CollectionCreateLocalizationInput>>;
};

export type CollectionCreateManyInlineInput = {
  /** Connect multiple existing Collection documents */
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Create and connect multiple existing Collection documents */
  create?: InputMaybe<Array<CollectionCreateInput>>;
};

export type CollectionCreateOneInlineInput = {
  /** Connect one existing Collection document */
  connect?: InputMaybe<CollectionWhereUniqueInput>;
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>;
};

/** An edge in a connection. */
export type CollectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Collection;
};

/** Identifies documents */
export type CollectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CollectionOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type CollectionUpdateInput = {
  /** description input for default locale (pt_BR) */
  description?: InputMaybe<Scalars["String"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<CollectionUpdateLocalizationsInput>;
  /** name input for default locale (pt_BR) */
  name?: InputMaybe<Scalars["String"]>;
  products?: InputMaybe<ProductUpdateManyInlineInput>;
  /** slug input for default locale (pt_BR) */
  slug?: InputMaybe<Scalars["String"]>;
};

export type CollectionUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type CollectionUpdateLocalizationInput = {
  data: CollectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type CollectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CollectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CollectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CollectionUpsertLocalizationInput>>;
};

export type CollectionUpdateManyInlineInput = {
  /** Connect multiple existing Collection documents */
  connect?: InputMaybe<Array<CollectionConnectInput>>;
  /** Create and connect multiple Collection documents */
  create?: InputMaybe<Array<CollectionCreateInput>>;
  /** Delete multiple Collection documents */
  delete?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Disconnect multiple Collection documents */
  disconnect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Collection documents */
  set?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Update multiple Collection documents */
  update?: InputMaybe<Array<CollectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Collection documents */
  upsert?: InputMaybe<Array<CollectionUpsertWithNestedWhereUniqueInput>>;
};

export type CollectionUpdateManyInput = {
  /** description input for default locale (pt_BR) */
  description?: InputMaybe<Scalars["String"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CollectionUpdateManyLocalizationsInput>;
};

export type CollectionUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
};

export type CollectionUpdateManyLocalizationInput = {
  data: CollectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CollectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CollectionUpdateManyLocalizationInput>>;
};

export type CollectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CollectionUpdateManyInput;
  /** Document search */
  where: CollectionWhereInput;
};

export type CollectionUpdateOneInlineInput = {
  /** Connect existing Collection document */
  connect?: InputMaybe<CollectionWhereUniqueInput>;
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>;
  /** Delete currently connected Collection document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Collection document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Collection document */
  update?: InputMaybe<CollectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Collection document */
  upsert?: InputMaybe<CollectionUpsertWithNestedWhereUniqueInput>;
};

export type CollectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CollectionUpdateInput;
  /** Unique document search */
  where: CollectionWhereUniqueInput;
};

export type CollectionUpsertInput = {
  /** Create document if it didn't exist */
  create: CollectionCreateInput;
  /** Update document if it exists */
  update: CollectionUpdateInput;
};

export type CollectionUpsertLocalizationInput = {
  create: CollectionCreateLocalizationDataInput;
  locale: Locale;
  update: CollectionUpdateLocalizationDataInput;
};

export type CollectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CollectionUpsertInput;
  /** Unique document search */
  where: CollectionWhereUniqueInput;
};

/** Identifies documents */
export type CollectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Collection record uniquely */
export type CollectionWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  css: Scalars["String"];
  hex: Scalars["Hex"];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars["Hex"]>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars["ID"]>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars["ID"]>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars["Boolean"]>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars["Boolean"]>;
};

export type Currency = Node & {
  code: Scalars["String"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  default: Scalars["Boolean"];
  /** Get the document in other stages */
  documentInStages: Array<Currency>;
  /** List of Currency versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rate: Scalars["Float"];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type CurrencyCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CurrencyDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type CurrencyHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type CurrencyPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CurrencyScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CurrencyUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CurrencyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CurrencyWhereUniqueInput;
};

/** A connection to a list of items. */
export type CurrencyConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CurrencyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CurrencyCreateInput = {
  code: Scalars["String"];
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  default: Scalars["Boolean"];
  rate: Scalars["Float"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CurrencyCreateManyInlineInput = {
  /** Connect multiple existing Currency documents */
  connect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Create and connect multiple existing Currency documents */
  create?: InputMaybe<Array<CurrencyCreateInput>>;
};

export type CurrencyCreateOneInlineInput = {
  /** Connect one existing Currency document */
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  /** Create and connect one Currency document */
  create?: InputMaybe<CurrencyCreateInput>;
};

/** An edge in a connection. */
export type CurrencyEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Currency;
};

/** Identifies documents */
export type CurrencyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  code?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  code_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  default?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  default_not?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rate?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  rate_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  rate_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  rate_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  rate_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  rate_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  rate_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  rate_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CurrencyOrderByInput {
  CodeAsc = "code_ASC",
  CodeDesc = "code_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DefaultAsc = "default_ASC",
  DefaultDesc = "default_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  RateAsc = "rate_ASC",
  RateDesc = "rate_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type CurrencyUpdateInput = {
  code?: InputMaybe<Scalars["String"]>;
  default?: InputMaybe<Scalars["Boolean"]>;
  rate?: InputMaybe<Scalars["Float"]>;
};

export type CurrencyUpdateManyInlineInput = {
  /** Connect multiple existing Currency documents */
  connect?: InputMaybe<Array<CurrencyConnectInput>>;
  /** Create and connect multiple Currency documents */
  create?: InputMaybe<Array<CurrencyCreateInput>>;
  /** Delete multiple Currency documents */
  delete?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Disconnect multiple Currency documents */
  disconnect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Currency documents */
  set?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Update multiple Currency documents */
  update?: InputMaybe<Array<CurrencyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Currency documents */
  upsert?: InputMaybe<Array<CurrencyUpsertWithNestedWhereUniqueInput>>;
};

export type CurrencyUpdateManyInput = {
  default?: InputMaybe<Scalars["Boolean"]>;
  rate?: InputMaybe<Scalars["Float"]>;
};

export type CurrencyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CurrencyUpdateManyInput;
  /** Document search */
  where: CurrencyWhereInput;
};

export type CurrencyUpdateOneInlineInput = {
  /** Connect existing Currency document */
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  /** Create and connect one Currency document */
  create?: InputMaybe<CurrencyCreateInput>;
  /** Delete currently connected Currency document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Currency document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Currency document */
  update?: InputMaybe<CurrencyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Currency document */
  upsert?: InputMaybe<CurrencyUpsertWithNestedWhereUniqueInput>;
};

export type CurrencyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CurrencyUpdateInput;
  /** Unique document search */
  where: CurrencyWhereUniqueInput;
};

export type CurrencyUpsertInput = {
  /** Create document if it didn't exist */
  create: CurrencyCreateInput;
  /** Update document if it exists */
  update: CurrencyUpdateInput;
};

export type CurrencyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CurrencyUpsertInput;
  /** Unique document search */
  where: CurrencyWhereUniqueInput;
};

/** Identifies documents */
export type CurrencyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  code?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  code_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  default?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  default_not?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rate?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  rate_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  rate_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  rate_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  rate_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  rate_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  rate_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  rate_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Currency record uniquely */
export type CurrencyWhereUniqueInput = {
  code?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export enum DocumentFileTypes {
  Doc = "doc",
  Docx = "docx",
  Html = "html",
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Pdf = "pdf",
  Png = "png",
  Ppt = "ppt",
  Pptx = "pptx",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Xls = "xls",
  Xlsx = "xlsx",
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  createdAt: Scalars["DateTime"];
  data?: Maybe<Scalars["Json"]>;
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = "scale",
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars["Int"]>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars["Int"]>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  En = "en",
  /** System locale */
  PtBr = "pt_BR",
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  distance: Scalars["Float"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

export type Mutation = {
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one authUser */
  createAuthUser?: Maybe<AuthUser>;
  /** Create one category */
  createCategory?: Maybe<Category>;
  /** Create one collection */
  createCollection?: Maybe<Collection>;
  /** Create one currency */
  createCurrency?: Maybe<Currency>;
  /** Create one order */
  createOrder?: Maybe<Order>;
  /** Create one orderItem */
  createOrderItem?: Maybe<OrderItem>;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Create one productColorVariant */
  createProductColorVariant?: Maybe<ProductColorVariant>;
  /** Create one productSizeVariant */
  createProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Create one review */
  createReview?: Maybe<Review>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one storeUser */
  createStoreUser?: Maybe<StoreUser>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one authUser from _all_ existing stages. Returns deleted document. */
  deleteAuthUser?: Maybe<AuthUser>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>;
  /** Delete one collection from _all_ existing stages. Returns deleted document. */
  deleteCollection?: Maybe<Collection>;
  /** Delete one currency from _all_ existing stages. Returns deleted document. */
  deleteCurrency?: Maybe<Currency>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many AuthUser documents
   * @deprecated Please use the new paginated many mutation (deleteManyAuthUsersConnection)
   */
  deleteManyAuthUsers: BatchPayload;
  /** Delete many AuthUser documents, return deleted documents */
  deleteManyAuthUsersConnection: AuthUserConnection;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /**
   * Delete many Collection documents
   * @deprecated Please use the new paginated many mutation (deleteManyCollectionsConnection)
   */
  deleteManyCollections: BatchPayload;
  /** Delete many Collection documents, return deleted documents */
  deleteManyCollectionsConnection: CollectionConnection;
  /**
   * Delete many Currency documents
   * @deprecated Please use the new paginated many mutation (deleteManyCurrenciesConnection)
   */
  deleteManyCurrencies: BatchPayload;
  /** Delete many Currency documents, return deleted documents */
  deleteManyCurrenciesConnection: CurrencyConnection;
  /**
   * Delete many OrderItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrderItemsConnection)
   */
  deleteManyOrderItems: BatchPayload;
  /** Delete many OrderItem documents, return deleted documents */
  deleteManyOrderItemsConnection: OrderItemConnection;
  /**
   * Delete many Order documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrdersConnection)
   */
  deleteManyOrders: BatchPayload;
  /** Delete many Order documents, return deleted documents */
  deleteManyOrdersConnection: OrderConnection;
  /**
   * Delete many ProductColorVariant documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductColorVariantsConnection)
   */
  deleteManyProductColorVariants: BatchPayload;
  /** Delete many ProductColorVariant documents, return deleted documents */
  deleteManyProductColorVariantsConnection: ProductColorVariantConnection;
  /**
   * Delete many ProductSizeVariant documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductSizeVariantsConnection)
   */
  deleteManyProductSizeVariants: BatchPayload;
  /** Delete many ProductSizeVariant documents, return deleted documents */
  deleteManyProductSizeVariantsConnection: ProductSizeVariantConnection;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /**
   * Delete many Review documents
   * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
   */
  deleteManyReviews: BatchPayload;
  /** Delete many Review documents, return deleted documents */
  deleteManyReviewsConnection: ReviewConnection;
  /**
   * Delete many StoreUser documents
   * @deprecated Please use the new paginated many mutation (deleteManyStoreUsersConnection)
   */
  deleteManyStoreUsers: BatchPayload;
  /** Delete many StoreUser documents, return deleted documents */
  deleteManyStoreUsersConnection: StoreUserConnection;
  /** Delete one order from _all_ existing stages. Returns deleted document. */
  deleteOrder?: Maybe<Order>;
  /** Delete one orderItem from _all_ existing stages. Returns deleted document. */
  deleteOrderItem?: Maybe<OrderItem>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Delete one productColorVariant from _all_ existing stages. Returns deleted document. */
  deleteProductColorVariant?: Maybe<ProductColorVariant>;
  /** Delete one productSizeVariant from _all_ existing stages. Returns deleted document. */
  deleteProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Delete one review from _all_ existing stages. Returns deleted document. */
  deleteReview?: Maybe<Review>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one storeUser from _all_ existing stages. Returns deleted document. */
  deleteStoreUser?: Maybe<StoreUser>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one authUser */
  publishAuthUser?: Maybe<AuthUser>;
  /** Publish one category */
  publishCategory?: Maybe<Category>;
  /** Publish one collection */
  publishCollection?: Maybe<Collection>;
  /** Publish one currency */
  publishCurrency?: Maybe<Currency>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many AuthUser documents
   * @deprecated Please use the new paginated many mutation (publishManyAuthUsersConnection)
   */
  publishManyAuthUsers: BatchPayload;
  /** Publish many AuthUser documents */
  publishManyAuthUsersConnection: AuthUserConnection;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /**
   * Publish many Collection documents
   * @deprecated Please use the new paginated many mutation (publishManyCollectionsConnection)
   */
  publishManyCollections: BatchPayload;
  /** Publish many Collection documents */
  publishManyCollectionsConnection: CollectionConnection;
  /**
   * Publish many Currency documents
   * @deprecated Please use the new paginated many mutation (publishManyCurrenciesConnection)
   */
  publishManyCurrencies: BatchPayload;
  /** Publish many Currency documents */
  publishManyCurrenciesConnection: CurrencyConnection;
  /**
   * Publish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (publishManyOrderItemsConnection)
   */
  publishManyOrderItems: BatchPayload;
  /** Publish many OrderItem documents */
  publishManyOrderItemsConnection: OrderItemConnection;
  /**
   * Publish many Order documents
   * @deprecated Please use the new paginated many mutation (publishManyOrdersConnection)
   */
  publishManyOrders: BatchPayload;
  /** Publish many Order documents */
  publishManyOrdersConnection: OrderConnection;
  /**
   * Publish many ProductColorVariant documents
   * @deprecated Please use the new paginated many mutation (publishManyProductColorVariantsConnection)
   */
  publishManyProductColorVariants: BatchPayload;
  /** Publish many ProductColorVariant documents */
  publishManyProductColorVariantsConnection: ProductColorVariantConnection;
  /**
   * Publish many ProductSizeVariant documents
   * @deprecated Please use the new paginated many mutation (publishManyProductSizeVariantsConnection)
   */
  publishManyProductSizeVariants: BatchPayload;
  /** Publish many ProductSizeVariant documents */
  publishManyProductSizeVariantsConnection: ProductSizeVariantConnection;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /**
   * Publish many Review documents
   * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
   */
  publishManyReviews: BatchPayload;
  /** Publish many Review documents */
  publishManyReviewsConnection: ReviewConnection;
  /**
   * Publish many StoreUser documents
   * @deprecated Please use the new paginated many mutation (publishManyStoreUsersConnection)
   */
  publishManyStoreUsers: BatchPayload;
  /** Publish many StoreUser documents */
  publishManyStoreUsersConnection: StoreUserConnection;
  /** Publish one order */
  publishOrder?: Maybe<Order>;
  /** Publish one orderItem */
  publishOrderItem?: Maybe<OrderItem>;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Publish one productColorVariant */
  publishProductColorVariant?: Maybe<ProductColorVariant>;
  /** Publish one productSizeVariant */
  publishProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Publish one review */
  publishReview?: Maybe<Review>;
  /** Publish one storeUser */
  publishStoreUser?: Maybe<StoreUser>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one authUser */
  schedulePublishAuthUser?: Maybe<AuthUser>;
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<Category>;
  /** Schedule to publish one collection */
  schedulePublishCollection?: Maybe<Collection>;
  /** Schedule to publish one currency */
  schedulePublishCurrency?: Maybe<Currency>;
  /** Schedule to publish one order */
  schedulePublishOrder?: Maybe<Order>;
  /** Schedule to publish one orderItem */
  schedulePublishOrderItem?: Maybe<OrderItem>;
  /** Schedule to publish one product */
  schedulePublishProduct?: Maybe<Product>;
  /** Schedule to publish one productColorVariant */
  schedulePublishProductColorVariant?: Maybe<ProductColorVariant>;
  /** Schedule to publish one productSizeVariant */
  schedulePublishProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Schedule to publish one review */
  schedulePublishReview?: Maybe<Review>;
  /** Schedule to publish one storeUser */
  schedulePublishStoreUser?: Maybe<StoreUser>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one authUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAuthUser?: Maybe<AuthUser>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<Category>;
  /** Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCollection?: Maybe<Collection>;
  /** Unpublish one currency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCurrency?: Maybe<Currency>;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishOrder?: Maybe<Order>;
  /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishOrderItem?: Maybe<OrderItem>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduct?: Maybe<Product>;
  /** Unpublish one productColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProductColorVariant?: Maybe<ProductColorVariant>;
  /** Unpublish one productSizeVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishReview?: Maybe<Review>;
  /** Unpublish one storeUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStoreUser?: Maybe<StoreUser>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one authUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthUser?: Maybe<AuthUser>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>;
  /** Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCollection?: Maybe<Collection>;
  /** Unpublish one currency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCurrency?: Maybe<Currency>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many AuthUser documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAuthUsersConnection)
   */
  unpublishManyAuthUsers: BatchPayload;
  /** Find many AuthUser documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAuthUsersConnection: AuthUserConnection;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Unpublish many Collection documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCollectionsConnection)
   */
  unpublishManyCollections: BatchPayload;
  /** Find many Collection documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCollectionsConnection: CollectionConnection;
  /**
   * Unpublish many Currency documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCurrenciesConnection)
   */
  unpublishManyCurrencies: BatchPayload;
  /** Find many Currency documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCurrenciesConnection: CurrencyConnection;
  /**
   * Unpublish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrderItemsConnection)
   */
  unpublishManyOrderItems: BatchPayload;
  /** Find many OrderItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrderItemsConnection: OrderItemConnection;
  /**
   * Unpublish many Order documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrdersConnection)
   */
  unpublishManyOrders: BatchPayload;
  /** Find many Order documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrdersConnection: OrderConnection;
  /**
   * Unpublish many ProductColorVariant documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductColorVariantsConnection)
   */
  unpublishManyProductColorVariants: BatchPayload;
  /** Find many ProductColorVariant documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductColorVariantsConnection: ProductColorVariantConnection;
  /**
   * Unpublish many ProductSizeVariant documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductSizeVariantsConnection)
   */
  unpublishManyProductSizeVariants: BatchPayload;
  /** Find many ProductSizeVariant documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductSizeVariantsConnection: ProductSizeVariantConnection;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Unpublish many Review documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
   */
  unpublishManyReviews: BatchPayload;
  /** Find many Review documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReviewsConnection: ReviewConnection;
  /**
   * Unpublish many StoreUser documents
   * @deprecated Please use the new paginated many mutation (unpublishManyStoreUsersConnection)
   */
  unpublishManyStoreUsers: BatchPayload;
  /** Find many StoreUser documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStoreUsersConnection: StoreUserConnection;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrder?: Maybe<Order>;
  /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrderItem?: Maybe<OrderItem>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Unpublish one productColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductColorVariant?: Maybe<ProductColorVariant>;
  /** Unpublish one productSizeVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReview?: Maybe<Review>;
  /** Unpublish one storeUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStoreUser?: Maybe<StoreUser>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one authUser */
  updateAuthUser?: Maybe<AuthUser>;
  /** Update one category */
  updateCategory?: Maybe<Category>;
  /** Update one collection */
  updateCollection?: Maybe<Collection>;
  /** Update one currency */
  updateCurrency?: Maybe<Currency>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many authUsers
   * @deprecated Please use the new paginated many mutation (updateManyAuthUsersConnection)
   */
  updateManyAuthUsers: BatchPayload;
  /** Update many AuthUser documents */
  updateManyAuthUsersConnection: AuthUserConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /**
   * Update many collections
   * @deprecated Please use the new paginated many mutation (updateManyCollectionsConnection)
   */
  updateManyCollections: BatchPayload;
  /** Update many Collection documents */
  updateManyCollectionsConnection: CollectionConnection;
  /**
   * Update many currencies
   * @deprecated Please use the new paginated many mutation (updateManyCurrenciesConnection)
   */
  updateManyCurrencies: BatchPayload;
  /** Update many Currency documents */
  updateManyCurrenciesConnection: CurrencyConnection;
  /**
   * Update many orderItems
   * @deprecated Please use the new paginated many mutation (updateManyOrderItemsConnection)
   */
  updateManyOrderItems: BatchPayload;
  /** Update many OrderItem documents */
  updateManyOrderItemsConnection: OrderItemConnection;
  /**
   * Update many orders
   * @deprecated Please use the new paginated many mutation (updateManyOrdersConnection)
   */
  updateManyOrders: BatchPayload;
  /** Update many Order documents */
  updateManyOrdersConnection: OrderConnection;
  /**
   * Update many productColorVariants
   * @deprecated Please use the new paginated many mutation (updateManyProductColorVariantsConnection)
   */
  updateManyProductColorVariants: BatchPayload;
  /** Update many ProductColorVariant documents */
  updateManyProductColorVariantsConnection: ProductColorVariantConnection;
  /**
   * Update many productSizeVariants
   * @deprecated Please use the new paginated many mutation (updateManyProductSizeVariantsConnection)
   */
  updateManyProductSizeVariants: BatchPayload;
  /** Update many ProductSizeVariant documents */
  updateManyProductSizeVariantsConnection: ProductSizeVariantConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /**
   * Update many reviews
   * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
   */
  updateManyReviews: BatchPayload;
  /** Update many Review documents */
  updateManyReviewsConnection: ReviewConnection;
  /**
   * Update many storeUsers
   * @deprecated Please use the new paginated many mutation (updateManyStoreUsersConnection)
   */
  updateManyStoreUsers: BatchPayload;
  /** Update many StoreUser documents */
  updateManyStoreUsersConnection: StoreUserConnection;
  /** Update one order */
  updateOrder?: Maybe<Order>;
  /** Update one orderItem */
  updateOrderItem?: Maybe<OrderItem>;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Update one productColorVariant */
  updateProductColorVariant?: Maybe<ProductColorVariant>;
  /** Update one productSizeVariant */
  updateProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Update one review */
  updateReview?: Maybe<Review>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one storeUser */
  updateStoreUser?: Maybe<StoreUser>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one authUser */
  upsertAuthUser?: Maybe<AuthUser>;
  /** Upsert one category */
  upsertCategory?: Maybe<Category>;
  /** Upsert one collection */
  upsertCollection?: Maybe<Collection>;
  /** Upsert one currency */
  upsertCurrency?: Maybe<Currency>;
  /** Upsert one order */
  upsertOrder?: Maybe<Order>;
  /** Upsert one orderItem */
  upsertOrderItem?: Maybe<OrderItem>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
  /** Upsert one productColorVariant */
  upsertProductColorVariant?: Maybe<ProductColorVariant>;
  /** Upsert one productSizeVariant */
  upsertProductSizeVariant?: Maybe<ProductSizeVariant>;
  /** Upsert one review */
  upsertReview?: Maybe<Review>;
  /** Upsert one storeUser */
  upsertStoreUser?: Maybe<StoreUser>;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationCreateAuthUserArgs = {
  data: AuthUserCreateInput;
};

export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};

export type MutationCreateCollectionArgs = {
  data: CollectionCreateInput;
};

export type MutationCreateCurrencyArgs = {
  data: CurrencyCreateInput;
};

export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};

export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};

export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};

export type MutationCreateProductColorVariantArgs = {
  data: ProductColorVariantCreateInput;
};

export type MutationCreateProductSizeVariantArgs = {
  data: ProductSizeVariantCreateInput;
};

export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};

export type MutationCreateStoreUserArgs = {
  data: StoreUserCreateInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteAuthUserArgs = {
  where: AuthUserWhereUniqueInput;
};

export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export type MutationDeleteCollectionArgs = {
  where: CollectionWhereUniqueInput;
};

export type MutationDeleteCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAuthUsersArgs = {
  where?: InputMaybe<AuthUserManyWhereInput>;
};

export type MutationDeleteManyAuthUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuthUserManyWhereInput>;
};

export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationDeleteManyCollectionsArgs = {
  where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationDeleteManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationDeleteManyCurrenciesArgs = {
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationDeleteManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationDeleteManyOrderItemsArgs = {
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationDeleteManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationDeleteManyOrdersArgs = {
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationDeleteManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationDeleteManyProductColorVariantsArgs = {
  where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationDeleteManyProductColorVariantsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationDeleteManyProductSizeVariantsArgs = {
  where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationDeleteManyProductSizeVariantsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationDeleteManyProductsArgs = {
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationDeleteManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationDeleteManyReviewsArgs = {
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationDeleteManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationDeleteManyStoreUsersArgs = {
  where?: InputMaybe<StoreUserManyWhereInput>;
};

export type MutationDeleteManyStoreUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<StoreUserManyWhereInput>;
};

export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};

export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};

export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};

export type MutationDeleteProductColorVariantArgs = {
  where: ProductColorVariantWhereUniqueInput;
};

export type MutationDeleteProductSizeVariantArgs = {
  where: ProductSizeVariantWhereUniqueInput;
};

export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationDeleteStoreUserArgs = {
  where: StoreUserWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishAuthUserArgs = {
  to?: Array<Stage>;
  where: AuthUserWhereUniqueInput;
};

export type MutationPublishCategoryArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishCollectionArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: CollectionWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishCurrencyArgs = {
  to?: Array<Stage>;
  where: CurrencyWhereUniqueInput;
};

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAuthUsersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AuthUserManyWhereInput>;
};

export type MutationPublishManyAuthUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AuthUserManyWhereInput>;
};

export type MutationPublishManyCategoriesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyCollectionsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<CollectionManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<CollectionManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyCurrenciesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationPublishManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationPublishManyOrderItemsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<OrderItemManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<OrderItemManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyOrdersArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyProductColorVariantsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationPublishManyProductColorVariantsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationPublishManyProductSizeVariantsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationPublishManyProductSizeVariantsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationPublishManyProductsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyReviewsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationPublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationPublishManyStoreUsersArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<StoreUserManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyStoreUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<StoreUserManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishOrderArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishOrderItemArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: OrderItemWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishProductColorVariantArgs = {
  to?: Array<Stage>;
  where: ProductColorVariantWhereUniqueInput;
};

export type MutationPublishProductSizeVariantArgs = {
  to?: Array<Stage>;
  where: ProductSizeVariantWhereUniqueInput;
};

export type MutationPublishReviewArgs = {
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};

export type MutationPublishStoreUserArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: StoreUserWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishAuthUserArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: AuthUserWhereUniqueInput;
};

export type MutationSchedulePublishCategoryArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishCollectionArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: CollectionWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishCurrencyArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: CurrencyWhereUniqueInput;
};

export type MutationSchedulePublishOrderArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishOrderItemArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: OrderItemWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishProductColorVariantArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: ProductColorVariantWhereUniqueInput;
};

export type MutationSchedulePublishProductSizeVariantArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: ProductSizeVariantWhereUniqueInput;
};

export type MutationSchedulePublishReviewArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};

export type MutationSchedulePublishStoreUserArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: StoreUserWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishAuthUserArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: AuthUserWhereUniqueInput;
};

export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: CategoryWhereUniqueInput;
};

export type MutationScheduleUnpublishCollectionArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: CollectionWhereUniqueInput;
};

export type MutationScheduleUnpublishCurrencyArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: CurrencyWhereUniqueInput;
};

export type MutationScheduleUnpublishOrderArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: OrderWhereUniqueInput;
};

export type MutationScheduleUnpublishOrderItemArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: OrderItemWhereUniqueInput;
};

export type MutationScheduleUnpublishProductArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: ProductWhereUniqueInput;
};

export type MutationScheduleUnpublishProductColorVariantArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: ProductColorVariantWhereUniqueInput;
};

export type MutationScheduleUnpublishProductSizeVariantArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: ProductSizeVariantWhereUniqueInput;
};

export type MutationScheduleUnpublishReviewArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: ReviewWhereUniqueInput;
};

export type MutationScheduleUnpublishStoreUserArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: StoreUserWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: AssetWhereUniqueInput;
};

export type MutationUnpublishAuthUserArgs = {
  from?: Array<Stage>;
  where: AuthUserWhereUniqueInput;
};

export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: CategoryWhereUniqueInput;
};

export type MutationUnpublishCollectionArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: CollectionWhereUniqueInput;
};

export type MutationUnpublishCurrencyArgs = {
  from?: Array<Stage>;
  where: CurrencyWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAuthUsersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AuthUserManyWhereInput>;
};

export type MutationUnpublishManyAuthUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AuthUserManyWhereInput>;
};

export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUnpublishManyCollectionsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationUnpublishManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationUnpublishManyCurrenciesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUnpublishManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUnpublishManyOrderItemsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUnpublishManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUnpublishManyOrdersArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUnpublishManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUnpublishManyProductColorVariantsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationUnpublishManyProductColorVariantsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationUnpublishManyProductSizeVariantsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationUnpublishManyProductSizeVariantsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationUnpublishManyProductsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUnpublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUnpublishManyReviewsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUnpublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUnpublishManyStoreUsersArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<StoreUserManyWhereInput>;
};

export type MutationUnpublishManyStoreUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<StoreUserManyWhereInput>;
};

export type MutationUnpublishOrderArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: OrderWhereUniqueInput;
};

export type MutationUnpublishOrderItemArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: OrderItemWhereUniqueInput;
};

export type MutationUnpublishProductArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: ProductWhereUniqueInput;
};

export type MutationUnpublishProductColorVariantArgs = {
  from?: Array<Stage>;
  where: ProductColorVariantWhereUniqueInput;
};

export type MutationUnpublishProductSizeVariantArgs = {
  from?: Array<Stage>;
  where: ProductSizeVariantWhereUniqueInput;
};

export type MutationUnpublishReviewArgs = {
  from?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};

export type MutationUnpublishStoreUserArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: StoreUserWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateAuthUserArgs = {
  data: AuthUserUpdateInput;
  where: AuthUserWhereUniqueInput;
};

export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpdateCollectionArgs = {
  data: CollectionUpdateInput;
  where: CollectionWhereUniqueInput;
};

export type MutationUpdateCurrencyArgs = {
  data: CurrencyUpdateInput;
  where: CurrencyWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAuthUsersArgs = {
  data: AuthUserUpdateManyInput;
  where?: InputMaybe<AuthUserManyWhereInput>;
};

export type MutationUpdateManyAuthUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: AuthUserUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuthUserManyWhereInput>;
};

export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: CategoryUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUpdateManyCollectionsArgs = {
  data: CollectionUpdateManyInput;
  where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationUpdateManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: CollectionUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationUpdateManyCurrenciesArgs = {
  data: CurrencyUpdateManyInput;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUpdateManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: CurrencyUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUpdateManyOrderItemsArgs = {
  data: OrderItemUpdateManyInput;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUpdateManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: OrderItemUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUpdateManyOrdersArgs = {
  data: OrderUpdateManyInput;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUpdateManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: OrderUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUpdateManyProductColorVariantsArgs = {
  data: ProductColorVariantUpdateManyInput;
  where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationUpdateManyProductColorVariantsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: ProductColorVariantUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationUpdateManyProductSizeVariantsArgs = {
  data: ProductSizeVariantUpdateManyInput;
  where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationUpdateManyProductSizeVariantsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: ProductSizeVariantUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyInput;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUpdateManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: ProductUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUpdateManyReviewsArgs = {
  data: ReviewUpdateManyInput;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUpdateManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: ReviewUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUpdateManyStoreUsersArgs = {
  data: StoreUserUpdateManyInput;
  where?: InputMaybe<StoreUserManyWhereInput>;
};

export type MutationUpdateManyStoreUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: StoreUserUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<StoreUserManyWhereInput>;
};

export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};

export type MutationUpdateOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};

export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type MutationUpdateProductColorVariantArgs = {
  data: ProductColorVariantUpdateInput;
  where: ProductColorVariantWhereUniqueInput;
};

export type MutationUpdateProductSizeVariantArgs = {
  data: ProductSizeVariantUpdateInput;
  where: ProductSizeVariantWhereUniqueInput;
};

export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpdateStoreUserArgs = {
  data: StoreUserUpdateInput;
  where: StoreUserWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpsertAuthUserArgs = {
  upsert: AuthUserUpsertInput;
  where: AuthUserWhereUniqueInput;
};

export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpsertCollectionArgs = {
  upsert: CollectionUpsertInput;
  where: CollectionWhereUniqueInput;
};

export type MutationUpsertCurrencyArgs = {
  upsert: CurrencyUpsertInput;
  where: CurrencyWhereUniqueInput;
};

export type MutationUpsertOrderArgs = {
  upsert: OrderUpsertInput;
  where: OrderWhereUniqueInput;
};

export type MutationUpsertOrderItemArgs = {
  upsert: OrderItemUpsertInput;
  where: OrderItemWhereUniqueInput;
};

export type MutationUpsertProductArgs = {
  upsert: ProductUpsertInput;
  where: ProductWhereUniqueInput;
};

export type MutationUpsertProductColorVariantArgs = {
  upsert: ProductColorVariantUpsertInput;
  where: ProductColorVariantWhereUniqueInput;
};

export type MutationUpsertProductSizeVariantArgs = {
  upsert: ProductSizeVariantUpsertInput;
  where: ProductSizeVariantWhereUniqueInput;
};

export type MutationUpsertReviewArgs = {
  upsert: ReviewUpsertInput;
  where: ReviewWhereUniqueInput;
};

export type MutationUpsertStoreUserArgs = {
  upsert: StoreUserUpsertInput;
  where: StoreUserWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"];
  /** The Stage of an object */
};

export type Order = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Order>;
  /** List of Order versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Order>;
  orderItems: Array<OrderItem>;
  orderValue: Scalars["Float"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  storeUser?: Maybe<StoreUser>;
  stripeCheckoutId: Scalars["String"];
  total: Scalars["Float"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  userEmail?: Maybe<Scalars["String"]>;
};

export type OrderCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type OrderCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type OrderHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type OrderLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type OrderOrderItemsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type OrderPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type OrderPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type OrderStoreUserArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type OrderUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OrderWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<OrderCreateLocalizationsInput>;
  orderItems?: InputMaybe<OrderItemCreateManyInlineInput>;
  /** orderValue input for default locale (pt_BR) */
  orderValue: Scalars["Float"];
  storeUser?: InputMaybe<StoreUserCreateOneInlineInput>;
  stripeCheckoutId: Scalars["String"];
  /** total input for default locale (pt_BR) */
  total: Scalars["Float"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  userEmail?: InputMaybe<Scalars["String"]>;
};

export type OrderCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  orderValue: Scalars["Float"];
  total: Scalars["Float"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type OrderCreateLocalizationInput = {
  /** Localization input */
  data: OrderCreateLocalizationDataInput;
  locale: Locale;
};

export type OrderCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<OrderCreateLocalizationInput>>;
};

export type OrderCreateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Create and connect multiple existing Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderCreateOneInlineInput = {
  /** Connect one existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>;
};

/** An edge in a connection. */
export type OrderEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Order;
};

export type OrderItem = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<OrderItem>;
  /** List of OrderItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<OrderItem>;
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quantity: Scalars["Int"];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  total: Scalars["Float"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type OrderItemCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type OrderItemCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type OrderItemHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type OrderItemLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type OrderItemOrderArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type OrderItemPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type OrderItemUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type OrderItemUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OrderItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderItemConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OrderItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderItemCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<OrderItemCreateLocalizationsInput>;
  order?: InputMaybe<OrderCreateOneInlineInput>;
  product?: InputMaybe<ProductCreateOneInlineInput>;
  quantity: Scalars["Int"];
  /** total input for default locale (pt_BR) */
  total: Scalars["Float"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type OrderItemCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  total: Scalars["Float"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type OrderItemCreateLocalizationInput = {
  /** Localization input */
  data: OrderItemCreateLocalizationDataInput;
  locale: Locale;
};

export type OrderItemCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<OrderItemCreateLocalizationInput>>;
};

export type OrderItemCreateManyInlineInput = {
  /** Connect multiple existing OrderItem documents */
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Create and connect multiple existing OrderItem documents */
  create?: InputMaybe<Array<OrderItemCreateInput>>;
};

export type OrderItemCreateOneInlineInput = {
  /** Connect one existing OrderItem document */
  connect?: InputMaybe<OrderItemWhereUniqueInput>;
  /** Create and connect one OrderItem document */
  create?: InputMaybe<OrderItemCreateInput>;
};

/** An edge in a connection. */
export type OrderItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: OrderItem;
};

/** Identifies documents */
export type OrderItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  order?: InputMaybe<OrderWhereInput>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars["Int"]>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum OrderItemOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  QuantityAsc = "quantity_ASC",
  QuantityDesc = "quantity_DESC",
  TotalAsc = "total_ASC",
  TotalDesc = "total_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type OrderItemUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<OrderItemUpdateLocalizationsInput>;
  order?: InputMaybe<OrderUpdateOneInlineInput>;
  product?: InputMaybe<ProductUpdateOneInlineInput>;
  quantity?: InputMaybe<Scalars["Int"]>;
  /** total input for default locale (pt_BR) */
  total?: InputMaybe<Scalars["Float"]>;
};

export type OrderItemUpdateLocalizationDataInput = {
  total?: InputMaybe<Scalars["Float"]>;
};

export type OrderItemUpdateLocalizationInput = {
  data: OrderItemUpdateLocalizationDataInput;
  locale: Locale;
};

export type OrderItemUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<OrderItemCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<OrderItemUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<OrderItemUpsertLocalizationInput>>;
};

export type OrderItemUpdateManyInlineInput = {
  /** Connect multiple existing OrderItem documents */
  connect?: InputMaybe<Array<OrderItemConnectInput>>;
  /** Create and connect multiple OrderItem documents */
  create?: InputMaybe<Array<OrderItemCreateInput>>;
  /** Delete multiple OrderItem documents */
  delete?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Disconnect multiple OrderItem documents */
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing OrderItem documents */
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Update multiple OrderItem documents */
  update?: InputMaybe<Array<OrderItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple OrderItem documents */
  upsert?: InputMaybe<Array<OrderItemUpsertWithNestedWhereUniqueInput>>;
};

export type OrderItemUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<OrderItemUpdateManyLocalizationsInput>;
  quantity?: InputMaybe<Scalars["Int"]>;
  /** total input for default locale (pt_BR) */
  total?: InputMaybe<Scalars["Float"]>;
};

export type OrderItemUpdateManyLocalizationDataInput = {
  total?: InputMaybe<Scalars["Float"]>;
};

export type OrderItemUpdateManyLocalizationInput = {
  data: OrderItemUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type OrderItemUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<OrderItemUpdateManyLocalizationInput>>;
};

export type OrderItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OrderItemUpdateManyInput;
  /** Document search */
  where: OrderItemWhereInput;
};

export type OrderItemUpdateOneInlineInput = {
  /** Connect existing OrderItem document */
  connect?: InputMaybe<OrderItemWhereUniqueInput>;
  /** Create and connect one OrderItem document */
  create?: InputMaybe<OrderItemCreateInput>;
  /** Delete currently connected OrderItem document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected OrderItem document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single OrderItem document */
  update?: InputMaybe<OrderItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single OrderItem document */
  upsert?: InputMaybe<OrderItemUpsertWithNestedWhereUniqueInput>;
};

export type OrderItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OrderItemUpdateInput;
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderItemCreateInput;
  /** Update document if it exists */
  update: OrderItemUpdateInput;
};

export type OrderItemUpsertLocalizationInput = {
  create: OrderItemCreateLocalizationDataInput;
  locale: Locale;
  update: OrderItemUpdateLocalizationDataInput;
};

export type OrderItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OrderItemUpsertInput;
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
};

/** Identifies documents */
export type OrderItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  order?: InputMaybe<OrderWhereInput>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars["Int"]>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  total?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  total_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References OrderItem record uniquely */
export type OrderItemWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Identifies documents */
export type OrderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  storeUser?: InputMaybe<StoreUserWhereInput>;
  stripeCheckoutId?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  stripeCheckoutId_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  stripeCheckoutId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  stripeCheckoutId_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  userEmail?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  userEmail_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  userEmail_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  userEmail_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  userEmail_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  userEmail_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  userEmail_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  userEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  userEmail_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  userEmail_starts_with?: InputMaybe<Scalars["String"]>;
};

export enum OrderOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  OrderValueAsc = "orderValue_ASC",
  OrderValueDesc = "orderValue_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StripeCheckoutIdAsc = "stripeCheckoutId_ASC",
  StripeCheckoutIdDesc = "stripeCheckoutId_DESC",
  TotalAsc = "total_ASC",
  TotalDesc = "total_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  UserEmailAsc = "userEmail_ASC",
  UserEmailDesc = "userEmail_DESC",
}

export type OrderUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<OrderUpdateLocalizationsInput>;
  orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>;
  /** orderValue input for default locale (pt_BR) */
  orderValue?: InputMaybe<Scalars["Float"]>;
  storeUser?: InputMaybe<StoreUserUpdateOneInlineInput>;
  stripeCheckoutId?: InputMaybe<Scalars["String"]>;
  /** total input for default locale (pt_BR) */
  total?: InputMaybe<Scalars["Float"]>;
  userEmail?: InputMaybe<Scalars["String"]>;
};

export type OrderUpdateLocalizationDataInput = {
  orderValue?: InputMaybe<Scalars["Float"]>;
  total?: InputMaybe<Scalars["Float"]>;
};

export type OrderUpdateLocalizationInput = {
  data: OrderUpdateLocalizationDataInput;
  locale: Locale;
};

export type OrderUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<OrderCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<OrderUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<OrderUpsertLocalizationInput>>;
};

export type OrderUpdateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderConnectInput>>;
  /** Create and connect multiple Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>;
  /** Delete multiple Order documents */
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Disconnect multiple Order documents */
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Order documents */
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Update multiple Order documents */
  update?: InputMaybe<Array<OrderUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Order documents */
  upsert?: InputMaybe<Array<OrderUpsertWithNestedWhereUniqueInput>>;
};

export type OrderUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<OrderUpdateManyLocalizationsInput>;
  /** orderValue input for default locale (pt_BR) */
  orderValue?: InputMaybe<Scalars["Float"]>;
  stripeCheckoutId?: InputMaybe<Scalars["String"]>;
  /** total input for default locale (pt_BR) */
  total?: InputMaybe<Scalars["Float"]>;
  userEmail?: InputMaybe<Scalars["String"]>;
};

export type OrderUpdateManyLocalizationDataInput = {
  orderValue?: InputMaybe<Scalars["Float"]>;
  total?: InputMaybe<Scalars["Float"]>;
};

export type OrderUpdateManyLocalizationInput = {
  data: OrderUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type OrderUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<OrderUpdateManyLocalizationInput>>;
};

export type OrderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OrderUpdateManyInput;
  /** Document search */
  where: OrderWhereInput;
};

export type OrderUpdateOneInlineInput = {
  /** Connect existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>;
  /** Delete currently connected Order document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Order document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Order document */
  update?: InputMaybe<OrderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Order document */
  upsert?: InputMaybe<OrderUpsertWithNestedWhereUniqueInput>;
};

export type OrderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OrderUpdateInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

export type OrderUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderCreateInput;
  /** Update document if it exists */
  update: OrderUpdateInput;
};

export type OrderUpsertLocalizationInput = {
  create: OrderCreateLocalizationDataInput;
  locale: Locale;
  update: OrderUpdateLocalizationDataInput;
};

export type OrderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OrderUpsertInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

/** Identifies documents */
export type OrderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  orderValue?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  orderValue_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  orderValue_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  orderValue_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  orderValue_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  orderValue_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  orderValue_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  orderValue_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  storeUser?: InputMaybe<StoreUserWhereInput>;
  stripeCheckoutId?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  stripeCheckoutId_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  stripeCheckoutId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  stripeCheckoutId_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with?: InputMaybe<Scalars["String"]>;
  total?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  total_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  userEmail?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  userEmail_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  userEmail_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  userEmail_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  userEmail_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  userEmail_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  userEmail_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  userEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  userEmail_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  userEmail_starts_with?: InputMaybe<Scalars["String"]>;
};

/** References Order record uniquely */
export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars["Int"]>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type Product = Node & {
  categories: Array<Category>;
  collections: Array<Collection>;
  color: Array<ProductColorVariant>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars["String"];
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  /** List of Product versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  images: Array<Asset>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Product>;
  name: Scalars["String"];
  orderItems: Array<OrderItem>;
  price: Scalars["Float"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quantity: Scalars["Int"];
  reviews: Array<Review>;
  scheduledIn: Array<ScheduledOperation>;
  size: Array<ProductSizeVariant>;
  slug: Scalars["String"];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type ProductCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type ProductCollectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CollectionOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CollectionWhereInput>;
};

export type ProductColorArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductColorVariantOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductColorVariantWhereInput>;
};

export type ProductCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProductCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type ProductHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type ProductImagesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetWhereInput>;
};

export type ProductLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type ProductOrderItemsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type ProductPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProductPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductReviewsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type ProductScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProductSizeArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductSizeVariantOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductSizeVariantWhereInput>;
};

export type ProductUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProductUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductColorVariant = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ProductColorVariant>;
  /** List of ProductColorVariant versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  name: Scalars["String"];
  productColor: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type ProductColorVariantCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductColorVariantDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type ProductColorVariantHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type ProductColorVariantProductColorArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductColorVariantPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductColorVariantScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProductColorVariantUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductColorVariantConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductColorVariantWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductColorVariantConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductColorVariantEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductColorVariantCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  productColor?: InputMaybe<ProductCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductColorVariantCreateManyInlineInput = {
  /** Connect multiple existing ProductColorVariant documents */
  connect?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
  /** Create and connect multiple existing ProductColorVariant documents */
  create?: InputMaybe<Array<ProductColorVariantCreateInput>>;
};

export type ProductColorVariantCreateOneInlineInput = {
  /** Connect one existing ProductColorVariant document */
  connect?: InputMaybe<ProductColorVariantWhereUniqueInput>;
  /** Create and connect one ProductColorVariant document */
  create?: InputMaybe<ProductColorVariantCreateInput>;
};

/** An edge in a connection. */
export type ProductColorVariantEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ProductColorVariant;
};

/** Identifies documents */
export type ProductColorVariantManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductColorVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductColorVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductColorVariantWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  productColor_every?: InputMaybe<ProductWhereInput>;
  productColor_none?: InputMaybe<ProductWhereInput>;
  productColor_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProductColorVariantOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ProductColorVariantUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  productColor?: InputMaybe<ProductUpdateManyInlineInput>;
};

export type ProductColorVariantUpdateManyInlineInput = {
  /** Connect multiple existing ProductColorVariant documents */
  connect?: InputMaybe<Array<ProductColorVariantConnectInput>>;
  /** Create and connect multiple ProductColorVariant documents */
  create?: InputMaybe<Array<ProductColorVariantCreateInput>>;
  /** Delete multiple ProductColorVariant documents */
  delete?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
  /** Disconnect multiple ProductColorVariant documents */
  disconnect?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductColorVariant documents */
  set?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
  /** Update multiple ProductColorVariant documents */
  update?: InputMaybe<
    Array<ProductColorVariantUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple ProductColorVariant documents */
  upsert?: InputMaybe<
    Array<ProductColorVariantUpsertWithNestedWhereUniqueInput>
  >;
};

export type ProductColorVariantUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars["String"]>;
};

export type ProductColorVariantUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductColorVariantUpdateManyInput;
  /** Document search */
  where: ProductColorVariantWhereInput;
};

export type ProductColorVariantUpdateOneInlineInput = {
  /** Connect existing ProductColorVariant document */
  connect?: InputMaybe<ProductColorVariantWhereUniqueInput>;
  /** Create and connect one ProductColorVariant document */
  create?: InputMaybe<ProductColorVariantCreateInput>;
  /** Delete currently connected ProductColorVariant document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected ProductColorVariant document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single ProductColorVariant document */
  update?: InputMaybe<ProductColorVariantUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductColorVariant document */
  upsert?: InputMaybe<ProductColorVariantUpsertWithNestedWhereUniqueInput>;
};

export type ProductColorVariantUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductColorVariantUpdateInput;
  /** Unique document search */
  where: ProductColorVariantWhereUniqueInput;
};

export type ProductColorVariantUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductColorVariantCreateInput;
  /** Update document if it exists */
  update: ProductColorVariantUpdateInput;
};

export type ProductColorVariantUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductColorVariantUpsertInput;
  /** Unique document search */
  where: ProductColorVariantWhereUniqueInput;
};

/** Identifies documents */
export type ProductColorVariantWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductColorVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductColorVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductColorVariantWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  productColor_every?: InputMaybe<ProductWhereInput>;
  productColor_none?: InputMaybe<ProductWhereInput>;
  productColor_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ProductColorVariant record uniquely */
export type ProductColorVariantWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  categories?: InputMaybe<CategoryCreateManyInlineInput>;
  collections?: InputMaybe<CollectionCreateManyInlineInput>;
  color?: InputMaybe<ProductColorVariantCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** description input for default locale (pt_BR) */
  description: Scalars["String"];
  images?: InputMaybe<AssetCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductCreateLocalizationsInput>;
  /** name input for default locale (pt_BR) */
  name: Scalars["String"];
  orderItems?: InputMaybe<OrderItemCreateManyInlineInput>;
  /** price input for default locale (pt_BR) */
  price: Scalars["Float"];
  quantity: Scalars["Int"];
  reviews?: InputMaybe<ReviewCreateManyInlineInput>;
  size?: InputMaybe<ProductSizeVariantCreateManyInlineInput>;
  /** slug input for default locale (pt_BR) */
  slug: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  name: Scalars["String"];
  price: Scalars["Float"];
  slug: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductCreateLocalizationInput = {
  /** Localization input */
  data: ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Product;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  categories_every?: InputMaybe<CategoryWhereInput>;
  categories_none?: InputMaybe<CategoryWhereInput>;
  categories_some?: InputMaybe<CategoryWhereInput>;
  collections_every?: InputMaybe<CollectionWhereInput>;
  collections_none?: InputMaybe<CollectionWhereInput>;
  collections_some?: InputMaybe<CollectionWhereInput>;
  color_every?: InputMaybe<ProductColorVariantWhereInput>;
  color_none?: InputMaybe<ProductColorVariantWhereInput>;
  color_some?: InputMaybe<ProductColorVariantWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars["Int"]>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  reviews_every?: InputMaybe<ReviewWhereInput>;
  reviews_none?: InputMaybe<ReviewWhereInput>;
  reviews_some?: InputMaybe<ReviewWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size_every?: InputMaybe<ProductSizeVariantWhereInput>;
  size_none?: InputMaybe<ProductSizeVariantWhereInput>;
  size_some?: InputMaybe<ProductSizeVariantWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProductOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  QuantityAsc = "quantity_ASC",
  QuantityDesc = "quantity_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ProductSizeVariant = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ProductSizeVariant>;
  /** List of ProductSizeVariant versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  name: Scalars["String"];
  productSize: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type ProductSizeVariantCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductSizeVariantDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type ProductSizeVariantHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type ProductSizeVariantProductSizeArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductSizeVariantPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductSizeVariantScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProductSizeVariantUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductSizeVariantConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductSizeVariantWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductSizeVariantConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductSizeVariantEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductSizeVariantCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  productSize?: InputMaybe<ProductCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductSizeVariantCreateManyInlineInput = {
  /** Connect multiple existing ProductSizeVariant documents */
  connect?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
  /** Create and connect multiple existing ProductSizeVariant documents */
  create?: InputMaybe<Array<ProductSizeVariantCreateInput>>;
};

export type ProductSizeVariantCreateOneInlineInput = {
  /** Connect one existing ProductSizeVariant document */
  connect?: InputMaybe<ProductSizeVariantWhereUniqueInput>;
  /** Create and connect one ProductSizeVariant document */
  create?: InputMaybe<ProductSizeVariantCreateInput>;
};

/** An edge in a connection. */
export type ProductSizeVariantEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ProductSizeVariant;
};

/** Identifies documents */
export type ProductSizeVariantManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  productSize_every?: InputMaybe<ProductWhereInput>;
  productSize_none?: InputMaybe<ProductWhereInput>;
  productSize_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProductSizeVariantOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ProductSizeVariantUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  productSize?: InputMaybe<ProductUpdateManyInlineInput>;
};

export type ProductSizeVariantUpdateManyInlineInput = {
  /** Connect multiple existing ProductSizeVariant documents */
  connect?: InputMaybe<Array<ProductSizeVariantConnectInput>>;
  /** Create and connect multiple ProductSizeVariant documents */
  create?: InputMaybe<Array<ProductSizeVariantCreateInput>>;
  /** Delete multiple ProductSizeVariant documents */
  delete?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
  /** Disconnect multiple ProductSizeVariant documents */
  disconnect?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductSizeVariant documents */
  set?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
  /** Update multiple ProductSizeVariant documents */
  update?: InputMaybe<
    Array<ProductSizeVariantUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple ProductSizeVariant documents */
  upsert?: InputMaybe<
    Array<ProductSizeVariantUpsertWithNestedWhereUniqueInput>
  >;
};

export type ProductSizeVariantUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars["String"]>;
};

export type ProductSizeVariantUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductSizeVariantUpdateManyInput;
  /** Document search */
  where: ProductSizeVariantWhereInput;
};

export type ProductSizeVariantUpdateOneInlineInput = {
  /** Connect existing ProductSizeVariant document */
  connect?: InputMaybe<ProductSizeVariantWhereUniqueInput>;
  /** Create and connect one ProductSizeVariant document */
  create?: InputMaybe<ProductSizeVariantCreateInput>;
  /** Delete currently connected ProductSizeVariant document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected ProductSizeVariant document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single ProductSizeVariant document */
  update?: InputMaybe<ProductSizeVariantUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductSizeVariant document */
  upsert?: InputMaybe<ProductSizeVariantUpsertWithNestedWhereUniqueInput>;
};

export type ProductSizeVariantUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductSizeVariantUpdateInput;
  /** Unique document search */
  where: ProductSizeVariantWhereUniqueInput;
};

export type ProductSizeVariantUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductSizeVariantCreateInput;
  /** Update document if it exists */
  update: ProductSizeVariantUpdateInput;
};

export type ProductSizeVariantUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductSizeVariantUpsertInput;
  /** Unique document search */
  where: ProductSizeVariantWhereUniqueInput;
};

/** Identifies documents */
export type ProductSizeVariantWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  productSize_every?: InputMaybe<ProductWhereInput>;
  productSize_none?: InputMaybe<ProductWhereInput>;
  productSize_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ProductSizeVariant record uniquely */
export type ProductSizeVariantWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ProductUpdateInput = {
  categories?: InputMaybe<CategoryUpdateManyInlineInput>;
  collections?: InputMaybe<CollectionUpdateManyInlineInput>;
  color?: InputMaybe<ProductColorVariantUpdateManyInlineInput>;
  /** description input for default locale (pt_BR) */
  description?: InputMaybe<Scalars["String"]>;
  images?: InputMaybe<AssetUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ProductUpdateLocalizationsInput>;
  /** name input for default locale (pt_BR) */
  name?: InputMaybe<Scalars["String"]>;
  orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>;
  /** price input for default locale (pt_BR) */
  price?: InputMaybe<Scalars["Float"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
  reviews?: InputMaybe<ReviewUpdateManyInlineInput>;
  size?: InputMaybe<ProductSizeVariantUpdateManyInlineInput>;
  /** slug input for default locale (pt_BR) */
  slug?: InputMaybe<Scalars["String"]>;
};

export type ProductUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type ProductUpdateLocalizationInput = {
  data: ProductUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ProductUpsertLocalizationInput>>;
};

export type ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  /** description input for default locale (pt_BR) */
  description?: InputMaybe<Scalars["String"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductUpdateManyLocalizationsInput>;
  /** name input for default locale (pt_BR) */
  name?: InputMaybe<Scalars["String"]>;
  /** price input for default locale (pt_BR) */
  price?: InputMaybe<Scalars["Float"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
};

export type ProductUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
};

export type ProductUpdateManyLocalizationInput = {
  data: ProductUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateManyLocalizationInput>>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertLocalizationInput = {
  create: ProductCreateLocalizationDataInput;
  locale: Locale;
  update: ProductUpdateLocalizationDataInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  categories_every?: InputMaybe<CategoryWhereInput>;
  categories_none?: InputMaybe<CategoryWhereInput>;
  categories_some?: InputMaybe<CategoryWhereInput>;
  collections_every?: InputMaybe<CollectionWhereInput>;
  collections_none?: InputMaybe<CollectionWhereInput>;
  collections_some?: InputMaybe<CollectionWhereInput>;
  color_every?: InputMaybe<ProductColorVariantWhereInput>;
  color_none?: InputMaybe<ProductColorVariantWhereInput>;
  color_some?: InputMaybe<ProductColorVariantWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  price?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars["Int"]>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  reviews_every?: InputMaybe<ReviewWhereInput>;
  reviews_none?: InputMaybe<ReviewWhereInput>;
  reviews_some?: InputMaybe<ReviewWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size_every?: InputMaybe<ProductSizeVariantWhereInput>;
  size_none?: InputMaybe<ProductSizeVariantWhereInput>;
  size_some?: InputMaybe<ProductSizeVariantWhereInput>;
  slug?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single authUser */
  authUser?: Maybe<AuthUser>;
  /** Retrieve document version */
  authUserVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple authUsers */
  authUsers: Array<AuthUser>;
  /** Retrieve multiple authUsers using the Relay connection interface */
  authUsersConnection: AuthUserConnection;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve a single category */
  category?: Maybe<Category>;
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single collection */
  collection?: Maybe<Collection>;
  /** Retrieve document version */
  collectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple collections */
  collections: Array<Collection>;
  /** Retrieve multiple collections using the Relay connection interface */
  collectionsConnection: CollectionConnection;
  /** Retrieve multiple currencies */
  currencies: Array<Currency>;
  /** Retrieve multiple currencies using the Relay connection interface */
  currenciesConnection: CurrencyConnection;
  /** Retrieve a single currency */
  currency?: Maybe<Currency>;
  /** Retrieve document version */
  currencyVersion?: Maybe<DocumentVersion>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single order */
  order?: Maybe<Order>;
  /** Retrieve a single orderItem */
  orderItem?: Maybe<OrderItem>;
  /** Retrieve document version */
  orderItemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple orderItems */
  orderItems: Array<OrderItem>;
  /** Retrieve multiple orderItems using the Relay connection interface */
  orderItemsConnection: OrderItemConnection;
  /** Retrieve document version */
  orderVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple orders */
  orders: Array<Order>;
  /** Retrieve multiple orders using the Relay connection interface */
  ordersConnection: OrderConnection;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve a single productColorVariant */
  productColorVariant?: Maybe<ProductColorVariant>;
  /** Retrieve document version */
  productColorVariantVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple productColorVariants */
  productColorVariants: Array<ProductColorVariant>;
  /** Retrieve multiple productColorVariants using the Relay connection interface */
  productColorVariantsConnection: ProductColorVariantConnection;
  /** Retrieve a single productSizeVariant */
  productSizeVariant?: Maybe<ProductSizeVariant>;
  /** Retrieve document version */
  productSizeVariantVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple productSizeVariants */
  productSizeVariants: Array<ProductSizeVariant>;
  /** Retrieve multiple productSizeVariants using the Relay connection interface */
  productSizeVariantsConnection: ProductSizeVariantConnection;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve a single review */
  review?: Maybe<Review>;
  /** Retrieve document version */
  reviewVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple reviews */
  reviews: Array<Review>;
  /** Retrieve multiple reviews using the Relay connection interface */
  reviewsConnection: ReviewConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single storeUser */
  storeUser?: Maybe<StoreUser>;
  /** Retrieve document version */
  storeUserVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple storeUsers */
  storeUsers: Array<StoreUser>;
  /** Retrieve multiple storeUsers using the Relay connection interface */
  storeUsersConnection: StoreUserConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};

export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAuthUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AuthUserWhereUniqueInput;
};

export type QueryAuthUserVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAuthUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AuthUserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AuthUserWhereInput>;
};

export type QueryAuthUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AuthUserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AuthUserWhereInput>;
};

export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};

export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};

export type QueryCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
};

export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};

export type QueryCollectionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CollectionWhereUniqueInput;
};

export type QueryCollectionVersionArgs = {
  where: VersionWhereInput;
};

export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CollectionOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<CollectionWhereInput>;
};

export type QueryCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CollectionOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<CollectionWhereInput>;
};

export type QueryCurrenciesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CurrencyOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<CurrencyWhereInput>;
};

export type QueryCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CurrencyOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<CurrencyWhereInput>;
};

export type QueryCurrencyArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CurrencyWhereUniqueInput;
};

export type QueryCurrencyVersionArgs = {
  where: VersionWhereInput;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
  locales?: Array<Locale>;
  stage?: Stage;
};

export type QueryOrderArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: OrderWhereUniqueInput;
};

export type QueryOrderItemArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: OrderItemWhereUniqueInput;
};

export type QueryOrderItemVersionArgs = {
  where: VersionWhereInput;
};

export type QueryOrderItemsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type QueryOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type QueryOrderVersionArgs = {
  where: VersionWhereInput;
};

export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<OrderWhereInput>;
};

export type QueryOrdersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<OrderWhereInput>;
};

export type QueryProductArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductWhereUniqueInput;
};

export type QueryProductColorVariantArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductColorVariantWhereUniqueInput;
};

export type QueryProductColorVariantVersionArgs = {
  where: VersionWhereInput;
};

export type QueryProductColorVariantsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductColorVariantOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ProductColorVariantWhereInput>;
};

export type QueryProductColorVariantsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductColorVariantOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ProductColorVariantWhereInput>;
};

export type QueryProductSizeVariantArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductSizeVariantWhereUniqueInput;
};

export type QueryProductSizeVariantVersionArgs = {
  where: VersionWhereInput;
};

export type QueryProductSizeVariantsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductSizeVariantOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ProductSizeVariantWhereInput>;
};

export type QueryProductSizeVariantsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductSizeVariantOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ProductSizeVariantWhereInput>;
};

export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};

export type QueryProductsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryProductsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryReviewArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ReviewWhereUniqueInput;
};

export type QueryReviewVersionArgs = {
  where: VersionWhereInput;
};

export type QueryReviewsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};

export type QueryReviewsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryStoreUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: StoreUserWhereUniqueInput;
};

export type QueryStoreUserVersionArgs = {
  where: VersionWhereInput;
};

export type QueryStoreUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StoreUserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<StoreUserWhereInput>;
};

export type QueryStoreUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StoreUserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<StoreUserWhereInput>;
};

export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  a: Scalars["RGBATransparency"];
  b: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  r: Scalars["RGBAHue"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars["RGBATransparency"];
  b: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  r: Scalars["RGBAHue"];
};

export type Review = Node & {
  content: Scalars["String"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Review>;
  email: Scalars["String"];
  headline: Scalars["String"];
  /** List of Review versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  name: Scalars["String"];
  product?: Maybe<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rating?: Maybe<Scalars["Int"]>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type ReviewCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type ReviewHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type ReviewProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ReviewUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ReviewWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReviewConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ReviewEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReviewCreateInput = {
  content: Scalars["String"];
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  headline: Scalars["String"];
  name: Scalars["String"];
  product?: InputMaybe<ProductCreateOneInlineInput>;
  rating?: InputMaybe<Scalars["Int"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ReviewCreateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Create and connect multiple existing Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
};

export type ReviewCreateOneInlineInput = {
  /** Connect one existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
};

/** An edge in a connection. */
export type ReviewEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Review;
};

/** Identifies documents */
export type ReviewManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  content?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  content_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]>;
  headline?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  headline_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  rating_not?: InputMaybe<Scalars["Int"]>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ReviewOrderByInput {
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  HeadlineAsc = "headline_ASC",
  HeadlineDesc = "headline_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  RatingAsc = "rating_ASC",
  RatingDesc = "rating_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ReviewUpdateInput = {
  content?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  headline?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  product?: InputMaybe<ProductUpdateOneInlineInput>;
  rating?: InputMaybe<Scalars["Int"]>;
};

export type ReviewUpdateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewConnectInput>>;
  /** Create and connect multiple Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
  /** Delete multiple Review documents */
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Disconnect multiple Review documents */
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Review documents */
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Update multiple Review documents */
  update?: InputMaybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Review documents */
  upsert?: InputMaybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>;
};

export type ReviewUpdateManyInput = {
  content?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  headline?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  rating?: InputMaybe<Scalars["Int"]>;
};

export type ReviewUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ReviewUpdateManyInput;
  /** Document search */
  where: ReviewWhereInput;
};

export type ReviewUpdateOneInlineInput = {
  /** Connect existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
  /** Delete currently connected Review document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Review document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Review document */
  update?: InputMaybe<ReviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Review document */
  upsert?: InputMaybe<ReviewUpsertWithNestedWhereUniqueInput>;
};

export type ReviewUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ReviewUpdateInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertInput = {
  /** Create document if it didn't exist */
  create: ReviewCreateInput;
  /** Update document if it exists */
  update: ReviewUpdateInput;
};

export type ReviewUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ReviewUpsertInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

/** Identifies documents */
export type ReviewWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  content?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  content_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]>;
  headline?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  headline_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  rating_not?: InputMaybe<Scalars["Int"]>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns HTMl representation */
  html: Scalars["String"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** Returns AST representation */
  raw: Scalars["RichTextAST"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars["String"]>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars["Json"];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument =
  | Asset
  | AuthUser
  | Category
  | Collection
  | Currency
  | Order
  | OrderItem
  | Product
  | ProductColorVariant
  | ProductSizeVariant
  | Review
  | StoreUser;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = "CANCELED",
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars["String"]>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** Whether scheduled release should be run */
  isActive: Scalars["Boolean"];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars["Boolean"];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars["DateTime"]>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars["String"]>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  IsImplicitAsc = "isImplicit_ASC",
  IsImplicitDesc = "isImplicit_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  ReleaseAtAsc = "releaseAt_ASC",
  ReleaseAtDesc = "releaseAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  Published = "PUBLISHED",
}

export type StoreUser = Node & {
  authUser?: Maybe<AuthUser>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<StoreUser>;
  email?: Maybe<Scalars["String"]>;
  /** List of StoreUser versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<StoreUser>;
  name: Scalars["String"];
  nickname?: Maybe<Scalars["String"]>;
  orders: Array<Order>;
  phones: Scalars["String"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  surname: Scalars["String"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type StoreUserAuthUserArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type StoreUserCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type StoreUserCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type StoreUserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type StoreUserHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type StoreUserLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type StoreUserOrdersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OrderWhereInput>;
};

export type StoreUserPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type StoreUserPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type StoreUserScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type StoreUserUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type StoreUserUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type StoreUserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StoreUserWhereUniqueInput;
};

/** A connection to a list of items. */
export type StoreUserConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StoreUserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StoreUserCreateInput = {
  authUser?: InputMaybe<AuthUserCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** description input for default locale (pt_BR) */
  description?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<StoreUserCreateLocalizationsInput>;
  /** name input for default locale (pt_BR) */
  name: Scalars["String"];
  nickname?: InputMaybe<Scalars["String"]>;
  orders?: InputMaybe<OrderCreateManyInlineInput>;
  phones: Scalars["String"];
  /** surname input for default locale (pt_BR) */
  surname: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type StoreUserCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  surname: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type StoreUserCreateLocalizationInput = {
  /** Localization input */
  data: StoreUserCreateLocalizationDataInput;
  locale: Locale;
};

export type StoreUserCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<StoreUserCreateLocalizationInput>>;
};

export type StoreUserCreateManyInlineInput = {
  /** Connect multiple existing StoreUser documents */
  connect?: InputMaybe<Array<StoreUserWhereUniqueInput>>;
  /** Create and connect multiple existing StoreUser documents */
  create?: InputMaybe<Array<StoreUserCreateInput>>;
};

export type StoreUserCreateOneInlineInput = {
  /** Connect one existing StoreUser document */
  connect?: InputMaybe<StoreUserWhereUniqueInput>;
  /** Create and connect one StoreUser document */
  create?: InputMaybe<StoreUserCreateInput>;
};

/** An edge in a connection. */
export type StoreUserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: StoreUser;
};

/** Identifies documents */
export type StoreUserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StoreUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StoreUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StoreUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  authUser?: InputMaybe<AuthUserWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  nickname_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  nickname_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  nickname_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  nickname_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  nickname_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  nickname_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  nickname_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  nickname_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  nickname_starts_with?: InputMaybe<Scalars["String"]>;
  orders_every?: InputMaybe<OrderWhereInput>;
  orders_none?: InputMaybe<OrderWhereInput>;
  orders_some?: InputMaybe<OrderWhereInput>;
  phones?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  phones_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  phones_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  phones_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  phones_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  phones_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  phones_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  phones_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  phones_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  phones_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum StoreUserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  NicknameAsc = "nickname_ASC",
  NicknameDesc = "nickname_DESC",
  PhonesAsc = "phones_ASC",
  PhonesDesc = "phones_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SurnameAsc = "surname_ASC",
  SurnameDesc = "surname_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type StoreUserUpdateInput = {
  authUser?: InputMaybe<AuthUserUpdateOneInlineInput>;
  /** description input for default locale (pt_BR) */
  description?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<StoreUserUpdateLocalizationsInput>;
  /** name input for default locale (pt_BR) */
  name?: InputMaybe<Scalars["String"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  orders?: InputMaybe<OrderUpdateManyInlineInput>;
  phones?: InputMaybe<Scalars["String"]>;
  /** surname input for default locale (pt_BR) */
  surname?: InputMaybe<Scalars["String"]>;
};

export type StoreUserUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  surname?: InputMaybe<Scalars["String"]>;
};

export type StoreUserUpdateLocalizationInput = {
  data: StoreUserUpdateLocalizationDataInput;
  locale: Locale;
};

export type StoreUserUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<StoreUserCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<StoreUserUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<StoreUserUpsertLocalizationInput>>;
};

export type StoreUserUpdateManyInlineInput = {
  /** Connect multiple existing StoreUser documents */
  connect?: InputMaybe<Array<StoreUserConnectInput>>;
  /** Create and connect multiple StoreUser documents */
  create?: InputMaybe<Array<StoreUserCreateInput>>;
  /** Delete multiple StoreUser documents */
  delete?: InputMaybe<Array<StoreUserWhereUniqueInput>>;
  /** Disconnect multiple StoreUser documents */
  disconnect?: InputMaybe<Array<StoreUserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing StoreUser documents */
  set?: InputMaybe<Array<StoreUserWhereUniqueInput>>;
  /** Update multiple StoreUser documents */
  update?: InputMaybe<Array<StoreUserUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StoreUser documents */
  upsert?: InputMaybe<Array<StoreUserUpsertWithNestedWhereUniqueInput>>;
};

export type StoreUserUpdateManyInput = {
  /** description input for default locale (pt_BR) */
  description?: InputMaybe<Scalars["String"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<StoreUserUpdateManyLocalizationsInput>;
  /** name input for default locale (pt_BR) */
  name?: InputMaybe<Scalars["String"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  phones?: InputMaybe<Scalars["String"]>;
  /** surname input for default locale (pt_BR) */
  surname?: InputMaybe<Scalars["String"]>;
};

export type StoreUserUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  surname?: InputMaybe<Scalars["String"]>;
};

export type StoreUserUpdateManyLocalizationInput = {
  data: StoreUserUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type StoreUserUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<StoreUserUpdateManyLocalizationInput>>;
};

export type StoreUserUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StoreUserUpdateManyInput;
  /** Document search */
  where: StoreUserWhereInput;
};

export type StoreUserUpdateOneInlineInput = {
  /** Connect existing StoreUser document */
  connect?: InputMaybe<StoreUserWhereUniqueInput>;
  /** Create and connect one StoreUser document */
  create?: InputMaybe<StoreUserCreateInput>;
  /** Delete currently connected StoreUser document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected StoreUser document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single StoreUser document */
  update?: InputMaybe<StoreUserUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StoreUser document */
  upsert?: InputMaybe<StoreUserUpsertWithNestedWhereUniqueInput>;
};

export type StoreUserUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StoreUserUpdateInput;
  /** Unique document search */
  where: StoreUserWhereUniqueInput;
};

export type StoreUserUpsertInput = {
  /** Create document if it didn't exist */
  create: StoreUserCreateInput;
  /** Update document if it exists */
  update: StoreUserUpdateInput;
};

export type StoreUserUpsertLocalizationInput = {
  create: StoreUserCreateLocalizationDataInput;
  locale: Locale;
  update: StoreUserUpdateLocalizationDataInput;
};

export type StoreUserUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StoreUserUpsertInput;
  /** Unique document search */
  where: StoreUserWhereUniqueInput;
};

/** Identifies documents */
export type StoreUserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StoreUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StoreUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StoreUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  authUser?: InputMaybe<AuthUserWhereInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  nickname?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  nickname_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  nickname_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  nickname_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  nickname_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  nickname_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  nickname_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  nickname_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  nickname_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  nickname_starts_with?: InputMaybe<Scalars["String"]>;
  orders_every?: InputMaybe<OrderWhereInput>;
  orders_none?: InputMaybe<OrderWhereInput>;
  orders_some?: InputMaybe<OrderWhereInput>;
  phones?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  phones_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  phones_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  phones_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  phones_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  phones_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  phones_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  phones_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  phones_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  phones_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  surname?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  surname_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  surname_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  surname_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  surname_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  surname_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  surname_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  surname_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  surname_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  surname_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References StoreUser record uniquely */
export type StoreUserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export enum SystemDateTimeFieldVariation {
  Base = "BASE",
  Combined = "COMBINED",
  Localization = "LOCALIZATION",
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** Flag to determine if user is active or not */
  isActive: Scalars["Boolean"];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars["String"];
  /** Profile Picture url */
  picture?: Maybe<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
};

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = "MEMBER",
  Pat = "PAT",
  Public = "PUBLIC",
  Webhook = "WEBHOOK",
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PictureAsc = "picture_ASC",
  PictureDesc = "picture_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Version = {
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export enum _FilterKind {
  And = "AND",
  Not = "NOT",
  Or = "OR",
  Contains = "contains",
  ContainsAll = "contains_all",
  ContainsNone = "contains_none",
  ContainsSome = "contains_some",
  EndsWith = "ends_with",
  Eq = "eq",
  EqNot = "eq_not",
  Gt = "gt",
  Gte = "gte",
  In = "in",
  Lt = "lt",
  Lte = "lte",
  NotContains = "not_contains",
  NotEndsWith = "not_ends_with",
  NotIn = "not_in",
  NotStartsWith = "not_starts_with",
  RelationalEvery = "relational_every",
  RelationalNone = "relational_none",
  RelationalSingle = "relational_single",
  RelationalSome = "relational_some",
  Search = "search",
  StartsWith = "starts_with",
}

export enum _MutationInputFieldKind {
  Enum = "enum",
  Relation = "relation",
  RichText = "richText",
  RichTextWithEmbeds = "richTextWithEmbeds",
  Scalar = "scalar",
  Union = "union",
  Virtual = "virtual",
}

export enum _MutationKind {
  Create = "create",
  Delete = "delete",
  DeleteMany = "deleteMany",
  Publish = "publish",
  PublishMany = "publishMany",
  SchedulePublish = "schedulePublish",
  ScheduleUnpublish = "scheduleUnpublish",
  Unpublish = "unpublish",
  UnpublishMany = "unpublishMany",
  Update = "update",
  UpdateMany = "updateMany",
  Upsert = "upsert",
}

export enum _OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum _RelationInputCardinality {
  Many = "many",
  One = "one",
}

export enum _RelationInputKind {
  Create = "create",
  Update = "update",
}

export enum _RelationKind {
  Regular = "regular",
  Union = "union",
}

export enum _SystemDateTimeFieldVariation {
  Base = "base",
  Combined = "combined",
  Localization = "localization",
}

export type CreateCategoryMutationVariables = Exact<{
  name: Scalars["String"];
  slug: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
}>;

export type CreateCategoryMutation = {
  createCategory?: { slug: string; id: string; name: string } | null;
};

export type CreateOrderItemMutationVariables = Exact<{
  orderId: Scalars["ID"];
  productId: Scalars["ID"];
  quantity: Scalars["Int"];
  itemTotal: Scalars["Float"];
}>;

export type CreateOrderItemMutation = {
  createOrderItem?: { id: string } | null;
};

export type CreateOrderMutationVariables = Exact<{
  total: Scalars["Float"];
  userId?: InputMaybe<Scalars["ID"]>;
  itemQuantity: Scalars["Int"];
  totalItem: Scalars["Float"];
  productId: Scalars["ID"];
  userEmail?: InputMaybe<Scalars["String"]>;
}>;

export type CreateOrderMutation = {
  createOrder?: { id: string; orderItems: Array<{ id: string }> } | null;
};

export type CreateProductColorMutationVariables = Exact<{
  color: Scalars["String"];
}>;

export type CreateProductColorMutation = {
  createProductColorVariant?: { id: string; name: string } | null;
};

export type CreateProductSizeMutationVariables = Exact<{
  size: Scalars["String"];
}>;

export type CreateProductSizeMutation = {
  createProductSizeVariant?: { id: string; name: string } | null;
};

export type CreateProductVariantMutationVariables = Exact<{
  color: Scalars["String"];
  size: Scalars["String"];
}>;

export type CreateProductVariantMutation = {
  createProductColorVariant?: { id: string; name: string } | null;
  createProductSizeVariant?: { id: string; name: string } | null;
};

export type CreateProductMutationVariables = Exact<{
  name: Scalars["String"];
  slug: Scalars["String"];
  description: Scalars["String"];
  price: Scalars["Float"];
  quantity: Scalars["Int"];
  categories?: InputMaybe<Scalars["ID"]>;
  color?: InputMaybe<Scalars["ID"]>;
  size?: InputMaybe<Scalars["ID"]>;
}>;

export type CreateProductMutation = { createProduct?: { id: string } | null };

export type CreateSingleOrderMutationVariables = Exact<{
  total: Scalars["Float"];
  orderValue: Scalars["Float"];
  stripeCheckout: Scalars["String"];
  userEmail: Scalars["String"];
  userId: Scalars["ID"];
}>;

export type CreateSingleOrderMutation = { createOrder?: { id: string } | null };

export type CreateStoreUserMutationVariables = Exact<{
  name: Scalars["String"];
  surname: Scalars["String"];
  phones: Scalars["String"];
  description?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  nickname?: InputMaybe<Scalars["String"]>;
}>;

export type CreateStoreUserMutation = {
  createStoreUser?: { id: string } | null;
};

export type RemoveOrderItemMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type RemoveOrderItemMutation = {
  deleteOrderItem?: { id: string } | null;
};

export type RemoveOrderMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type RemoveOrderMutation = {
  deleteManyOrderItemsConnection: { edges: Array<{ node: { id: string } }> };
  deleteOrder?: { id: string } | null;
};

export type UpdateProductQuantityMutationVariables = Exact<{
  quantity: Scalars["Int"];
  id: Scalars["ID"];
}>;

export type UpdateProductQuantityMutation = {
  updateProduct?: { id: string; quantity: number } | null;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCategoriesQuery = {
  categories: Array<{ id: string; name: string }>;
};

export type GetCategoryByIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetCategoryByIdQuery = {
  category?: { id: string; name: string } | null;
};

export type GetColorByIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetColorByIdQuery = {
  productColorVariant?: { id: string; name: string } | null;
};

export type GetColorVariantQueryVariables = Exact<{ [key: string]: never }>;

export type GetColorVariantQuery = {
  productColorVariants: Array<{ id: string; name: string }>;
};

export type GetOrdersByStoreUserIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetOrdersByStoreUserIdQuery = {
  orders: Array<{
    id: string;
    total: number;
    createdAt: any;
    orderValue: number;
  }>;
};

export type GetProductByNameQueryVariables = Exact<{
  name: Scalars["String"];
}>;

export type GetProductByNameQuery = {
  products: Array<{
    id: string;
    name: string;
    price: number;
    slug: string;
    quantity: number;
  }>;
};

export type GetProductsGreaterThanZeroQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetProductsGreaterThanZeroQuery = {
  products: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    slug: string;
    size: Array<{ name: string }>;
    color: Array<{ name: string }>;
    categories: Array<{ name: string }>;
  }>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  products: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    slug: string;
    size: Array<{ name: string }>;
    color: Array<{ name: string }>;
    categories: Array<{ name: string }>;
  }>;
};

export type GetSizeByIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetSizeByIdQuery = {
  productSizeVariant?: { id: string; name: string } | null;
};

export type GetSizeVariantQueryVariables = Exact<{ [key: string]: never }>;

export type GetSizeVariantQuery = {
  productSizeVariants: Array<{ id: string; name: string }>;
};

export type GetStoreUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetStoreUsersQuery = {
  storeUsers: Array<{
    name: string;
    nickname?: string | null;
    surname: string;
    phones: string;
    email?: string | null;
    id: string;
    orders: Array<{ id: string }>;
  }>;
};

export const CreateCategoryDocument = gql`
  mutation CreateCategory(
    $name: String!
    $slug: String!
    $description: String
  ) {
    createCategory(
      data: { name: $name, slug: $slug, description: $description }
    ) {
      slug
      id
      name
    }
  }
`;
export type CreateCategoryMutationFn = Apollo.MutationFunction<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *      slug: // value for 'slug'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCategoryMutation,
    CreateCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCategoryMutation,
    CreateCategoryMutationVariables
  >(CreateCategoryDocument, options);
}
export type CreateCategoryMutationHookResult = ReturnType<
  typeof useCreateCategoryMutation
>;
export type CreateCategoryMutationResult =
  Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>;
export const CreateOrderItemDocument = gql`
  mutation CreateOrderItem(
    $orderId: ID!
    $productId: ID!
    $quantity: Int!
    $itemTotal: Float!
  ) {
    createOrderItem(
      data: {
        quantity: $quantity
        total: $itemTotal
        order: { connect: { id: $orderId } }
        product: { connect: { id: $productId } }
      }
    ) {
      id
    }
  }
`;
export type CreateOrderItemMutationFn = Apollo.MutationFunction<
  CreateOrderItemMutation,
  CreateOrderItemMutationVariables
>;

/**
 * __useCreateOrderItemMutation__
 *
 * To run a mutation, you first call `useCreateOrderItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderItemMutation, { data, loading, error }] = useCreateOrderItemMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      productId: // value for 'productId'
 *      quantity: // value for 'quantity'
 *      itemTotal: // value for 'itemTotal'
 *   },
 * });
 */
export function useCreateOrderItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrderItemMutation,
    CreateOrderItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOrderItemMutation,
    CreateOrderItemMutationVariables
  >(CreateOrderItemDocument, options);
}
export type CreateOrderItemMutationHookResult = ReturnType<
  typeof useCreateOrderItemMutation
>;
export type CreateOrderItemMutationResult =
  Apollo.MutationResult<CreateOrderItemMutation>;
export type CreateOrderItemMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderItemMutation,
  CreateOrderItemMutationVariables
>;
export const CreateOrderDocument = gql`
  mutation CreateOrder(
    $total: Float!
    $userId: ID
    $itemQuantity: Int!
    $totalItem: Float!
    $productId: ID!
    $userEmail: String
  ) {
    createOrder(
      data: {
        userEmail: $userEmail
        total: $total
        orderValue: $total
        stripeCheckoutId: "FFF"
        storeUser: { connect: { id: $userId } }
        orderItems: {
          create: {
            quantity: $itemQuantity
            total: $totalItem
            product: { connect: { id: $productId } }
          }
        }
      }
    ) {
      id
      orderItems {
        id
      }
    }
  }
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      total: // value for 'total'
 *      userId: // value for 'userId'
 *      itemQuantity: // value for 'itemQuantity'
 *      totalItem: // value for 'totalItem'
 *      productId: // value for 'productId'
 *      userEmail: // value for 'userEmail'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(
    CreateOrderDocument,
    options
  );
}
export type CreateOrderMutationHookResult = ReturnType<
  typeof useCreateOrderMutation
>;
export type CreateOrderMutationResult =
  Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;
export const CreateProductColorDocument = gql`
  mutation CreateProductColor($color: String!) {
    createProductColorVariant(data: { name: $color }) {
      id
      name
    }
  }
`;
export type CreateProductColorMutationFn = Apollo.MutationFunction<
  CreateProductColorMutation,
  CreateProductColorMutationVariables
>;

/**
 * __useCreateProductColorMutation__
 *
 * To run a mutation, you first call `useCreateProductColorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductColorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductColorMutation, { data, loading, error }] = useCreateProductColorMutation({
 *   variables: {
 *      color: // value for 'color'
 *   },
 * });
 */
export function useCreateProductColorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductColorMutation,
    CreateProductColorMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductColorMutation,
    CreateProductColorMutationVariables
  >(CreateProductColorDocument, options);
}
export type CreateProductColorMutationHookResult = ReturnType<
  typeof useCreateProductColorMutation
>;
export type CreateProductColorMutationResult =
  Apollo.MutationResult<CreateProductColorMutation>;
export type CreateProductColorMutationOptions = Apollo.BaseMutationOptions<
  CreateProductColorMutation,
  CreateProductColorMutationVariables
>;
export const CreateProductSizeDocument = gql`
  mutation CreateProductSize($size: String!) {
    createProductSizeVariant(data: { name: $size }) {
      id
      name
    }
  }
`;
export type CreateProductSizeMutationFn = Apollo.MutationFunction<
  CreateProductSizeMutation,
  CreateProductSizeMutationVariables
>;

/**
 * __useCreateProductSizeMutation__
 *
 * To run a mutation, you first call `useCreateProductSizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductSizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductSizeMutation, { data, loading, error }] = useCreateProductSizeMutation({
 *   variables: {
 *      size: // value for 'size'
 *   },
 * });
 */
export function useCreateProductSizeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductSizeMutation,
    CreateProductSizeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductSizeMutation,
    CreateProductSizeMutationVariables
  >(CreateProductSizeDocument, options);
}
export type CreateProductSizeMutationHookResult = ReturnType<
  typeof useCreateProductSizeMutation
>;
export type CreateProductSizeMutationResult =
  Apollo.MutationResult<CreateProductSizeMutation>;
export type CreateProductSizeMutationOptions = Apollo.BaseMutationOptions<
  CreateProductSizeMutation,
  CreateProductSizeMutationVariables
>;
export const CreateProductVariantDocument = gql`
  mutation CreateProductVariant($color: String!, $size: String!) {
    createProductColorVariant(data: { name: $color }) {
      id
      name
    }
    createProductSizeVariant(data: { name: $size }) {
      id
      name
    }
  }
`;
export type CreateProductVariantMutationFn = Apollo.MutationFunction<
  CreateProductVariantMutation,
  CreateProductVariantMutationVariables
>;

/**
 * __useCreateProductVariantMutation__
 *
 * To run a mutation, you first call `useCreateProductVariantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductVariantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductVariantMutation, { data, loading, error }] = useCreateProductVariantMutation({
 *   variables: {
 *      color: // value for 'color'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useCreateProductVariantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductVariantMutation,
    CreateProductVariantMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductVariantMutation,
    CreateProductVariantMutationVariables
  >(CreateProductVariantDocument, options);
}
export type CreateProductVariantMutationHookResult = ReturnType<
  typeof useCreateProductVariantMutation
>;
export type CreateProductVariantMutationResult =
  Apollo.MutationResult<CreateProductVariantMutation>;
export type CreateProductVariantMutationOptions = Apollo.BaseMutationOptions<
  CreateProductVariantMutation,
  CreateProductVariantMutationVariables
>;
export const CreateProductDocument = gql`
  mutation CreateProduct(
    $name: String!
    $slug: String!
    $description: String!
    $price: Float!
    $quantity: Int!
    $categories: ID
    $color: ID
    $size: ID
  ) {
    createProduct(
      data: {
        name: $name
        slug: $slug
        description: $description
        price: $price
        quantity: $quantity
        categories: { connect: { id: $categories } }
        color: { connect: { id: $color } }
        size: { connect: { id: $size } }
      }
    ) {
      id
    }
  }
`;
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      slug: // value for 'slug'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      quantity: // value for 'quantity'
 *      categories: // value for 'categories'
 *      color: // value for 'color'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductMutation,
    CreateProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CreateProductDocument, options);
}
export type CreateProductMutationHookResult = ReturnType<
  typeof useCreateProductMutation
>;
export type CreateProductMutationResult =
  Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
export const CreateSingleOrderDocument = gql`
  mutation CreateSingleOrder(
    $total: Float!
    $orderValue: Float!
    $stripeCheckout: String!
    $userEmail: String!
    $userId: ID!
  ) {
    createOrder(
      data: {
        total: $total
        stripeCheckoutId: $stripeCheckout
        orderValue: $orderValue
        userEmail: $userEmail
        storeUser: { connect: { id: $userId } }
      }
    ) {
      id
    }
  }
`;
export type CreateSingleOrderMutationFn = Apollo.MutationFunction<
  CreateSingleOrderMutation,
  CreateSingleOrderMutationVariables
>;

/**
 * __useCreateSingleOrderMutation__
 *
 * To run a mutation, you first call `useCreateSingleOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSingleOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSingleOrderMutation, { data, loading, error }] = useCreateSingleOrderMutation({
 *   variables: {
 *      total: // value for 'total'
 *      orderValue: // value for 'orderValue'
 *      stripeCheckout: // value for 'stripeCheckout'
 *      userEmail: // value for 'userEmail'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateSingleOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSingleOrderMutation,
    CreateSingleOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSingleOrderMutation,
    CreateSingleOrderMutationVariables
  >(CreateSingleOrderDocument, options);
}
export type CreateSingleOrderMutationHookResult = ReturnType<
  typeof useCreateSingleOrderMutation
>;
export type CreateSingleOrderMutationResult =
  Apollo.MutationResult<CreateSingleOrderMutation>;
export type CreateSingleOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateSingleOrderMutation,
  CreateSingleOrderMutationVariables
>;
export const CreateStoreUserDocument = gql`
  mutation CreateStoreUser(
    $name: String!
    $surname: String!
    $phones: String!
    $description: String
    $email: String
    $nickname: String
  ) {
    createStoreUser(
      data: {
        name: $name
        surname: $surname
        phones: $phones
        email: $email
        description: $description
        nickname: $nickname
      }
    ) {
      id
    }
  }
`;
export type CreateStoreUserMutationFn = Apollo.MutationFunction<
  CreateStoreUserMutation,
  CreateStoreUserMutationVariables
>;

/**
 * __useCreateStoreUserMutation__
 *
 * To run a mutation, you first call `useCreateStoreUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStoreUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStoreUserMutation, { data, loading, error }] = useCreateStoreUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      surname: // value for 'surname'
 *      phones: // value for 'phones'
 *      description: // value for 'description'
 *      email: // value for 'email'
 *      nickname: // value for 'nickname'
 *   },
 * });
 */
export function useCreateStoreUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateStoreUserMutation,
    CreateStoreUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateStoreUserMutation,
    CreateStoreUserMutationVariables
  >(CreateStoreUserDocument, options);
}
export type CreateStoreUserMutationHookResult = ReturnType<
  typeof useCreateStoreUserMutation
>;
export type CreateStoreUserMutationResult =
  Apollo.MutationResult<CreateStoreUserMutation>;
export type CreateStoreUserMutationOptions = Apollo.BaseMutationOptions<
  CreateStoreUserMutation,
  CreateStoreUserMutationVariables
>;
export const RemoveOrderItemDocument = gql`
  mutation RemoveOrderItem($id: ID!) {
    deleteOrderItem(where: { id: $id }) {
      id
    }
  }
`;
export type RemoveOrderItemMutationFn = Apollo.MutationFunction<
  RemoveOrderItemMutation,
  RemoveOrderItemMutationVariables
>;

/**
 * __useRemoveOrderItemMutation__
 *
 * To run a mutation, you first call `useRemoveOrderItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveOrderItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeOrderItemMutation, { data, loading, error }] = useRemoveOrderItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveOrderItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveOrderItemMutation,
    RemoveOrderItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveOrderItemMutation,
    RemoveOrderItemMutationVariables
  >(RemoveOrderItemDocument, options);
}
export type RemoveOrderItemMutationHookResult = ReturnType<
  typeof useRemoveOrderItemMutation
>;
export type RemoveOrderItemMutationResult =
  Apollo.MutationResult<RemoveOrderItemMutation>;
export type RemoveOrderItemMutationOptions = Apollo.BaseMutationOptions<
  RemoveOrderItemMutation,
  RemoveOrderItemMutationVariables
>;
export const RemoveOrderDocument = gql`
  mutation RemoveOrder($id: ID!) {
    deleteManyOrderItemsConnection(where: { order: { id: $id } }) {
      edges {
        node {
          id
        }
      }
    }
    deleteOrder(where: { id: $id }) {
      id
    }
  }
`;
export type RemoveOrderMutationFn = Apollo.MutationFunction<
  RemoveOrderMutation,
  RemoveOrderMutationVariables
>;

/**
 * __useRemoveOrderMutation__
 *
 * To run a mutation, you first call `useRemoveOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeOrderMutation, { data, loading, error }] = useRemoveOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveOrderMutation,
    RemoveOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveOrderMutation, RemoveOrderMutationVariables>(
    RemoveOrderDocument,
    options
  );
}
export type RemoveOrderMutationHookResult = ReturnType<
  typeof useRemoveOrderMutation
>;
export type RemoveOrderMutationResult =
  Apollo.MutationResult<RemoveOrderMutation>;
export type RemoveOrderMutationOptions = Apollo.BaseMutationOptions<
  RemoveOrderMutation,
  RemoveOrderMutationVariables
>;
export const UpdateProductQuantityDocument = gql`
  mutation UpdateProductQuantity($quantity: Int!, $id: ID!) {
    updateProduct(data: { quantity: $quantity }, where: { id: $id }) {
      id
      quantity
    }
  }
`;
export type UpdateProductQuantityMutationFn = Apollo.MutationFunction<
  UpdateProductQuantityMutation,
  UpdateProductQuantityMutationVariables
>;

/**
 * __useUpdateProductQuantityMutation__
 *
 * To run a mutation, you first call `useUpdateProductQuantityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductQuantityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductQuantityMutation, { data, loading, error }] = useUpdateProductQuantityMutation({
 *   variables: {
 *      quantity: // value for 'quantity'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateProductQuantityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductQuantityMutation,
    UpdateProductQuantityMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProductQuantityMutation,
    UpdateProductQuantityMutationVariables
  >(UpdateProductQuantityDocument, options);
}
export type UpdateProductQuantityMutationHookResult = ReturnType<
  typeof useUpdateProductQuantityMutation
>;
export type UpdateProductQuantityMutationResult =
  Apollo.MutationResult<UpdateProductQuantityMutation>;
export type UpdateProductQuantityMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductQuantityMutation,
  UpdateProductQuantityMutationVariables
>;
export const GetCategoriesDocument = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCategoriesQuery,
    GetCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(
    GetCategoriesDocument,
    options
  );
}
export function useGetCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoriesQuery,
    GetCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(
    GetCategoriesDocument,
    options
  );
}
export type GetCategoriesQueryHookResult = ReturnType<
  typeof useGetCategoriesQuery
>;
export type GetCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetCategoriesLazyQuery
>;
export type GetCategoriesQueryResult = Apollo.QueryResult<
  GetCategoriesQuery,
  GetCategoriesQueryVariables
>;
export const GetCategoryByIdDocument = gql`
  query GetCategoryById($id: ID!) {
    category(where: { id: $id }) {
      id
      name
    }
  }
`;

/**
 * __useGetCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCategoryByIdQuery,
    GetCategoryByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(
    GetCategoryByIdDocument,
    options
  );
}
export function useGetCategoryByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCategoryByIdQuery,
    GetCategoryByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCategoryByIdQuery,
    GetCategoryByIdQueryVariables
  >(GetCategoryByIdDocument, options);
}
export type GetCategoryByIdQueryHookResult = ReturnType<
  typeof useGetCategoryByIdQuery
>;
export type GetCategoryByIdLazyQueryHookResult = ReturnType<
  typeof useGetCategoryByIdLazyQuery
>;
export type GetCategoryByIdQueryResult = Apollo.QueryResult<
  GetCategoryByIdQuery,
  GetCategoryByIdQueryVariables
>;
export const GetColorByIdDocument = gql`
  query GetColorById($id: ID!) {
    productColorVariant(where: { id: $id }) {
      id
      name
    }
  }
`;

/**
 * __useGetColorByIdQuery__
 *
 * To run a query within a React component, call `useGetColorByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColorByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColorByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetColorByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetColorByIdQuery,
    GetColorByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetColorByIdQuery, GetColorByIdQueryVariables>(
    GetColorByIdDocument,
    options
  );
}
export function useGetColorByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetColorByIdQuery,
    GetColorByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetColorByIdQuery, GetColorByIdQueryVariables>(
    GetColorByIdDocument,
    options
  );
}
export type GetColorByIdQueryHookResult = ReturnType<
  typeof useGetColorByIdQuery
>;
export type GetColorByIdLazyQueryHookResult = ReturnType<
  typeof useGetColorByIdLazyQuery
>;
export type GetColorByIdQueryResult = Apollo.QueryResult<
  GetColorByIdQuery,
  GetColorByIdQueryVariables
>;
export const GetColorVariantDocument = gql`
  query GetColorVariant {
    productColorVariants {
      id
      name
    }
  }
`;

/**
 * __useGetColorVariantQuery__
 *
 * To run a query within a React component, call `useGetColorVariantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColorVariantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColorVariantQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetColorVariantQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetColorVariantQuery,
    GetColorVariantQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetColorVariantQuery, GetColorVariantQueryVariables>(
    GetColorVariantDocument,
    options
  );
}
export function useGetColorVariantLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetColorVariantQuery,
    GetColorVariantQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetColorVariantQuery,
    GetColorVariantQueryVariables
  >(GetColorVariantDocument, options);
}
export type GetColorVariantQueryHookResult = ReturnType<
  typeof useGetColorVariantQuery
>;
export type GetColorVariantLazyQueryHookResult = ReturnType<
  typeof useGetColorVariantLazyQuery
>;
export type GetColorVariantQueryResult = Apollo.QueryResult<
  GetColorVariantQuery,
  GetColorVariantQueryVariables
>;
export const GetOrdersByStoreUserIdDocument = gql`
  query GetOrdersByStoreUserId($id: ID!) {
    orders(where: { storeUser: { id: $id } }, orderBy: createdAt_ASC) {
      id
      total
      createdAt
      orderValue
    }
  }
`;

/**
 * __useGetOrdersByStoreUserIdQuery__
 *
 * To run a query within a React component, call `useGetOrdersByStoreUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersByStoreUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersByStoreUserIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrdersByStoreUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOrdersByStoreUserIdQuery,
    GetOrdersByStoreUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetOrdersByStoreUserIdQuery,
    GetOrdersByStoreUserIdQueryVariables
  >(GetOrdersByStoreUserIdDocument, options);
}
export function useGetOrdersByStoreUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrdersByStoreUserIdQuery,
    GetOrdersByStoreUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetOrdersByStoreUserIdQuery,
    GetOrdersByStoreUserIdQueryVariables
  >(GetOrdersByStoreUserIdDocument, options);
}
export type GetOrdersByStoreUserIdQueryHookResult = ReturnType<
  typeof useGetOrdersByStoreUserIdQuery
>;
export type GetOrdersByStoreUserIdLazyQueryHookResult = ReturnType<
  typeof useGetOrdersByStoreUserIdLazyQuery
>;
export type GetOrdersByStoreUserIdQueryResult = Apollo.QueryResult<
  GetOrdersByStoreUserIdQuery,
  GetOrdersByStoreUserIdQueryVariables
>;
export const GetProductByNameDocument = gql`
  query GetProductByName($name: String!) {
    products(where: { name: $name }) {
      id
      name
      price
      slug
      quantity
    }
  }
`;

/**
 * __useGetProductByNameQuery__
 *
 * To run a query within a React component, call `useGetProductByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetProductByNameQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductByNameQuery,
    GetProductByNameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductByNameQuery, GetProductByNameQueryVariables>(
    GetProductByNameDocument,
    options
  );
}
export function useGetProductByNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductByNameQuery,
    GetProductByNameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductByNameQuery,
    GetProductByNameQueryVariables
  >(GetProductByNameDocument, options);
}
export type GetProductByNameQueryHookResult = ReturnType<
  typeof useGetProductByNameQuery
>;
export type GetProductByNameLazyQueryHookResult = ReturnType<
  typeof useGetProductByNameLazyQuery
>;
export type GetProductByNameQueryResult = Apollo.QueryResult<
  GetProductByNameQuery,
  GetProductByNameQueryVariables
>;
export const GetProductsGreaterThanZeroDocument = gql`
  query GetProductsGreaterThanZero {
    products(where: { quantity_gt: 0 }) {
      id
      name
      description
      price
      quantity
      slug
      size {
        name
      }
      color {
        name
      }
      categories {
        name
      }
    }
  }
`;

/**
 * __useGetProductsGreaterThanZeroQuery__
 *
 * To run a query within a React component, call `useGetProductsGreaterThanZeroQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsGreaterThanZeroQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsGreaterThanZeroQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsGreaterThanZeroQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductsGreaterThanZeroQuery,
    GetProductsGreaterThanZeroQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductsGreaterThanZeroQuery,
    GetProductsGreaterThanZeroQueryVariables
  >(GetProductsGreaterThanZeroDocument, options);
}
export function useGetProductsGreaterThanZeroLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsGreaterThanZeroQuery,
    GetProductsGreaterThanZeroQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductsGreaterThanZeroQuery,
    GetProductsGreaterThanZeroQueryVariables
  >(GetProductsGreaterThanZeroDocument, options);
}
export type GetProductsGreaterThanZeroQueryHookResult = ReturnType<
  typeof useGetProductsGreaterThanZeroQuery
>;
export type GetProductsGreaterThanZeroLazyQueryHookResult = ReturnType<
  typeof useGetProductsGreaterThanZeroLazyQuery
>;
export type GetProductsGreaterThanZeroQueryResult = Apollo.QueryResult<
  GetProductsGreaterThanZeroQuery,
  GetProductsGreaterThanZeroQueryVariables
>;
export const GetProductsDocument = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      quantity
      slug
      size {
        name
      }
      color {
        name
      }
      categories {
        name
      }
    }
  }
`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options
  );
}
export function useGetProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsQuery,
    GetProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    options
  );
}
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<
  typeof useGetProductsLazyQuery
>;
export type GetProductsQueryResult = Apollo.QueryResult<
  GetProductsQuery,
  GetProductsQueryVariables
>;
export const GetSizeByIdDocument = gql`
  query GetSizeById($id: ID!) {
    productSizeVariant(where: { id: $id }) {
      id
      name
    }
  }
`;

/**
 * __useGetSizeByIdQuery__
 *
 * To run a query within a React component, call `useGetSizeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSizeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSizeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSizeByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSizeByIdQuery,
    GetSizeByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSizeByIdQuery, GetSizeByIdQueryVariables>(
    GetSizeByIdDocument,
    options
  );
}
export function useGetSizeByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSizeByIdQuery,
    GetSizeByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSizeByIdQuery, GetSizeByIdQueryVariables>(
    GetSizeByIdDocument,
    options
  );
}
export type GetSizeByIdQueryHookResult = ReturnType<typeof useGetSizeByIdQuery>;
export type GetSizeByIdLazyQueryHookResult = ReturnType<
  typeof useGetSizeByIdLazyQuery
>;
export type GetSizeByIdQueryResult = Apollo.QueryResult<
  GetSizeByIdQuery,
  GetSizeByIdQueryVariables
>;
export const GetSizeVariantDocument = gql`
  query GetSizeVariant {
    productSizeVariants {
      id
      name
    }
  }
`;

/**
 * __useGetSizeVariantQuery__
 *
 * To run a query within a React component, call `useGetSizeVariantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSizeVariantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSizeVariantQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSizeVariantQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSizeVariantQuery,
    GetSizeVariantQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSizeVariantQuery, GetSizeVariantQueryVariables>(
    GetSizeVariantDocument,
    options
  );
}
export function useGetSizeVariantLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSizeVariantQuery,
    GetSizeVariantQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSizeVariantQuery, GetSizeVariantQueryVariables>(
    GetSizeVariantDocument,
    options
  );
}
export type GetSizeVariantQueryHookResult = ReturnType<
  typeof useGetSizeVariantQuery
>;
export type GetSizeVariantLazyQueryHookResult = ReturnType<
  typeof useGetSizeVariantLazyQuery
>;
export type GetSizeVariantQueryResult = Apollo.QueryResult<
  GetSizeVariantQuery,
  GetSizeVariantQueryVariables
>;
export const GetStoreUsersDocument = gql`
  query GetStoreUsers {
    storeUsers(orderBy: name_ASC, stage: DRAFT) {
      name
      nickname
      surname
      phones
      email
      id
      orders {
        id
      }
    }
  }
`;

/**
 * __useGetStoreUsersQuery__
 *
 * To run a query within a React component, call `useGetStoreUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStoreUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetStoreUsersQuery,
    GetStoreUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStoreUsersQuery, GetStoreUsersQueryVariables>(
    GetStoreUsersDocument,
    options
  );
}
export function useGetStoreUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStoreUsersQuery,
    GetStoreUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStoreUsersQuery, GetStoreUsersQueryVariables>(
    GetStoreUsersDocument,
    options
  );
}
export type GetStoreUsersQueryHookResult = ReturnType<
  typeof useGetStoreUsersQuery
>;
export type GetStoreUsersLazyQueryHookResult = ReturnType<
  typeof useGetStoreUsersLazyQuery
>;
export type GetStoreUsersQueryResult = Apollo.QueryResult<
  GetStoreUsersQuery,
  GetStoreUsersQueryVariables
>;
