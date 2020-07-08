import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PickListParams
 */
export interface PickListParams {
    /**
     * Absoluteentry.
     * @nullable
     */
    absoluteentry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PickListParams.build]] instead.
 */
export declare function createPickListParams(json: any): PickListParams;
/**
 * PickListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PickListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PickListParams.absoluteentry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteentry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PickListParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PickListParams;
}
//# sourceMappingURL=PickListParams.d.ts.map