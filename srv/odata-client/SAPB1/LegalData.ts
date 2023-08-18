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
import { LegalDataDetail } from './LegalDataDetail';
import type { LegalDataApi } from './LegalDataApi';
import { BoAparDocumentTypes } from './BoAparDocumentTypes';
import { Users, UsersType } from './Users';

/**
 * This class represents the entity "LegalData" of service "SAPB1".
 */
export class LegalData<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LegalDataType<T>
{
  /**
   * Technical entity name for LegalData.
   */
  static _entityName = 'LegalData';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the LegalData entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Object Type.
   * @nullable
   */
  sourceObjectType?: BoAparDocumentTypes | null;
  /**
   * Source Object Entry.
   * @nullable
   */
  sourceObjectEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Date Of Printing.
   * @nullable
   */
  dateOfPrinting?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Time Of Printing.
   * @nullable
   */
  timeOfPrinting?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Printer Brand.
   * @nullable
   */
  printerBrand?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer Type.
   * @nullable
   */
  printerType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer Model.
   * @nullable
   */
  printerModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer Firmware Version.
   * @nullable
   */
  printerFirmwareVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer Dll Version.
   * @nullable
   */
  printerDllVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Series.
   * @nullable
   */
  fiscalSeries?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Number.
   * @nullable
   */
  fiscalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal User Id.
   * @nullable
   */
  fiscalUserId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Legal Data Detail Collection.
   * @nullable
   */
  legalDataDetailCollection?: LegalDataDetail<T>[] | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;

  constructor(readonly _entityApi: LegalDataApi<T>) {
    super(_entityApi);
  }
}

export interface LegalDataType<T extends DeSerializers = DefaultDeSerializers> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  sourceObjectType?: BoAparDocumentTypes | null;
  sourceObjectEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  dateOfPrinting?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  timeOfPrinting?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  printerBrand?: DeserializedType<T, 'Edm.String'> | null;
  printerType?: DeserializedType<T, 'Edm.String'> | null;
  printerModel?: DeserializedType<T, 'Edm.String'> | null;
  printerFirmwareVersion?: DeserializedType<T, 'Edm.String'> | null;
  printerDllVersion?: DeserializedType<T, 'Edm.String'> | null;
  fiscalSeries?: DeserializedType<T, 'Edm.String'> | null;
  fiscalNumber?: DeserializedType<T, 'Edm.String'> | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  fiscalUserId?: DeserializedType<T, 'Edm.Int32'> | null;
  legalDataDetailCollection?: LegalDataDetail<T>[] | null;
  user?: UsersType<T> | null;
}
