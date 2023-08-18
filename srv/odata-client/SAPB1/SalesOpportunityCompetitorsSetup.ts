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
import type { SalesOpportunityCompetitorsSetupApi } from './SalesOpportunityCompetitorsSetupApi';
import { ThreatLevelEnum } from './ThreatLevelEnum';

/**
 * This class represents the entity "SalesOpportunityCompetitorsSetup" of service "SAPB1".
 */
export class SalesOpportunityCompetitorsSetup<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOpportunityCompetitorsSetupType<T>
{
  /**
   * Technical entity name for SalesOpportunityCompetitorsSetup.
   */
  static _entityName = 'SalesOpportunityCompetitorsSetup';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SalesOpportunityCompetitorsSetup entity
   */
  static _keys = ['SequenceNo'];
  /**
   * Sequence No.
   */
  sequenceNo!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threat Level.
   * @nullable
   */
  threatLevel?: ThreatLevelEnum | null;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: SalesOpportunityCompetitorsSetupApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOpportunityCompetitorsSetupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sequenceNo: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  threatLevel?: ThreatLevelEnum | null;
  details?: DeserializedType<T, 'Edm.String'> | null;
}
