import { BoDepositPostingTypes } from './BoDepositPostingTypes';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BillOfExchangeTransDeposit
 */
export interface BillOfExchangeTransDeposit {
    /**
     * Deposit Norm.
     * @nullable
     */
    depositNorm?: string;
    /**
     * Posting Type.
     * @nullable
     */
    postingType?: BoDepositPostingTypes;
    /**
     * Bank Country.
     * @nullable
     */
    bankCountry?: string;
    /**
     * Bank Account.
     * @nullable
     */
    bankAccount?: string;
    /**
     * Bank Deposit Account.
     * @nullable
     */
    bankDepositAccount?: string;
    /**
     * Bank Branch.
     * @nullable
     */
    bankBranch?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransDeposit.build]] instead.
 */
export declare function createBillOfExchangeTransDeposit(json: any): BillOfExchangeTransDeposit;
/**
 * BillOfExchangeTransDepositField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BillOfExchangeTransDepositField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BillOfExchangeTransDeposit> {
    /**
     * Representation of the [[BillOfExchangeTransDeposit.depositNorm]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    depositNorm: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransDeposit.postingType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    postingType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransDeposit.bankCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransDeposit.bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransDeposit.bankDepositAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankDepositAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransDeposit.bankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankBranch: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of BillOfExchangeTransDepositField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BillOfExchangeTransDeposit {
    /**
     * Metadata information on all properties of the `BillOfExchangeTransDeposit` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BillOfExchangeTransDeposit>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BillOfExchangeTransDeposit;
}
//# sourceMappingURL=BillOfExchangeTransDeposit.d.ts.map