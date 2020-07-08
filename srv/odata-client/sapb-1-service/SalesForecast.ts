/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesForecastRequestBuilder } from './SalesForecastRequestBuilder';
import { Moment } from 'moment';
import { SalesForecastLine, SalesForecastLineField } from './SalesForecastLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "SalesForecast" of service "SAPB1".
 */
export class SalesForecast extends Entity implements SalesForecastType {
  /**
   * Technical entity name for SalesForecast.
   */
  static _entityName = 'SalesForecast';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SalesForecast.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Forecast Start Date.
   * @nullable
   */
  forecastStartDate?: Moment;
  /**
   * Forecast End Date.
   * @nullable
   */
  forecastEndDate?: Moment;
  /**
   * Forecast Code.
   * @nullable
   */
  forecastCode?: string;
  /**
   * Forecast Name.
   * @nullable
   */
  forecastName?: string;
  /**
   * Numerator.
   * @nullable
   */
  numerator?: number;
  /**
   * Sales Forecast Lines.
   * @nullable
   */
  salesForecastLines?: SalesForecastLine[];

  /**
   * Returns an entity builder to construct instances `SalesForecast`.
   * @returns A builder that constructs instances of entity type `SalesForecast`.
   */
  static builder(): EntityBuilderType<SalesForecast, SalesForecastTypeForceMandatory> {
    return Entity.entityBuilder(SalesForecast);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SalesForecast` entity type.
   * @returns A `SalesForecast` request builder.
   */
  static requestBuilder(): SalesForecastRequestBuilder {
    return new SalesForecastRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesForecast`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SalesForecast`.
   */
  static customField(fieldName: string): CustomField<SalesForecast> {
    return Entity.customFieldSelector(fieldName, SalesForecast);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SalesForecastType {
  forecastStartDate?: Moment;
  forecastEndDate?: Moment;
  forecastCode?: string;
  forecastName?: string;
  numerator?: number;
  salesForecastLines?: SalesForecastLine[];
}

export interface SalesForecastTypeForceMandatory {
  forecastStartDate: Moment;
  forecastEndDate: Moment;
  forecastCode: string;
  forecastName: string;
  numerator: number;
  salesForecastLines: SalesForecastLine[];
}

export namespace SalesForecast {
  /**
   * Static representation of the [[forecastStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORECAST_START_DATE: DateField<SalesForecast> = new DateField('ForecastStartDate', SalesForecast, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[forecastEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORECAST_END_DATE: DateField<SalesForecast> = new DateField('ForecastEndDate', SalesForecast, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[forecastCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORECAST_CODE: StringField<SalesForecast> = new StringField('ForecastCode', SalesForecast, 'Edm.String');
  /**
   * Static representation of the [[forecastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORECAST_NAME: StringField<SalesForecast> = new StringField('ForecastName', SalesForecast, 'Edm.String');
  /**
   * Static representation of the [[numerator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMERATOR: NumberField<SalesForecast> = new NumberField('Numerator', SalesForecast, 'Edm.Int32');
  /**
   * Static representation of the [[salesForecastLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_FORECAST_LINES: CollectionField<SalesForecast> = new CollectionField('SalesForecastLines', SalesForecast, new SalesForecastLineField('', SalesForecast));
  /**
   * All fields of the SalesForecast entity.
   */
  export const _allFields: Array<DateField<SalesForecast> | StringField<SalesForecast> | NumberField<SalesForecast> | CollectionField<SalesForecast>> = [
    SalesForecast.FORECAST_START_DATE,
    SalesForecast.FORECAST_END_DATE,
    SalesForecast.FORECAST_CODE,
    SalesForecast.FORECAST_NAME,
    SalesForecast.NUMERATOR,
    SalesForecast.SALES_FORECAST_LINES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SalesForecast> = new AllFields('*', SalesForecast);
  /**
   * All key fields of the SalesForecast entity.
   */
  export const _keyFields: Array<Field<SalesForecast>> = [SalesForecast.NUMERATOR];
  /**
   * Mapping of all key field names to the respective static field property SalesForecast.
   */
  export const _keys: { [keys: string]: Field<SalesForecast> } = SalesForecast._keyFields.reduce((acc: { [keys: string]: Field<SalesForecast> }, field: Field<SalesForecast>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
