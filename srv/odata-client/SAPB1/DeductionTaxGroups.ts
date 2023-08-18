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
import type { DeductionTaxGroupsApi } from './DeductionTaxGroupsApi';
import { BoDeductionTaxGroupCodeEnum } from './BoDeductionTaxGroupCodeEnum';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import {
  DeductionTaxSubGroups,
  DeductionTaxSubGroupsType
} from './DeductionTaxSubGroups';

/**
 * This class represents the entity "DeductionTaxGroups" of service "SAPB1".
 */
export class DeductionTaxGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DeductionTaxGroupsType<T>
{
  /**
   * Technical entity name for DeductionTaxGroups.
   */
  static _entityName = 'DeductionTaxGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DeductionTaxGroups entity
   */
  static _keys = ['GroupKey'];
  /**
   * Group Key.
   */
  groupKey!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Group Code.
   * @nullable
   */
  groupCode?: BoDeductionTaxGroupCodeEnum | null;
  /**
   * Group Name.
   * @nullable
   */
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Redin.
   * @nullable
   */
  maxRedin?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Group Extended Code.
   * @nullable
   */
  groupExtendedCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BusinessPartners} entity.
   */
  businessPartners!: BusinessPartners<T>[];
  /**
   * One-to-one navigation property to the {@link DeductionTaxSubGroups} entity.
   */
  deductionTaxSubGroup?: DeductionTaxSubGroups<T> | null;

  constructor(readonly _entityApi: DeductionTaxGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface DeductionTaxGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupKey: DeserializedType<T, 'Edm.Int32'>;
  groupCode?: BoDeductionTaxGroupCodeEnum | null;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  maxRedin?: DeserializedType<T, 'Edm.Double'> | null;
  groupExtendedCode?: DeserializedType<T, 'Edm.String'> | null;
  businessPartners: BusinessPartnersType<T>[];
  deductionTaxSubGroup?: DeductionTaxSubGroupsType<T> | null;
}
