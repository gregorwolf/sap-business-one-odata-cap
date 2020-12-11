import { ElectronicFileFormatsRequestBuilder } from './ElectronicFileFormatsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ElectronicFileFormats" of service "SAPB1".
 */
export declare class ElectronicFileFormats extends EntityV4 implements ElectronicFileFormatsType {
    /**
     * Technical entity name for ElectronicFileFormats.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Format Id.
     * @nullable
     */
    formatId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Version.
     * @nullable
     */
    version?: string;
    /**
     * Schema Version.
     * @nullable
     */
    schemaVersion?: string;
    /**
     * Output File Path.
     * @nullable
     */
    outputFilePath?: string;
    /**
     * Menu Name.
     * @nullable
     */
    menuName?: string;
    /**
     * Menu Path.
     * @nullable
     */
    menuPath?: string;
    /**
     * Returns an entity builder to construct instances of `ElectronicFileFormats`.
     * @returns A builder that constructs instances of entity type `ElectronicFileFormats`.
     */
    static builder(): EntityBuilderType<ElectronicFileFormats, ElectronicFileFormatsType>;
    /**
     * Returns a request builder to construct requests for operations on the `ElectronicFileFormats` entity type.
     * @returns A `ElectronicFileFormats` request builder.
     */
    static requestBuilder(): ElectronicFileFormatsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ElectronicFileFormats`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ElectronicFileFormats`.
     */
    static customField(fieldName: string): CustomFieldV4<ElectronicFileFormats>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ElectronicFileFormatsType {
    formatId?: number | null;
    name?: string | null;
    description?: string | null;
    version?: string | null;
    schemaVersion?: string | null;
    outputFilePath?: string | null;
    menuName?: string | null;
    menuPath?: string | null;
}
export declare namespace ElectronicFileFormats {
    /**
     * Static representation of the [[formatId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMAT_ID: NumberField<ElectronicFileFormats>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ElectronicFileFormats>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ElectronicFileFormats>;
    /**
     * Static representation of the [[version]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VERSION: StringField<ElectronicFileFormats>;
    /**
     * Static representation of the [[schemaVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHEMA_VERSION: StringField<ElectronicFileFormats>;
    /**
     * Static representation of the [[outputFilePath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OUTPUT_FILE_PATH: StringField<ElectronicFileFormats>;
    /**
     * Static representation of the [[menuName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MENU_NAME: StringField<ElectronicFileFormats>;
    /**
     * Static representation of the [[menuPath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MENU_PATH: StringField<ElectronicFileFormats>;
    /**
     * All fields of the ElectronicFileFormats entity.
     */
    const _allFields: Array<NumberField<ElectronicFileFormats> | StringField<ElectronicFileFormats>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ElectronicFileFormats>;
    /**
     * All key fields of the ElectronicFileFormats entity.
     */
    const _keyFields: Array<Field<ElectronicFileFormats>>;
    /**
     * Mapping of all key field names to the respective static field property ElectronicFileFormats.
     */
    const _keys: {
        [keys: string]: Field<ElectronicFileFormats>;
    };
}
//# sourceMappingURL=ElectronicFileFormats.d.ts.map