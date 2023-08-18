/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { PicturesApi } from './PicturesApi';

/**
 * This class represents the entity "Pictures" of service "SAPB1".
 */
export class Pictures<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PicturesType<T>
{
  /**
   * Technical entity name for Pictures.
   */
  static _entityName = 'Pictures';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Pictures entity
   */
  static _keys = ['PictureName'];
  /**
   * Picture Name.
   */
  pictureName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Picture Path.
   */
  picturePath!: DeserializedType<T, 'Edm.String'>;
  /**
   * Picture Size.
   */
  pictureSize!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Picture Create Date.
   */
  pictureCreateDate!: DeserializedType<T, 'Edm.String'>;
  /**
   * Picture Modify Date.
   */
  pictureModifyDate!: DeserializedType<T, 'Edm.String'>;

  constructor(readonly _entityApi: PicturesApi<T>) {
    super(_entityApi);
  }
}

export interface PicturesType<T extends DeSerializers = DefaultDeSerializers> {
  pictureName: DeserializedType<T, 'Edm.String'>;
  picturePath: DeserializedType<T, 'Edm.String'>;
  pictureSize: DeserializedType<T, 'Edm.Int32'>;
  pictureCreateDate: DeserializedType<T, 'Edm.String'>;
  pictureModifyDate: DeserializedType<T, 'Edm.String'>;
}
