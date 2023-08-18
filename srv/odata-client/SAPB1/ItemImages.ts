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
import type { ItemImagesApi } from './ItemImagesApi';

/**
 * This class represents the entity "ItemImages" of service "SAPB1".
 */
export class ItemImages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ItemImagesType<T>
{
  /**
   * Technical entity name for ItemImages.
   */
  static _entityName = 'ItemImages';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ItemImages entity
   */
  static _keys = ['ItemCode'];
  /**
   * Item Code.
   */
  itemCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Picture.
   */
  picture!: DeserializedType<T, 'Edm.String'>;

  constructor(readonly _entityApi: ItemImagesApi<T>) {
    super(_entityApi);
  }
}

export interface ItemImagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  itemCode: DeserializedType<T, 'Edm.String'>;
  picture: DeserializedType<T, 'Edm.String'>;
}
