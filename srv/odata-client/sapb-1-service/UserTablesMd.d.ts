import { UserTablesMdRequestBuilder } from './UserTablesMdRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "UserTablesMD" of service "SAPB1".
 */
export declare class UserTablesMd extends Entity implements UserTablesMdType {
    /**
     * Technical entity name for UserTablesMd.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserTablesMd.
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
     * Table Description.
     * @nullable
     */
    tableDescription?: string;
    /**
     * Archive Date Field.
     * @nullable
     */
    archiveDateField?: string;
    /**
     * One-to-many navigation property to the [[UserObjectsMd]] entity.
     */
    userObjectsMd: UserObjectsMd[];
    /**
     * One-to-many navigation property to the [[UserFieldsMd]] entity.
     */
    userFieldsMd: UserFieldsMd[];
    /**
     * Returns an entity builder to construct instances `UserTablesMd`.
     * @returns A builder that constructs instances of entity type `UserTablesMd`.
     */
    static builder(): EntityBuilderType<UserTablesMd, UserTablesMdTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UserTablesMd` entity type.
     * @returns A `UserTablesMd` request builder.
     */
    static requestBuilder(): UserTablesMdRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserTablesMd`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserTablesMd`.
     */
    static customField(fieldName: string): CustomField<UserTablesMd>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { UserObjectsMd, UserObjectsMdType } from './UserObjectsMd';
import { UserFieldsMd, UserFieldsMdType } from './UserFieldsMd';
export interface UserTablesMdType {
    tableName?: string;
    tableDescription?: string;
    archiveDateField?: string;
    userObjectsMd: UserObjectsMdType[];
    userFieldsMd: UserFieldsMdType[];
}
export interface UserTablesMdTypeForceMandatory {
    tableName: string;
    tableDescription: string;
    archiveDateField: string;
    userObjectsMd: UserObjectsMdType[];
    userFieldsMd: UserFieldsMdType[];
}
export declare namespace UserTablesMd {
    /**
     * Static representation of the [[tableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TABLE_NAME: StringField<UserTablesMd>;
    /**
     * Static representation of the [[tableDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TABLE_DESCRIPTION: StringField<UserTablesMd>;
    /**
     * Static representation of the [[archiveDateField]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ARCHIVE_DATE_FIELD: StringField<UserTablesMd>;
    /**
     * Static representation of the one-to-many navigation property [[userObjectsMd]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_OBJECTS_MD: OneToManyLink<UserTablesMd, UserObjectsMd>;
    /**
     * Static representation of the one-to-many navigation property [[userFieldsMd]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_FIELDS_MD: OneToManyLink<UserTablesMd, UserFieldsMd>;
    /**
     * All fields of the UserTablesMd entity.
     */
    const _allFields: Array<StringField<UserTablesMd> | OneToManyLink<UserTablesMd, UserObjectsMd> | OneToManyLink<UserTablesMd, UserFieldsMd>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserTablesMd>;
    /**
     * All key fields of the UserTablesMd entity.
     */
    const _keyFields: Array<Field<UserTablesMd>>;
    /**
     * Mapping of all key field names to the respective static field property UserTablesMd.
     */
    const _keys: {
        [keys: string]: Field<UserTablesMd>;
    };
}
//# sourceMappingURL=UserTablesMd.d.ts.map