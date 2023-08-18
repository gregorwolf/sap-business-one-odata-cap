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
import type { TerritoriesApi } from './TerritoriesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  SalesOpportunities,
  SalesOpportunitiesType
} from './SalesOpportunities';
import {
  CustomerEquipmentCards,
  CustomerEquipmentCardsType
} from './CustomerEquipmentCards';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import {
  ProjectManagements,
  ProjectManagementsType
} from './ProjectManagements';

/**
 * This class represents the entity "Territories" of service "SAPB1".
 */
export class Territories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TerritoriesType<T>
{
  /**
   * Technical entity name for Territories.
   */
  static _entityName = 'Territories';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the Territories entity
   */
  static _keys = ['TerritoryID'];
  /**
   * Territory Id.
   */
  territoryId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Index.
   * @nullable
   */
  locationIndex?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum | null;
  /**
   * Parent.
   * @nullable
   */
  parent?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-many navigation property to the {@link SalesOpportunities} entity.
   */
  salesOpportunities!: SalesOpportunities<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerEquipmentCards} entity.
   */
  customerEquipmentCards!: CustomerEquipmentCards<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectManagements} entity.
   */
  projectManagements!: ProjectManagements<T>[];

  constructor(readonly _entityApi: TerritoriesApi<T>) {
    super(_entityApi);
  }
}

export interface TerritoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  territoryId: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  locationIndex?: DeserializedType<T, 'Edm.Int32'> | null;
  inactive?: BoYesNoEnum | null;
  parent?: DeserializedType<T, 'Edm.Int32'> | null;
  salesOpportunities: SalesOpportunitiesType<T>[];
  customerEquipmentCards: CustomerEquipmentCardsType<T>[];
  businessPartners: BusinessPartnersType<T>[];
  projectManagements: ProjectManagementsType<T>[];
}
