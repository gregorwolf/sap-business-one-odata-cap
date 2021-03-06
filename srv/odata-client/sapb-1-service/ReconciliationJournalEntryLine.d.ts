import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ReconciliationJournalEntryLine
 */
export interface ReconciliationJournalEntryLine {
    /**
     * Transaction Number.
     * @nullable
     */
    transactionNumber?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: number;
    /**
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Ref 1.
     * @nullable
     */
    ref1?: string;
    /**
     * Ref 2.
     * @nullable
     */
    ref2?: string;
    /**
     * Ref 3.
     * @nullable
     */
    ref3?: string;
    /**
     * Debit Amount.
     * @nullable
     */
    debitAmount?: number;
    /**
     * Credit Amount.
     * @nullable
     */
    creditAmount?: number;
    /**
     * Details.
     * @nullable
     */
    details?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ReconciliationJournalEntryLine.build]] instead.
 */
export declare function createReconciliationJournalEntryLine(json: any): ReconciliationJournalEntryLine;
/**
 * ReconciliationJournalEntryLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ReconciliationJournalEntryLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReconciliationJournalEntryLine> {
    /**
     * Representation of the [[ReconciliationJournalEntryLine.transactionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transactionNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationJournalEntryLine.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationJournalEntryLine.postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    postingDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationJournalEntryLine.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationJournalEntryLine.ref1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ref1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationJournalEntryLine.ref2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ref2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationJournalEntryLine.ref3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ref3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationJournalEntryLine.debitAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    debitAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationJournalEntryLine.creditAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ReconciliationJournalEntryLine.details]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ReconciliationJournalEntryLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ReconciliationJournalEntryLine {
    /**
     * Metadata information on all properties of the `ReconciliationJournalEntryLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ReconciliationJournalEntryLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ReconciliationJournalEntryLine;
}
//# sourceMappingURL=ReconciliationJournalEntryLine.d.ts.map