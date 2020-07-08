import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * InternalReconciliationOpenTransRow
 */
export interface InternalReconciliationOpenTransRow {
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
export declare class InternalReconciliationOpenTransRowField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
     * Representation of the [[InternalReconciliationOpenTransRow.reconcileAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconcileAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransRow.cashDiscount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cashDiscount: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace InternalReconciliationOpenTransRow {
    function build(json: {
        [keys: string]: FieldType;
    }): InternalReconciliationOpenTransRow;
}
//# sourceMappingURL=InternalReconciliationOpenTransRow.d.ts.map