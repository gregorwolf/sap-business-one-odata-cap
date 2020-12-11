import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * FaAccountDeterminationParams
 */
export interface FaAccountDeterminationParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[FaAccountDeterminationParams.build]] instead.
 */
export declare function createFaAccountDeterminationParams(json: any): FaAccountDeterminationParams;
/**
 * FaAccountDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class FaAccountDeterminationParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FaAccountDeterminationParams> {
    /**
     * Representation of the [[FaAccountDeterminationParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[FaAccountDeterminationParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of FaAccountDeterminationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace FaAccountDeterminationParams {
    /**
     * Metadata information on all properties of the `FaAccountDeterminationParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<FaAccountDeterminationParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): FaAccountDeterminationParams;
}
//# sourceMappingURL=FaAccountDeterminationParams.d.ts.map