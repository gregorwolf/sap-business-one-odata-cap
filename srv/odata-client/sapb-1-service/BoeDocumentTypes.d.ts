import { BoeDocumentTypesRequestBuilder } from './BoeDocumentTypesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BOEDocumentTypes" of service "SAPB1".
 */
export declare class BoeDocumentTypes extends EntityV4 implements BoeDocumentTypesType {
    /**
     * Technical entity name for BoeDocumentTypes.
     */
    static _entityName: string;
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
     * Doc Type.
     * @nullable
     */
    docType?: string;
    /**
     * Doc Description.
     * @nullable
     */
    docDescription?: string;
    /**
     * Returns an entity builder to construct instances of `BoeDocumentTypes`.
     * @returns A builder that constructs instances of entity type `BoeDocumentTypes`.
     */
    static builder(): EntityBuilderType<BoeDocumentTypes, BoeDocumentTypesType>;
    /**
     * Returns a request builder to construct requests for operations on the `BoeDocumentTypes` entity type.
     * @returns A `BoeDocumentTypes` request builder.
     */
    static requestBuilder(): BoeDocumentTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BoeDocumentTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BoeDocumentTypes`.
     */
    static customField(fieldName: string): CustomFieldV4<BoeDocumentTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BoeDocumentTypesType {
    docEntry?: number | null;
    docType?: string | null;
    docDescription?: string | null;
}
export declare namespace BoeDocumentTypes {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<BoeDocumentTypes>;
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TYPE: StringField<BoeDocumentTypes>;
    /**
     * Static representation of the [[docDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DESCRIPTION: StringField<BoeDocumentTypes>;
    /**
     * All fields of the BoeDocumentTypes entity.
     */
    const _allFields: Array<NumberField<BoeDocumentTypes> | StringField<BoeDocumentTypes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BoeDocumentTypes>;
    /**
     * All key fields of the BoeDocumentTypes entity.
     */
    const _keyFields: Array<Field<BoeDocumentTypes>>;
    /**
     * Mapping of all key field names to the respective static field property BoeDocumentTypes.
     */
    const _keys: {
        [keys: string]: Field<BoeDocumentTypes>;
    };
}
//# sourceMappingURL=BoeDocumentTypes.d.ts.map