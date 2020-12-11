import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BoePortfolioParams
 */
export interface BoePortfolioParams {
    /**
     * Portfolio Entry.
     * @nullable
     */
    portfolioEntry?: number;
    /**
     * Portfolio Id.
     * @nullable
     */
    portfolioId?: string;
    /**
     * Portfolio Code.
     * @nullable
     */
    portfolioCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BoePortfolioParams.build]] instead.
 */
export declare function createBoePortfolioParams(json: any): BoePortfolioParams;
/**
 * BoePortfolioParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BoePortfolioParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BoePortfolioParams> {
    /**
     * Representation of the [[BoePortfolioParams.portfolioEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portfolioEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BoePortfolioParams.portfolioId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portfolioId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BoePortfolioParams.portfolioCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portfolioCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of BoePortfolioParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BoePortfolioParams {
    /**
     * Metadata information on all properties of the `BoePortfolioParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BoePortfolioParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BoePortfolioParams;
}
//# sourceMappingURL=BoePortfolioParams.d.ts.map