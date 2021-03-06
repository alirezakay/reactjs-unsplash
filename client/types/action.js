// @flow

import type { AuthorizeToken, UserProfile, Collection } from './data';

// ------------------------------------
// App Actions
// ------------------------------------
type SetLastPathName = {
  type: 'app/SE_LAST_PATH_NAME',
  pathName: string,
};

type ClearStore = {
  type: 'app/CL_STORE',
};

type ChangeJobStatus = {
  type: 'app/CH_JOB_ST',
  status: boolean,
};

type SetActionData = {
  type: 'app/SE_ACTION_DATA',
  actionType: string,
  data: ?any,
};

type SetSearchValues = {
  type: 'app/SE_SEARCH_VALUES',
  query: string,
  title: string,
  value: string,
}

// ------------------------------------
// User Actions
// ------------------------------------
type GetAccessToken = {
  type: 'user/GE_ACCESS_TOKEN',
  code: string,
};

type SetAccessToken = {
  type: 'user/SE_ACCESS_TOKEN',
  payload: AuthorizeToken,
};

type Logout = {
  type: 'user/LOGOUT',
};

type GetProfile = {
  type: 'user/GE_USER_PROFILE',
};

type SetProfile = {
  type: 'user/SE_USER_PROFILE',
  payload: UserProfile,
};

// ------------------------------------
// Collection Actions
// ------------------------------------

type GetUserCollections = {
  type: 'collection/GE_USER_COLLECTIONS',
  url: string,
};

type GetCollection = {
  type: 'collection/GE_COLLECTION',
  url: string,
  loadPhotos: boolean,
};

type GetCollectionPhotos = {
  type: 'collection/GE_COLLECTION_PHOTOS',
  url: string,
};

type SearchInCollections = {
  type: 'collection/SEARCH_COLLECTIONS',
  url: string,
};

type CreateCollection = {
  type: 'collection/CREATE_COLLECTION',
  collection: Collection,
};

type UpdateCollection = {
  type: 'collection/UPDATE_COLLECTION',
  collection: Collection,
};

type DeleteCollection = {
  type: 'collection/DELETE_COLLECTION',
  id: string,
};

type AddPhotoToCollection = {
  type: 'collection/ADD_PHOTO_TO_COLLECTION',
  collectionId: string,
  photoId: string,
};

type RemovePhotoFromCollection = {
  type: 'collection/REMOVE_PHOTO_FROM_COLLECTION',
  collectionId: string,
  photoId: string,
};

// ------------------------------------
// Photo Actions
// ------------------------------------

type GetPhoto = {
  type: 'photo/GE_PHOTO',
  id: string,
};

type GetPhotos = {
  type: 'photo/GE_PHOTOS',
  url: string,
};

type LikePhoto = {
  type: 'photo/LIKE_PHOTO',
  id: string,
};

type UnlikePhoto = {
  type: 'photo/UNLIKE_PHOTO',
  id: string,
};

type SearchInPhotos = {
  type: 'photo/SEARCH_PHOTOS',
  url: string,
};

// ------------------------------------
// Item Actions
// ------------------------------------

type SetItem = {
  type: 'items/SE_ITEM',
  entity: string,
  payload: Object,
};

type SetItems = {
  type: 'items/SE_ITEMS',
  entity: string,
  payload: Array<Object>,
};

type UpdateItem = {
  type: 'items/UP_ITEM',
  entity: string,
  payload: Object,
};

type RemoveItem = {
  type: 'items/RM_ITEM',
  entity: string,
  id: string,
};

type ClearItems = {
  type: 'items/CL_ITEMS',
  entity: string,
};

type SetItemsAttr = {
  type: 'items/SE_ITEMS_ATTR',
  entity: string,
  attrObj: ?Object,
};

type UpdateFieldsOfItem = {
  type: 'items/UP_FIELD_OF_ITEM',
  entity: string,
  id: string,
  fields: ?Object,
}

// ------------------------------------
// React Router Redux Action
// ------------------------------------

type LocationChangeRRR = {
  type: '@@router/LOCATION_CHANGE',
  payload: {
    pathname: string,
  }
}

// export all of the action in unions type

export type Action = 
  | SetLastPathName
  | ClearStore
  | ChangeJobStatus
  | SetActionData
  | SetSearchValues
  | GetAccessToken
  | SetAccessToken
  | Logout
  | GetProfile
  | SetProfile
  | GetUserCollections
  | GetCollection
  | GetCollectionPhotos
  | SearchInCollections
  | CreateCollection
  | UpdateCollection
  | DeleteCollection
  | AddPhotoToCollection
  | RemovePhotoFromCollection
  | GetPhoto
  | GetPhotos
  | LikePhoto
  | UnlikePhoto
  | SearchInPhotos
  | SetItem
  | SetItems
  | UpdateItem
  | RemoveItem
  | ClearItems
  | SetItemsAttr
  | UpdateFieldsOfItem
  | LocationChangeRRR;