/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesForecastRequestBuilder } from './SalesForecastRequestBuilder';
import { Moment } from 'moment';
import { SalesForecastLine } from './SalesForecastLine';
import { BoForecastViewType } from './BoForecastViewType';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SalesForecast" of service "SAPB1".
 */
export class SalesForecast extends EntityV4 implements SalesForecastType {
  /**
   * Technical entity name for SalesForecast.
   */
  static _entityName = 'SalesForecast';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * View.
   * @nullable
   */
  view?: BoForecastViewType;
  /**
   * Sales Forecast Lines.
   * @nullable
   */
  salesForecastLines?: SalesForecastLine[];

  /**
   * Returns an entity builder to construct instances of `SalesForecast`.
   * @returns A builder that constructs instances of entity type `SalesForecast`.
   */
  static builder(): EntityBuilderType<SalesForecast, SalesForecastType> {
    return EntityV4.entityBuilder(SalesForecast);
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
  static customField(fieldName: string): CustomFieldV4<SalesForecast> {
    return EntityV4.customFieldSelector(fieldName, SalesForecast);
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
  forecastStartDate?: Moment | null;
  forecastEndDate?: Moment | null;
  forecastCode?: string | null;
  forecastName?: string | null;
  numerator?: number | null;
  view?: BoForecastViewType | null;
  salesForecastLines?: SalesForecastLine[] | null;
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
   * Static representation of the [[view]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VIEW: EnumField<SalesForecast> = new EnumField('View', SalesForecast);
  /**
   * Static representation of the [[salesForecastLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_FORECAST_LINES: CollectionField<SalesForecast, SalesForecastLine> = new CollectionField('SalesForecastLines', SalesForecast, SalesForecastLine);
  /**
   * All fields of the SalesForecast entity.
   */
  export const _allFields: Array<DateField<SalesForecast> | StringField<SalesForecast> | NumberField<SalesForecast> | EnumField<SalesForecast> | CollectionField<SalesForecast, SalesForecastLine>> = [
    SalesForecast.FORECAST_START_DATE,
    SalesForecast.FORECAST_END_DATE,
    SalesForecast.FORECAST_CODE,
    SalesForecast.FORECAST_NAME,
    SalesForecast.NUMERATOR,
    SalesForecast.VIEW,
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
