/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryOpeningBalancesRequestBuilder } from './InventoryOpeningBalancesRequestBuilder';
import { Moment } from 'moment';
import { InventoryOpeningBalanceLine } from './InventoryOpeningBalanceLine';
import { InventoryOpeningBalancePriceSourceEnum } from './InventoryOpeningBalancePriceSourceEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InventoryOpeningBalances" of service "SAPB1".
 */
export class InventoryOpeningBalances extends EntityV4 implements InventoryOpeningBalancesType {
  /**
   * Technical entity name for InventoryOpeningBalances.
   */
  static _entityName = 'InventoryOpeningBalances';
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
   * Posting Date.
   * @nullable
   */
  postingDate?: Moment;
  /**
   * Document Date.
   * @nullable
   */
  documentDate?: Moment;
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
   * Reference 2.
   * @nullable
   */
  reference2?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Branch Id.
   * @nullable
   */
  branchId?: number;
  /**
   * Price Source.
   * @nullable
   */
  priceSource?: InventoryOpeningBalancePriceSourceEnum;
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
   * Period Indicator.
   * @nullable
   */
  periodIndicator?: string;
  /**
   * Financial Period.
   * @nullable
   */
  financialPeriod?: number;
  /**
   * Inventory Opening Balance Lines.
   * @nullable
   */
  inventoryOpeningBalanceLines?: InventoryOpeningBalanceLine[];
  /**
   * One-to-one navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlace!: BusinessPlaces;

  /**
   * Returns an entity builder to construct instances of `InventoryOpeningBalances`.
   * @returns A builder that constructs instances of entity type `InventoryOpeningBalances`.
   */
  static builder(): EntityBuilderType<InventoryOpeningBalances, InventoryOpeningBalancesType> {
    return EntityV4.entityBuilder(InventoryOpeningBalances);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InventoryOpeningBalances` entity type.
   * @returns A `InventoryOpeningBalances` request builder.
   */
  static requestBuilder(): InventoryOpeningBalancesRequestBuilder {
    return new InventoryOpeningBalancesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryOpeningBalances`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InventoryOpeningBalances`.
   */
  static customField(fieldName: string): CustomFieldV4<InventoryOpeningBalances> {
    return EntityV4.customFieldSelector(fieldName, InventoryOpeningBalances);
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

export interface InventoryOpeningBalancesType {
  documentEntry?: number | null;
  postingDate?: Moment | null;
  documentDate?: Moment | null;
  documentNumber?: number | null;
  series?: number | null;
  reference2?: string | null;
  remarks?: string | null;
  branchId?: number | null;
  priceSource?: InventoryOpeningBalancePriceSourceEnum | null;
  priceList?: number | null;
  journalRemark?: string | null;
  docObjectCodeEx?: string | null;
  periodIndicator?: string | null;
  financialPeriod?: number | null;
  inventoryOpeningBalanceLines?: InventoryOpeningBalanceLine[] | null;
  businessPlace: BusinessPlacesType;
}

export namespace InventoryOpeningBalances {
  /**
   * Static representation of the [[documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ENTRY: NumberField<InventoryOpeningBalances> = new NumberField('DocumentEntry', InventoryOpeningBalances, 'Edm.Int32');
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE: DateField<InventoryOpeningBalances> = new DateField('PostingDate', InventoryOpeningBalances, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DATE: DateField<InventoryOpeningBalances> = new DateField('DocumentDate', InventoryOpeningBalances, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_NUMBER: NumberField<InventoryOpeningBalances> = new NumberField('DocumentNumber', InventoryOpeningBalances, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<InventoryOpeningBalances> = new NumberField('Series', InventoryOpeningBalances, 'Edm.Int32');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<InventoryOpeningBalances> = new StringField('Reference2', InventoryOpeningBalances, 'Edm.String');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<InventoryOpeningBalances> = new StringField('Remarks', InventoryOpeningBalances, 'Edm.String');
  /**
   * Static representation of the [[branchId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH_ID: NumberField<InventoryOpeningBalances> = new NumberField('BranchID', InventoryOpeningBalances, 'Edm.Int32');
  /**
   * Static representation of the [[priceSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_SOURCE: EnumField<InventoryOpeningBalances> = new EnumField('PriceSource', InventoryOpeningBalances);
  /**
   * Static representation of the [[priceList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST: NumberField<InventoryOpeningBalances> = new NumberField('PriceList', InventoryOpeningBalances, 'Edm.Int32');
  /**
   * Static representation of the [[journalRemark]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOURNAL_REMARK: StringField<InventoryOpeningBalances> = new StringField('JournalRemark', InventoryOpeningBalances, 'Edm.String');
  /**
   * Static representation of the [[docObjectCodeEx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE_EX: StringField<InventoryOpeningBalances> = new StringField('DocObjectCodeEx', InventoryOpeningBalances, 'Edm.String');
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<InventoryOpeningBalances> = new StringField('PeriodIndicator', InventoryOpeningBalances, 'Edm.String');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<InventoryOpeningBalances> = new NumberField('FinancialPeriod', InventoryOpeningBalances, 'Edm.Int32');
  /**
   * Static representation of the [[inventoryOpeningBalanceLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_OPENING_BALANCE_LINES: CollectionField<InventoryOpeningBalances, InventoryOpeningBalanceLine> = new CollectionField('InventoryOpeningBalanceLines', InventoryOpeningBalances, InventoryOpeningBalanceLine);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<InventoryOpeningBalances, BusinessPlaces> = new OneToOneLink('BusinessPlace', InventoryOpeningBalances, BusinessPlaces);
  /**
   * All fields of the InventoryOpeningBalances entity.
   */
  export const _allFields: Array<NumberField<InventoryOpeningBalances> | DateField<InventoryOpeningBalances> | StringField<InventoryOpeningBalances> | EnumField<InventoryOpeningBalances> | CollectionField<InventoryOpeningBalances, InventoryOpeningBalanceLine> | OneToOneLink<InventoryOpeningBalances, BusinessPlaces>> = [
    InventoryOpeningBalances.DOCUMENT_ENTRY,
    InventoryOpeningBalances.POSTING_DATE,
    InventoryOpeningBalances.DOCUMENT_DATE,
    InventoryOpeningBalances.DOCUMENT_NUMBER,
    InventoryOpeningBalances.SERIES,
    InventoryOpeningBalances.REFERENCE_2,
    InventoryOpeningBalances.REMARKS,
    InventoryOpeningBalances.BRANCH_ID,
    InventoryOpeningBalances.PRICE_SOURCE,
    InventoryOpeningBalances.PRICE_LIST,
    InventoryOpeningBalances.JOURNAL_REMARK,
    InventoryOpeningBalances.DOC_OBJECT_CODE_EX,
    InventoryOpeningBalances.PERIOD_INDICATOR,
    InventoryOpeningBalances.FINANCIAL_PERIOD,
    InventoryOpeningBalances.INVENTORY_OPENING_BALANCE_LINES,
    InventoryOpeningBalances.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InventoryOpeningBalances> = new AllFields('*', InventoryOpeningBalances);
  /**
   * All key fields of the InventoryOpeningBalances entity.
   */
  export const _keyFields: Array<Field<InventoryOpeningBalances>> = [InventoryOpeningBalances.DOCUMENT_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property InventoryOpeningBalances.
   */
  export const _keys: { [keys: string]: Field<InventoryOpeningBalances> } = InventoryOpeningBalances._keyFields.reduce((acc: { [keys: string]: Field<InventoryOpeningBalances> }, field: Field<InventoryOpeningBalances>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
