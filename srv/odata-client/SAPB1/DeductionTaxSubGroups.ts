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
import type { DeductionTaxSubGroupsApi } from './DeductionTaxSubGroupsApi';
import {
  DeductionTaxGroups,
  DeductionTaxGroupsType
} from './DeductionTaxGroups';

/**
 * This class represents the entity "DeductionTaxSubGroups" of service "SAPB1".
 */
export class DeductionTaxSubGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DeductionTaxSubGroupsType<T>
{
  /**
   * Technical entity name for DeductionTaxSubGroups.
   */
  static _entityName = 'DeductionTaxSubGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DeductionTaxSubGroups entity
   */
  static _keys = ['GroupCode'];
  /**
   * Group Code.
   */
  groupCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Name.
   * @nullable
   */
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link DeductionTaxGroups} entity.
   */
  deductionTaxGroups!: DeductionTaxGroups<T>[];

  constructor(readonly _entityApi: DeductionTaxSubGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface DeductionTaxSubGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupCode: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  deductionTaxGroups: DeductionTaxGroupsType<T>[];
}
