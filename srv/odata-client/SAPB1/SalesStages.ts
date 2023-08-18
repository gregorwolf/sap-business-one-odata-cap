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
import type { SalesStagesApi } from './SalesStagesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  SalesOpportunities,
  SalesOpportunitiesType
} from './SalesOpportunities';

/**
 * This class represents the entity "SalesStages" of service "SAPB1".
 */
export class SalesStages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesStagesType<T>
{
  /**
   * Technical entity name for SalesStages.
   */
  static _entityName = 'SalesStages';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SalesStages entity
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
   * Stageno.
   * @nullable
   */
  stageno?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Closing Percentage.
   * @nullable
   */
  closingPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Cancelled.
   * @nullable
   */
  cancelled?: BoYesNoEnum | null;
  /**
   * Is Sales.
   * @nullable
   */
  isSales?: BoYesNoEnum | null;
  /**
   * Is Purchasing.
   * @nullable
   */
  isPurchasing?: BoYesNoEnum | null;
  /**
   * One-to-many navigation property to the {@link SalesOpportunities} entity.
   */
  salesOpportunities!: SalesOpportunities<T>[];

  constructor(readonly _entityApi: SalesStagesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesStagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sequenceNo: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  stageno?: DeserializedType<T, 'Edm.Int32'> | null;
  closingPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  cancelled?: BoYesNoEnum | null;
  isSales?: BoYesNoEnum | null;
  isPurchasing?: BoYesNoEnum | null;
  salesOpportunities: SalesOpportunitiesType<T>[];
}
