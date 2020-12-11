import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PaymentAccount
 */
export interface PaymentAccount {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
    /**
     * Sum Paid.
     * @nullable
     */
    sumPaid?: number;
    /**
     * Sum Paid Fc.
     * @nullable
     */
    sumPaidFc?: number;
    /**
     * Decription.
     * @nullable
     */
    decription?: string;
    /**
     * Vat Group.
     * @nullable
     */
    vatGroup?: string;
    /**
     * Account Name.
     * @nullable
     */
    accountName?: string;
    /**
     * Gross Amount.
     * @nullable
     */
    grossAmount?: number;
    /**
     * Profit Center.
     * @nullable
     */
    profitCenter?: string;
    /**
     * Project Code.
     * @nullable
     */
    projectCode?: string;
    /**
     * Vat Amount.
     * @nullable
     */
    vatAmount?: number;
    /**
     * Profit Center 2.
     * @nullable
     */
    profitCenter2?: string;
    /**
     * Profit Center 3.
     * @nullable
     */
    profitCenter3?: string;
    /**
     * Profit Center 4.
     * @nullable
     */
    profitCenter4?: string;
    /**
     * Profit Center 5.
     * @nullable
     */
    profitCenter5?: string;
    /**
     * Location Code.
     * @nullable
     */
    locationCode?: number;
    /**
     * Equalization Vat Amount.
     * @nullable
     */
    equalizationVatAmount?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PaymentAccount.build]] instead.
 */
export declare function createPaymentAccount(json: any): PaymentAccount;
/**
 * PaymentAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PaymentAccountField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentAccount> {
    /**
     * Representation of the [[PaymentAccount.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.sumPaid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumPaid: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.sumPaidFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sumPaidFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.decription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    decription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatGroup: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.accountName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.grossAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.profitCenter]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    profitCenter: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    projectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.vatAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vatAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.profitCenter2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    profitCenter2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.profitCenter3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    profitCenter3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.profitCenter4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    profitCenter4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.profitCenter5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    profitCenter5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.locationCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    locationCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PaymentAccount.equalizationVatAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    equalizationVatAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of PaymentAccountField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PaymentAccount {
    /**
     * Metadata information on all properties of the `PaymentAccount` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PaymentAccount>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PaymentAccount;
}
//# sourceMappingURL=PaymentAccount.d.ts.map