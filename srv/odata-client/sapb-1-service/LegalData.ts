/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalDataRequestBuilder } from './LegalDataRequestBuilder';
import { Moment } from 'moment';
import { LegalDataDetail } from './LegalDataDetail';
import { BoAparDocumentTypes } from './BoAparDocumentTypes';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LegalData" of service "SAPB1".
 */
export class LegalData extends EntityV4 implements LegalDataType {
  /**
   * Technical entity name for LegalData.
   */
  static _entityName = 'LegalData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Source Object Type.
   * @nullable
   */
  sourceObjectType?: BoAparDocumentTypes;
  /**
   * Source Object Entry.
   * @nullable
   */
  sourceObjectEntry?: number;
  /**
   * Date Of Printing.
   * @nullable
   */
  dateOfPrinting?: Moment;
  /**
   * Time Of Printing.
   * @nullable
   */
  timeOfPrinting?: Time;
  /**
   * Printer Brand.
   * @nullable
   */
  printerBrand?: string;
  /**
   * Printer Type.
   * @nullable
   */
  printerType?: string;
  /**
   * Printer Model.
   * @nullable
   */
  printerModel?: string;
  /**
   * Printer Firmware Version.
   * @nullable
   */
  printerFirmwareVersion?: string;
  /**
   * Printer Dll Version.
   * @nullable
   */
  printerDllVersion?: string;
  /**
   * Fiscal Series.
   * @nullable
   */
  fiscalSeries?: string;
  /**
   * Fiscal Number.
   * @nullable
   */
  fiscalNumber?: string;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: string;
  /**
   * Fiscal User Id.
   * @nullable
   */
  fiscalUserId?: number;
  /**
   * Legal Data Detail Collection.
   * @nullable
   */
  legalDataDetailCollection?: LegalDataDetail[];
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;

  /**
   * Returns an entity builder to construct instances of `LegalData`.
   * @returns A builder that constructs instances of entity type `LegalData`.
   */
  static builder(): EntityBuilderType<LegalData, LegalDataType> {
    return EntityV4.entityBuilder(LegalData);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LegalData` entity type.
   * @returns A `LegalData` request builder.
   */
  static requestBuilder(): LegalDataRequestBuilder {
    return new LegalDataRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalData`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LegalData`.
   */
  static customField(fieldName: string): CustomFieldV4<LegalData> {
    return EntityV4.customFieldSelector(fieldName, LegalData);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Users, UsersType } from './Users';

export interface LegalDataType {
  docEntry?: number | null;
  sourceObjectType?: BoAparDocumentTypes | null;
  sourceObjectEntry?: number | null;
  dateOfPrinting?: Moment | null;
  timeOfPrinting?: Time | null;
  printerBrand?: string | null;
  printerType?: string | null;
  printerModel?: string | null;
  printerFirmwareVersion?: string | null;
  printerDllVersion?: string | null;
  fiscalSeries?: string | null;
  fiscalNumber?: string | null;
  documentNumber?: string | null;
  fiscalUserId?: number | null;
  legalDataDetailCollection?: LegalDataDetail[] | null;
  user: UsersType;
}

export namespace LegalData {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<LegalData> = new NumberField('DocEntry', LegalData, 'Edm.Int32');
  /**
   * Static representation of the [[sourceObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_OBJECT_TYPE: EnumField<LegalData> = new EnumField('SourceObjectType', LegalData);
  /**
   * Static representation of the [[sourceObjectEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_OBJECT_ENTRY: NumberField<LegalData> = new NumberField('SourceObjectEntry', LegalData, 'Edm.Int32');
  /**
   * Static representation of the [[dateOfPrinting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_PRINTING: DateField<LegalData> = new DateField('DateOfPrinting', LegalData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[timeOfPrinting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_OF_PRINTING: TimeField<LegalData> = new TimeField('TimeOfPrinting', LegalData, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[printerBrand]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTER_BRAND: StringField<LegalData> = new StringField('PrinterBrand', LegalData, 'Edm.String');
  /**
   * Static representation of the [[printerType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTER_TYPE: StringField<LegalData> = new StringField('PrinterType', LegalData, 'Edm.String');
  /**
   * Static representation of the [[printerModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTER_MODEL: StringField<LegalData> = new StringField('PrinterModel', LegalData, 'Edm.String');
  /**
   * Static representation of the [[printerFirmwareVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTER_FIRMWARE_VERSION: StringField<LegalData> = new StringField('PrinterFirmwareVersion', LegalData, 'Edm.String');
  /**
   * Static representation of the [[printerDllVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTER_DLL_VERSION: StringField<LegalData> = new StringField('PrinterDllVersion', LegalData, 'Edm.String');
  /**
   * Static representation of the [[fiscalSeries]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_SERIES: StringField<LegalData> = new StringField('FiscalSeries', LegalData, 'Edm.String');
  /**
   * Static representation of the [[fiscalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_NUMBER: StringField<LegalData> = new StringField('FiscalNumber', LegalData, 'Edm.String');
  /**
   * Static representation of the [[documentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_NUMBER: StringField<LegalData> = new StringField('DocumentNumber', LegalData, 'Edm.String');
  /**
   * Static representation of the [[fiscalUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_USER_ID: NumberField<LegalData> = new NumberField('FiscalUserID', LegalData, 'Edm.Int32');
  /**
   * Static representation of the [[legalDataDetailCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_DATA_DETAIL_COLLECTION: CollectionField<LegalData, LegalDataDetail> = new CollectionField('LegalDataDetailCollection', LegalData, LegalDataDetail);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<LegalData, Users> = new OneToOneLink('User', LegalData, Users);
  /**
   * All fields of the LegalData entity.
   */
  export const _allFields: Array<NumberField<LegalData> | EnumField<LegalData> | DateField<LegalData> | TimeField<LegalData> | StringField<LegalData> | CollectionField<LegalData, LegalDataDetail> | OneToOneLink<LegalData, Users>> = [
    LegalData.DOC_ENTRY,
    LegalData.SOURCE_OBJECT_TYPE,
    LegalData.SOURCE_OBJECT_ENTRY,
    LegalData.DATE_OF_PRINTING,
    LegalData.TIME_OF_PRINTING,
    LegalData.PRINTER_BRAND,
    LegalData.PRINTER_TYPE,
    LegalData.PRINTER_MODEL,
    LegalData.PRINTER_FIRMWARE_VERSION,
    LegalData.PRINTER_DLL_VERSION,
    LegalData.FISCAL_SERIES,
    LegalData.FISCAL_NUMBER,
    LegalData.DOCUMENT_NUMBER,
    LegalData.FISCAL_USER_ID,
    LegalData.LEGAL_DATA_DETAIL_COLLECTION,
    LegalData.USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LegalData> = new AllFields('*', LegalData);
  /**
   * All key fields of the LegalData entity.
   */
  export const _keyFields: Array<Field<LegalData>> = [LegalData.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property LegalData.
   */
  export const _keys: { [keys: string]: Field<LegalData> } = LegalData._keyFields.reduce((acc: { [keys: string]: Field<LegalData> }, field: Field<LegalData>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
