/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalPrinterRequestBuilder } from './FiscalPrinterRequestBuilder';
import { FiscalPrinterParams } from './FiscalPrinterParams';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FiscalPrinter" of service "SAPB1".
 */
export class FiscalPrinter extends EntityV4 implements FiscalPrinterType {
  /**
   * Technical entity name for FiscalPrinter.
   */
  static _entityName = 'FiscalPrinter';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Equipment No.
   * @nullable
   */
  equipmentNo?: string;
  /**
   * Model.
   * @nullable
   */
  model?: string;
  /**
   * Manufacturer Serial N.
   * @nullable
   */
  manufacturerSerialN?: string;
  /**
   * Register No.
   * @nullable
   */
  registerNo?: number;
  /**
   * Fiscal Document Model.
   * @nullable
   */
  fiscalDocumentModel?: string;
  /**
   * Fiscal Printers Params.
   * @nullable
   */
  fiscalPrintersParams?: FiscalPrinterParams[];
  /**
   * One-to-one navigation property to the [[NfModels]] entity.
   */
  nfModel!: NfModels;
  /**
   * One-to-many navigation property to the [[PosDailySummary]] entity.
   */
  posDailySummary!: PosDailySummary[];

  /**
   * Returns an entity builder to construct instances of `FiscalPrinter`.
   * @returns A builder that constructs instances of entity type `FiscalPrinter`.
   */
  static builder(): EntityBuilderType<FiscalPrinter, FiscalPrinterType> {
    return EntityV4.entityBuilder(FiscalPrinter);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FiscalPrinter` entity type.
   * @returns A `FiscalPrinter` request builder.
   */
  static requestBuilder(): FiscalPrinterRequestBuilder {
    return new FiscalPrinterRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FiscalPrinter`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FiscalPrinter`.
   */
  static customField(fieldName: string): CustomFieldV4<FiscalPrinter> {
    return EntityV4.customFieldSelector(fieldName, FiscalPrinter);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { NfModels, NfModelsType } from './NfModels';
import { PosDailySummary, PosDailySummaryType } from './PosDailySummary';

export interface FiscalPrinterType {
  equipmentNo?: string | null;
  model?: string | null;
  manufacturerSerialN?: string | null;
  registerNo?: number | null;
  fiscalDocumentModel?: string | null;
  fiscalPrintersParams?: FiscalPrinterParams[] | null;
  nfModel: NfModelsType;
  posDailySummary: PosDailySummaryType[];
}

export namespace FiscalPrinter {
  /**
   * Static representation of the [[equipmentNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUIPMENT_NO: StringField<FiscalPrinter> = new StringField('EquipmentNo', FiscalPrinter, 'Edm.String');
  /**
   * Static representation of the [[model]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODEL: StringField<FiscalPrinter> = new StringField('Model', FiscalPrinter, 'Edm.String');
  /**
   * Static representation of the [[manufacturerSerialN]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANUFACTURER_SERIAL_N: StringField<FiscalPrinter> = new StringField('ManufacturerSerialN', FiscalPrinter, 'Edm.String');
  /**
   * Static representation of the [[registerNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGISTER_NO: NumberField<FiscalPrinter> = new NumberField('RegisterNo', FiscalPrinter, 'Edm.Int32');
  /**
   * Static representation of the [[fiscalDocumentModel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_DOCUMENT_MODEL: StringField<FiscalPrinter> = new StringField('FiscalDocumentModel', FiscalPrinter, 'Edm.String');
  /**
   * Static representation of the [[fiscalPrintersParams]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_PRINTERS_PARAMS: CollectionField<FiscalPrinter, FiscalPrinterParams> = new CollectionField('FiscalPrintersParams', FiscalPrinter, FiscalPrinterParams);
  /**
   * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NF_MODEL: OneToOneLink<FiscalPrinter, NfModels> = new OneToOneLink('NFModel', FiscalPrinter, NfModels);
  /**
   * Static representation of the one-to-many navigation property [[posDailySummary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POS_DAILY_SUMMARY: OneToManyLink<FiscalPrinter, PosDailySummary> = new OneToManyLink('POSDailySummary', FiscalPrinter, PosDailySummary);
  /**
   * All fields of the FiscalPrinter entity.
   */
  export const _allFields: Array<StringField<FiscalPrinter> | NumberField<FiscalPrinter> | CollectionField<FiscalPrinter, FiscalPrinterParams> | OneToOneLink<FiscalPrinter, NfModels> | OneToManyLink<FiscalPrinter, PosDailySummary>> = [
    FiscalPrinter.EQUIPMENT_NO,
    FiscalPrinter.MODEL,
    FiscalPrinter.MANUFACTURER_SERIAL_N,
    FiscalPrinter.REGISTER_NO,
    FiscalPrinter.FISCAL_DOCUMENT_MODEL,
    FiscalPrinter.FISCAL_PRINTERS_PARAMS,
    FiscalPrinter.NF_MODEL,
    FiscalPrinter.POS_DAILY_SUMMARY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FiscalPrinter> = new AllFields('*', FiscalPrinter);
  /**
   * All key fields of the FiscalPrinter entity.
   */
  export const _keyFields: Array<Field<FiscalPrinter>> = [FiscalPrinter.EQUIPMENT_NO];
  /**
   * Mapping of all key field names to the respective static field property FiscalPrinter.
   */
  export const _keys: { [keys: string]: Field<FiscalPrinter> } = FiscalPrinter._keyFields.reduce((acc: { [keys: string]: Field<FiscalPrinter> }, field: Field<FiscalPrinter>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
