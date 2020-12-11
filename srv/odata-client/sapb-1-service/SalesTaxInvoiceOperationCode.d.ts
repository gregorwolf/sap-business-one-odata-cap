import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * SalesTaxInvoiceOperationCode
 */
export interface SalesTaxInvoiceOperationCode {
    /**
     * Op Code.
     * @nullable
     */
    opCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxInvoiceOperationCode.build]] instead.
 */
export declare function createSalesTaxInvoiceOperationCode(json: any): SalesTaxInvoiceOperationCode;
/**
 * SalesTaxInvoiceOperationCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SalesTaxInvoiceOperationCodeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, SalesTaxInvoiceOperationCode> {
    /**
     * Representation of the [[SalesTaxInvoiceOperationCode.opCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    opCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of SalesTaxInvoiceOperationCodeField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace SalesTaxInvoiceOperationCode {
    /**
     * Metadata information on all properties of the `SalesTaxInvoiceOperationCode` complex type.
     */
    const _propertyMetadata: PropertyMetadata<SalesTaxInvoiceOperationCode>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): SalesTaxInvoiceOperationCode;
}
//# sourceMappingURL=SalesTaxInvoiceOperationCode.d.ts.map