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
import { GovPayCodeAuthority } from './GovPayCodeAuthority';
import type { GovPayCodesApi } from './GovPayCodesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { GovPayCodePeriodicityEnum } from './GovPayCodePeriodicityEnum';
import { NfTaxCategories, NfTaxCategoriesType } from './NfTaxCategories';

/**
 * This class represents the entity "GovPayCodes" of service "SAPB1".
 */
export class GovPayCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GovPayCodesType<T>
{
  /**
   * Technical entity name for GovPayCodes.
   */
  static _entityName = 'GovPayCodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the GovPayCodes entity
   */
  static _keys = ['AbsId'];
  /**
   * Abs Id.
   */
  absId!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Descr.
   * @nullable
   */
  descr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Tax.
   * @nullable
   */
  stateTax?: BoYesNoEnum | null;
  /**
   * Prdcity.
   * @nullable
   */
  prdcity?: GovPayCodePeriodicityEnum | null;
  /**
   * Gov Pay Code Authorities.
   * @nullable
   */
  govPayCodeAuthorities?: GovPayCodeAuthority<T>[] | null;
  /**
   * One-to-many navigation property to the {@link NfTaxCategories} entity.
   */
  nfTaxCategories!: NfTaxCategories<T>[];

  constructor(readonly _entityApi: GovPayCodesApi<T>) {
    super(_entityApi);
  }
}

export interface GovPayCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absId: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
  stateTax?: BoYesNoEnum | null;
  prdcity?: GovPayCodePeriodicityEnum | null;
  govPayCodeAuthorities?: GovPayCodeAuthority<T>[] | null;
  nfTaxCategories: NfTaxCategoriesType<T>[];
}
