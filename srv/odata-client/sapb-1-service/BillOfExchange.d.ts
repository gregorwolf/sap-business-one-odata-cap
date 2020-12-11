import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BillOfExchange
 */
export interface BillOfExchange {
    /**
     * Bill Of Exchange No.
     * @nullable
     */
    billOfExchangeNo?: number;
    /**
     * Bill Of Exchange Due Date.
     * @nullable
     */
    billOfExchangeDueDate?: Moment;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * Reference No.
     * @nullable
     */
    referenceNo?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Payment Method Code.
     * @nullable
     */
    paymentMethodCode?: string;
    /**
     * Bp Bank Code.
     * @nullable
     */
    bpBankCode?: string;
    /**
     * Bp Bank Act.
     * @nullable
     */
    bpBankAct?: string;
    /**
     * Bp Bank Country.
     * @nullable
     */
    bpBankCountry?: string;
    /**
     * Control Key.
     * @nullable
     */
    controlKey?: string;
    /**
     * Payment Engine Status 1.
     * @nullable
     */
    paymentEngineStatus1?: string;
    /**
     * Payment Engine Status 2.
     * @nullable
     */
    paymentEngineStatus2?: string;
    /**
     * Payment Engine Status 3.
     * @nullable
     */
    paymentEngineStatus3?: string;
    /**
     * Stamp Tax Code.
     * @nullable
     */
    stampTaxCode?: string;
    /**
     * Stamp Tax Amount.
     * @nullable
     */
    stampTaxAmount?: number;
    /**
     * Folio Number.
     * @nullable
     */
    folioNumber?: number;
    /**
     * Folio Prefix String.
     * @nullable
     */
    folioPrefixString?: string;
    /**
     * Interest Amount.
     * @nullable
     */
    interestAmount?: number;
    /**
     * Discount Amount.
     * @nullable
     */
    discountAmount?: number;
    /**
     * Fine Amount.
     * @nullable
     */
    fineAmount?: number;
    /**
     * Interest Date.
     * @nullable
     */
    interestDate?: Moment;
    /**
     * Discount Date.
     * @nullable
     */
    discountDate?: Moment;
    /**
     * Fine Date.
     * @nullable
     */
    fineDate?: Moment;
    /**
     * Iof Amount.
     * @nullable
     */
    iofAmount?: number;
    /**
     * Service Fee Amount.
     * @nullable
     */
    serviceFeeAmount?: number;
    /**
     * Other Expenses Amount.
     * @nullable
     */
    otherExpensesAmount?: number;
    /**
     * Other Incomes Amount.
     * @nullable
     */
    otherIncomesAmount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchange.build]] instead.
 */
export declare function createBillOfExchange(json: any): BillOfExchange;
/**
 * BillOfExchangeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BillOfExchangeField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BillOfExchange> {
    /**
     * Representation of the [[BillOfExchange.billOfExchangeNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billOfExchangeNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.billOfExchangeDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billOfExchangeDueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.details]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.referenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    referenceNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentMethodCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.bpBankCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpBankCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.bpBankAct]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpBankAct: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.bpBankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpBankCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.controlKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    controlKey: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.paymentEngineStatus1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentEngineStatus1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.paymentEngineStatus2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentEngineStatus2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.paymentEngineStatus3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentEngineStatus3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.stampTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stampTaxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.stampTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stampTaxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    folioNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    folioPrefixString: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.interestAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    interestAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.discountAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discountAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.fineAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fineAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.interestDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    interestDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.discountDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    discountDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.fineDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fineDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.iofAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    iofAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.serviceFeeAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    serviceFeeAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.otherExpensesAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    otherExpensesAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchange.otherIncomesAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    otherIncomesAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of BillOfExchangeField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BillOfExchange {
    /**
     * Metadata information on all properties of the `BillOfExchange` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BillOfExchange>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BillOfExchange;
}
//# sourceMappingURL=BillOfExchange.d.ts.map