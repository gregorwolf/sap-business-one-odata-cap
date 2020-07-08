import { FormPreferencesRequestBuilder } from './FormPreferencesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "FormPreferences" of service "SAPB1".
 */
export declare class FormPreferences extends Entity implements FormPreferencesType {
    /**
     * Technical entity name for FormPreferences.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormPreferences.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * User.
     * @nullable
     */
    user?: number;
    /**
     * Form Id.
     * @nullable
     */
    formId?: string;
    /**
     * Item Number.
     * @nullable
     */
    itemNumber?: string;
    /**
     * Column.
     * @nullable
     */
    column?: string;
    /**
     * Width.
     * @nullable
     */
    width?: number;
    /**
     * Tabs Layout.
     * @nullable
     */
    tabsLayout?: number;
    /**
     * Expanded Index.
     * @nullable
     */
    expandedIndex?: number;
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user2: Users;
    /**
     * Returns an entity builder to construct instances `FormPreferences`.
     * @returns A builder that constructs instances of entity type `FormPreferences`.
     */
    static builder(): EntityBuilderType<FormPreferences, FormPreferencesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormPreferences` entity type.
     * @returns A `FormPreferences` request builder.
     */
    static requestBuilder(): FormPreferencesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormPreferences`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormPreferences`.
     */
    static customField(fieldName: string): CustomField<FormPreferences>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Users, UsersType } from './Users';
export interface FormPreferencesType {
    user?: number;
    formId?: string;
    itemNumber?: string;
    column?: string;
    width?: number;
    tabsLayout?: number;
    expandedIndex?: number;
    user2: UsersType;
}
export interface FormPreferencesTypeForceMandatory {
    user: number;
    formId: string;
    itemNumber: string;
    column: string;
    width: number;
    tabsLayout: number;
    expandedIndex: number;
    user2: UsersType;
}
export declare namespace FormPreferences {
    /**
     * Static representation of the [[user]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: NumberField<FormPreferences>;
    /**
     * Static representation of the [[formId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_ID: StringField<FormPreferences>;
    /**
     * Static representation of the [[itemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_NUMBER: StringField<FormPreferences>;
    /**
     * Static representation of the [[column]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLUMN: StringField<FormPreferences>;
    /**
     * Static representation of the [[width]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WIDTH: NumberField<FormPreferences>;
    /**
     * Static representation of the [[tabsLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TABS_LAYOUT: NumberField<FormPreferences>;
    /**
     * Static representation of the [[expandedIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPANDED_INDEX: NumberField<FormPreferences>;
    /**
     * Static representation of the one-to-one navigation property [[user2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_2: OneToOneLink<FormPreferences, Users>;
    /**
     * All fields of the FormPreferences entity.
     */
    const _allFields: Array<NumberField<FormPreferences> | StringField<FormPreferences> | OneToOneLink<FormPreferences, Users>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormPreferences>;
    /**
     * All key fields of the FormPreferences entity.
     */
    const _keyFields: Array<Field<FormPreferences>>;
    /**
     * Mapping of all key field names to the respective static field property FormPreferences.
     */
    const _keys: {
        [keys: string]: Field<FormPreferences>;
    };
}
//# sourceMappingURL=FormPreferences.d.ts.map