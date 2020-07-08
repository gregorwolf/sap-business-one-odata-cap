import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BillOfExchangeTransBankPage
 */
export interface BillOfExchangeTransBankPage {
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
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransBankPage.build]] instead.
 */
export declare function createBillOfExchangeTransBankPage(json: any): BillOfExchangeTransBankPage;
/**
 * BillOfExchangeTransBankPageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BillOfExchangeTransBankPageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BillOfExchangeTransBankPage.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BillOfExchangeTransBankPage.sequence]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sequence: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BillOfExchangeTransBankPage {
    function build(json: {
        [keys: string]: FieldType;
    }): BillOfExchangeTransBankPage;
}
//# sourceMappingURL=BillOfExchangeTransBankPage.d.ts.map