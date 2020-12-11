import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PurchaseTaxInvoiceLine
 */
export interface PurchaseTaxInvoiceLine {
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
 * @deprecated Since v1.6.0. Use [[PurchaseTaxInvoiceLine.build]] instead.
 */
export declare function createPurchaseTaxInvoiceLine(json: any): PurchaseTaxInvoiceLine;
/**
 * PurchaseTaxInvoiceLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PurchaseTaxInvoiceLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PurchaseTaxInvoiceLine> {
    /**
     * Representation of the [[PurchaseTaxInvoiceLine.refEntry1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    refEntry1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PurchaseTaxInvoiceLine.refEntry2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    refEntry2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PurchaseTaxInvoiceLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PurchaseTaxInvoiceLine {
    /**
     * Metadata information on all properties of the `PurchaseTaxInvoiceLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PurchaseTaxInvoiceLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PurchaseTaxInvoiceLine;
}
//# sourceMappingURL=PurchaseTaxInvoiceLine.d.ts.map