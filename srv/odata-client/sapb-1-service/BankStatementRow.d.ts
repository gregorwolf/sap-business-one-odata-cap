import { Moment } from 'moment';
import { MultiplePayment } from './MultiplePayment';
import { BoBpsDocTypes } from './BoBpsDocTypes';
import { CreateMethodEnum } from './CreateMethodEnum';
import { BankStatementDocTypeEnum } from './BankStatementDocTypeEnum';
import { PostingMethodEnum } from './PostingMethodEnum';
import { BankStatementRowSourceEnum } from './BankStatementRowSourceEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BankStatementRow
 */
export interface BankStatementRow {
    /**
     * External Bank Statement No.
     * @nullable
     */
    externalBankStatementNo?: number;
    /**
     * Account Number.
     * @nullable
     */
    accountNumber?: string;
    /**
     * Sequence No.
     * @nullable
     */
    sequenceNo?: number;
    /**
     * Account Name.
     * @nullable
     */
    accountName?: string;
    /**
     * Reference.
     * @nullable
     */
    reference?: string;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * Debit Amount Fc.
     * @nullable
     */
    debitAmountFc?: number;
    /**
     * Credit Amount Fc.
     * @nullable
     */
    creditAmountFc?: number;
    /**
     * Credit Currency.
     * @nullable
     */
    creditCurrency?: string;
    /**
     * Balance.
     * @nullable
     */
    balance?: number;
    /**
     * Reconciliation No.
     * @nullable
     */
    reconciliationNo?: number;
    /**
     * External Code.
     * @nullable
     */
    externalCode?: string;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Bp Name.
     * @nullable
     */
    bpName?: string;
    /**
     * Statement Number.
     * @nullable
     */
    statementNumber?: number;
    /**
     * Row Status.
     * @nullable
     */
    rowStatus?: string;
    /**
     * Visual Order.
     * @nullable
     */
    visualOrder?: number;
    /**
     * Doc Num Type.
     * @nullable
     */
    docNumType?: BoBpsDocTypes;
    /**
     * Details 2.
     * @nullable
     */
    details2?: string;
    /**
     * Payment Reference No.
     * @nullable
     */
    paymentReferenceNo?: string;
    /**
     * Create Method.
     * @nullable
     */
    createMethod?: CreateMethodEnum;
    /**
     * Bank Stmt Line Date.
     * @nullable
     */
    bankStmtLineDate?: Moment;
    /**
     * Bank Stmt Due Date.
     * @nullable
     */
    bankStmtDueDate?: Moment;
    /**
     * Internal Bank Op Code.
     * @nullable
     */
    internalBankOpCode?: number;
    /**
     * Bp Bank Account.
     * @nullable
     */
    bpBankAccount?: string;
    /**
     * Debit Amount Lc.
     * @nullable
     */
    debitAmountLc?: number;
    /**
     * Credit Amount Lc.
     * @nullable
     */
    creditAmountLc?: number;
    /**
     * Exchange Rate.
     * @nullable
     */
    exchangeRate?: number;
    /**
     * Iba Nof Bp Bank Account.
     * @nullable
     */
    ibaNofBpBankAccount?: string;
    /**
     * Fee On The Line.
     * @nullable
     */
    feeOnTheLine?: number;
    /**
     * Vat Amount Lc.
     * @nullable
     */
    vatAmountLc?: number;
    /**
     * Vat Amount Fc.
     * @nullable
     */
    vatAmountFc?: number;
    /**
     * Journal Entry Id.
     * @nullable
     */
    journalEntryId?: number;
    /**
     * Payment Id.
     * @nullable
     */
    paymentId?: number;
    /**
     * Document Type.
     * @nullable
     */
    documentType?: BankStatementDocTypeEnum;
    /**
     * Posting Method.
     * @nullable
     */
    postingMethod?: PostingMethodEnum;
    /**
     * Gl Accountfor Fee.
     * @nullable
     */
    glAccountforFee?: string;
    /**
     * Fee Profit Center.
     * @nullable
     */
    feeProfitCenter?: string;
    /**
     * Fee Project.
     * @nullable
     */
    feeProject?: string;
    /**
     * Bp Bank Code.
     * @nullable
     */
    bpBankCode?: string;
    /**
     * Fee Distribution Rule.
     * @nullable
     */
    feeDistributionRule?: string;
    /**
     * Fee Distribution Rule 2.
     * @nullable
     */
    feeDistributionRule2?: string;
    /**
     * Fee Distribution Rule 3.
     * @nullable
     */
    feeDistributionRule3?: string;
    /**
     * Fee Distribution Rule 4.
     * @nullable
     */
    feeDistributionRule4?: string;
    /**
     * Fee Distribution Rule 5.
     * @nullable
     */
    feeDistributionRule5?: string;
    /**
     * Bpbic Swift Code.
     * @nullable
     */
    bpbicSwiftCode?: string;
    /**
     * Source.
     * @nullable
     */
    source?: BankStatementRowSourceEnum;
    /**
     * Folio Prefix String.
     * @nullable
     */
    folioPrefixString?: string;
    /**
     * Folio Number.
     * @nullable
     */
    folioNumber?: number;
    /**
     * Multiple Payments.
     * @nullable
     */
    multiplePayments?: MultiplePayment[];
}
/**
 * @deprecated Since v1.6.0. Use [[BankStatementRow.build]] instead.
 */
export declare function createBankStatementRow(json: any): BankStatementRow;
/**
 * BankStatementRowField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BankStatementRowField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BankStatementRow> {
    /**
     * Representation of the [[BankStatementRow.externalBankStatementNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    externalBankStatementNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.accountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequenceNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.accountName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.reference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reference: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.details]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.debitAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    debitAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.creditAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.creditCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.balance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    balance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.reconciliationNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    externalCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.bpName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.statementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statementNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.rowStatus]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowStatus: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.visualOrder]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    visualOrder: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.docNumType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docNumType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.details2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.paymentReferenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentReferenceNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.createMethod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    createMethod: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.bankStmtLineDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankStmtLineDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.bankStmtDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankStmtDueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.internalBankOpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalBankOpCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.bpBankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpBankAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.debitAmountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    debitAmountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.creditAmountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditAmountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.exchangeRate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exchangeRate: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.ibaNofBpBankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ibaNofBpBankAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.feeOnTheLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    feeOnTheLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.vatAmountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatAmountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.vatAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.journalEntryId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    journalEntryId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.paymentId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.documentType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.postingMethod]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    postingMethod: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.glAccountforFee]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    glAccountforFee: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.feeProfitCenter]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    feeProfitCenter: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.feeProject]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    feeProject: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.bpBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpBankCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.feeDistributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    feeDistributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.feeDistributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    feeDistributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.feeDistributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    feeDistributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.feeDistributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    feeDistributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.feeDistributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    feeDistributionRule5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.bpbicSwiftCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpbicSwiftCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.source]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    source: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    folioPrefixString: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    folioNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementRow.multiplePayments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    multiplePayments: CollectionField<EntityT, MultiplePayment>;
    /**
     * Creates an instance of BankStatementRowField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BankStatementRow {
    /**
     * Metadata information on all properties of the `BankStatementRow` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BankStatementRow>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | MultiplePayment;
    }): BankStatementRow;
}
//# sourceMappingURL=BankStatementRow.d.ts.map