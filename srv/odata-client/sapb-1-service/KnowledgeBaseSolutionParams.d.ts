import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class KnowledgeBaseSolutionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[KnowledgeBaseSolutionParams.solutionCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    solutionCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace KnowledgeBaseSolutionParams {
    function build(json: {
        [keys: string]: FieldType;
    }): KnowledgeBaseSolutionParams;
}
//# sourceMappingURL=KnowledgeBaseSolutionParams.d.ts.map