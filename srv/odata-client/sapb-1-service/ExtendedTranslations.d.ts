import { ExtendedTranslationsRequestBuilder } from './ExtendedTranslationsRequestBuilder';
import { Moment } from 'moment';
import { ExtendedTranslationItemLine } from './ExtendedTranslationItemLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "ExtendedTranslations" of service "SAPB1".
 */
export declare class ExtendedTranslations extends Entity implements ExtendedTranslationsType {
    /**
     * Technical entity name for ExtendedTranslations.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExtendedTranslations.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Id.
     * @nullable
     */
    id?: string;
    /**
     * Secondary Id.
     * @nullable
     */
    secondaryId?: string;
    /**
     * Source Language.
     * @nullable
     */
    sourceLanguage?: number;
    /**
     * Update Date.
     * @nullable
     */
    updateDate?: Moment;
    /**
     * Create Date.
     * @nullable
     */
    createDate?: Moment;
    /**
     * Extended Translation Item Lines.
     * @nullable
     */
    extendedTranslationItemLines?: ExtendedTranslationItemLine[];
    /**
     * Returns an entity builder to construct instances `ExtendedTranslations`.
     * @returns A builder that constructs instances of entity type `ExtendedTranslations`.
     */
    static builder(): EntityBuilderType<ExtendedTranslations, ExtendedTranslationsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExtendedTranslations` entity type.
     * @returns A `ExtendedTranslations` request builder.
     */
    static requestBuilder(): ExtendedTranslationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtendedTranslations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExtendedTranslations`.
     */
    static customField(fieldName: string): CustomField<ExtendedTranslations>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ExtendedTranslationsType {
    docEntry?: number;
    id?: string;
    secondaryId?: string;
    sourceLanguage?: number;
    updateDate?: Moment;
    createDate?: Moment;
    extendedTranslationItemLines?: ExtendedTranslationItemLine[];
}
export interface ExtendedTranslationsTypeForceMandatory {
    docEntry: number;
    id: string;
    secondaryId: string;
    sourceLanguage: number;
    updateDate: Moment;
    createDate: Moment;
    extendedTranslationItemLines: ExtendedTranslationItemLine[];
}
export declare namespace ExtendedTranslations {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<ExtendedTranslations>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<ExtendedTranslations>;
    /**
     * Static representation of the [[secondaryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECONDARY_ID: StringField<ExtendedTranslations>;
    /**
     * Static representation of the [[sourceLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_LANGUAGE: NumberField<ExtendedTranslations>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<ExtendedTranslations>;
    /**
     * Static representation of the [[createDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATE_DATE: DateField<ExtendedTranslations>;
    /**
     * Static representation of the [[extendedTranslationItemLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTENDED_TRANSLATION_ITEM_LINES: CollectionField<ExtendedTranslations>;
    /**
     * All fields of the ExtendedTranslations entity.
     */
    const _allFields: Array<NumberField<ExtendedTranslations> | StringField<ExtendedTranslations> | DateField<ExtendedTranslations> | CollectionField<ExtendedTranslations>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExtendedTranslations>;
    /**
     * All key fields of the ExtendedTranslations entity.
     */
    const _keyFields: Array<Field<ExtendedTranslations>>;
    /**
     * Mapping of all key field names to the respective static field property ExtendedTranslations.
     */
    const _keys: {
        [keys: string]: Field<ExtendedTranslations>;
    };
}
//# sourceMappingURL=ExtendedTranslations.d.ts.map