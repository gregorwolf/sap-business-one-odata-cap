import { LocalEraRequestBuilder } from './LocalEraRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "LocalEra" of service "SAPB1".
 */
export declare class LocalEra extends EntityV4 implements LocalEraType {
    /**
     * Technical entity name for LocalEra.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Era Name.
     * @nullable
     */
    eraName?: string;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Returns an entity builder to construct instances of `LocalEra`.
     * @returns A builder that constructs instances of entity type `LocalEra`.
     */
    static builder(): EntityBuilderType<LocalEra, LocalEraType>;
    /**
     * Returns a request builder to construct requests for operations on the `LocalEra` entity type.
     * @returns A `LocalEra` request builder.
     */
    static requestBuilder(): LocalEraRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LocalEra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LocalEra`.
     */
    static customField(fieldName: string): CustomFieldV4<LocalEra>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface LocalEraType {
    eraName?: string | null;
    startDate?: Moment | null;
    code?: string | null;
}
export declare namespace LocalEra {
    /**
     * Static representation of the [[eraName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ERA_NAME: StringField<LocalEra>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<LocalEra>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<LocalEra>;
    /**
     * All fields of the LocalEra entity.
     */
    const _allFields: Array<StringField<LocalEra> | DateField<LocalEra>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LocalEra>;
    /**
     * All key fields of the LocalEra entity.
     */
    const _keyFields: Array<Field<LocalEra>>;
    /**
     * Mapping of all key field names to the respective static field property LocalEra.
     */
    const _keys: {
        [keys: string]: Field<LocalEra>;
    };
}
//# sourceMappingURL=LocalEra.d.ts.map