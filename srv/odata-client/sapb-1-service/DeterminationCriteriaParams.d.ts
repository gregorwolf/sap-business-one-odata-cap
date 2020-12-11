import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DeterminationCriteriaParams
 */
export interface DeterminationCriteriaParams {
    /**
     * Dmc Id.
     * @nullable
     */
    dmcId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DeterminationCriteriaParams.build]] instead.
 */
export declare function createDeterminationCriteriaParams(json: any): DeterminationCriteriaParams;
/**
 * DeterminationCriteriaParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DeterminationCriteriaParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DeterminationCriteriaParams> {
    /**
     * Representation of the [[DeterminationCriteriaParams.dmcId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dmcId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DeterminationCriteriaParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DeterminationCriteriaParams {
    /**
     * Metadata information on all properties of the `DeterminationCriteriaParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DeterminationCriteriaParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DeterminationCriteriaParams;
}
//# sourceMappingURL=DeterminationCriteriaParams.d.ts.map