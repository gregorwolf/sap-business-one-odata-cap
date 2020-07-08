import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BoeInstructionParams
 */
export interface BoeInstructionParams {
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
}
/**
 * @deprecated Since v1.6.0. Use [[BoeInstructionParams.build]] instead.
 */
export declare function createBoeInstructionParams(json: any): BoeInstructionParams;
/**
 * BoeInstructionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BoeInstructionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BoeInstructionParams.instructionEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    instructionEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BoeInstructionParams.instructionCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    instructionCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BoeInstructionParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BoeInstructionParams;
}
//# sourceMappingURL=BoeInstructionParams.d.ts.map