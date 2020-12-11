import { Moment } from 'moment';
import { BankStatementStatusEnum } from './BankStatementStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Status.
     * @nullable
     */
    status?: BankStatementStatusEnum;
    /**
     * Imported.
     * @nullable
     */
    imported?: BoYesNoEnum;
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
export declare class BankStatementParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BankStatementParams> {
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
     * Representation of the [[BankStatementParams.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[BankStatementParams.imported]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    imported: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Creates an instance of BankStatementParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BankStatementParams {
    /**
     * Metadata information on all properties of the `BankStatementParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BankStatementParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BankStatementParams;
}
//# sourceMappingURL=BankStatementParams.d.ts.map