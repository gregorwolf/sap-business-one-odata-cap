import { CreditOrDebitEnum } from './CreditOrDebitEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InternalReconciliationRow
 */
export interface InternalReconciliationRow {
    /**
     * Line Seq.
     * @nullable
     */
    lineSeq?: number;
    /**
     * Short Name.
     * @nullable
     */
    shortName?: string;
    /**
     * Trans Id.
     * @nullable
     */
    transId?: number;
    /**
     * Trans Row Id.
     * @nullable
     */
    transRowId?: number;
    /**
     * Src Obj Typ.
     * @nullable
     */
    srcObjTyp?: string;
    /**
     * Src Obj Abs.
     * @nullable
     */
    srcObjAbs?: number;
    /**
     * Credit Or Debit.
     * @nullable
     */
    creditOrDebit?: CreditOrDebitEnum;
    /**
     * Reconcile Amount.
     * @nullable
     */
    reconcileAmount?: number;
    /**
     * Cash Discount.
     * @nullable
     */
    cashDiscount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationRow.build]] instead.
 */
export declare function createInternalReconciliationRow(json: any): InternalReconciliationRow;
/**
 * InternalReconciliationRowField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InternalReconciliationRowField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InternalReconciliationRow> {
    /**
     * Representation of the [[InternalReconciliationRow.lineSeq]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineSeq: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationRow.shortName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shortName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationRow.transId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationRow.transRowId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transRowId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationRow.srcObjTyp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    srcObjTyp: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationRow.srcObjAbs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    srcObjAbs: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationRow.creditOrDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditOrDebit: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationRow.reconcileAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconcileAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationRow.cashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cashDiscount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of InternalReconciliationRowField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InternalReconciliationRow {
    /**
     * Metadata information on all properties of the `InternalReconciliationRow` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InternalReconciliationRow>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InternalReconciliationRow;
}
//# sourceMappingURL=InternalReconciliationRow.d.ts.map