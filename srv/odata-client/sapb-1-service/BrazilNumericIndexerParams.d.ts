import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BrazilNumericIndexerParams
 */
export interface BrazilNumericIndexerParams {
    /**
     * Id.
     * @nullable
     */
    id?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BrazilNumericIndexerParams.build]] instead.
 */
export declare function createBrazilNumericIndexerParams(json: any): BrazilNumericIndexerParams;
/**
 * BrazilNumericIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BrazilNumericIndexerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BrazilNumericIndexerParams.id]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BrazilNumericIndexerParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BrazilNumericIndexerParams;
}
//# sourceMappingURL=BrazilNumericIndexerParams.d.ts.map