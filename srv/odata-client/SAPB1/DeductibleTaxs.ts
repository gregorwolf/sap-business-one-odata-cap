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
import type { DeductibleTaxsApi } from './DeductibleTaxsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoVatCategoryEnum } from './BoVatCategoryEnum';

/**
 * This class represents the entity "DeductibleTaxs" of service "SAPB1".
 */
export class DeductibleTaxs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DeductibleTaxsType<T>
{
  /**
   * Technical entity name for DeductibleTaxs.
   */
  static _entityName = 'DeductibleTaxs';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the DeductibleTaxs entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inactive.
   * @nullable
   */
  inactive?: BoYesNoEnum | null;
  /**
   * Category.
   * @nullable
   */
  category?: BoVatCategoryEnum | null;
  /**
   * Deductible Tax Rate.
   * @nullable
   */
  deductibleTaxRate?: DeserializedType<T, 'Edm.Double'> | null;

  constructor(readonly _entityApi: DeductibleTaxsApi<T>) {
    super(_entityApi);
  }
}

export interface DeductibleTaxsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  inactive?: BoYesNoEnum | null;
  category?: BoVatCategoryEnum | null;
  deductibleTaxRate?: DeserializedType<T, 'Edm.Double'> | null;
}
