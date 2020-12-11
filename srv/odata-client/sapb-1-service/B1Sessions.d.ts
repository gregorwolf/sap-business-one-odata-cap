import { B1SessionsRequestBuilder } from './B1SessionsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "B1Sessions" of service "SAPB1".
 */
export declare class B1Sessions extends EntityV4 implements B1SessionsType {
    /**
     * Technical entity name for B1Sessions.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Version.
     * @nullable
     */
    version?: string;
    /**
     * Session Timeout.
     * @nullable
     */
    sessionTimeout?: number;
    /**
     * Session Id.
     * @nullable
     */
    sessionId?: string;
    /**
     * Returns an entity builder to construct instances of `B1Sessions`.
     * @returns A builder that constructs instances of entity type `B1Sessions`.
     */
    static builder(): EntityBuilderType<B1Sessions, B1SessionsType>;
    /**
     * Returns a request builder to construct requests for operations on the `B1Sessions` entity type.
     * @returns A `B1Sessions` request builder.
     */
    static requestBuilder(): B1SessionsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `B1Sessions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `B1Sessions`.
     */
    static customField(fieldName: string): CustomFieldV4<B1Sessions>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface B1SessionsType {
    version?: string | null;
    sessionTimeout?: number | null;
    sessionId?: string | null;
}
export declare namespace B1Sessions {
    /**
     * Static representation of the [[version]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VERSION: StringField<B1Sessions>;
    /**
     * Static representation of the [[sessionTimeout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SESSION_TIMEOUT: NumberField<B1Sessions>;
    /**
     * Static representation of the [[sessionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SESSION_ID: StringField<B1Sessions>;
    /**
     * All fields of the B1Sessions entity.
     */
    const _allFields: Array<StringField<B1Sessions> | NumberField<B1Sessions>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<B1Sessions>;
    /**
     * All key fields of the B1Sessions entity.
     */
    const _keyFields: Array<Field<B1Sessions>>;
    /**
     * Mapping of all key field names to the respective static field property B1Sessions.
     */
    const _keys: {
        [keys: string]: Field<B1Sessions>;
    };
}
//# sourceMappingURL=B1Sessions.d.ts.map