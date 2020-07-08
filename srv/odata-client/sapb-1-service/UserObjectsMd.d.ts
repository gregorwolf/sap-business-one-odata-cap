import { UserObjectsMdRequestBuilder } from './UserObjectsMdRequestBuilder';
import { UserObjectMdChildTable } from './UserObjectMdChildTable';
import { UserObjectMdFindColumn } from './UserObjectMdFindColumn';
import { UserObjectMdFormColumn } from './UserObjectMdFormColumn';
import { UserObjectMdEnhancedFormColumn } from './UserObjectMdEnhancedFormColumn';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "UserObjectsMD" of service "SAPB1".
 */
export declare class UserObjectsMd extends Entity implements UserObjectsMdType {
    /**
     * Technical entity name for UserObjectsMd.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserObjectsMd.
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
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Log Table Name.
     * @nullable
     */
    logTableName?: string;
    /**
     * Extension Name.
     * @nullable
     */
    extensionName?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Menu Caption.
     * @nullable
     */
    menuCaption?: string;
    /**
     * Father Menu Id.
     * @nullable
     */
    fatherMenuId?: number;
    /**
     * Position.
     * @nullable
     */
    position?: number;
    /**
     * Menu Uid.
     * @nullable
     */
    menuUid?: string;
    /**
     * Form Srf.
     * @nullable
     */
    formSrf?: string;
    /**
     * User Object Md Child Tables.
     * @nullable
     */
    userObjectMdChildTables?: UserObjectMdChildTable[];
    /**
     * User Object Md Find Columns.
     * @nullable
     */
    userObjectMdFindColumns?: UserObjectMdFindColumn[];
    /**
     * User Object Md Form Columns.
     * @nullable
     */
    userObjectMdFormColumns?: UserObjectMdFormColumn[];
    /**
     * User Object Md Enhanced Form Columns.
     * @nullable
     */
    userObjectMdEnhancedFormColumns?: UserObjectMdEnhancedFormColumn[];
    /**
     * One-to-one navigation property to the [[UserTablesMd]] entity.
     */
    userTablesMd: UserTablesMd;
    /**
     * Returns an entity builder to construct instances `UserObjectsMd`.
     * @returns A builder that constructs instances of entity type `UserObjectsMd`.
     */
    static builder(): EntityBuilderType<UserObjectsMd, UserObjectsMdTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UserObjectsMd` entity type.
     * @returns A `UserObjectsMd` request builder.
     */
    static requestBuilder(): UserObjectsMdRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserObjectsMd`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserObjectsMd`.
     */
    static customField(fieldName: string): CustomField<UserObjectsMd>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { UserTablesMd, UserTablesMdType } from './UserTablesMd';
export interface UserObjectsMdType {
    tableName?: string;
    code?: string;
    logTableName?: string;
    extensionName?: string;
    name?: string;
    menuCaption?: string;
    fatherMenuId?: number;
    position?: number;
    menuUid?: string;
    formSrf?: string;
    userObjectMdChildTables?: UserObjectMdChildTable[];
    userObjectMdFindColumns?: UserObjectMdFindColumn[];
    userObjectMdFormColumns?: UserObjectMdFormColumn[];
    userObjectMdEnhancedFormColumns?: UserObjectMdEnhancedFormColumn[];
    userTablesMd: UserTablesMdType;
}
export interface UserObjectsMdTypeForceMandatory {
    tableName: string;
    code: string;
    logTableName: string;
    extensionName: string;
    name: string;
    menuCaption: string;
    fatherMenuId: number;
    position: number;
    menuUid: string;
    formSrf: string;
    userObjectMdChildTables: UserObjectMdChildTable[];
    userObjectMdFindColumns: UserObjectMdFindColumn[];
    userObjectMdFormColumns: UserObjectMdFormColumn[];
    userObjectMdEnhancedFormColumns: UserObjectMdEnhancedFormColumn[];
    userTablesMd: UserTablesMdType;
}
export declare namespace UserObjectsMd {
    /**
     * Static representation of the [[tableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TABLE_NAME: StringField<UserObjectsMd>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<UserObjectsMd>;
    /**
     * Static representation of the [[logTableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOG_TABLE_NAME: StringField<UserObjectsMd>;
    /**
     * Static representation of the [[extensionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_NAME: StringField<UserObjectsMd>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<UserObjectsMd>;
    /**
     * Static representation of the [[menuCaption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MENU_CAPTION: StringField<UserObjectsMd>;
    /**
     * Static representation of the [[fatherMenuId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FATHER_MENU_ID: NumberField<UserObjectsMd>;
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION: NumberField<UserObjectsMd>;
    /**
     * Static representation of the [[menuUid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MENU_UID: StringField<UserObjectsMd>;
    /**
     * Static representation of the [[formSrf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_SRF: StringField<UserObjectsMd>;
    /**
     * Static representation of the [[userObjectMdChildTables]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_OBJECT_MD_CHILD_TABLES: CollectionField<UserObjectsMd>;
    /**
     * Static representation of the [[userObjectMdFindColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_OBJECT_MD_FIND_COLUMNS: CollectionField<UserObjectsMd>;
    /**
     * Static representation of the [[userObjectMdFormColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_OBJECT_MD_FORM_COLUMNS: CollectionField<UserObjectsMd>;
    /**
     * Static representation of the [[userObjectMdEnhancedFormColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_OBJECT_MD_ENHANCED_FORM_COLUMNS: CollectionField<UserObjectsMd>;
    /**
     * Static representation of the one-to-one navigation property [[userTablesMd]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_TABLES_MD: OneToOneLink<UserObjectsMd, UserTablesMd>;
    /**
     * All fields of the UserObjectsMd entity.
     */
    const _allFields: Array<StringField<UserObjectsMd> | NumberField<UserObjectsMd> | CollectionField<UserObjectsMd> | OneToOneLink<UserObjectsMd, UserTablesMd>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserObjectsMd>;
    /**
     * All key fields of the UserObjectsMd entity.
     */
    const _keyFields: Array<Field<UserObjectsMd>>;
    /**
     * Mapping of all key field names to the respective static field property UserObjectsMd.
     */
    const _keys: {
        [keys: string]: Field<UserObjectsMd>;
    };
}
//# sourceMappingURL=UserObjectsMd.d.ts.map