import { RouteStagesRequestBuilder } from './RouteStagesRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RouteStages" of service "SAPB1".
 */
export declare class RouteStages extends EntityV4 implements RouteStagesType {
    /**
     * Technical entity name for RouteStages.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Internal Number.
     * @nullable
     */
    internalNumber?: number;
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
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Generation Time.
     * @nullable
     */
    generationTime?: Time;
    /**
     * Date Of Update.
     * @nullable
     */
    dateOfUpdate?: Moment;
    /**
     * Returns an entity builder to construct instances of `RouteStages`.
     * @returns A builder that constructs instances of entity type `RouteStages`.
     */
    static builder(): EntityBuilderType<RouteStages, RouteStagesType>;
    /**
     * Returns a request builder to construct requests for operations on the `RouteStages` entity type.
     * @returns A `RouteStages` request builder.
     */
    static requestBuilder(): RouteStagesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RouteStages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RouteStages`.
     */
    static customField(fieldName: string): CustomFieldV4<RouteStages>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface RouteStagesType {
    internalNumber?: number | null;
    code?: string | null;
    description?: string | null;
    creationDate?: Moment | null;
    generationTime?: Time | null;
    dateOfUpdate?: Moment | null;
}
export declare namespace RouteStages {
    /**
     * Static representation of the [[internalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_NUMBER: NumberField<RouteStages>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<RouteStages>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<RouteStages>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<RouteStages>;
    /**
     * Static representation of the [[generationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERATION_TIME: TimeField<RouteStages>;
    /**
     * Static representation of the [[dateOfUpdate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_UPDATE: DateField<RouteStages>;
    /**
     * All fields of the RouteStages entity.
     */
    const _allFields: Array<NumberField<RouteStages> | StringField<RouteStages> | DateField<RouteStages> | TimeField<RouteStages>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RouteStages>;
    /**
     * All key fields of the RouteStages entity.
     */
    const _keyFields: Array<Field<RouteStages>>;
    /**
     * Mapping of all key field names to the respective static field property RouteStages.
     */
    const _keys: {
        [keys: string]: Field<RouteStages>;
    };
}
//# sourceMappingURL=RouteStages.d.ts.map