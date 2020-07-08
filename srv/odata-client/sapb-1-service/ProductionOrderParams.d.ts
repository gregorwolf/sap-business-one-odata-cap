import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ProductionOrderParams
 */
export interface ProductionOrderParams {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ProductionOrderParams.build]] instead.
 */
export declare function createProductionOrderParams(json: any): ProductionOrderParams;
/**
 * ProductionOrderParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProductionOrderParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ProductionOrderParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ProductionOrderParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ProductionOrderParams;
}
//# sourceMappingURL=ProductionOrderParams.d.ts.map