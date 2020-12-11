import { SalesForecastRequestBuilder } from './SalesForecastRequestBuilder';
import { Moment } from 'moment';
import { SalesForecastLine } from './SalesForecastLine';
import { BoForecastViewType } from './BoForecastViewType';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SalesForecast" of service "SAPB1".
 */
export declare class SalesForecast extends EntityV4 implements SalesForecastType {
    /**
     * Technical entity name for SalesForecast.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    static builder(): EntityBuilderType<SalesForecast, SalesForecastType>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesForecast` entity type.
     * @returns A `SalesForecast` request builder.
     */
    static requestBuilder(): SalesForecastRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesForecast`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesForecast`.
     */
    static customField(fieldName: string): CustomFieldV4<SalesForecast>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace SalesForecast {
    /**
     * Static representation of the [[forecastStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORECAST_START_DATE: DateField<SalesForecast>;
    /**
     * Static representation of the [[forecastEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORECAST_END_DATE: DateField<SalesForecast>;
    /**
     * Static representation of the [[forecastCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORECAST_CODE: StringField<SalesForecast>;
    /**
     * Static representation of the [[forecastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORECAST_NAME: StringField<SalesForecast>;
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMERATOR: NumberField<SalesForecast>;
    /**
     * Static representation of the [[view]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VIEW: EnumField<SalesForecast>;
    /**
     * Static representation of the [[salesForecastLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_FORECAST_LINES: CollectionField<SalesForecast, SalesForecastLine>;
    /**
     * All fields of the SalesForecast entity.
     */
    const _allFields: Array<DateField<SalesForecast> | StringField<SalesForecast> | NumberField<SalesForecast> | EnumField<SalesForecast> | CollectionField<SalesForecast, SalesForecastLine>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesForecast>;
    /**
     * All key fields of the SalesForecast entity.
     */
    const _keyFields: Array<Field<SalesForecast>>;
    /**
     * Mapping of all key field names to the respective static field property SalesForecast.
     */
    const _keys: {
        [keys: string]: Field<SalesForecast>;
    };
}
//# sourceMappingURL=SalesForecast.d.ts.map