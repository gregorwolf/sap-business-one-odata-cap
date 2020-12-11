import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class SalesTaxInvoiceLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesTaxInvoiceLine> {
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
    /**
     * Creates an instance of SalesTaxInvoiceLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesTaxInvoiceLine {
    /**
     * Metadata information on all properties of the `SalesTaxInvoiceLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesTaxInvoiceLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesTaxInvoiceLine;
}
//# sourceMappingURL=SalesTaxInvoiceLine.d.ts.map