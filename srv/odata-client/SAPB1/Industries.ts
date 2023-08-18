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
import type { IndustriesApi } from './IndustriesApi';
import {
  SalesOpportunities,
  SalesOpportunitiesType
} from './SalesOpportunities';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import {
  ProjectManagements,
  ProjectManagementsType
} from './ProjectManagements';

/**
 * This class represents the entity "Industries" of service "SAPB1".
 */
export class Industries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IndustriesType<T>
{
  /**
   * Technical entity name for Industries.
   */
  static _entityName = 'Industries';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Industries entity
   */
  static _keys = ['IndustryCode'];
  /**
   * Industry Description.
   * @nullable
   */
  industryDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry Name.
   * @nullable
   */
  industryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry Code.
   */
  industryCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link SalesOpportunities} entity.
   */
  salesOpportunities!: SalesOpportunities<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectManagements} entity.
   */
  projectManagements!: ProjectManagements<T>[];

  constructor(readonly _entityApi: IndustriesApi<T>) {
    super(_entityApi);
  }
}

export interface IndustriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  industryDescription?: DeserializedType<T, 'Edm.String'> | null;
  industryName?: DeserializedType<T, 'Edm.String'> | null;
  industryCode: DeserializedType<T, 'Edm.Int32'>;
  salesOpportunities: SalesOpportunitiesType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  projectManagements: ProjectManagementsType<T>[];
}
