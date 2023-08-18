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
import { DeductionTaxHierarchiesLine } from './DeductionTaxHierarchiesLine';
import type { DeductionTaxHierarchiesApi } from './DeductionTaxHierarchiesApi';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';

/**
 * This class represents the entity "DeductionTaxHierarchies" of service "SAPB1".
 */
export class DeductionTaxHierarchies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DeductionTaxHierarchiesType<T>
{
  /**
   * Technical entity name for DeductionTaxHierarchies.
   */
  static _entityName = 'DeductionTaxHierarchies';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DeductionTaxHierarchies entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hierarchy Code.
   * @nullable
   */
  hierarchyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hierarchy Name.
   * @nullable
   */
  hierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Valid Until.
   * @nullable
   */
  validUntil?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Deduction Percent.
   * @nullable
   */
  deductionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Maximum Total.
   * @nullable
   */
  maximumTotal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Last Updated.
   * @nullable
   */
  lastUpdated?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Deduction Tax Hierarchies Lines.
   * @nullable
   */
  deductionTaxHierarchiesLines?: DeductionTaxHierarchiesLine<T>[] | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;

  constructor(readonly _entityApi: DeductionTaxHierarchiesApi<T>) {
    super(_entityApi);
  }
}

export interface DeductionTaxHierarchiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  bpCode?: DeserializedType<T, 'Edm.String'> | null;
  hierarchyCode?: DeserializedType<T, 'Edm.String'> | null;
  hierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validUntil?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  deductionPercent?: DeserializedType<T, 'Edm.Double'> | null;
  maximumTotal?: DeserializedType<T, 'Edm.Double'> | null;
  lastUpdated?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  deductionTaxHierarchiesLines?: DeductionTaxHierarchiesLine<T>[] | null;
  businessPartner?: BusinessPartnersType<T> | null;
}
