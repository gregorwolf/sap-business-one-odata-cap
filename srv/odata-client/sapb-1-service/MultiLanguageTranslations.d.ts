import { MultiLanguageTranslationsRequestBuilder } from './MultiLanguageTranslationsRequestBuilder';
import { TranslationsInUserLanguage } from './TranslationsInUserLanguage';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "MultiLanguageTranslations" of service "SAPB1".
 */
export declare class MultiLanguageTranslations extends EntityV4 implements MultiLanguageTranslationsType {
    /**
     * Technical entity name for MultiLanguageTranslations.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Numerator.
     * @nullable
     */
    numerator?: number;
    /**
     * Table Name.
     * @nullable
     */
    tableName?: string;
    /**
     * Field Alias.
     * @nullable
     */
    fieldAlias?: string;
    /**
     * Primary Keyofobject.
     * @nullable
     */
    primaryKeyofobject?: string;
    /**
     * Translations In User Languages.
     * @nullable
     */
    translationsInUserLanguages?: TranslationsInUserLanguage[];
    /**
     * Returns an entity builder to construct instances of `MultiLanguageTranslations`.
     * @returns A builder that constructs instances of entity type `MultiLanguageTranslations`.
     */
    static builder(): EntityBuilderType<MultiLanguageTranslations, MultiLanguageTranslationsType>;
    /**
     * Returns a request builder to construct requests for operations on the `MultiLanguageTranslations` entity type.
     * @returns A `MultiLanguageTranslations` request builder.
     */
    static requestBuilder(): MultiLanguageTranslationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MultiLanguageTranslations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MultiLanguageTranslations`.
     */
    static customField(fieldName: string): CustomFieldV4<MultiLanguageTranslations>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface MultiLanguageTranslationsType {
    numerator?: number | null;
    tableName?: string | null;
    fieldAlias?: string | null;
    primaryKeyofobject?: string | null;
    translationsInUserLanguages?: TranslationsInUserLanguage[] | null;
}
export declare namespace MultiLanguageTranslations {
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMERATOR: NumberField<MultiLanguageTranslations>;
    /**
     * Static representation of the [[tableName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TABLE_NAME: StringField<MultiLanguageTranslations>;
    /**
     * Static representation of the [[fieldAlias]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_ALIAS: StringField<MultiLanguageTranslations>;
    /**
     * Static representation of the [[primaryKeyofobject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIMARY_KEYOFOBJECT: StringField<MultiLanguageTranslations>;
    /**
     * Static representation of the [[translationsInUserLanguages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSLATIONS_IN_USER_LANGUAGES: CollectionField<MultiLanguageTranslations, TranslationsInUserLanguage>;
    /**
     * All fields of the MultiLanguageTranslations entity.
     */
    const _allFields: Array<NumberField<MultiLanguageTranslations> | StringField<MultiLanguageTranslations> | CollectionField<MultiLanguageTranslations, TranslationsInUserLanguage>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<MultiLanguageTranslations>;
    /**
     * All key fields of the MultiLanguageTranslations entity.
     */
    const _keyFields: Array<Field<MultiLanguageTranslations>>;
    /**
     * Mapping of all key field names to the respective static field property MultiLanguageTranslations.
     */
    const _keys: {
        [keys: string]: Field<MultiLanguageTranslations>;
    };
}
//# sourceMappingURL=MultiLanguageTranslations.d.ts.map