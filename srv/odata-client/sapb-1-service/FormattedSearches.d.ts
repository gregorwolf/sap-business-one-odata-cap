import { FormattedSearchesRequestBuilder } from './FormattedSearchesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "FormattedSearches" of service "SAPB1".
 */
export declare class FormattedSearches extends Entity implements FormattedSearchesType {
    /**
     * Technical entity name for FormattedSearches.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormattedSearches.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Form Id.
     * @nullable
     */
    formId?: string;
    /**
     * Item Id.
     * @nullable
     */
    itemId?: string;
    /**
     * Column Id.
     * @nullable
     */
    columnId?: string;
    /**
     * Query Id.
     * @nullable
     */
    queryId?: number;
    /**
     * Index.
     * @nullable
     */
    index?: number;
    /**
     * Field Id.
     * @nullable
     */
    fieldId?: string;
    /**
     * Returns an entity builder to construct instances `FormattedSearches`.
     * @returns A builder that constructs instances of entity type `FormattedSearches`.
     */
    static builder(): EntityBuilderType<FormattedSearches, FormattedSearchesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormattedSearches` entity type.
     * @returns A `FormattedSearches` request builder.
     */
    static requestBuilder(): FormattedSearchesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormattedSearches`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormattedSearches`.
     */
    static customField(fieldName: string): CustomField<FormattedSearches>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormattedSearchesType {
    formId?: string;
    itemId?: string;
    columnId?: string;
    queryId?: number;
    index?: number;
    fieldId?: string;
}
export interface FormattedSearchesTypeForceMandatory {
    formId: string;
    itemId: string;
    columnId: string;
    queryId: number;
    index: number;
    fieldId: string;
}
export declare namespace FormattedSearches {
    /**
     * Static representation of the [[formId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_ID: StringField<FormattedSearches>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: StringField<FormattedSearches>;
    /**
     * Static representation of the [[columnId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLUMN_ID: StringField<FormattedSearches>;
    /**
     * Static representation of the [[queryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUERY_ID: NumberField<FormattedSearches>;
    /**
     * Static representation of the [[index]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDEX: NumberField<FormattedSearches>;
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_ID: StringField<FormattedSearches>;
    /**
     * All fields of the FormattedSearches entity.
     */
    const _allFields: Array<StringField<FormattedSearches> | NumberField<FormattedSearches>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormattedSearches>;
    /**
     * All key fields of the FormattedSearches entity.
     */
    const _keyFields: Array<Field<FormattedSearches>>;
    /**
     * Mapping of all key field names to the respective static field property FormattedSearches.
     */
    const _keys: {
        [keys: string]: Field<FormattedSearches>;
    };
}
//# sourceMappingURL=FormattedSearches.d.ts.map