/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryPostingsRequestBuilder } from './InventoryPostingsRequestBuilder';
import { Moment } from 'moment';
import { InventoryPostingLine } from './InventoryPostingLine';
import { InventoryPostingPriceSourceEnum } from './InventoryPostingPriceSourceEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InventoryPostings" of service "SAPB1".
 */
export class InventoryPostings extends EntityV4 implements InventoryPostingsType {
  /**
   * Technical entity name for InventoryPostings.
   */
  static _entityName = 'InventoryPostings';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: number;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: number;
  /**
   * Series.
   * @nullable
   */
  series?: number;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: Moment;
  /**
   * Count Date.
   * @nullable
   */
  countDate?: Moment;
  /**
   * Count Time.
   * @nullable
   */
  countTime?: Time;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: string;
  /**
   * Branch Id.
   * @nullable
   */
  branchId?: number;
  /**
   * Price Source.
   * @nullable
   */
  priceSource?: InventoryPostingPriceSourceEnum;
  /**
   * Price List.
   * @nullable
   */
  priceList?: number;
  /**
   * Journal Remark.
   * @nullable
   */
  journalRemark?: string;
  /**
   * Doc Object Code Ex.
   * @nullable
   */
  docObjectCodeEx?: string;
  /**
   * Financial Period.
   * @nullable
   */
  financialPeriod?: number;
  /**
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: string;
  /**
   * Inventory Posting Lines.
   * @nullable
   */
  inventoryPostingLines?: InventoryPostingLine[];
  /**
   * One-to-one navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlace!: BusinessPlaces;

  /**
   * Returns an entity builder to construct instances of `InventoryPostings`.
   * @returns A builder that constructs instances of entity type `InventoryPostings`.
   */
  static builder(): EntityBuilderType<InventoryPostings, InventoryPostingsType> {
    return EntityV4.entityBuilder(InventoryPostings);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InventoryPostings` entity type.
   * @returns A `InventoryPostings` request builder.
   */
  static requestBuilder(): InventoryPostingsRequestBuilder {
    return new InventoryPostingsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryPostings`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InventoryPostings`.
   */
  static customField(fieldName: string): CustomFieldV4<InventoryPostings> {
    return EntityV4.customFieldSelector(fieldName, InventoryPostings);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

export interface InventoryPostingsType {
  documentEntry?: number | null;
  documentNumber?: number | null;
  series?: number | null;
  postingDate?: Moment | null;
  countDate?: Moment | null;
  countTime?: Time | null;
  remarks?: string | null;
  reference2?: string | null;
  branchId?: number | null;
  priceSource?: InventoryPostingPriceSourceEnum | null;
  priceList?: number | null;
  journalRemark?: string | null;
  docObjectCodeEx?: string | null;
  financialPeriod?: number | null;
  periodIndicator?: string | null;
  inventoryPostingLines?: InventoryPostingLine[] | null;
  businessPlace: BusinessPlacesType;
}

export namespace InventoryPostings {
  /**
   * Static representation of the [[documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ENTRY: NumberField<InventoryPostings> = new NumberField('DocumentEntry', InventoryPostings, 'Edm.Int32');
  /**
   * Static representation of the [[documentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_NUMBER: NumberField<InventoryPostings> = new NumberField('DocumentNumber', InventoryPostings, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<InventoryPostings> = new NumberField('Series', InventoryPostings, 'Edm.Int32');
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE: DateField<InventoryPostings> = new DateField('PostingDate', InventoryPostings, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[countDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNT_DATE: DateField<InventoryPostings> = new DateField('CountDate', InventoryPostings, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[countTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNT_TIME: TimeField<InventoryPostings> = new TimeField('CountTime', InventoryPostings, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<InventoryPostings> = new StringField('Remarks', InventoryPostings, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<InventoryPostings> = new StringField('Reference2', InventoryPostings, 'Edm.String');
  /**
   * Static representation of the [[branchId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH_ID: NumberField<InventoryPostings> = new NumberField('BranchID', InventoryPostings, 'Edm.Int32');
  /**
   * Static representation of the [[priceSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_SOURCE: EnumField<InventoryPostings> = new EnumField('PriceSource', InventoryPostings);
  /**
   * Static representation of the [[priceList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST: NumberField<InventoryPostings> = new NumberField('PriceList', InventoryPostings, 'Edm.Int32');
  /**
   * Static representation of the [[journalRemark]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_REMARK: StringField<InventoryPostings> = new StringField('JournalRemark', InventoryPostings, 'Edm.String');
  /**
   * Static representation of the [[docObjectCodeEx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE_EX: StringField<InventoryPostings> = new StringField('DocObjectCodeEx', InventoryPostings, 'Edm.String');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<InventoryPostings> = new NumberField('FinancialPeriod', InventoryPostings, 'Edm.Int32');
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<InventoryPostings> = new StringField('PeriodIndicator', InventoryPostings, 'Edm.String');
  /**
   * Static representation of the [[inventoryPostingLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_POSTING_LINES: CollectionField<InventoryPostings, InventoryPostingLine> = new CollectionField('InventoryPostingLines', InventoryPostings, InventoryPostingLine);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<InventoryPostings, BusinessPlaces> = new OneToOneLink('BusinessPlace', InventoryPostings, BusinessPlaces);
  /**
   * All fields of the InventoryPostings entity.
   */
  export const _allFields: Array<NumberField<InventoryPostings> | DateField<InventoryPostings> | TimeField<InventoryPostings> | StringField<InventoryPostings> | EnumField<InventoryPostings> | CollectionField<InventoryPostings, InventoryPostingLine> | OneToOneLink<InventoryPostings, BusinessPlaces>> = [
    InventoryPostings.DOCUMENT_ENTRY,
    InventoryPostings.DOCUMENT_NUMBER,
    InventoryPostings.SERIES,
    InventoryPostings.POSTING_DATE,
    InventoryPostings.COUNT_DATE,
    InventoryPostings.COUNT_TIME,
    InventoryPostings.REMARKS,
    InventoryPostings.REFERENCE_2,
    InventoryPostings.BRANCH_ID,
    InventoryPostings.PRICE_SOURCE,
    InventoryPostings.PRICE_LIST,
    InventoryPostings.JOURNAL_REMARK,
    InventoryPostings.DOC_OBJECT_CODE_EX,
    InventoryPostings.FINANCIAL_PERIOD,
    InventoryPostings.PERIOD_INDICATOR,
    InventoryPostings.INVENTORY_POSTING_LINES,
    InventoryPostings.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InventoryPostings> = new AllFields('*', InventoryPostings);
  /**
   * All key fields of the InventoryPostings entity.
   */
  export const _keyFields: Array<Field<InventoryPostings>> = [InventoryPostings.DOCUMENT_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property InventoryPostings.
   */
  export const _keys: { [keys: string]: Field<InventoryPostings> } = InventoryPostings._keyFields.reduce((acc: { [keys: string]: Field<InventoryPostings> }, field: Field<InventoryPostings>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
