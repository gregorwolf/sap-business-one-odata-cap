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
import type { U_Ba_OocrApi } from './U_Ba_OocrApi';

/**
 * This class represents the entity "U_BA_OOCR" of service "SAPB1".
 */
export class U_Ba_Oocr<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements U_Ba_OocrType<T>
{
  /**
   * Technical entity name for U_Ba_Oocr.
   */
  static _entityName = 'U_BA_OOCR';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the U_Ba_Oocr entity
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
   * U Asst Num.
   * @nullable
   */
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Pos Num.
   * @nullable
   */
  uPosNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Ocr Code.
   * @nullable
   */
  uOcrCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Frm Date.
   * @nullable
   */
  uFrmDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U To Date.
   * @nullable
   */
  uToDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;

  constructor(readonly _entityApi: U_Ba_OocrApi<T>) {
    super(_entityApi);
  }
}

export interface U_Ba_OocrType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  uAsstNum?: DeserializedType<T, 'Edm.String'> | null;
  uPosNum?: DeserializedType<T, 'Edm.Int32'> | null;
  uOcrCode?: DeserializedType<T, 'Edm.String'> | null;
  uFrmDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uToDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
}
