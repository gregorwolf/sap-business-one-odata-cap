import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * WorkOrderParams
 */
export interface WorkOrderParams {
    /**
     * Order Num.
     * @nullable
     */
    orderNum?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[WorkOrderParams.build]] instead.
 */
export declare function createWorkOrderParams(json: any): WorkOrderParams;
/**
 * WorkOrderParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WorkOrderParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WorkOrderParams.orderNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    orderNum: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace WorkOrderParams {
    function build(json: {
        [keys: string]: FieldType;
    }): WorkOrderParams;
}
//# sourceMappingURL=WorkOrderParams.d.ts.map