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
import type { DynamicSystemStringsApi } from './DynamicSystemStringsApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "DynamicSystemStrings" of service "SAPB1".
 */
export class DynamicSystemStrings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DynamicSystemStringsType<T>
{
  /**
   * Technical entity name for DynamicSystemStrings.
   */
  static _entityName = 'DynamicSystemStrings';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DynamicSystemStrings entity
   */
  static _keys = ['FormID', 'ItemID', 'ColumnID'];
  /**
   * Form Id.
   */
  formId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  itemId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Column Id.
   */
  columnId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Item String.
   * @nullable
   */
  itemString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Bold.
   * @nullable
   */
  isBold?: BoYesNoEnum | null;
  /**
   * Is Italics.
   * @nullable
   */
  isItalics?: BoYesNoEnum | null;

  constructor(readonly _entityApi: DynamicSystemStringsApi<T>) {
    super(_entityApi);
  }
}

export interface DynamicSystemStringsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  formId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  columnId: DeserializedType<T, 'Edm.String'>;
  itemString?: DeserializedType<T, 'Edm.String'> | null;
  isBold?: BoYesNoEnum | null;
  isItalics?: BoYesNoEnum | null;
}
