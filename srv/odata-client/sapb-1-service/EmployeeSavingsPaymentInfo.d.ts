import { ContractSequenceEnum } from './ContractSequenceEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    /**
     * Sequence.
     * @nullable
     */
    sequence?: ContractSequenceEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeSavingsPaymentInfo.build]] instead.
 */
export declare function createEmployeeSavingsPaymentInfo(json: any): EmployeeSavingsPaymentInfo;
/**
 * EmployeeSavingsPaymentInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeSavingsPaymentInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeSavingsPaymentInfo> {
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
    /**
     * Representation of the [[EmployeeSavingsPaymentInfo.sequence]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequence: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of EmployeeSavingsPaymentInfoField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmployeeSavingsPaymentInfo {
    /**
     * Metadata information on all properties of the `EmployeeSavingsPaymentInfo` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmployeeSavingsPaymentInfo>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeSavingsPaymentInfo;
}
//# sourceMappingURL=EmployeeSavingsPaymentInfo.d.ts.map