import { Moment } from 'moment';
import { CashFlowAssignment } from './CashFlowAssignment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoTaxPostAccEnum } from './BoTaxPostAccEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * JournalEntryLine
 */
export interface JournalEntryLine {
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
    /**
     * Debit.
     * @nullable
     */
    debit?: number;
    /**
     * Credit.
     * @nullable
     */
    credit?: number;
    /**
     * Fc Debit.
     * @nullable
     */
    fcDebit?: number;
    /**
     * Fc Credit.
     * @nullable
     */
    fcCredit?: number;
    /**
     * Fc Currency.
     * @nullable
     */
    fcCurrency?: string;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Short Name.
     * @nullable
     */
    shortName?: string;
    /**
     * Contra Account.
     * @nullable
     */
    contraAccount?: string;
    /**
     * Line Memo.
     * @nullable
     */
    lineMemo?: string;
    /**
     * Reference Date 1.
     * @nullable
     */
    referenceDate1?: Moment;
    /**
     * Reference Date 2.
     * @nullable
     */
    referenceDate2?: Moment;
    /**
     * Reference 1.
     * @nullable
     */
    reference1?: string;
    /**
     * Reference 2.
     * @nullable
     */
    reference2?: string;
    /**
     * Project Code.
     * @nullable
     */
    projectCode?: string;
    /**
     * Costing Code.
     * @nullable
     */
    costingCode?: string;
    /**
     * Tax Date.
     * @nullable
     */
    taxDate?: Moment;
    /**
     * Base Sum.
     * @nullable
     */
    baseSum?: number;
    /**
     * Tax Group.
     * @nullable
     */
    taxGroup?: string;
    /**
     * Debit Sys.
     * @nullable
     */
    debitSys?: number;
    /**
     * Credit Sys.
     * @nullable
     */
    creditSys?: number;
    /**
     * Vat Date.
     * @nullable
     */
    vatDate?: Moment;
    /**
     * Vat Line.
     * @nullable
     */
    vatLine?: BoYesNoEnum;
    /**
     * System Base Amount.
     * @nullable
     */
    systemBaseAmount?: number;
    /**
     * Vat Amount.
     * @nullable
     */
    vatAmount?: number;
    /**
     * System Vat Amount.
     * @nullable
     */
    systemVatAmount?: number;
    /**
     * Gross Value.
     * @nullable
     */
    grossValue?: number;
    /**
     * Additional Reference.
     * @nullable
     */
    additionalReference?: string;
    /**
     * Check Abs.
     * @nullable
     */
    checkAbs?: number;
    /**
     * Costing Code 2.
     * @nullable
     */
    costingCode2?: string;
    /**
     * Costing Code 3.
     * @nullable
     */
    costingCode3?: string;
    /**
     * Costing Code 4.
     * @nullable
     */
    costingCode4?: string;
    /**
     * Tax Code.
     * @nullable
     */
    taxCode?: string;
    /**
     * Tax Post Account.
     * @nullable
     */
    taxPostAccount?: BoTaxPostAccEnum;
    /**
     * Costing Code 5.
     * @nullable
     */
    costingCode5?: string;
    /**
     * Location Code.
     * @nullable
     */
    locationCode?: number;
    /**
     * Control Account.
     * @nullable
     */
    controlAccount?: string;
    /**
     * Equalization Tax Amount.
     * @nullable
     */
    equalizationTaxAmount?: number;
    /**
     * System Equalization Tax Amount.
     * @nullable
     */
    systemEqualizationTaxAmount?: number;
    /**
     * Total Tax.
     * @nullable
     */
    totalTax?: number;
    /**
     * System Total Tax.
     * @nullable
     */
    systemTotalTax?: number;
    /**
     * Wt Liable.
     * @nullable
     */
    wtLiable?: BoYesNoEnum;
    /**
     * Wt Row.
     * @nullable
     */
    wtRow?: BoYesNoEnum;
    /**
     * Payment Block.
     * @nullable
     */
    paymentBlock?: BoYesNoEnum;
    /**
     * Block Reason.
     * @nullable
     */
    blockReason?: number;
    /**
     * Federal Tax Id.
     * @nullable
     */
    federalTaxId?: string;
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
    /**
     * Bpl Name.
     * @nullable
     */
    bplName?: string;
    /**
     * Vat Reg Num.
     * @nullable
     */
    vatRegNum?: string;
    /**
     * Payment Ordered.
     * @nullable
     */
    paymentOrdered?: BoYesNoEnum;
    /**
     * Exposed Trans Number.
     * @nullable
     */
    exposedTransNumber?: number;
    /**
     * Document Array.
     * @nullable
     */
    documentArray?: number;
    /**
     * Document Line.
     * @nullable
     */
    documentLine?: number;
    /**
     * Cost Element Code.
     * @nullable
     */
    costElementCode?: string;
    /**
     * Cash Flow Assignments.
     * @nullable
     */
    cashFlowAssignments?: CashFlowAssignment[];
}
/**
 * @deprecated Since v1.6.0. Use [[JournalEntryLine.build]] instead.
 */
export declare function createJournalEntryLine(json: any): JournalEntryLine;
/**
 * JournalEntryLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class JournalEntryLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, JournalEntryLine> {
    /**
     * Representation of the [[JournalEntryLine.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.debit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    debit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.credit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    credit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.fcDebit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fcDebit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.fcCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fcCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.fcCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fcCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.shortName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shortName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.contraAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contraAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.lineMemo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineMemo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.referenceDate1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    referenceDate1: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.referenceDate2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    referenceDate2: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.reference1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reference1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.reference2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reference2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    projectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.costingCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.baseSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    baseSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.taxGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxGroup: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.debitSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    debitSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.creditSys]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditSys: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.vatDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.vatLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatLine: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.systemBaseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemBaseAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.vatAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.systemVatAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemVatAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.grossValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossValue: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.additionalReference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    additionalReference: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.checkAbs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkAbs: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.costingCode2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.costingCode3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.costingCode4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.taxPostAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxPostAccount: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.costingCode5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costingCode5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    locationCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.controlAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    controlAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.equalizationTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationTaxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.systemEqualizationTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemEqualizationTaxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.totalTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    totalTax: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.systemTotalTax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemTotalTax: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.wtLiable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtLiable: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.wtRow]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wtRow: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.paymentBlock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentBlock: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.blockReason]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockReason: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    federalTaxId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.bplid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplid: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.bplName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatRegNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.paymentOrdered]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentOrdered: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.exposedTransNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exposedTransNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.documentArray]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentArray: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.documentLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.costElementCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    costElementCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[JournalEntryLine.cashFlowAssignments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cashFlowAssignments: CollectionField<EntityT, CashFlowAssignment>;
    /**
     * Creates an instance of JournalEntryLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace JournalEntryLine {
    /**
     * Metadata information on all properties of the `JournalEntryLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<JournalEntryLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | CashFlowAssignment;
    }): JournalEntryLine;
}
//# sourceMappingURL=JournalEntryLine.d.ts.map