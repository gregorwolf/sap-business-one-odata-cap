import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WarehouseLocationParams
 */
export interface WarehouseLocationParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[WarehouseLocationParams.build]] instead.
 */
export declare function createWarehouseLocationParams(json: any): WarehouseLocationParams;
/**
 * WarehouseLocationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WarehouseLocationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WarehouseLocationParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace WarehouseLocationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): WarehouseLocationParams;
}
//# sourceMappingURL=WarehouseLocationParams.d.ts.map