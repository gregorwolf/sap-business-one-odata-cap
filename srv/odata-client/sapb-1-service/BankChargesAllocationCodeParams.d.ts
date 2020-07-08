import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BankChargesAllocationCodeParams
 */
export interface BankChargesAllocationCodeParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BankChargesAllocationCodeParams.build]] instead.
 */
export declare function createBankChargesAllocationCodeParams(json: any): BankChargesAllocationCodeParams;
/**
 * BankChargesAllocationCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BankChargesAllocationCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BankChargesAllocationCodeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BankChargesAllocationCodeParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BankChargesAllocationCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BankChargesAllocationCodeParams;
}
//# sourceMappingURL=BankChargesAllocationCodeParams.d.ts.map