import { EmailGroupsRequestBuilder } from './EmailGroupsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmailGroups" of service "SAPB1".
 */
export declare class EmailGroups extends EntityV4 implements EmailGroupsType {
    /**
     * Technical entity name for EmailGroups.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Email Group Code.
     * @nullable
     */
    emailGroupCode?: string;
    /**
     * Email Group Name.
     * @nullable
     */
    emailGroupName?: string;
    /**
     * Returns an entity builder to construct instances of `EmailGroups`.
     * @returns A builder that constructs instances of entity type `EmailGroups`.
     */
    static builder(): EntityBuilderType<EmailGroups, EmailGroupsType>;
    /**
     * Returns a request builder to construct requests for operations on the `EmailGroups` entity type.
     * @returns A `EmailGroups` request builder.
     */
    static requestBuilder(): EmailGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmailGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmailGroups`.
     */
    static customField(fieldName: string): CustomFieldV4<EmailGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EmailGroupsType {
    emailGroupCode?: string | null;
    emailGroupName?: string | null;
}
export declare namespace EmailGroups {
    /**
     * Static representation of the [[emailGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_GROUP_CODE: StringField<EmailGroups>;
    /**
     * Static representation of the [[emailGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_GROUP_NAME: StringField<EmailGroups>;
    /**
     * All fields of the EmailGroups entity.
     */
    const _allFields: Array<StringField<EmailGroups>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmailGroups>;
    /**
     * All key fields of the EmailGroups entity.
     */
    const _keyFields: Array<Field<EmailGroups>>;
    /**
     * Mapping of all key field names to the respective static field property EmailGroups.
     */
    const _keys: {
        [keys: string]: Field<EmailGroups>;
    };
}
//# sourceMappingURL=EmailGroups.d.ts.map