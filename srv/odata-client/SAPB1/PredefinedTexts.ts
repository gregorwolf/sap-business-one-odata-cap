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
import type { PredefinedTextsApi } from './PredefinedTextsApi';

/**
 * This class represents the entity "PredefinedTexts" of service "SAPB1".
 */
export class PredefinedTexts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PredefinedTextsType<T>
{
  /**
   * Technical entity name for PredefinedTexts.
   */
  static _entityName = 'PredefinedTexts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PredefinedTexts entity
   */
  static _keys = ['Numerator'];
  /**
   * Numerator.
   */
  numerator!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Text Code.
   * @nullable
   */
  textCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text.
   * @nullable
   */
  text?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: PredefinedTextsApi<T>) {
    super(_entityApi);
  }
}

export interface PredefinedTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  numerator: DeserializedType<T, 'Edm.Int32'>;
  textCode?: DeserializedType<T, 'Edm.String'> | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
}
