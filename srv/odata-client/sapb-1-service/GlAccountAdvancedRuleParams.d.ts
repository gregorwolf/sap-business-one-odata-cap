import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * GlAccountAdvancedRuleParams
 */
export interface GlAccountAdvancedRuleParams {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
    /**
     * Period.
     * @nullable
     */
    period?: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Group.
     * @nullable
     */
    itemGroup?: number;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Bp Group.
     * @nullable
     */
    bpGroup?: number;
    /**
     * Federal Tax Id.
     * @nullable
     */
    federalTaxId?: string;
    /**
     * Ship To Country.
     * @nullable
     */
    shipToCountry?: string;
    /**
     * Ship To State.
     * @nullable
     */
    shipToState?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[GlAccountAdvancedRuleParams.build]] instead.
 */
export declare function createGlAccountAdvancedRuleParams(json: any): GlAccountAdvancedRuleParams;
/**
 * GlAccountAdvancedRuleParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GlAccountAdvancedRuleParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, GlAccountAdvancedRuleParams> {
    /**
     * Representation of the [[GlAccountAdvancedRuleParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccountAdvancedRuleParams.period]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    period: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccountAdvancedRuleParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccountAdvancedRuleParams.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccountAdvancedRuleParams.itemGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemGroup: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccountAdvancedRuleParams.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccountAdvancedRuleParams.bpGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpGroup: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccountAdvancedRuleParams.federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    federalTaxId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccountAdvancedRuleParams.shipToCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GlAccountAdvancedRuleParams.shipToState]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToState: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of GlAccountAdvancedRuleParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace GlAccountAdvancedRuleParams {
    /**
     * Metadata information on all properties of the `GlAccountAdvancedRuleParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<GlAccountAdvancedRuleParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): GlAccountAdvancedRuleParams;
}
//# sourceMappingURL=GlAccountAdvancedRuleParams.d.ts.map