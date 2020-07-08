import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CreditLine
 */
export interface CreditLine {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Credit Card.
     * @nullable
     */
    creditCard?: number;
    /**
     * Voucher Number.
     * @nullable
     */
    voucherNumber?: string;
    /**
     * Payment Method Code.
     * @nullable
     */
    paymentMethodCode?: number;
    /**
     * Pay Date.
     * @nullable
     */
    payDate?: Moment;
    /**
     * Num Of Payments.
     * @nullable
     */
    numOfPayments?: number;
    /**
     * Customer.
     * @nullable
     */
    customer?: string;
    /**
     * Reference.
     * @nullable
     */
    reference?: string;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Credit Currency.
     * @nullable
     */
    creditCurrency?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CreditLine.build]] instead.
 */
export declare function createCreditLine(json: any): CreditLine;
/**
 * CreditLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CreditLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CreditLine.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CreditLine.creditCard]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditCard: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CreditLine.voucherNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    voucherNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CreditLine.paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentMethodCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CreditLine.payDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    payDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[CreditLine.numOfPayments]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numOfPayments: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CreditLine.customer]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customer: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CreditLine.reference]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reference: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CreditLine.total]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    total: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CreditLine.creditCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creditCurrency: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CreditLine {
    function build(json: {
        [keys: string]: FieldType;
    }): CreditLine;
}
//# sourceMappingURL=CreditLine.d.ts.map