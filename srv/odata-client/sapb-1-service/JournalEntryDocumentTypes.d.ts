import { JournalEntryDocumentTypesRequestBuilder } from './JournalEntryDocumentTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "JournalEntryDocumentTypes" of service "SAPB1".
 */
export declare class JournalEntryDocumentTypes extends Entity implements JournalEntryDocumentTypesType {
    /**
     * Technical entity name for JournalEntryDocumentTypes.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JournalEntryDocumentTypes.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Journal Entry Type.
     * @nullable
     */
    journalEntryType?: string;
    /**
     * Doc Type Description.
     * @nullable
     */
    docTypeDescription?: string;
    /**
     * Short Name.
     * @nullable
     */
    shortName?: string;
    /**
     * One-to-many navigation property to the [[JournalEntries]] entity.
     */
    journalEntries: JournalEntries[];
    /**
     * Returns an entity builder to construct instances `JournalEntryDocumentTypes`.
     * @returns A builder that constructs instances of entity type `JournalEntryDocumentTypes`.
     */
    static builder(): EntityBuilderType<JournalEntryDocumentTypes, JournalEntryDocumentTypesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JournalEntryDocumentTypes` entity type.
     * @returns A `JournalEntryDocumentTypes` request builder.
     */
    static requestBuilder(): JournalEntryDocumentTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JournalEntryDocumentTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JournalEntryDocumentTypes`.
     */
    static customField(fieldName: string): CustomField<JournalEntryDocumentTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JournalEntries, JournalEntriesType } from './JournalEntries';
export interface JournalEntryDocumentTypesType {
    journalEntryType?: string;
    docTypeDescription?: string;
    shortName?: string;
    journalEntries: JournalEntriesType[];
}
export interface JournalEntryDocumentTypesTypeForceMandatory {
    journalEntryType: string;
    docTypeDescription: string;
    shortName: string;
    journalEntries: JournalEntriesType[];
}
export declare namespace JournalEntryDocumentTypes {
    /**
     * Static representation of the [[journalEntryType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY_TYPE: StringField<JournalEntryDocumentTypes>;
    /**
     * Static representation of the [[docTypeDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TYPE_DESCRIPTION: StringField<JournalEntryDocumentTypes>;
    /**
     * Static representation of the [[shortName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_NAME: StringField<JournalEntryDocumentTypes>;
    /**
     * Static representation of the one-to-many navigation property [[journalEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRIES: OneToManyLink<JournalEntryDocumentTypes, JournalEntries>;
    /**
     * All fields of the JournalEntryDocumentTypes entity.
     */
    const _allFields: Array<StringField<JournalEntryDocumentTypes> | OneToManyLink<JournalEntryDocumentTypes, JournalEntries>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JournalEntryDocumentTypes>;
    /**
     * All key fields of the JournalEntryDocumentTypes entity.
     */
    const _keyFields: Array<Field<JournalEntryDocumentTypes>>;
    /**
     * Mapping of all key field names to the respective static field property JournalEntryDocumentTypes.
     */
    const _keys: {
        [keys: string]: Field<JournalEntryDocumentTypes>;
    };
}
//# sourceMappingURL=JournalEntryDocumentTypes.d.ts.map