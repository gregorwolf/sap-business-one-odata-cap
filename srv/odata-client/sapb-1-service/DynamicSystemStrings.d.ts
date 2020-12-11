import { DynamicSystemStringsRequestBuilder } from './DynamicSystemStringsRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DynamicSystemStrings" of service "SAPB1".
 */
export declare class DynamicSystemStrings extends EntityV4 implements DynamicSystemStringsType {
    /**
     * Technical entity name for DynamicSystemStrings.
     */
    static _entityName: string;
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
     * Item String.
     * @nullable
     */
    itemString?: string;
    /**
     * Is Bold.
     * @nullable
     */
    isBold?: BoYesNoEnum;
    /**
     * Is Italics.
     * @nullable
     */
    isItalics?: BoYesNoEnum;
    /**
     * Returns an entity builder to construct instances of `DynamicSystemStrings`.
     * @returns A builder that constructs instances of entity type `DynamicSystemStrings`.
     */
    static builder(): EntityBuilderType<DynamicSystemStrings, DynamicSystemStringsType>;
    /**
     * Returns a request builder to construct requests for operations on the `DynamicSystemStrings` entity type.
     * @returns A `DynamicSystemStrings` request builder.
     */
    static requestBuilder(): DynamicSystemStringsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DynamicSystemStrings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DynamicSystemStrings`.
     */
    static customField(fieldName: string): CustomFieldV4<DynamicSystemStrings>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface DynamicSystemStringsType {
    formId?: string | null;
    itemId?: string | null;
    columnId?: string | null;
    itemString?: string | null;
    isBold?: BoYesNoEnum | null;
    isItalics?: BoYesNoEnum | null;
}
export declare namespace DynamicSystemStrings {
    /**
     * Static representation of the [[formId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_ID: StringField<DynamicSystemStrings>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: StringField<DynamicSystemStrings>;
    /**
     * Static representation of the [[columnId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLUMN_ID: StringField<DynamicSystemStrings>;
    /**
     * Static representation of the [[itemString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_STRING: StringField<DynamicSystemStrings>;
    /**
     * Static representation of the [[isBold]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_BOLD: EnumField<DynamicSystemStrings>;
    /**
     * Static representation of the [[isItalics]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ITALICS: EnumField<DynamicSystemStrings>;
    /**
     * All fields of the DynamicSystemStrings entity.
     */
    const _allFields: Array<StringField<DynamicSystemStrings> | EnumField<DynamicSystemStrings>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DynamicSystemStrings>;
    /**
     * All key fields of the DynamicSystemStrings entity.
     */
    const _keyFields: Array<Field<DynamicSystemStrings>>;
    /**
     * Mapping of all key field names to the respective static field property DynamicSystemStrings.
     */
    const _keys: {
        [keys: string]: Field<DynamicSystemStrings>;
    };
}
//# sourceMappingURL=DynamicSystemStrings.d.ts.map