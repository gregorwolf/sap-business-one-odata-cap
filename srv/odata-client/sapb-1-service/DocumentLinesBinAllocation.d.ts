import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DocumentLinesBinAllocation
 */
export interface DocumentLinesBinAllocation {
    /**
     * Bin Abs Entry.
     * @nullable
     */
    binAbsEntry?: number;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Allow Negative Quantity.
     * @nullable
     */
    allowNegativeQuantity?: BoYesNoEnum;
    /**
     * Serial And Batch Numbers Base Line.
     * @nullable
     */
    serialAndBatchNumbersBaseLine?: number;
    /**
     * Base Line Number.
     * @nullable
     */
    baseLineNumber?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentLinesBinAllocation.build]] instead.
 */
export declare function createDocumentLinesBinAllocation(json: any): DocumentLinesBinAllocation;
/**
 * DocumentLinesBinAllocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentLinesBinAllocationField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentLinesBinAllocation> {
    /**
     * Representation of the [[DocumentLinesBinAllocation.binAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    binAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLinesBinAllocation.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLinesBinAllocation.allowNegativeQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    allowNegativeQuantity: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLinesBinAllocation.serialAndBatchNumbersBaseLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serialAndBatchNumbersBaseLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentLinesBinAllocation.baseLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of DocumentLinesBinAllocationField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DocumentLinesBinAllocation {
    /**
     * Metadata information on all properties of the `DocumentLinesBinAllocation` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DocumentLinesBinAllocation>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentLinesBinAllocation;
}
//# sourceMappingURL=DocumentLinesBinAllocation.d.ts.map