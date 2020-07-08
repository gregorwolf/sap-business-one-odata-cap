import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * SalesTaxInvoiceLine
 */
export interface SalesTaxInvoiceLine {
    /**
     * Ref Entry 1.
     * @nullable
     */
    refEntry1?: number;
    /**
     * Ref Entry 2.
     * @nullable
     */
    refEntry2?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxInvoiceLine.build]] instead.
 */
export declare function createSalesTaxInvoiceLine(json: any): SalesTaxInvoiceLine;
/**
 * SalesTaxInvoiceLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesTaxInvoiceLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SalesTaxInvoiceLine.refEntry1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    refEntry1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[SalesTaxInvoiceLine.refEntry2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    refEntry2: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace SalesTaxInvoiceLine {
    function build(json: {
        [keys: string]: FieldType;
    }): SalesTaxInvoiceLine;
}
//# sourceMappingURL=SalesTaxInvoiceLine.d.ts.map