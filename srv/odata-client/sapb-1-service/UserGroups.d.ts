import { UserGroupsRequestBuilder } from './UserGroupsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "UserGroups" of service "SAPB1".
 */
export declare class UserGroups extends Entity implements UserGroupsType {
    /**
     * Technical entity name for UserGroups.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserGroups.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * User Group Id.
     * @nullable
     */
    userGroupId?: number;
    /**
     * User Group Name.
     * @nullable
     */
    userGroupName?: string;
    /**
     * User Group Dec.
     * @nullable
     */
    userGroupDec?: string;
    /**
     * Tpl Id.
     * @nullable
     */
    tplId?: number;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Returns an entity builder to construct instances `UserGroups`.
     * @returns A builder that constructs instances of entity type `UserGroups`.
     */
    static builder(): EntityBuilderType<UserGroups, UserGroupsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UserGroups` entity type.
     * @returns A `UserGroups` request builder.
     */
    static requestBuilder(): UserGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserGroups`.
     */
    static customField(fieldName: string): CustomField<UserGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface UserGroupsType {
    userGroupId?: number;
    userGroupName?: string;
    userGroupDec?: string;
    tplId?: number;
    startDate?: Moment;
    dueDate?: Moment;
}
export interface UserGroupsTypeForceMandatory {
    userGroupId: number;
    userGroupName: string;
    userGroupDec: string;
    tplId: number;
    startDate: Moment;
    dueDate: Moment;
}
export declare namespace UserGroups {
    /**
     * Static representation of the [[userGroupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_GROUP_ID: NumberField<UserGroups>;
    /**
     * Static representation of the [[userGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_GROUP_NAME: StringField<UserGroups>;
    /**
     * Static representation of the [[userGroupDec]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_GROUP_DEC: StringField<UserGroups>;
    /**
     * Static representation of the [[tplId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TPL_ID: NumberField<UserGroups>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<UserGroups>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: DateField<UserGroups>;
    /**
     * All fields of the UserGroups entity.
     */
    const _allFields: Array<NumberField<UserGroups> | StringField<UserGroups> | DateField<UserGroups>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserGroups>;
    /**
     * All key fields of the UserGroups entity.
     */
    const _keyFields: Array<Field<UserGroups>>;
    /**
     * Mapping of all key field names to the respective static field property UserGroups.
     */
    const _keys: {
        [keys: string]: Field<UserGroups>;
    };
}
//# sourceMappingURL=UserGroups.d.ts.map