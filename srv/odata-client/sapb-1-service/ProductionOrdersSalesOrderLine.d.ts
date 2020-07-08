import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class ProductionOrdersSalesOrderLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace ProductionOrdersSalesOrderLine {
    function build(json: {
        [keys: string]: FieldType;
    }): ProductionOrdersSalesOrderLine;
}
//# sourceMappingURL=ProductionOrdersSalesOrderLine.d.ts.map