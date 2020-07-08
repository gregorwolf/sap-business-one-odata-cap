import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceCallSolution
 */
export interface ServiceCallSolution {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Solution Id.
     * @nullable
     */
    solutionId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallSolution.build]] instead.
 */
export declare function createServiceCallSolution(json: any): ServiceCallSolution;
/**
 * ServiceCallSolutionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallSolutionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceCallSolution.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallSolution.solutionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    solutionId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ServiceCallSolution {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallSolution;
}
//# sourceMappingURL=ServiceCallSolution.d.ts.map