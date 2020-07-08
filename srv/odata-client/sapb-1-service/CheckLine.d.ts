import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CheckLine
 */
export interface CheckLine {
    /**
     * Check Key.
     * @nullable
     */
    checkKey?: number;
    /**
     * Check Number.
     * @nullable
     */
    checkNumber?: number;
    /**
     * Bank.
     * @nullable
     */
    bank?: string;
    /**
     * Branch.
     * @nullable
     */
    branch?: string;
    /**
     * Cash Check.
     * @nullable
     */
    cashCheck?: string;
    /**
     * Check Date.
     * @nullable
     */
    checkDate?: Moment;
    /**
     * Customer.
     * @nullable
     */
    customer?: string;
    /**
     * Check Amount.
     * @nullable
     */
    checkAmount?: number;
    /**
     * Account Number.
     * @nullable
     */
    accountNumber?: string;
    /**
     * Check Currency.
     * @nullable
     */
    checkCurrency?: string;
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
}
/**
 * @deprecated Since v1.6.0. Use [[CheckLine.build]] instead.
 */
export declare function createCheckLine(json: any): CheckLine;
/**
 * CheckLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CheckLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CheckLine.checkKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.checkNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.bank]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bank: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.branch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    branch: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.cashCheck]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cashCheck: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.checkDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.customer]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customer: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.checkAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.accountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.checkCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    checkCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.fiscalId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fiscalId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.originallyIssuedBy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    originallyIssuedBy: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CheckLine {
    function build(json: {
        [keys: string]: FieldType;
    }): CheckLine;
}
//# sourceMappingURL=CheckLine.d.ts.map