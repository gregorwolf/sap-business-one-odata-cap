/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryCountingsRequestBuilder } from './InventoryCountingsRequestBuilder';
import { Moment } from 'moment';
import { TeamCounter, TeamCounterField } from './TeamCounter';
import { IndividualCounter, IndividualCounterField } from './IndividualCounter';
import { InventoryCountingLine, InventoryCountingLineField } from './InventoryCountingLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "InventoryCountings" of service "SAPB1".
 */
export class InventoryCountings extends Entity implements InventoryCountingsType {
  /**
   * Technical entity name for InventoryCountings.
   */
  static _entityName = 'InventoryCountings';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for InventoryCountings.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Single Counter Id.
   * @nullable
   */
  singleCounterId?: number;
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
   * Returns an entity builder to construct instances `InventoryCountings`.
   * @returns A builder that constructs instances of entity type `InventoryCountings`.
   */
  static builder(): EntityBuilderType<InventoryCountings, InventoryCountingsTypeForceMandatory> {
    return Entity.entityBuilder(InventoryCountings);
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
  static customField(fieldName: string): CustomField<InventoryCountings> {
    return Entity.customFieldSelector(fieldName, InventoryCountings);
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
  documentEntry?: number;
  documentNumber?: number;
  series?: number;
  countDate?: Moment;
  countTime?: Time;
  singleCounterId?: number;
  remarks?: string;
  reference2?: string;
  branchId?: number;
  docObjectCodeEx?: string;
  financialPeriod?: number;
  periodIndicator?: string;
  teamCounters?: TeamCounter[];
  individualCounters?: IndividualCounter[];
  inventoryCountingLines?: InventoryCountingLine[];
  businessPlace: BusinessPlacesType;
}

export interface InventoryCountingsTypeForceMandatory {
  documentEntry: number;
  documentNumber: number;
  series: number;
  countDate: Moment;
  countTime: Time;
  singleCounterId: number;
  remarks: string;
  reference2: string;
  branchId: number;
  docObjectCodeEx: string;
  financialPeriod: number;
  periodIndicator: string;
  teamCounters: TeamCounter[];
  individualCounters: IndividualCounter[];
  inventoryCountingLines: InventoryCountingLine[];
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
   * Static representation of the [[singleCounterId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SINGLE_COUNTER_ID: NumberField<InventoryCountings> = new NumberField('SingleCounterID', InventoryCountings, 'Edm.Int32');
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
   * Static representation of the [[teamCounters]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEAM_COUNTERS: CollectionField<InventoryCountings> = new CollectionField('TeamCounters', InventoryCountings, new TeamCounterField('', InventoryCountings));
  /**
   * Static representation of the [[individualCounters]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDIVIDUAL_COUNTERS: CollectionField<InventoryCountings> = new CollectionField('IndividualCounters', InventoryCountings, new IndividualCounterField('', InventoryCountings));
  /**
   * Static representation of the [[inventoryCountingLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVENTORY_COUNTING_LINES: CollectionField<InventoryCountings> = new CollectionField('InventoryCountingLines', InventoryCountings, new InventoryCountingLineField('', InventoryCountings));
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<InventoryCountings, BusinessPlaces> = new OneToOneLink('BusinessPlace', InventoryCountings, BusinessPlaces);
  /**
   * All fields of the InventoryCountings entity.
   */
  export const _allFields: Array<NumberField<InventoryCountings> | DateField<InventoryCountings> | TimeField<InventoryCountings> | StringField<InventoryCountings> | CollectionField<InventoryCountings> | OneToOneLink<InventoryCountings, BusinessPlaces>> = [
    InventoryCountings.DOCUMENT_ENTRY,
    InventoryCountings.DOCUMENT_NUMBER,
    InventoryCountings.SERIES,
    InventoryCountings.COUNT_DATE,
    InventoryCountings.COUNT_TIME,
    InventoryCountings.SINGLE_COUNTER_ID,
    InventoryCountings.REMARKS,
    InventoryCountings.REFERENCE_2,
    InventoryCountings.BRANCH_ID,
    InventoryCountings.DOC_OBJECT_CODE_EX,
    InventoryCountings.FINANCIAL_PERIOD,
    InventoryCountings.PERIOD_INDICATOR,
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
