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
import type { NfTaxCategoriesApi } from './NfTaxCategoriesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { GovPayCodes, GovPayCodesType } from './GovPayCodes';
import { NotaFiscalCst, NotaFiscalCstType } from './NotaFiscalCst';

/**
 * This class represents the entity "NFTaxCategories" of service "SAPB1".
 */
export class NfTaxCategories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NfTaxCategoriesType<T>
{
  /**
   * Technical entity name for NfTaxCategories.
   */
  static _entityName = 'NFTaxCategories';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the NfTaxCategories entity
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
   * Locked.
   * @nullable
   */
  locked?: BoYesNoEnum | null;
  /**
   * Gpc Id.
   * @nullable
   */
  gpcId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Ces Trel.
   * @nullable
   */
  cesTrel?: BoYesNoEnum | null;
  /**
   * One-to-one navigation property to the {@link GovPayCodes} entity.
   */
  govPayCode?: GovPayCodes<T> | null;
  /**
   * One-to-many navigation property to the {@link NotaFiscalCst} entity.
   */
  notaFiscalCst!: NotaFiscalCst<T>[];

  constructor(readonly _entityApi: NfTaxCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface NfTaxCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absId: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  locked?: BoYesNoEnum | null;
  gpcId?: DeserializedType<T, 'Edm.Int32'> | null;
  cesTrel?: BoYesNoEnum | null;
  govPayCode?: GovPayCodesType<T> | null;
  notaFiscalCst: NotaFiscalCstType<T>[];
}
