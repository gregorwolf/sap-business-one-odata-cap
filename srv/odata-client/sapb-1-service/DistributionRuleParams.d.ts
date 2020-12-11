import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DistributionRuleParams
 */
export interface DistributionRuleParams {
    /**
     * Factor Code.
     * @nullable
     */
    factorCode?: string;
    /**
     * Factor Description.
     * @nullable
     */
    factorDescription?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DistributionRuleParams.build]] instead.
 */
export declare function createDistributionRuleParams(json: any): DistributionRuleParams;
/**
 * DistributionRuleParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DistributionRuleParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DistributionRuleParams> {
    /**
     * Representation of the [[DistributionRuleParams.factorCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factorCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DistributionRuleParams.factorDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factorDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of DistributionRuleParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DistributionRuleParams {
    /**
     * Metadata information on all properties of the `DistributionRuleParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DistributionRuleParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DistributionRuleParams;
}
//# sourceMappingURL=DistributionRuleParams.d.ts.map