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
import type { BinLocationFieldsApi } from './BinLocationFieldsApi';
import { BinLocationFieldTypeEnum } from './BinLocationFieldTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  WarehouseSublevelCodes,
  WarehouseSublevelCodesType
} from './WarehouseSublevelCodes';
import {
  BinLocationAttributes,
  BinLocationAttributesType
} from './BinLocationAttributes';

/**
 * This class represents the entity "BinLocationFields" of service "SAPB1".
 */
export class BinLocationFields<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BinLocationFieldsType<T>
{
  /**
   * Technical entity name for BinLocationFields.
   */
  static _entityName = 'BinLocationFields';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BinLocationFields entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Field Type.
   * @nullable
   */
  fieldType?: BinLocationFieldTypeEnum | null;
  /**
   * Field Number.
   * @nullable
   */
  fieldNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activated.
   * @nullable
   */
  activated?: BoYesNoEnum | null;
  /**
   * Default Field Name.
   * @nullable
   */
  defaultFieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link WarehouseSublevelCodes} entity.
   */
  warehouseSublevelCodes!: WarehouseSublevelCodes<T>[];
  /**
   * One-to-many navigation property to the {@link BinLocationAttributes} entity.
   */
  binLocationAttributes!: BinLocationAttributes<T>[];

  constructor(readonly _entityApi: BinLocationFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface BinLocationFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  fieldType?: BinLocationFieldTypeEnum | null;
  fieldNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  activated?: BoYesNoEnum | null;
  defaultFieldName?: DeserializedType<T, 'Edm.String'> | null;
  warehouseSublevelCodes: WarehouseSublevelCodesType<T>[];
  binLocationAttributes: BinLocationAttributesType<T>[];
}
