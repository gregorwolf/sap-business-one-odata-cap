import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BankPageParams
 */
export interface BankPageParams {
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
    /**
     * Sequence.
     * @nullable
     */
    sequence?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BankPageParams.build]] instead.
 */
export declare function createBankPageParams(json: any): BankPageParams;
/**
 * BankPageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BankPageParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BankPageParams.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankPageParams.sequence]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequence: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BankPageParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BankPageParams;
}
//# sourceMappingURL=BankPageParams.d.ts.map