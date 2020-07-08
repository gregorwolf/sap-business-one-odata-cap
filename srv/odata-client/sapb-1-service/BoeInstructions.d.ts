import { BoeInstructionsRequestBuilder } from './BoeInstructionsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "BOEInstructions" of service "SAPB1".
 */
export declare class BoeInstructions extends Entity implements BoeInstructionsType {
    /**
     * Technical entity name for BoeInstructions.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BoeInstructions.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Instruction Entry.
     * @nullable
     */
    instructionEntry?: number;
    /**
     * Instruction Code.
     * @nullable
     */
    instructionCode?: string;
    /**
     * Instruction Desc.
     * @nullable
     */
    instructionDesc?: string;
    /**
     * Returns an entity builder to construct instances `BoeInstructions`.
     * @returns A builder that constructs instances of entity type `BoeInstructions`.
     */
    static builder(): EntityBuilderType<BoeInstructions, BoeInstructionsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BoeInstructions` entity type.
     * @returns A `BoeInstructions` request builder.
     */
    static requestBuilder(): BoeInstructionsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BoeInstructions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BoeInstructions`.
     */
    static customField(fieldName: string): CustomField<BoeInstructions>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BoeInstructionsType {
    instructionEntry?: number;
    instructionCode?: string;
    instructionDesc?: string;
}
export interface BoeInstructionsTypeForceMandatory {
    instructionEntry: number;
    instructionCode: string;
    instructionDesc: string;
}
export declare namespace BoeInstructions {
    /**
     * Static representation of the [[instructionEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTRUCTION_ENTRY: NumberField<BoeInstructions>;
    /**
     * Static representation of the [[instructionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTRUCTION_CODE: StringField<BoeInstructions>;
    /**
     * Static representation of the [[instructionDesc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTRUCTION_DESC: StringField<BoeInstructions>;
    /**
     * All fields of the BoeInstructions entity.
     */
    const _allFields: Array<NumberField<BoeInstructions> | StringField<BoeInstructions>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BoeInstructions>;
    /**
     * All key fields of the BoeInstructions entity.
     */
    const _keyFields: Array<Field<BoeInstructions>>;
    /**
     * Mapping of all key field names to the respective static field property BoeInstructions.
     */
    const _keys: {
        [keys: string]: Field<BoeInstructions>;
    };
}
//# sourceMappingURL=BoeInstructions.d.ts.map