import { UserFieldsMdRequestBuilder } from './UserFieldsMdRequestBuilder';
import { ValidValueMd } from './ValidValueMd';
import { BoFieldTypes } from './BoFieldTypes';
import { BoFldSubTypes } from './BoFldSubTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { UdfLinkedSystemObjectTypesEnum } from './UdfLinkedSystemObjectTypesEnum';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "UserFieldsMD" of service "SAPB1".
 */
export declare class UserFieldsMd extends EntityV4 implements UserFieldsMdType {
    /**
     * Technical entity name for UserFieldsMd.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Type.
     * @nullable
     */
    type?: BoFieldTypes;
    /**
     * Size.
     * @nullable
     */
    size?: number;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Sub Type.
     * @nullable
     */
    subType?: BoFldSubTypes;
    /**
     * Linked Table.
     * @nullable
     */
    linkedTable?: string;
    /**
     * Default Value.
     * @nullable
     */
    defaultValue?: string;
    /**
     * Table Name.
     * @nullable
     */
    tableName?: string;
    /**
     * Field Id.
     * @nullable
     */
    fieldId?: number;
    /**
     * Edit Size.
     * @nullable
     */
    editSize?: number;
    /**
     * Mandatory.
     * @nullable
     */
    mandatory?: BoYesNoEnum;
    /**
     * Linked Udo.
     * @nullable
     */
    linkedUdo?: string;
    /**
     * Linked System Object.
     * @nullable
     */
    linkedSystemObject?: UdfLinkedSystemObjectTypesEnum;
    /**
     * Valid Values Md.
     * @nullable
     */
    validValuesMd?: ValidValueMd[];
    /**
     * One-to-one navigation property to the [[UserTablesMd]] entity.
     */
    userTablesMd: UserTablesMd;
    /**
     * Returns an entity builder to construct instances of `UserFieldsMd`.
     * @returns A builder that constructs instances of entity type `UserFieldsMd`.
     */
    static builder(): EntityBuilderType<UserFieldsMd, UserFieldsMdType>;
    /**
     * Returns a request builder to construct requests for operations on the `UserFieldsMd` entity type.
     * @returns A `UserFieldsMd` request builder.
     */
    static requestBuilder(): UserFieldsMdRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserFieldsMd`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserFieldsMd`.
     */
    static customField(fieldName: string): CustomFieldV4<UserFieldsMd>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { UserTablesMd, UserTablesMdType } from './UserTablesMd';
export interface UserFieldsMdType {
    name?: string | null;
    type?: BoFieldTypes | null;
    size?: number | null;
    description?: string | null;
    subType?: BoFldSubTypes | null;
    linkedTable?: string | null;
    defaultValue?: string | null;
    tableName?: string | null;
    fieldId?: number | null;
    editSize?: number | null;
    mandatory?: BoYesNoEnum | null;
    linkedUdo?: string | null;
    linkedSystemObject?: UdfLinkedSystemObjectTypesEnum | null;
    validValuesMd?: ValidValueMd[] | null;
    userTablesMd: UserTablesMdType;
}
export declare namespace UserFieldsMd {
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<UserFieldsMd>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: EnumField<UserFieldsMd>;
    /**
     * Static representation of the [[size]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIZE: NumberField<UserFieldsMd>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<UserFieldsMd>;
    /**
     * Static representation of the [[subType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_TYPE: EnumField<UserFieldsMd>;
    /**
     * Static representation of the [[linkedTable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_TABLE: StringField<UserFieldsMd>;
    /**
     * Static representation of the [[defaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_VALUE: StringField<UserFieldsMd>;
    /**
     * Static representation of the [[tableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TABLE_NAME: StringField<UserFieldsMd>;
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_ID: NumberField<UserFieldsMd>;
    /**
     * Static representation of the [[editSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDIT_SIZE: NumberField<UserFieldsMd>;
    /**
     * Static representation of the [[mandatory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANDATORY: EnumField<UserFieldsMd>;
    /**
     * Static representation of the [[linkedUdo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_UDO: StringField<UserFieldsMd>;
    /**
     * Static representation of the [[linkedSystemObject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LINKED_SYSTEM_OBJECT: EnumField<UserFieldsMd>;
    /**
     * Static representation of the [[validValuesMd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_VALUES_MD: CollectionField<UserFieldsMd, ValidValueMd>;
    /**
     * Static representation of the one-to-one navigation property [[userTablesMd]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_TABLES_MD: OneToOneLink<UserFieldsMd, UserTablesMd>;
    /**
     * All fields of the UserFieldsMd entity.
     */
    const _allFields: Array<StringField<UserFieldsMd> | EnumField<UserFieldsMd> | NumberField<UserFieldsMd> | CollectionField<UserFieldsMd, ValidValueMd> | OneToOneLink<UserFieldsMd, UserTablesMd>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserFieldsMd>;
    /**
     * All key fields of the UserFieldsMd entity.
     */
    const _keyFields: Array<Field<UserFieldsMd>>;
    /**
     * Mapping of all key field names to the respective static field property UserFieldsMd.
     */
    const _keys: {
        [keys: string]: Field<UserFieldsMd>;
    };
}
//# sourceMappingURL=UserFieldsMd.d.ts.map