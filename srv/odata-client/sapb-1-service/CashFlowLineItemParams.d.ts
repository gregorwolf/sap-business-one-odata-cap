import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CashFlowLineItemParams
 */
export interface CashFlowLineItemParams {
    /**
     * Line Item Id.
     * @nullable
     */
    lineItemId?: number;
    /**
     * Line Item Name.
     * @nullable
     */
    lineItemName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CashFlowLineItemParams.build]] instead.
 */
export declare function createCashFlowLineItemParams(json: any): CashFlowLineItemParams;
/**
 * CashFlowLineItemParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CashFlowLineItemParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CashFlowLineItemParams.lineItemId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineItemId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CashFlowLineItemParams.lineItemName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineItemName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CashFlowLineItemParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CashFlowLineItemParams;
}
//# sourceMappingURL=CashFlowLineItemParams.d.ts.map