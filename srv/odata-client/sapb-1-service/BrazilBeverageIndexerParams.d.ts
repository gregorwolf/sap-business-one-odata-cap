import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class BrazilBeverageIndexerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BrazilBeverageIndexerParams.beverageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    beverageId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BrazilBeverageIndexerParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BrazilBeverageIndexerParams;
}
//# sourceMappingURL=BrazilBeverageIndexerParams.d.ts.map