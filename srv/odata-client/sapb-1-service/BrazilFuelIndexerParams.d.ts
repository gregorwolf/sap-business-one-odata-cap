import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BrazilFuelIndexerParams
 */
export interface BrazilFuelIndexerParams {
    /**
     * Fuel Id.
     * @nullable
     */
    fuelId?: number;
    /**
     * Fuel Group Code.
     * @nullable
     */
    fuelGroupCode?: number;
    /**
     * Fuel Code.
     * @nullable
     */
    fuelCode?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BrazilFuelIndexerParams.build]] instead.
 */
export declare function createBrazilFuelIndexerParams(json: any): BrazilFuelIndexerParams;
/**
 * BrazilFuelIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BrazilFuelIndexerParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BrazilFuelIndexerParams> {
    /**
     * Representation of the [[BrazilFuelIndexerParams.fuelId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fuelId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BrazilFuelIndexerParams.fuelGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fuelGroupCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BrazilFuelIndexerParams.fuelCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fuelCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BrazilFuelIndexerParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of BrazilFuelIndexerParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BrazilFuelIndexerParams {
    /**
     * Metadata information on all properties of the `BrazilFuelIndexerParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BrazilFuelIndexerParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BrazilFuelIndexerParams;
}
//# sourceMappingURL=BrazilFuelIndexerParams.d.ts.map