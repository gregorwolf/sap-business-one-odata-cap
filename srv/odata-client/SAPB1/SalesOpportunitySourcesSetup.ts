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
import type { SalesOpportunitySourcesSetupApi } from './SalesOpportunitySourcesSetupApi';
import {
  SalesOpportunities,
  SalesOpportunitiesType
} from './SalesOpportunities';

/**
 * This class represents the entity "SalesOpportunitySourcesSetup" of service "SAPB1".
 */
export class SalesOpportunitySourcesSetup<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOpportunitySourcesSetupType<T>
{
  /**
   * Technical entity name for SalesOpportunitySourcesSetup.
   */
  static _entityName = 'SalesOpportunitySourcesSetup';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SalesOpportunitySourcesSetup entity
   */
  static _keys = ['SequenceNo'];
  /**
   * Sequence No.
   */
  sequenceNo!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort.
   * @nullable
   */
  sort?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-many navigation property to the {@link SalesOpportunities} entity.
   */
  salesOpportunities!: SalesOpportunities<T>[];

  constructor(readonly _entityApi: SalesOpportunitySourcesSetupApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOpportunitySourcesSetupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sequenceNo: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sort?: DeserializedType<T, 'Edm.Int32'> | null;
  salesOpportunities: SalesOpportunitiesType<T>[];
}
