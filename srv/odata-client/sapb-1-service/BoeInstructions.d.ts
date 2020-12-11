import { BoeInstructionsRequestBuilder } from './BoeInstructionsRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BOEInstructions" of service "SAPB1".
 */
export declare class BoeInstructions extends EntityV4 implements BoeInstructionsType {
    /**
     * Technical entity name for BoeInstructions.
     */
    static _entityName: string;
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
     * Is Cancel Instruction.
     * @nullable
     */
    isCancelInstruction?: BoYesNoEnum;
    /**
     * Returns an entity builder to construct instances of `BoeInstructions`.
     * @returns A builder that constructs instances of entity type `BoeInstructions`.
     */
    static builder(): EntityBuilderType<BoeInstructions, BoeInstructionsType>;
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
    static customField(fieldName: string): CustomFieldV4<BoeInstructions>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BoeInstructionsType {
    instructionEntry?: number | null;
    instructionCode?: string | null;
    instructionDesc?: string | null;
    isCancelInstruction?: BoYesNoEnum | null;
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
     * Static representation of the [[isCancelInstruction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_CANCEL_INSTRUCTION: EnumField<BoeInstructions>;
    /**
     * All fields of the BoeInstructions entity.
     */
    const _allFields: Array<NumberField<BoeInstructions> | StringField<BoeInstructions> | EnumField<BoeInstructions>>;
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