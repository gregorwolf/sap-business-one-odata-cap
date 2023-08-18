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
import { AttributeGroupLine } from './AttributeGroupLine';
import type { AttributeGroupsApi } from './AttributeGroupsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AssetClasses, AssetClassesType } from './AssetClasses';

/**
 * This class represents the entity "AttributeGroups" of service "SAPB1".
 */
export class AttributeGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AttributeGroupsType<T>
{
  /**
   * Technical entity name for AttributeGroups.
   */
  static _entityName = 'AttributeGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the AttributeGroups entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Locked.
   * @nullable
   */
  locked?: BoYesNoEnum | null;
  /**
   * Attribute Group Collection.
   * @nullable
   */
  attributeGroupCollection?: AttributeGroupLine<T>[] | null;
  /**
   * One-to-many navigation property to the {@link AssetClasses} entity.
   */
  assetClasses!: AssetClasses<T>[];

  constructor(readonly _entityApi: AttributeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface AttributeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  locked?: BoYesNoEnum | null;
  attributeGroupCollection?: AttributeGroupLine<T>[] | null;
  assetClasses: AssetClassesType<T>[];
}
