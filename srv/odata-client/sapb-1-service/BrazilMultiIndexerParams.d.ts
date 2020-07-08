import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BrazilMultiIndexerParams
 */
export interface BrazilMultiIndexerParams {
    /**
     * Id.
     * @nullable
     */
    id?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BrazilMultiIndexerParams.build]] instead.
 */
export declare function createBrazilMultiIndexerParams(json: any): BrazilMultiIndexerParams;
/**
 * BrazilMultiIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BrazilMultiIndexerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BrazilMultiIndexerParams.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BrazilMultiIndexerParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BrazilMultiIndexerParams;
}
//# sourceMappingURL=BrazilMultiIndexerParams.d.ts.map