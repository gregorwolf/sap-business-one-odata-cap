import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EmployeeSavingsPaymentInfo
 */
export interface EmployeeSavingsPaymentInfo {
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Contract Name.
     * @nullable
     */
    contractName?: string;
    /**
     * Payment Notes.
     * @nullable
     */
    paymentNotes?: string;
    /**
     * An.
     * @nullable
     */
    an?: number;
    /**
     * A Ncurrency.
     * @nullable
     */
    aNcurrency?: string;
    /**
     * Ag.
     * @nullable
     */
    ag?: number;
    /**
     * A Gcurrency.
     * @nullable
     */
    aGcurrency?: string;
    /**
     * Bank Name.
     * @nullable
     */
    bankName?: string;
    /**
     * Bank Code.
     * @nullable
     */
    bankCode?: string;
    /**
     * Bank Account.
     * @nullable
     */
    bankAccount?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeSavingsPaymentInfo.build]] instead.
 */
export declare function createEmployeeSavingsPaymentInfo(json: any): EmployeeSavingsPaymentInfo;
/**
 * EmployeeSavingsPaymentInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeSavingsPaymentInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.contractName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contractName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.paymentNotes]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentNotes: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.an]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    an: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.aNcurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aNcurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.ag]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ag: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.aGcurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    aGcurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.bankName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankAccount: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace EmployeeSavingsPaymentInfo {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeSavingsPaymentInfo;
}
//# sourceMappingURL=EmployeeSavingsPaymentInfo.d.ts.map