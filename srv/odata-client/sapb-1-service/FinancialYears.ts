/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FinancialYearsRequestBuilder } from './FinancialYearsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "FinancialYears" of service "SAPB1".
 */
export class FinancialYears extends Entity implements FinancialYearsType {
  /**
   * Technical entity name for FinancialYears.
   */
  static _entityName = 'FinancialYears';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FinancialYears.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Assess Year.
   * @nullable
   */
  assessYear?: string;

  /**
   * Returns an entity builder to construct instances `FinancialYears`.
   * @returns A builder that constructs instances of entity type `FinancialYears`.
   */
  static builder(): EntityBuilderType<FinancialYears, FinancialYearsTypeForceMandatory> {
    return Entity.entityBuilder(FinancialYears);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FinancialYears` entity type.
   * @returns A `FinancialYears` request builder.
   */
  static requestBuilder(): FinancialYearsRequestBuilder {
    return new FinancialYearsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FinancialYears`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FinancialYears`.
   */
  static customField(fieldName: string): CustomField<FinancialYears> {
    return Entity.customFieldSelector(fieldName, FinancialYears);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface FinancialYearsType {
  absEntry?: number;
  code?: string;
  description?: string;
  startDate?: Moment;
  endDate?: Moment;
  assessYear?: string;
}

export interface FinancialYearsTypeForceMandatory {
  absEntry: number;
  code: string;
  description: string;
  startDate: Moment;
  endDate: Moment;
  assessYear: string;
}

export namespace FinancialYears {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<FinancialYears> = new NumberField('AbsEntry', FinancialYears, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<FinancialYears> = new StringField('Code', FinancialYears, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FinancialYears> = new StringField('Description', FinancialYears, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FinancialYears> = new DateField('StartDate', FinancialYears, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FinancialYears> = new DateField('EndDate', FinancialYears, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[assessYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESS_YEAR: StringField<FinancialYears> = new StringField('AssessYear', FinancialYears, 'Edm.String');
  /**
   * All fields of the FinancialYears entity.
   */
  export const _allFields: Array<NumberField<FinancialYears> | StringField<FinancialYears> | DateField<FinancialYears>> = [
    FinancialYears.ABS_ENTRY,
    FinancialYears.CODE,
    FinancialYears.DESCRIPTION,
    FinancialYears.START_DATE,
    FinancialYears.END_DATE,
    FinancialYears.ASSESS_YEAR
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FinancialYears> = new AllFields('*', FinancialYears);
  /**
   * All key fields of the FinancialYears entity.
   */
  export const _keyFields: Array<Field<FinancialYears>> = [FinancialYears.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property FinancialYears.
   */
  export const _keys: { [keys: string]: Field<FinancialYears> } = FinancialYears._keyFields.reduce((acc: { [keys: string]: Field<FinancialYears> }, field: Field<FinancialYears>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
