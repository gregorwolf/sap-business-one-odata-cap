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
import type { BusinessPartnerPropertiesApi } from './BusinessPartnerPropertiesApi';

/**
 * This class represents the entity "BusinessPartnerProperties" of service "SAPB1".
 */
export class BusinessPartnerProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessPartnerPropertiesType<T>
{
  /**
   * Technical entity name for BusinessPartnerProperties.
   */
  static _entityName = 'BusinessPartnerProperties';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BusinessPartnerProperties entity
   */
  static _keys = ['PropertyCode'];
  /**
   * Property Code.
   */
  propertyCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Property Name.
   * @nullable
   */
  propertyName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: BusinessPartnerPropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessPartnerPropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  propertyCode: DeserializedType<T, 'Edm.Int32'>;
  propertyName?: DeserializedType<T, 'Edm.String'> | null;
}
