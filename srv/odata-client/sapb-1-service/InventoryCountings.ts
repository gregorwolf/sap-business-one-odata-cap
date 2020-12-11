/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryCountingsRequestBuilder } from './InventoryCountingsRequestBuilder';
import { Moment } from 'moment';
import { TeamCounter } from './TeamCounter';
import { IndividualCounter } from './IndividualCounter';
import { InventoryCountingLine } from './InventoryCountingLine';
import { CounterTypeEnum } from './CounterTypeEnum';
import { CountingDocumentStatusEnum } from './CountingDocumentStatusEnum';
import { CountingTypeEnum } from './CountingTypeEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InventoryCountings" of service "SAPB1".
 */
export class InventoryCountings extends EntityV4 implements InventoryCountingsType {
  /**
   * Technical entity name for InventoryCountings.
   */
  static _entityName = 'InventoryCountings';
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
   * Single Counter Type.
   * @nullable
   */
  singleCounterType?: CounterTypeEnum;
  /**
   * Single Counter Id.
   * @nullable
   */
  singleCounterId?: number;
  /**
   * Document Status.
   * @nullable
   */
  documentStatus?: CountingDocumentStatusEnum;
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
   * Counting Type.
   * @nullable
   */
  countingType?: CountingTypeEnum;
  /**
   * Team Counters.
   * @nullable
   */
  teamCounters?: TeamCounter[];
  /**
   * Individual Counters.
   * @nullable
   */
  individualCounters?: IndividualCounter[];
  /**
   * Inventory Counting Lines.
   * @nullable
   */
  inventoryCountingLines?: InventoryCountingLine[];
  /**
   * One-to-one navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlace!: BusinessPlaces;

  /**
   * Returns an entity builder to construct instances of `InventoryCountings`.
   * @returns A builder that constructs instances of entity type `InventoryCountings`.
   */
  static builder(): EntityBuilderType<InventoryCountings, InventoryCountingsType> {
    return EntityV4.entityBuilder(InventoryCountings);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InventoryCountings` entity type.
   * @returns A `InventoryCountings` request builder.
   */
  static requestBuilder(): InventoryCountingsRequestBuilder {
    return new InventoryCountingsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryCountings`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InventoryCountings`.
   */
  static customField(fieldName: string): CustomFieldV4<InventoryCountings> {
    return EntityV4.customFieldSelector(fieldName, InventoryCountings);
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

export interface InventoryCountingsType {
  documentEntry?: number | null;
  documentNumber?: number | null;
  series?: number | null;
  countDate?: Moment | null;
  countTime?: Time | null;
  singleCounterType?: CounterTypeEnum | null;
  singleCounterId?: number | null;
  documentStatus?: CountingDocumentStatusEnum | null;
  remarks?: string | null;
  reference2?: string | null;
  branchId?: number | null;
  docObjectCodeEx?: string | null;
  financialPeriod?: number | null;
  periodIndicator?: string | null;
  countingType?: CountingTypeEnum | null;
  teamCounters?: TeamCounter[] | null;
  individualCounters?: IndividualCounter[] | null;
  inventoryCountingLines?: InventoryCountingLine[] | null;
  businessPlace: BusinessPlacesType;
}

export namespace InventoryCountings {
  /**
   * Static representation of the [[documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_ENTRY: NumberField<InventoryCountings> = new NumberField('DocumentEntry', InventoryCountings, 'Edm.Int32');
  /**
   * Static representation of the [[documentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_NUMBER: NumberField<InventoryCountings> = new NumberField('DocumentNumber', InventoryCountings, 'Edm.Int32');
  /**
   * Static representation of the [[series]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERIES: NumberField<InventoryCountings> = new NumberField('Series', InventoryCountings, 'Edm.Int32');
  /**
   * Static representation of the [[countDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNT_DATE: DateField<InventoryCountings> = new DateField('CountDate', InventoryCountings, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[countTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNT_TIME: TimeField<InventoryCountings> = new TimeField('CountTime', InventoryCountings, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[singleCounterType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SINGLE_COUNTER_TYPE: EnumField<InventoryCountings> = new EnumField('SingleCounterType', InventoryCountings);
  /**
   * Static representation of the [[singleCounterId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SINGLE_COUNTER_ID: NumberField<InventoryCountings> = new NumberField('SingleCounterID', InventoryCountings, 'Edm.Int32');
  /**
   * Static representation of the [[documentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_STATUS: EnumField<InventoryCountings> = new EnumField('DocumentStatus', InventoryCountings);
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<InventoryCountings> = new StringField('Remarks', InventoryCountings, 'Edm.String');
  /**
   * Static representation of the [[reference2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_2: StringField<InventoryCountings> = new StringField('Reference2', InventoryCountings, 'Edm.String');
  /**
   * Static representation of the [[branchId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BRANCH_ID: NumberField<InventoryCountings> = new NumberField('BranchID', InventoryCountings, 'Edm.Int32');
  /**
   * Static representation of the [[docObjectCodeEx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_OBJECT_CODE_EX: StringField<InventoryCountings> = new StringField('DocObjectCodeEx', InventoryCountings, 'Edm.String');
  /**
   * Static representation of the [[financialPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINANCIAL_PERIOD: NumberField<InventoryCountings> = new NumberField('FinancialPeriod', InventoryCountings, 'Edm.Int32');
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<InventoryCountings> = new StringField('PeriodIndicator', InventoryCountings, 'Edm.String');
  /**
   * Static representation of the [[countingType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTING_TYPE: EnumField<InventoryCountings> = new EnumField('CountingType', InventoryCountings);
  /**
   * Static representation of the [[teamCounters]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEAM_COUNTERS: CollectionField<InventoryCountings, TeamCounter> = new CollectionField('TeamCounters', InventoryCountings, TeamCounter);
  /**
   * Static representation of the [[individualCounters]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDIVIDUAL_COUNTERS: CollectionField<InventoryCountings, IndividualCounter> = new CollectionField('IndividualCounters', InventoryCountings, IndividualCounter);
  /**
   * Static representation of the [[inventoryCountingLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_COUNTING_LINES: CollectionField<InventoryCountings, InventoryCountingLine> = new CollectionField('InventoryCountingLines', InventoryCountings, InventoryCountingLine);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<InventoryCountings, BusinessPlaces> = new OneToOneLink('BusinessPlace', InventoryCountings, BusinessPlaces);
  /**
   * All fields of the InventoryCountings entity.
   */
  export const _allFields: Array<NumberField<InventoryCountings> | DateField<InventoryCountings> | TimeField<InventoryCountings> | EnumField<InventoryCountings> | StringField<InventoryCountings> | CollectionField<InventoryCountings, TeamCounter> | CollectionField<InventoryCountings, IndividualCounter> | CollectionField<InventoryCountings, InventoryCountingLine> | OneToOneLink<InventoryCountings, BusinessPlaces>> = [
    InventoryCountings.DOCUMENT_ENTRY,
    InventoryCountings.DOCUMENT_NUMBER,
    InventoryCountings.SERIES,
    InventoryCountings.COUNT_DATE,
    InventoryCountings.COUNT_TIME,
    InventoryCountings.SINGLE_COUNTER_TYPE,
    InventoryCountings.SINGLE_COUNTER_ID,
    InventoryCountings.DOCUMENT_STATUS,
    InventoryCountings.REMARKS,
    InventoryCountings.REFERENCE_2,
    InventoryCountings.BRANCH_ID,
    InventoryCountings.DOC_OBJECT_CODE_EX,
    InventoryCountings.FINANCIAL_PERIOD,
    InventoryCountings.PERIOD_INDICATOR,
    InventoryCountings.COUNTING_TYPE,
    InventoryCountings.TEAM_COUNTERS,
    InventoryCountings.INDIVIDUAL_COUNTERS,
    InventoryCountings.INVENTORY_COUNTING_LINES,
    InventoryCountings.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InventoryCountings> = new AllFields('*', InventoryCountings);
  /**
   * All key fields of the InventoryCountings entity.
   */
  export const _keyFields: Array<Field<InventoryCountings>> = [InventoryCountings.DOCUMENT_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property InventoryCountings.
   */
  export const _keys: { [keys: string]: Field<InventoryCountings> } = InventoryCountings._keyFields.reduce((acc: { [keys: string]: Field<InventoryCountings> }, field: Field<InventoryCountings>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
