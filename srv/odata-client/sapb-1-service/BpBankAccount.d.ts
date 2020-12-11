import { Moment } from 'moment';
import { SepaSequenceTypeEnum } from './SepaSequenceTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * BpBankAccount
 */
export interface BpBankAccount {
    /**
     * Log Instance.
     * @nullable
     */
    logInstance?: number;
    /**
     * User No 4.
     * @nullable
     */
    userNo4?: string;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * County.
     * @nullable
     */
    county?: string;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * User No 2.
     * @nullable
     */
    userNo2?: string;
    /**
     * Iban.
     * @nullable
     */
    iban?: string;
    /**
     * Zip Code.
     * @nullable
     */
    zipCode?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * Block.
     * @nullable
     */
    block?: string;
    /**
     * Branch.
     * @nullable
     */
    branch?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Street.
     * @nullable
     */
    street?: string;
    /**
     * Control Key.
     * @nullable
     */
    controlKey?: string;
    /**
     * User No 3.
     * @nullable
     */
    userNo3?: string;
    /**
     * Bank Code.
     * @nullable
     */
    bankCode?: string;
    /**
     * Account No.
     * @nullable
     */
    accountNo?: string;
    /**
     * User No 1.
     * @nullable
     */
    userNo1?: string;
    /**
     * Internal Key.
     * @nullable
     */
    internalKey?: number;
    /**
     * Building Floor Room.
     * @nullable
     */
    buildingFloorRoom?: string;
    /**
     * Bik.
     * @nullable
     */
    bik?: string;
    /**
     * Account Name.
     * @nullable
     */
    accountName?: string;
    /**
     * Correspondent Account.
     * @nullable
     */
    correspondentAccount?: string;
    /**
     * Phone.
     * @nullable
     */
    phone?: string;
    /**
     * Fax.
     * @nullable
     */
    fax?: string;
    /**
     * Customer Id Number.
     * @nullable
     */
    customerIdNumber?: string;
    /**
     * Isr Biller Id.
     * @nullable
     */
    isrBillerId?: string;
    /**
     * Isr Type.
     * @nullable
     */
    isrType?: number;
    /**
     * Bic Swift Code.
     * @nullable
     */
    bicSwiftCode?: string;
    /**
     * Aba Routing Number.
     * @nullable
     */
    abaRoutingNumber?: string;
    /**
     * Mandate Id.
     * @nullable
     */
    mandateId?: string;
    /**
     * Signature Date.
     * @nullable
     */
    signatureDate?: Moment;
    /**
     * Mandate Exp Date.
     * @nullable
     */
    mandateExpDate?: Moment;
    /**
     * Sepa Seq Type.
     * @nullable
     */
    sepaSeqType?: SepaSequenceTypeEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[BpBankAccount.build]] instead.
 */
export declare function createBpBankAccount(json: any): BpBankAccount;
/**
 * BpBankAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpBankAccountField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpBankAccount> {
    /**
     * Representation of the [[BpBankAccount.logInstance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logInstance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.userNo4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userNo4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.county]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    county: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.state]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    state: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.userNo2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userNo2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.iban]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    iban: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    zipCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.city]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    city: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.block]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    block: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.branch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    branch: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.country]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    country: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.street]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    street: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.controlKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    controlKey: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.userNo3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userNo3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bankCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.accountNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.userNo1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userNo1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.internalKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalKey: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.buildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    buildingFloorRoom: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.bik]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bik: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.accountName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.correspondentAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    correspondentAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.phone]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    phone: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.fax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fax: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.customerIdNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customerIdNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.isrBillerId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isrBillerId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.isrType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isrType: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.bicSwiftCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bicSwiftCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.abaRoutingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    abaRoutingNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.mandateId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    mandateId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.signatureDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    signatureDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.mandateExpDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    mandateExpDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BpBankAccount.sepaSeqType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sepaSeqType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of BpBankAccountField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BpBankAccount {
    /**
     * Metadata information on all properties of the `BpBankAccount` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BpBankAccount>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BpBankAccount;
}
//# sourceMappingURL=BpBankAccount.d.ts.map