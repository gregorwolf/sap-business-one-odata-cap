import { CertificateSeriesRequestBuilder } from './CertificateSeriesRequestBuilder';
import { SeriesLine } from './SeriesLine';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "CertificateSeries" of service "SAPB1".
 */
export declare class CertificateSeries extends Entity implements CertificateSeriesType {
    /**
     * Technical entity name for CertificateSeries.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CertificateSeries.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Section.
     * @nullable
     */
    section?: number;
    /**
     * Location.
     * @nullable
     */
    location?: number;
    /**
     * Default Series.
     * @nullable
     */
    defaultSeries?: number;
    /**
     * Series Lines.
     * @nullable
     */
    seriesLines?: SeriesLine[];
    /**
     * One-to-one navigation property to the [[Sections]] entity.
     */
    section2: Sections;
    /**
     * One-to-one navigation property to the [[WarehouseLocations]] entity.
     */
    warehouseLocation: WarehouseLocations;
    /**
     * Returns an entity builder to construct instances `CertificateSeries`.
     * @returns A builder that constructs instances of entity type `CertificateSeries`.
     */
    static builder(): EntityBuilderType<CertificateSeries, CertificateSeriesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CertificateSeries` entity type.
     * @returns A `CertificateSeries` request builder.
     */
    static requestBuilder(): CertificateSeriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CertificateSeries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CertificateSeries`.
     */
    static customField(fieldName: string): CustomField<CertificateSeries>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Sections, SectionsType } from './Sections';
import { WarehouseLocations, WarehouseLocationsType } from './WarehouseLocations';
export interface CertificateSeriesType {
    absEntry?: number;
    code?: string;
    section?: number;
    location?: number;
    defaultSeries?: number;
    seriesLines?: SeriesLine[];
    section2: SectionsType;
    warehouseLocation: WarehouseLocationsType;
}
export interface CertificateSeriesTypeForceMandatory {
    absEntry: number;
    code: string;
    section: number;
    location: number;
    defaultSeries: number;
    seriesLines: SeriesLine[];
    section2: SectionsType;
    warehouseLocation: WarehouseLocationsType;
}
export declare namespace CertificateSeries {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<CertificateSeries>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<CertificateSeries>;
    /**
     * Static representation of the [[section]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION: NumberField<CertificateSeries>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: NumberField<CertificateSeries>;
    /**
     * Static representation of the [[defaultSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_SERIES: NumberField<CertificateSeries>;
    /**
     * Static representation of the [[seriesLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES_LINES: CollectionField<CertificateSeries>;
    /**
     * Static representation of the one-to-one navigation property [[section2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_2: OneToOneLink<CertificateSeries, Sections>;
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE_LOCATION: OneToOneLink<CertificateSeries, WarehouseLocations>;
    /**
     * All fields of the CertificateSeries entity.
     */
    const _allFields: Array<NumberField<CertificateSeries> | StringField<CertificateSeries> | CollectionField<CertificateSeries> | OneToOneLink<CertificateSeries, Sections> | OneToOneLink<CertificateSeries, WarehouseLocations>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CertificateSeries>;
    /**
     * All key fields of the CertificateSeries entity.
     */
    const _keyFields: Array<Field<CertificateSeries>>;
    /**
     * Mapping of all key field names to the respective static field property CertificateSeries.
     */
    const _keys: {
        [keys: string]: Field<CertificateSeries>;
    };
}
//# sourceMappingURL=CertificateSeries.d.ts.map