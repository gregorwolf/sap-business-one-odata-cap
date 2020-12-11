import { UserObjectsMdRequestBuilder } from './UserObjectsMdRequestBuilder';
import { UserObjectMdChildTable } from './UserObjectMdChildTable';
import { UserObjectMdFindColumn } from './UserObjectMdFindColumn';
import { UserObjectMdFormColumn } from './UserObjectMdFormColumn';
import { UserObjectMdEnhancedFormColumn } from './UserObjectMdEnhancedFormColumn';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoUdoObjType } from './BoUdoObjType';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "UserObjectsMD" of service "SAPB1".
 */
export declare class UserObjectsMd extends EntityV4 implements UserObjectsMdType {
    /**
     * Technical entity name for UserObjectsMd.
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
     * Can Create Default Form.
     * @nullable
     */
    canCreateDefaultForm?: BoYesNoEnum;
    /**
     * Object Type.
     * @nullable
     */
    objectType?: BoUdoObjType;
    /**
     * Extension Name.
     * @nullable
     */
    extensionName?: string;
    /**
     * Can Cancel.
     * @nullable
     */
    canCancel?: BoYesNoEnum;
    /**
     * Can Delete.
     * @nullable
     */
    canDelete?: BoYesNoEnum;
    /**
     * Can Log.
     * @nullable
     */
    canLog?: BoYesNoEnum;
    /**
     * Manage Series.
     * @nullable
     */
    manageSeries?: BoYesNoEnum;
    /**
     * Can Find.
     * @nullable
     */
    canFind?: BoYesNoEnum;
    /**
     * Can Year Transfer.
     * @nullable
     */
    canYearTransfer?: BoYesNoEnum;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Can Close.
     * @nullable
     */
    canClose?: BoYesNoEnum;
    /**
     * Overwrite Dllfile.
     * @nullable
     */
    overwriteDllfile?: BoYesNoEnum;
    /**
     * Use Unique Form Type.
     * @nullable
     */
    useUniqueFormType?: BoYesNoEnum;
    /**
     * Can Archive.
     * @nullable
     */
    canArchive?: BoYesNoEnum;
    /**
     * Menu Item.
     * @nullable
     */
    menuItem?: BoYesNoEnum;
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
     * Enable Enhanced Form.
     * @nullable
     */
    enableEnhancedForm?: BoYesNoEnum;
    /**
     * Rebuild Enhanced Form.
     * @nullable
     */
    rebuildEnhancedForm?: BoYesNoEnum;
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
     * Returns an entity builder to construct instances of `UserObjectsMd`.
     * @returns A builder that constructs instances of entity type `UserObjectsMd`.
     */
    static builder(): EntityBuilderType<UserObjectsMd, UserObjectsMdType>;
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
    static customField(fieldName: string): CustomFieldV4<UserObjectsMd>;
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
    tableName?: string | null;
    code?: string | null;
    logTableName?: string | null;
    canCreateDefaultForm?: BoYesNoEnum | null;
    objectType?: BoUdoObjType | null;
    extensionName?: string | null;
    canCancel?: BoYesNoEnum | null;
    canDelete?: BoYesNoEnum | null;
    canLog?: BoYesNoEnum | null;
    manageSeries?: BoYesNoEnum | null;
    canFind?: BoYesNoEnum | null;
    canYearTransfer?: BoYesNoEnum | null;
    name?: string | null;
    canClose?: BoYesNoEnum | null;
    overwriteDllfile?: BoYesNoEnum | null;
    useUniqueFormType?: BoYesNoEnum | null;
    canArchive?: BoYesNoEnum | null;
    menuItem?: BoYesNoEnum | null;
    menuCaption?: string | null;
    fatherMenuId?: number | null;
    position?: number | null;
    menuUid?: string | null;
    enableEnhancedForm?: BoYesNoEnum | null;
    rebuildEnhancedForm?: BoYesNoEnum | null;
    formSrf?: string | null;
    userObjectMdChildTables?: UserObjectMdChildTable[] | null;
    userObjectMdFindColumns?: UserObjectMdFindColumn[] | null;
    userObjectMdFormColumns?: UserObjectMdFormColumn[] | null;
    userObjectMdEnhancedFormColumns?: UserObjectMdEnhancedFormColumn[] | null;
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
     * Static representation of the [[canCreateDefaultForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAN_CREATE_DEFAULT_FORM: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[objectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_TYPE: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[extensionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENSION_NAME: StringField<UserObjectsMd>;
    /**
     * Static representation of the [[canCancel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAN_CANCEL: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[canDelete]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAN_DELETE: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[canLog]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAN_LOG: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[manageSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGE_SERIES: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[canFind]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAN_FIND: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[canYearTransfer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAN_YEAR_TRANSFER: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<UserObjectsMd>;
    /**
     * Static representation of the [[canClose]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAN_CLOSE: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[overwriteDllfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERWRITE_DLLFILE: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[useUniqueFormType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_UNIQUE_FORM_TYPE: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[canArchive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAN_ARCHIVE: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[menuItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MENU_ITEM: EnumField<UserObjectsMd>;
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
     * Static representation of the [[enableEnhancedForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENABLE_ENHANCED_FORM: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[rebuildEnhancedForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REBUILD_ENHANCED_FORM: EnumField<UserObjectsMd>;
    /**
     * Static representation of the [[formSrf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_SRF: StringField<UserObjectsMd>;
    /**
     * Static representation of the [[userObjectMdChildTables]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_OBJECT_MD_CHILD_TABLES: CollectionField<UserObjectsMd, UserObjectMdChildTable>;
    /**
     * Static representation of the [[userObjectMdFindColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_OBJECT_MD_FIND_COLUMNS: CollectionField<UserObjectsMd, UserObjectMdFindColumn>;
    /**
     * Static representation of the [[userObjectMdFormColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_OBJECT_MD_FORM_COLUMNS: CollectionField<UserObjectsMd, UserObjectMdFormColumn>;
    /**
     * Static representation of the [[userObjectMdEnhancedFormColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_OBJECT_MD_ENHANCED_FORM_COLUMNS: CollectionField<UserObjectsMd, UserObjectMdEnhancedFormColumn>;
    /**
     * Static representation of the one-to-one navigation property [[userTablesMd]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_TABLES_MD: OneToOneLink<UserObjectsMd, UserTablesMd>;
    /**
     * All fields of the UserObjectsMd entity.
     */
    const _allFields: Array<StringField<UserObjectsMd> | EnumField<UserObjectsMd> | NumberField<UserObjectsMd> | CollectionField<UserObjectsMd, UserObjectMdChildTable> | CollectionField<UserObjectsMd, UserObjectMdFindColumn> | CollectionField<UserObjectsMd, UserObjectMdFormColumn> | CollectionField<UserObjectsMd, UserObjectMdEnhancedFormColumn> | OneToOneLink<UserObjectsMd, UserTablesMd>>;
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