import { UserKeysMdRequestBuilder } from './UserKeysMdRequestBuilder';
import { UserKeysMdElement } from './UserKeysMdElement';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "UserKeysMD" of service "SAPB1".
 */
export declare class UserKeysMd extends EntityV4 implements UserKeysMdType {
    /**
     * Technical entity name for UserKeysMd.
     */
    static _entityName: string;
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
     * Unique.
     * @nullable
     */
    unique?: BoYesNoEnum;
    /**
     * User Keys Md Elements.
     * @nullable
     */
    userKeysMdElements?: UserKeysMdElement[];
    /**
     * Returns an entity builder to construct instances of `UserKeysMd`.
     * @returns A builder that constructs instances of entity type `UserKeysMd`.
     */
    static builder(): EntityBuilderType<UserKeysMd, UserKeysMdType>;
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
    static customField(fieldName: string): CustomFieldV4<UserKeysMd>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface UserKeysMdType {
    tableName?: string | null;
    keyIndex?: number | null;
    keyName?: string | null;
    unique?: BoYesNoEnum | null;
    userKeysMdElements?: UserKeysMdElement[] | null;
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
     * Static representation of the [[unique]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIQUE: EnumField<UserKeysMd>;
    /**
     * Static representation of the [[userKeysMdElements]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_KEYS_MD_ELEMENTS: CollectionField<UserKeysMd, UserKeysMdElement>;
    /**
     * All fields of the UserKeysMd entity.
     */
    const _allFields: Array<StringField<UserKeysMd> | NumberField<UserKeysMd> | EnumField<UserKeysMd> | CollectionField<UserKeysMd, UserKeysMdElement>>;
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