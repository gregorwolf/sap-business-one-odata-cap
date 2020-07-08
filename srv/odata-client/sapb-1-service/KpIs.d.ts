import { KpIsRequestBuilder } from './KpIsRequestBuilder';
import { KpiItemLine } from './KpiItemLine';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "KPIs" of service "SAPB1".
 */
export declare class KpIs extends Entity implements KpIsType {
    /**
     * Technical entity name for KpIs.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for KpIs.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Kpi Code.
     * @nullable
     */
    kpiCode?: string;
    /**
     * Kpi Name.
     * @nullable
     */
    kpiName?: string;
    /**
     * Number Of Columns.
     * @nullable
     */
    numberOfColumns?: number;
    /**
     * Kpi Item Lines.
     * @nullable
     */
    kpiItemLines?: KpiItemLine[];
    /**
     * Returns an entity builder to construct instances `KpIs`.
     * @returns A builder that constructs instances of entity type `KpIs`.
     */
    static builder(): EntityBuilderType<KpIs, KpIsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `KpIs` entity type.
     * @returns A `KpIs` request builder.
     */
    static requestBuilder(): KpIsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `KpIs`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `KpIs`.
     */
    static customField(fieldName: string): CustomField<KpIs>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface KpIsType {
    kpiCode?: string;
    kpiName?: string;
    numberOfColumns?: number;
    kpiItemLines?: KpiItemLine[];
}
export interface KpIsTypeForceMandatory {
    kpiCode: string;
    kpiName: string;
    numberOfColumns: number;
    kpiItemLines: KpiItemLine[];
}
export declare namespace KpIs {
    /**
     * Static representation of the [[kpiCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KPI_CODE: StringField<KpIs>;
    /**
     * Static representation of the [[kpiName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KPI_NAME: StringField<KpIs>;
    /**
     * Static representation of the [[numberOfColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OF_COLUMNS: NumberField<KpIs>;
    /**
     * Static representation of the [[kpiItemLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KPI_ITEM_LINES: CollectionField<KpIs>;
    /**
     * All fields of the KpIs entity.
     */
    const _allFields: Array<StringField<KpIs> | NumberField<KpIs> | CollectionField<KpIs>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<KpIs>;
    /**
     * All key fields of the KpIs entity.
     */
    const _keyFields: Array<Field<KpIs>>;
    /**
     * Mapping of all key field names to the respective static field property KpIs.
     */
    const _keys: {
        [keys: string]: Field<KpIs>;
    };
}
//# sourceMappingURL=KpIs.d.ts.map