import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * StockTransferTaxExtension
 */
export interface StockTransferTaxExtension {
    /**
     * Support Vat.
     * @nullable
     */
    supportVat?: BoYesNoEnum;
    /**
     * Form Number.
     * @nullable
     */
    formNumber?: string;
    /**
     * Transaction Category.
     * @nullable
     */
    transactionCategory?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[StockTransferTaxExtension.build]] instead.
 */
export declare function createStockTransferTaxExtension(json: any): StockTransferTaxExtension;
/**
 * StockTransferTaxExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class StockTransferTaxExtensionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, StockTransferTaxExtension> {
    /**
     * Representation of the [[StockTransferTaxExtension.supportVat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    supportVat: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferTaxExtension.formNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[StockTransferTaxExtension.transactionCategory]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transactionCategory: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of StockTransferTaxExtensionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace StockTransferTaxExtension {
    /**
     * Metadata information on all properties of the `StockTransferTaxExtension` complex type.
     */
    const _propertyMetadata: PropertyMetadata<StockTransferTaxExtension>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): StockTransferTaxExtension;
}
//# sourceMappingURL=StockTransferTaxExtension.d.ts.map