import { PredefinedTextsRequestBuilder } from './PredefinedTextsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "PredefinedTexts" of service "SAPB1".
 */
export declare class PredefinedTexts extends Entity implements PredefinedTextsType {
    /**
     * Technical entity name for PredefinedTexts.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PredefinedTexts.
     */
    static _serviceName: string;
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
     * Text Code.
     * @nullable
     */
    textCode?: string;
    /**
     * Text.
     * @nullable
     */
    text?: string;
    /**
     * Returns an entity builder to construct instances `PredefinedTexts`.
     * @returns A builder that constructs instances of entity type `PredefinedTexts`.
     */
    static builder(): EntityBuilderType<PredefinedTexts, PredefinedTextsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PredefinedTexts` entity type.
     * @returns A `PredefinedTexts` request builder.
     */
    static requestBuilder(): PredefinedTextsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PredefinedTexts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PredefinedTexts`.
     */
    static customField(fieldName: string): CustomField<PredefinedTexts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface PredefinedTextsType {
    numerator?: number;
    textCode?: string;
    text?: string;
}
export interface PredefinedTextsTypeForceMandatory {
    numerator: number;
    textCode: string;
    text: string;
}
export declare namespace PredefinedTexts {
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMERATOR: NumberField<PredefinedTexts>;
    /**
     * Static representation of the [[textCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT_CODE: StringField<PredefinedTexts>;
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT: StringField<PredefinedTexts>;
    /**
     * All fields of the PredefinedTexts entity.
     */
    const _allFields: Array<NumberField<PredefinedTexts> | StringField<PredefinedTexts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PredefinedTexts>;
    /**
     * All key fields of the PredefinedTexts entity.
     */
    const _keyFields: Array<Field<PredefinedTexts>>;
    /**
     * Mapping of all key field names to the respective static field property PredefinedTexts.
     */
    const _keys: {
        [keys: string]: Field<PredefinedTexts>;
    };
}
//# sourceMappingURL=PredefinedTexts.d.ts.map