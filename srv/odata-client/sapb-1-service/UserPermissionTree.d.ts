import { UserPermissionTreeRequestBuilder } from './UserPermissionTreeRequestBuilder';
import { UserPermissionForm } from './UserPermissionForm';
import { AllFields, CollectionField, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "UserPermissionTree" of service "SAPB1".
 */
export declare class UserPermissionTree extends Entity implements UserPermissionTreeType {
    /**
     * Technical entity name for UserPermissionTree.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserPermissionTree.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * User Signature.
     * @nullable
     */
    userSignature?: number;
    /**
     * Display Order.
     * @nullable
     */
    displayOrder?: number;
    /**
     * Permission Id.
     * @nullable
     */
    permissionId?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Levels.
     * @nullable
     */
    levels?: number;
    /**
     * Parent Id.
     * @nullable
     */
    parentId?: string;
    /**
     * User Permission Forms.
     * @nullable
     */
    userPermissionForms?: UserPermissionForm[];
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * Returns an entity builder to construct instances `UserPermissionTree`.
     * @returns A builder that constructs instances of entity type `UserPermissionTree`.
     */
    static builder(): EntityBuilderType<UserPermissionTree, UserPermissionTreeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UserPermissionTree` entity type.
     * @returns A `UserPermissionTree` request builder.
     */
    static requestBuilder(): UserPermissionTreeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserPermissionTree`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserPermissionTree`.
     */
    static customField(fieldName: string): CustomField<UserPermissionTree>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Users, UsersType } from './Users';
export interface UserPermissionTreeType {
    userSignature?: number;
    displayOrder?: number;
    permissionId?: string;
    name?: string;
    levels?: number;
    parentId?: string;
    userPermissionForms?: UserPermissionForm[];
    user: UsersType;
}
export interface UserPermissionTreeTypeForceMandatory {
    userSignature: number;
    displayOrder: number;
    permissionId: string;
    name: string;
    levels: number;
    parentId: string;
    userPermissionForms: UserPermissionForm[];
    user: UsersType;
}
export declare namespace UserPermissionTree {
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SIGNATURE: NumberField<UserPermissionTree>;
    /**
     * Static representation of the [[displayOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_ORDER: NumberField<UserPermissionTree>;
    /**
     * Static representation of the [[permissionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERMISSION_ID: StringField<UserPermissionTree>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<UserPermissionTree>;
    /**
     * Static representation of the [[levels]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVELS: NumberField<UserPermissionTree>;
    /**
     * Static representation of the [[parentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_ID: StringField<UserPermissionTree>;
    /**
     * Static representation of the [[userPermissionForms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_PERMISSION_FORMS: CollectionField<UserPermissionTree>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<UserPermissionTree, Users>;
    /**
     * All fields of the UserPermissionTree entity.
     */
    const _allFields: Array<NumberField<UserPermissionTree> | StringField<UserPermissionTree> | CollectionField<UserPermissionTree> | OneToOneLink<UserPermissionTree, Users>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserPermissionTree>;
    /**
     * All key fields of the UserPermissionTree entity.
     */
    const _keyFields: Array<Field<UserPermissionTree>>;
    /**
     * Mapping of all key field names to the respective static field property UserPermissionTree.
     */
    const _keys: {
        [keys: string]: Field<UserPermissionTree>;
    };
}
//# sourceMappingURL=UserPermissionTree.d.ts.map