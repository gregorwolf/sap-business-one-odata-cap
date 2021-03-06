import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * KnowledgeBaseSolutionParams
 */
export interface KnowledgeBaseSolutionParams {
    /**
     * Solution Code.
     * @nullable
     */
    solutionCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[KnowledgeBaseSolutionParams.build]] instead.
 */
export declare function createKnowledgeBaseSolutionParams(json: any): KnowledgeBaseSolutionParams;
/**
 * KnowledgeBaseSolutionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class KnowledgeBaseSolutionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, KnowledgeBaseSolutionParams> {
    /**
     * Representation of the [[KnowledgeBaseSolutionParams.solutionCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    solutionCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of KnowledgeBaseSolutionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace KnowledgeBaseSolutionParams {
    /**
     * Metadata information on all properties of the `KnowledgeBaseSolutionParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<KnowledgeBaseSolutionParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): KnowledgeBaseSolutionParams;
}
//# sourceMappingURL=KnowledgeBaseSolutionParams.d.ts.map