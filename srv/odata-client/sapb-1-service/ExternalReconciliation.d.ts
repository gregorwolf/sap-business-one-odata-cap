import { Moment } from 'moment';
import { ReconciliationJournalEntryLine, ReconciliationJournalEntryLineField } from './ReconciliationJournalEntryLine';
import { ReconciliationBankStatementLine, ReconciliationBankStatementLineField } from './ReconciliationBankStatementLine';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ExternalReconciliation
 */
export interface ExternalReconciliation {
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
    /**
     * Reconciliation No.
     * @nullable
     */
    reconciliationNo?: number;
    /**
     * Amount.
     * @nullable
     */
    amount?: number;
    /**
     * Currency Type.
     * @nullable
     */
    currencyType?: string;
    /**
     * Reconciliation Type.
     * @nullable
     */
    reconciliationType?: string;
    /**
     * Reconciliation Date.
     * @nullable
     */
    reconciliationDate?: Moment;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Reconciliation Journal Entry Lines.
     * @nullable
     */
    reconciliationJournalEntryLines?: ReconciliationJournalEntryLine;
    /**
     * Reconciliation Bank Statement Lines.
     * @nullable
     */
    reconciliationBankStatementLines?: ReconciliationBankStatementLine;
}
/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliation.build]] instead.
 */
export declare function createExternalReconciliation(json: any): ExternalReconciliation;
/**
 * ExternalReconciliationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExternalReconciliationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ExternalReconciliation.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliation.reconciliationNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliation.amount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliation.currencyType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currencyType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliation.reconciliationType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliation.reconciliationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliation.creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliation.reconciliationJournalEntryLines]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationJournalEntryLines: ReconciliationJournalEntryLineField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliation.reconciliationBankStatementLines]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationBankStatementLines: ReconciliationBankStatementLineField<EntityT>;
}
export declare namespace ExternalReconciliation {
    function build(json: {
        [keys: string]: FieldType | ReconciliationBankStatementLine | ReconciliationJournalEntryLine;
    }): ExternalReconciliation;
}
//# sourceMappingURL=ExternalReconciliation.d.ts.map