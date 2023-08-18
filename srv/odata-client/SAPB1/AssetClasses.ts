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
import { AssetClassLine } from './AssetClassLine';
import type { AssetClassesApi } from './AssetClassesApi';
import { AssetTypeEnum } from './AssetTypeEnum';
import { Items, ItemsType } from './Items';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { AttributeGroups, AttributeGroupsType } from './AttributeGroups';

/**
 * This class represents the entity "AssetClasses" of service "SAPB1".
 */
export class AssetClasses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetClassesType<T>
{
  /**
   * Technical entity name for AssetClasses.
   */
  static _entityName = 'AssetClasses';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AssetClasses entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Type.
   * @nullable
   */
  assetType?: AssetTypeEnum | null;
  /**
   * Value Limit From.
   * @nullable
   */
  valueLimitFrom?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Value Limit To.
   * @nullable
   */
  valueLimitTo?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Attribute Group.
   * @nullable
   */
  attributeGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Asset Class Collection.
   * @nullable
   */
  assetClassCollection?: AssetClassLine<T>[] | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;
  /**
   * One-to-one navigation property to the {@link AttributeGroups} entity.
   */
  attributeGroup2?: AttributeGroups<T> | null;

  constructor(readonly _entityApi: AssetClassesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetClassesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetType?: AssetTypeEnum | null;
  valueLimitFrom?: DeserializedType<T, 'Edm.Double'> | null;
  valueLimitTo?: DeserializedType<T, 'Edm.Double'> | null;
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  attributeGroup?: DeserializedType<T, 'Edm.Int32'> | null;
  assetClassCollection?: AssetClassLine<T>[] | null;
  items: ItemsType<T>[];
  businessPlace?: BusinessPlacesType<T> | null;
  attributeGroup2?: AttributeGroupsType<T> | null;
}
