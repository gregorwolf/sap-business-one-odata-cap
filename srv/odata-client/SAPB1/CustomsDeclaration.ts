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
import type { CustomsDeclarationApi } from './CustomsDeclarationApi';

/**
 * This class represents the entity "CustomsDeclaration" of service "SAPB1".
 */
export class CustomsDeclaration<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomsDeclarationType<T>
{
  /**
   * Technical entity name for CustomsDeclaration.
   */
  static _entityName = 'CustomsDeclaration';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CustomsDeclaration entity
   */
  static _keys = ['CCDNum'];
  /**
   * Ccd Num.
   */
  ccdNum!: DeserializedType<T, 'Edm.String'>;
  /**
   * Date.
   * @nullable
   */
  date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Customs Broker.
   * @nullable
   */
  customsBroker?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Supply Num.
   * @nullable
   */
  supplyNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supply Date.
   * @nullable
   */
  supplyDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Customs Terminal.
   * @nullable
   */
  customsTerminal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Key.
   * @nullable
   */
  paymentKey?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: CustomsDeclarationApi<T>) {
    super(_entityApi);
  }
}

export interface CustomsDeclarationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ccdNum: DeserializedType<T, 'Edm.String'>;
  date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  customsBroker?: DeserializedType<T, 'Edm.String'> | null;
  docNum?: DeserializedType<T, 'Edm.String'> | null;
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  supplyNum?: DeserializedType<T, 'Edm.String'> | null;
  supplyDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  customsTerminal?: DeserializedType<T, 'Edm.String'> | null;
  paymentKey?: DeserializedType<T, 'Edm.String'> | null;
}
