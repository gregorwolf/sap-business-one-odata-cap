import { UserKeysMdRequestBuilder } from './UserKeysMdRequestBuilder';
import { UserKeysMdElement } from './UserKeysMdElement';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "UserKeysMD" of service "SAPB1".
 */
export declare class UserKeysMd extends Entity implements UserKeysMdType {
    /**
     * Technical entity name for UserKeysMd.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserKeysMd.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Table Name.
     * @nullable
     */
    tableName?: string;
    /**
     * Key Index.
     * @nullable
     */
    keyIndex?: number;
    /**
     * Key Name.
     * @nullable
     */
    keyName?: string;
    /**
     * User Keys Md Elements.
     * @nullable
     */
    userKeysMdElements?: UserKeysMdElement[];
    /**
     * Returns an entity builder to construct instances `UserKeysMd`.
     * @returns A builder that constructs instances of entity type `UserKeysMd`.
     */
    static builder(): EntityBuilderType<UserKeysMd, UserKeysMdTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UserKeysMd` entity type.
     * @returns A `UserKeysMd` request builder.
     */
    static requestBuilder(): UserKeysMdRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserKeysMd`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserKeysMd`.
     */
    static customField(fieldName: string): CustomField<UserKeysMd>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface UserKeysMdType {
    tableName?: string;
    keyIndex?: number;
    keyName?: string;
    userKeysMdElements?: UserKeysMdElement[];
}
export interface UserKeysMdTypeForceMandatory {
    tableName: string;
    keyIndex: number;
    keyName: string;
    userKeysMdElements: UserKeysMdElement[];
}
export declare namespace UserKeysMd {
    /**
     * Static representation of the [[tableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TABLE_NAME: StringField<UserKeysMd>;
    /**
     * Static representation of the [[keyIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KEY_INDEX: NumberField<UserKeysMd>;
    /**
     * Static representation of the [[keyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KEY_NAME: StringField<UserKeysMd>;
    /**
     * Static representation of the [[userKeysMdElements]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_KEYS_MD_ELEMENTS: CollectionField<UserKeysMd>;
    /**
     * All fields of the UserKeysMd entity.
     */
    const _allFields: Array<StringField<UserKeysMd> | NumberField<UserKeysMd> | CollectionField<UserKeysMd>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserKeysMd>;
    /**
     * All key fields of the UserKeysMd entity.
     */
    const _keyFields: Array<Field<UserKeysMd>>;
    /**
     * Mapping of all key field names to the respective static field property UserKeysMd.
     */
    const _keys: {
        [keys: string]: Field<UserKeysMd>;
    };
}
//# sourceMappingURL=UserKeysMd.d.ts.map