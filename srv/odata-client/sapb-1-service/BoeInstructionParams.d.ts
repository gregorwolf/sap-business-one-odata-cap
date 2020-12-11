import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class BoeInstructionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BoeInstructionParams> {
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
    /**
     * Creates an instance of BoeInstructionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BoeInstructionParams {
    /**
     * Metadata information on all properties of the `BoeInstructionParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BoeInstructionParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BoeInstructionParams;
}
//# sourceMappingURL=BoeInstructionParams.d.ts.map