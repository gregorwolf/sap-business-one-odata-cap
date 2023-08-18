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
import type { NotaFiscalCstApi } from './NotaFiscalCstApi';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';
import { NfTaxCategories, NfTaxCategoriesType } from './NfTaxCategories';

/**
 * This class represents the entity "NotaFiscalCST" of service "SAPB1".
 */
export class NotaFiscalCst<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NotaFiscalCstType<T>
{
  /**
   * Technical entity name for NotaFiscalCst.
   */
  static _entityName = 'NotaFiscalCST';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the NotaFiscalCst entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Situation.
   * @nullable
   */
  situation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Category.
   * @nullable
   */
  taxCategory?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cst Code Outgoing.
   * @nullable
   */
  cstCodeOutgoing?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description Outgoing.
   * @nullable
   */
  descriptionOutgoing?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link WithholdingTaxCodes} entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes<T>[];
  /**
   * One-to-one navigation property to the {@link NfTaxCategories} entity.
   */
  nfTaxCategory?: NfTaxCategories<T> | null;

  constructor(readonly _entityApi: NotaFiscalCstApi<T>) {
    super(_entityApi);
  }
}

export interface NotaFiscalCstType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  situation?: DeserializedType<T, 'Edm.String'> | null;
  taxCategory?: DeserializedType<T, 'Edm.Int32'> | null;
  cstCodeOutgoing?: DeserializedType<T, 'Edm.String'> | null;
  descriptionOutgoing?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCodes: WithholdingTaxCodesType<T>[];
  nfTaxCategory?: NfTaxCategoriesType<T> | null;
}
