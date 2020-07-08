import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PaymentCheck
 */
export interface PaymentCheck {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Check Number.
     * @nullable
     */
    checkNumber?: number;
    /**
     * Bank Code.
     * @nullable
     */
    bankCode?: string;
    /**
     * Branch.
     * @nullable
     */
    branch?: string;
    /**
     * Accountt Num.
     * @nullable
     */
    accounttNum?: string;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * Check Sum.
     * @nullable
     */
    checkSum?: number;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Country Code.
     * @nullable
     */
    countryCode?: string;
    /**
     * Check Abs Entry.
     * @nullable
     */
    checkAbsEntry?: number;
    /**
     * Check Account.
     * @nullable
     */
    checkAccount?: string;
    /**
     * Fiscal Id.
     * @nullable
     */
    fiscalId?: string;
    /**
     * Originally Issued By.
     * @nullable
     */
    originallyIssuedBy?: string;
    /**
     * Endorsable Check No.
     * @nullable
     */
    endorsableCheckNo?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentCheck.build]] instead.
 */
export declare function createPaymentCheck(json: any): PaymentCheck;
/**
 * PaymentCheckField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentCheckField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PaymentCheck.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dueDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.checkNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.branch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    branch: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.accounttNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accounttNum: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.details]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.checkSum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkSum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countryCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.checkAbsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkAbsEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.checkAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.fiscalId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fiscalId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.originallyIssuedBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    originallyIssuedBy: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentCheck.endorsableCheckNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endorsableCheckNo: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PaymentCheck {
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentCheck;
}
//# sourceMappingURL=PaymentCheck.d.ts.map