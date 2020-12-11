import { Moment } from 'moment';
import { ReconciliationJournalEntryLine } from './ReconciliationJournalEntryLine';
import { ReconciliationBankStatementLine } from './ReconciliationBankStatementLine';
import { ReconciliationAccountTypeEnum } from './ReconciliationAccountTypeEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ExternalReconciliation
 */
export interface ExternalReconciliation {
    /**
     * Reconciliation Account Type.
     * @nullable
     */
    reconciliationAccountType?: ReconciliationAccountTypeEnum;
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
    reconciliationJournalEntryLines?: ReconciliationJournalEntryLine[];
    /**
     * Reconciliation Bank Statement Lines.
     * @nullable
     */
    reconciliationBankStatementLines?: ReconciliationBankStatementLine[];
}
/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliation.build]] instead.
 */
export declare function createExternalReconciliation(json: any): ExternalReconciliation;
/**
 * ExternalReconciliationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExternalReconciliationField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExternalReconciliation> {
    /**
     * Representation of the [[ExternalReconciliation.reconciliationAccountType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationAccountType: ComplexTypeEnumPropertyField<EntityT>;
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
    reconciliationJournalEntryLines: CollectionField<EntityT, ReconciliationJournalEntryLine>;
    /**
     * Representation of the [[ExternalReconciliation.reconciliationBankStatementLines]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationBankStatementLines: CollectionField<EntityT, ReconciliationBankStatementLine>;
    /**
     * Creates an instance of ExternalReconciliationField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ExternalReconciliation {
    /**
     * Metadata information on all properties of the `ExternalReconciliation` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ExternalReconciliation>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | ReconciliationBankStatementLine | ReconciliationJournalEntryLine;
    }): ExternalReconciliation;
}
//# sourceMappingURL=ExternalReconciliation.d.ts.map