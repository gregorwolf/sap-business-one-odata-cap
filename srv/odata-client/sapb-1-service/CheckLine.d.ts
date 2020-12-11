import { Moment } from 'moment';
import { BoDepositCheckEnum } from './BoDepositCheckEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Deposited.
     * @nullable
     */
    deposited?: BoDepositCheckEnum;
    /**
     * Transferred.
     * @nullable
     */
    transferred?: BoYesNoEnum;
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
    /**
     * Rejected By Bank.
     * @nullable
     */
    rejectedByBank?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[CheckLine.build]] instead.
 */
export declare function createCheckLine(json: any): CheckLine;
/**
 * CheckLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CheckLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CheckLine> {
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
     * Representation of the [[CheckLine.deposited]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deposited: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[CheckLine.transferred]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    transferred: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Representation of the [[CheckLine.rejectedByBank]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rejectedByBank: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of CheckLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CheckLine {
    /**
     * Metadata information on all properties of the `CheckLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CheckLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CheckLine;
}
//# sourceMappingURL=CheckLine.d.ts.map