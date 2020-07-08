import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BoeLineParams
 */
export interface BoeLineParams {
    /**
     * Boe Key.
     * @nullable
     */
    boeKey?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BoeLineParams.build]] instead.
 */
export declare function createBoeLineParams(json: any): BoeLineParams;
/**
 * BoeLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BoeLineParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BoeLineParams.boeKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    boeKey: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BoeLineParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BoeLineParams;
}
//# sourceMappingURL=BoeLineParams.d.ts.map