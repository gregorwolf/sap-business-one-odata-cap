import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class CashFlowLineItemParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CashFlowLineItemParams> {
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
    /**
     * Creates an instance of CashFlowLineItemParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CashFlowLineItemParams {
    /**
     * Metadata information on all properties of the `CashFlowLineItemParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CashFlowLineItemParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CashFlowLineItemParams;
}
//# sourceMappingURL=CashFlowLineItemParams.d.ts.map