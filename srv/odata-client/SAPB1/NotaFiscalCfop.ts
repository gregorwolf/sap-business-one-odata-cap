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
import type { NotaFiscalCfopApi } from './NotaFiscalCfopApi';
import { NotaFiscalUsage, NotaFiscalUsageType } from './NotaFiscalUsage';

/**
 * This class represents the entity "NotaFiscalCFOP" of service "SAPB1".
 */
export class NotaFiscalCfop<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NotaFiscalCfopType<T>
{
  /**
   * Technical entity name for NotaFiscalCfop.
   */
  static _entityName = 'NotaFiscalCFOP';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the NotaFiscalCfop entity
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application.
   * @nullable
   */
  application?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link NotaFiscalUsage} entity.
   */
  notaFiscalUsage!: NotaFiscalUsage<T>[];

  constructor(readonly _entityApi: NotaFiscalCfopApi<T>) {
    super(_entityApi);
  }
}

export interface NotaFiscalCfopType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  code?: DeserializedType<T, 'Edm.String'> | null;
  application?: DeserializedType<T, 'Edm.String'> | null;
  notaFiscalUsage: NotaFiscalUsageType<T>[];
}
