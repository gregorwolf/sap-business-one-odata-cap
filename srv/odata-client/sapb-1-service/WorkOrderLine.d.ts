import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * WorkOrderLine
 */
export interface WorkOrderLine {
    /**
     * Row Number.
     * @nullable
     */
    rowNumber?: number;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Description.
     * @nullable
     */
    itemDescription?: string;
    /**
     * Item Quantity.
     * @nullable
     */
    itemQuantity?: number;
    /**
     * Item Price.
     * @nullable
     */
    itemPrice?: number;
    /**
     * Price Currency.
     * @nullable
     */
    priceCurrency?: string;
    /**
     * Item Warehouse.
     * @nullable
     */
    itemWarehouse?: string;
    /**
     * Active Account Code.
     * @nullable
     */
    activeAccountCode?: string;
    /**
     * Work Sum.
     * @nullable
     */
    workSum?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[WorkOrderLine.build]] instead.
 */
export declare function createWorkOrderLine(json: any): WorkOrderLine;
/**
 * WorkOrderLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WorkOrderLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WorkOrderLine> {
    /**
     * Representation of the [[WorkOrderLine.rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkOrderLine.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkOrderLine.itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkOrderLine.itemQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkOrderLine.itemPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WorkOrderLine.priceCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priceCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkOrderLine.itemWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemWarehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkOrderLine.activeAccountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activeAccountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WorkOrderLine.workSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    workSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of WorkOrderLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace WorkOrderLine {
    /**
     * Metadata information on all properties of the `WorkOrderLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<WorkOrderLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): WorkOrderLine;
}
//# sourceMappingURL=WorkOrderLine.d.ts.map