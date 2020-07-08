import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ProductTreeParams
 */
export interface ProductTreeParams {
    /**
     * Tree Code.
     * @nullable
     */
    treeCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ProductTreeParams.build]] instead.
 */
export declare function createProductTreeParams(json: any): ProductTreeParams;
/**
 * ProductTreeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProductTreeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ProductTreeParams.treeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    treeCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ProductTreeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ProductTreeParams;
}
//# sourceMappingURL=ProductTreeParams.d.ts.map