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
import type { BpPrioritiesApi } from './BpPrioritiesApi';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "BPPriorities" of service "SAPB1".
 */
export class BpPriorities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BpPrioritiesType<T>
{
  /**
   * Technical entity name for BpPriorities.
   */
  static _entityName = 'BPPriorities';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BpPriorities entity
   */
  static _keys = ['Priority'];
  /**
   * Priority.
   */
  priority!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Priority Description.
   * @nullable
   */
  priorityDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];

  constructor(readonly _entityApi: BpPrioritiesApi<T>) {
    super(_entityApi);
  }
}

export interface BpPrioritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  priority: DeserializedType<T, 'Edm.Int32'>;
  priorityDescription?: DeserializedType<T, 'Edm.String'> | null;
  businessPartners: BusinessPartnersType<T>[];
}
