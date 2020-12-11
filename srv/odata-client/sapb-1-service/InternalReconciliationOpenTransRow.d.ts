import { BoYesNoEnum } from './BoYesNoEnum';
import { CreditOrDebitEnum } from './CreditOrDebitEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InternalReconciliationOpenTransRow
 */
export interface InternalReconciliationOpenTransRow {
    /**
     * Selected.
     * @nullable
     */
    selected?: BoYesNoEnum;
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
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTransRow.build]] instead.
 */
export declare function createInternalReconciliationOpenTransRow(json: any): InternalReconciliationOpenTransRow;
/**
 * InternalReconciliationOpenTransRowField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InternalReconciliationOpenTransRowField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InternalReconciliationOpenTransRow> {
    /**
     * Representation of the [[InternalReconciliationOpenTransRow.selected]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    selected: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransRow.shortName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shortName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransRow.transId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransRow.transRowId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transRowId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransRow.srcObjTyp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    srcObjTyp: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransRow.srcObjAbs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    srcObjAbs: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransRow.creditOrDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditOrDebit: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransRow.reconcileAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconcileAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransRow.cashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cashDiscount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of InternalReconciliationOpenTransRowField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InternalReconciliationOpenTransRow {
    /**
     * Metadata information on all properties of the `InternalReconciliationOpenTransRow` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InternalReconciliationOpenTransRow>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): InternalReconciliationOpenTransRow;
}
//# sourceMappingURL=InternalReconciliationOpenTransRow.d.ts.map