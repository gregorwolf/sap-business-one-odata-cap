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
import type { CommissionGroupsApi } from './CommissionGroupsApi';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Items, ItemsType } from './Items';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "CommissionGroups" of service "SAPB1".
 */
export class CommissionGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CommissionGroupsType<T>
{
  /**
   * Technical entity name for CommissionGroups.
   */
  static _entityName = 'CommissionGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the CommissionGroups entity
   */
  static _keys = ['CommissionGroupCode'];
  /**
   * Commission Group Code.
   */
  commissionGroupCode!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Commission Group Name.
   * @nullable
   */
  commissionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Percentage.
   * @nullable
   */
  commissionPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * One-to-many navigation property to the {@link SalesPersons} entity.
   */
  salesPersons!: SalesPersons<T>[];
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];

  constructor(readonly _entityApi: CommissionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CommissionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  commissionGroupCode: DeserializedType<T, 'Edm.Int32'>;
  commissionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  commissionPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  salesPersons: SalesPersonsType<T>[];
  items: ItemsType<T>[];
  businessPartners: BusinessPartnersType<T>[];
}
