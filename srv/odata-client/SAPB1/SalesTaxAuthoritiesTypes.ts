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
import type { SalesTaxAuthoritiesTypesApi } from './SalesTaxAuthoritiesTypesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  SalesTaxAuthorities,
  SalesTaxAuthoritiesType
} from './SalesTaxAuthorities';
import { Users, UsersType } from './Users';
import { DepreciationAreas, DepreciationAreasType } from './DepreciationAreas';

/**
 * This class represents the entity "SalesTaxAuthoritiesTypes" of service "SAPB1".
 */
export class SalesTaxAuthoritiesTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesTaxAuthoritiesTypesType<T>
{
  /**
   * Technical entity name for SalesTaxAuthoritiesTypes.
   */
  static _entityName = 'SalesTaxAuthoritiesTypes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the SalesTaxAuthoritiesTypes entity
   */
  static _keys = ['Numerator'];
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat.
   * @nullable
   */
  vat?: BoYesNoEnum | null;
  /**
   * Numerator.
   */
  numerator!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Credit Control.
   * @nullable
   */
  taxCreditControl?: BoYesNoEnum | null;
  /**
   * One-to-many navigation property to the {@link SalesTaxAuthorities} entity.
   */
  salesTaxAuthorities!: SalesTaxAuthorities<T>[];
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-many navigation property to the {@link DepreciationAreas} entity.
   */
  depreciationAreas!: DepreciationAreas<T>[];

  constructor(readonly _entityApi: SalesTaxAuthoritiesTypesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTaxAuthoritiesTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  vat?: BoYesNoEnum | null;
  numerator: DeserializedType<T, 'Edm.Int32'>;
  taxCreditControl?: BoYesNoEnum | null;
  salesTaxAuthorities: SalesTaxAuthoritiesType<T>[];
  user?: UsersType<T> | null;
  depreciationAreas: DepreciationAreasType<T>[];
}
