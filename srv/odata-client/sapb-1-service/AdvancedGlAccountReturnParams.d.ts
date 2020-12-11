import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * AdvancedGlAccountReturnParams
 */
export interface AdvancedGlAccountReturnParams {
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AdvancedGlAccountReturnParams.build]] instead.
 */
export declare function createAdvancedGlAccountReturnParams(json: any): AdvancedGlAccountReturnParams;
/**
 * AdvancedGlAccountReturnParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AdvancedGlAccountReturnParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AdvancedGlAccountReturnParams> {
    /**
     * Representation of the [[AdvancedGlAccountReturnParams.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of AdvancedGlAccountReturnParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace AdvancedGlAccountReturnParams {
    /**
     * Metadata information on all properties of the `AdvancedGlAccountReturnParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<AdvancedGlAccountReturnParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): AdvancedGlAccountReturnParams;
}
//# sourceMappingURL=AdvancedGlAccountReturnParams.d.ts.map