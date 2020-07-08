import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class BoePortfolioParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace BoePortfolioParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BoePortfolioParams;
}
//# sourceMappingURL=BoePortfolioParams.d.ts.map