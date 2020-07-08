import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WarehouseSublevelCodeParams
 */
export interface WarehouseSublevelCodeParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Warehouse Sublevel.
     * @nullable
     */
    warehouseSublevel?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[WarehouseSublevelCodeParams.build]] instead.
 */
export declare function createWarehouseSublevelCodeParams(json: any): WarehouseSublevelCodeParams;
/**
 * WarehouseSublevelCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WarehouseSublevelCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WarehouseSublevelCodeParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WarehouseSublevelCodeParams.warehouseSublevel]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseSublevel: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WarehouseSublevelCodeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace WarehouseSublevelCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): WarehouseSublevelCodeParams;
}
//# sourceMappingURL=WarehouseSublevelCodeParams.d.ts.map