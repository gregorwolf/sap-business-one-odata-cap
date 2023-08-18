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
import type { IdentificationCodesApi } from './IdentificationCodesApi';
import { IdentificationCodeTypeEnum } from './IdentificationCodeTypeEnum';
import { Items, ItemsType } from './Items';

/**
 * This class represents the entity "IdentificationCodes" of service "SAPB1".
 */
export class IdentificationCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IdentificationCodesType<T>
{
  /**
   * Technical entity name for IdentificationCodes.
   */
  static _entityName = 'IdentificationCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the IdentificationCodes entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Codelist.
   * @nullable
   */
  codelist?: IdentificationCodeTypeEnum | null;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Schema Code.
   * @nullable
   */
  schemaCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Schema Desc.
   * @nullable
   */
  schemaDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];

  constructor(readonly _entityApi: IdentificationCodesApi<T>) {
    super(_entityApi);
  }
}

export interface IdentificationCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  codelist?: IdentificationCodeTypeEnum | null;
  code?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  schemaCode?: DeserializedType<T, 'Edm.String'> | null;
  schemaDesc?: DeserializedType<T, 'Edm.String'> | null;
  items: ItemsType<T>[];
}
