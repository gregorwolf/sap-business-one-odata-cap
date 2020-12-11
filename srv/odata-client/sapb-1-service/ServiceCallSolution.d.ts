import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ServiceCallSolutionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallSolution> {
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
    /**
     * Creates an instance of ServiceCallSolutionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceCallSolution {
    /**
     * Metadata information on all properties of the `ServiceCallSolution` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceCallSolution>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallSolution;
}
//# sourceMappingURL=ServiceCallSolution.d.ts.map