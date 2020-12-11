import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ItemDistributionRule
 */
export interface ItemDistributionRule {
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Valid From.
     * @nullable
     */
    validFrom?: Moment;
    /**
     * Valid To.
     * @nullable
     */
    validTo?: Moment;
    /**
     * Distribution Rule.
     * @nullable
     */
    distributionRule?: string;
    /**
     * Distribution Rule 2.
     * @nullable
     */
    distributionRule2?: string;
    /**
     * Distribution Rule 3.
     * @nullable
     */
    distributionRule3?: string;
    /**
     * Distribution Rule 4.
     * @nullable
     */
    distributionRule4?: string;
    /**
     * Distribution Rule 5.
     * @nullable
     */
    distributionRule5?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemDistributionRule.build]] instead.
 */
export declare function createItemDistributionRule(json: any): ItemDistributionRule;
/**
 * ItemDistributionRuleField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemDistributionRuleField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemDistributionRule> {
    /**
     * Representation of the [[ItemDistributionRule.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    validFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.validTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    validTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemDistributionRule.distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ItemDistributionRuleField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ItemDistributionRule {
    /**
     * Metadata information on all properties of the `ItemDistributionRule` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ItemDistributionRule>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ItemDistributionRule;
}
//# sourceMappingURL=ItemDistributionRule.d.ts.map