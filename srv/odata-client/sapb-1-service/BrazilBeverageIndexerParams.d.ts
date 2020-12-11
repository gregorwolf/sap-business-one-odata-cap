import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BrazilBeverageIndexerParams
 */
export interface BrazilBeverageIndexerParams {
    /**
     * Beverage Id.
     * @nullable
     */
    beverageId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BrazilBeverageIndexerParams.build]] instead.
 */
export declare function createBrazilBeverageIndexerParams(json: any): BrazilBeverageIndexerParams;
/**
 * BrazilBeverageIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BrazilBeverageIndexerParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BrazilBeverageIndexerParams> {
    /**
     * Representation of the [[BrazilBeverageIndexerParams.beverageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    beverageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BrazilBeverageIndexerParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BrazilBeverageIndexerParams {
    /**
     * Metadata information on all properties of the `BrazilBeverageIndexerParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BrazilBeverageIndexerParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BrazilBeverageIndexerParams;
}
//# sourceMappingURL=BrazilBeverageIndexerParams.d.ts.map