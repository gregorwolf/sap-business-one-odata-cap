import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TerminationReasonParams
 */
export interface TerminationReasonParams {
    /**
     * Reason Id.
     * @nullable
     */
    reasonId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TerminationReasonParams.build]] instead.
 */
export declare function createTerminationReasonParams(json: any): TerminationReasonParams;
/**
 * TerminationReasonParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TerminationReasonParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TerminationReasonParams> {
    /**
     * Representation of the [[TerminationReasonParams.reasonId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reasonId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TerminationReasonParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TerminationReasonParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of TerminationReasonParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TerminationReasonParams {
    /**
     * Metadata information on all properties of the `TerminationReasonParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TerminationReasonParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TerminationReasonParams;
}
//# sourceMappingURL=TerminationReasonParams.d.ts.map