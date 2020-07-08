import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BrazilStringIndexerParams
 */
export interface BrazilStringIndexerParams {
    /**
     * Id.
     * @nullable
     */
    id?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BrazilStringIndexerParams.build]] instead.
 */
export declare function createBrazilStringIndexerParams(json: any): BrazilStringIndexerParams;
/**
 * BrazilStringIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BrazilStringIndexerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BrazilStringIndexerParams.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BrazilStringIndexerParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BrazilStringIndexerParams;
}
//# sourceMappingURL=BrazilStringIndexerParams.d.ts.map