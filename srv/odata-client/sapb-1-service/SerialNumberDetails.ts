/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SerialNumberDetailsRequestBuilder } from './SerialNumberDetailsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SerialNumberDetails" of service "SAPB1".
 */
export class SerialNumberDetails extends EntityV4 implements SerialNumberDetailsType {
  /**
   * Technical entity name for SerialNumberDetails.
   */
  static _entityName = 'SerialNumberDetails';
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
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: string;
  /**
   * Mfr Serial No.
   * @nullable
   */
  mfrSerialNo?: string;
  /**
   * Serial Number.
   * @nullable
   */
  serialNumber?: string;
  /**
   * Lot Number.
   * @nullable
   */
  lotNumber?: string;
  /**
   * System Number.
   * @nullable
   */
  systemNumber?: number;
  /**
   * Admission Date.
   * @nullable
   */
  admissionDate?: Moment;
  /**
   * Manufacturing Date.
   * @nullable
   */
  manufacturingDate?: Moment;
  /**
   * Expiration Date.
   * @nullable
   */
  expirationDate?: Moment;
  /**
   * Mfr Warranty Start.
   * @nullable
   */
  mfrWarrantyStart?: Moment;
  /**
   * M Fr Warranty End.
   * @nullable
   */
  mFrWarrantyEnd?: Moment;
  /**
   * Location.
   * @nullable
   */
  location?: string;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;

  /**
   * Returns an entity builder to construct instances of `SerialNumberDetails`.
   * @returns A builder that constructs instances of entity type `SerialNumberDetails`.
   */
  static builder(): EntityBuilderType<SerialNumberDetails, SerialNumberDetailsType> {
    return EntityV4.entityBuilder(SerialNumberDetails);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SerialNumberDetails` entity type.
   * @returns A `SerialNumberDetails` request builder.
   */
  static requestBuilder(): SerialNumberDetailsRequestBuilder {
    return new SerialNumberDetailsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SerialNumberDetails`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SerialNumberDetails`.
   */
  static customField(fieldName: string): CustomFieldV4<SerialNumberDetails> {
    return EntityV4.customFieldSelector(fieldName, SerialNumberDetails);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Items, ItemsType } from './Items';

export interface SerialNumberDetailsType {
  docEntry?: number | null;
  itemCode?: string | null;
  itemDescription?: string | null;
  mfrSerialNo?: string | null;
  serialNumber?: string | null;
  lotNumber?: string | null;
  systemNumber?: number | null;
  admissionDate?: Moment | null;
  manufacturingDate?: Moment | null;
  expirationDate?: Moment | null;
  mfrWarrantyStart?: Moment | null;
  mFrWarrantyEnd?: Moment | null;
  location?: string | null;
  details?: string | null;
  item: ItemsType;
}

export namespace SerialNumberDetails {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<SerialNumberDetails> = new NumberField('DocEntry', SerialNumberDetails, 'Edm.Int32');
  /**
   * Static representation of the [[itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CODE: StringField<SerialNumberDetails> = new StringField('ItemCode', SerialNumberDetails, 'Edm.String');
  /**
   * Static representation of the [[itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_DESCRIPTION: StringField<SerialNumberDetails> = new StringField('ItemDescription', SerialNumberDetails, 'Edm.String');
  /**
   * Static representation of the [[mfrSerialNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MFR_SERIAL_NO: StringField<SerialNumberDetails> = new StringField('MfrSerialNo', SerialNumberDetails, 'Edm.String');
  /**
   * Static representation of the [[serialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIAL_NUMBER: StringField<SerialNumberDetails> = new StringField('SerialNumber', SerialNumberDetails, 'Edm.String');
  /**
   * Static representation of the [[lotNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOT_NUMBER: StringField<SerialNumberDetails> = new StringField('LotNumber', SerialNumberDetails, 'Edm.String');
  /**
   * Static representation of the [[systemNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SYSTEM_NUMBER: NumberField<SerialNumberDetails> = new NumberField('SystemNumber', SerialNumberDetails, 'Edm.Int32');
  /**
   * Static representation of the [[admissionDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADMISSION_DATE: DateField<SerialNumberDetails> = new DateField('AdmissionDate', SerialNumberDetails, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[manufacturingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUFACTURING_DATE: DateField<SerialNumberDetails> = new DateField('ManufacturingDate', SerialNumberDetails, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[expirationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPIRATION_DATE: DateField<SerialNumberDetails> = new DateField('ExpirationDate', SerialNumberDetails, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mfrWarrantyStart]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MFR_WARRANTY_START: DateField<SerialNumberDetails> = new DateField('MfrWarrantyStart', SerialNumberDetails, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mFrWarrantyEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const M_FR_WARRANTY_END: DateField<SerialNumberDetails> = new DateField('MFrWarrantyEnd', SerialNumberDetails, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: StringField<SerialNumberDetails> = new StringField('Location', SerialNumberDetails, 'Edm.String');
  /**
   * Static representation of the [[details]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DETAILS: StringField<SerialNumberDetails> = new StringField('Details', SerialNumberDetails, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<SerialNumberDetails, Items> = new OneToOneLink('Item', SerialNumberDetails, Items);
  /**
   * All fields of the SerialNumberDetails entity.
   */
  export const _allFields: Array<NumberField<SerialNumberDetails> | StringField<SerialNumberDetails> | DateField<SerialNumberDetails> | OneToOneLink<SerialNumberDetails, Items>> = [
    SerialNumberDetails.DOC_ENTRY,
    SerialNumberDetails.ITEM_CODE,
    SerialNumberDetails.ITEM_DESCRIPTION,
    SerialNumberDetails.MFR_SERIAL_NO,
    SerialNumberDetails.SERIAL_NUMBER,
    SerialNumberDetails.LOT_NUMBER,
    SerialNumberDetails.SYSTEM_NUMBER,
    SerialNumberDetails.ADMISSION_DATE,
    SerialNumberDetails.MANUFACTURING_DATE,
    SerialNumberDetails.EXPIRATION_DATE,
    SerialNumberDetails.MFR_WARRANTY_START,
    SerialNumberDetails.M_FR_WARRANTY_END,
    SerialNumberDetails.LOCATION,
    SerialNumberDetails.DETAILS,
    SerialNumberDetails.ITEM
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SerialNumberDetails> = new AllFields('*', SerialNumberDetails);
  /**
   * All key fields of the SerialNumberDetails entity.
   */
  export const _keyFields: Array<Field<SerialNumberDetails>> = [SerialNumberDetails.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property SerialNumberDetails.
   */
  export const _keys: { [keys: string]: Field<SerialNumberDetails> } = SerialNumberDetails._keyFields.reduce((acc: { [keys: string]: Field<SerialNumberDetails> }, field: Field<SerialNumberDetails>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
