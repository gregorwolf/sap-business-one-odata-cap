import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BankStatementParams
 */
export interface BankStatementParams {
    /**
     * Internal Number.
     * @nullable
     */
    internalNumber?: number;
    /**
     * Bank Account Key.
     * @nullable
     */
    bankAccountKey?: number;
    /**
     * Statement Number.
     * @nullable
     */
    statementNumber?: string;
    /**
     * Statement Date.
     * @nullable
     */
    statementDate?: Moment;
    /**
     * Starting Balance F.
     * @nullable
     */
    startingBalanceF?: number;
    /**
     * Ending Balance F.
     * @nullable
     */
    endingBalanceF?: number;
    /**
     * Currency.
     * @nullable
     */
    currency?: string;
    /**
     * Starting Balance L.
     * @nullable
     */
    startingBalanceL?: number;
    /**
     * Ending Balance L.
     * @nullable
     */
    endingBalanceL?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BankStatementParams.build]] instead.
 */
export declare function createBankStatementParams(json: any): BankStatementParams;
/**
 * BankStatementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BankStatementParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BankStatementParams.internalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementParams.bankAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankAccountKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementParams.statementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statementNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementParams.statementDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statementDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementParams.startingBalanceF]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startingBalanceF: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementParams.endingBalanceF]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endingBalanceF: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementParams.currency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementParams.startingBalanceL]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    startingBalanceL: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementParams.endingBalanceL]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    endingBalanceL: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BankStatementParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BankStatementParams;
}
//# sourceMappingURL=BankStatementParams.d.ts.map