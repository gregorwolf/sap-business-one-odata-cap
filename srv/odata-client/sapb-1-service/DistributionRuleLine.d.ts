import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DistributionRuleLine
 */
export interface DistributionRuleLine {
    /**
     * Center Code.
     * @nullable
     */
    centerCode?: string;
    /**
     * Total In Center.
     * @nullable
     */
    totalInCenter?: number;
    /**
     * Effective From.
     * @nullable
     */
    effectiveFrom?: Moment;
    /**
     * Effective To.
     * @nullable
     */
    effectiveTo?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[DistributionRuleLine.build]] instead.
 */
export declare function createDistributionRuleLine(json: any): DistributionRuleLine;
/**
 * DistributionRuleLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DistributionRuleLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DistributionRuleLine> {
    /**
     * Representation of the [[DistributionRuleLine.centerCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    centerCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DistributionRuleLine.totalInCenter]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalInCenter: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DistributionRuleLine.effectiveFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[DistributionRuleLine.effectiveTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Creates an instance of DistributionRuleLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DistributionRuleLine {
    /**
     * Metadata information on all properties of the `DistributionRuleLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DistributionRuleLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DistributionRuleLine;
}
//# sourceMappingURL=DistributionRuleLine.d.ts.map