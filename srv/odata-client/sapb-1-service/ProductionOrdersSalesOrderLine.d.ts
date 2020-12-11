import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ProductionOrdersSalesOrderLine
 */
export interface ProductionOrdersSalesOrderLine {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Base Number.
     * @nullable
     */
    baseNumber?: number;
    /**
     * Base Abs Entry.
     * @nullable
     */
    baseAbsEntry?: number;
    /**
     * Base Line.
     * @nullable
     */
    baseLine?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ProductionOrdersSalesOrderLine.build]] instead.
 */
export declare function createProductionOrdersSalesOrderLine(json: any): ProductionOrdersSalesOrderLine;
/**
 * ProductionOrdersSalesOrderLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ProductionOrdersSalesOrderLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ProductionOrdersSalesOrderLine> {
    /**
     * Representation of the [[ProductionOrdersSalesOrderLine.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersSalesOrderLine.baseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersSalesOrderLine.baseAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ProductionOrdersSalesOrderLine.baseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ProductionOrdersSalesOrderLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ProductionOrdersSalesOrderLine {
    /**
     * Metadata information on all properties of the `ProductionOrdersSalesOrderLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ProductionOrdersSalesOrderLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ProductionOrdersSalesOrderLine;
}
//# sourceMappingURL=ProductionOrdersSalesOrderLine.d.ts.map