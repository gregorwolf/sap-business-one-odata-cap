import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BankParams
 */
export interface BankParams {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BankParams.build]] instead.
 */
export declare function createBankParams(json: any): BankParams;
/**
 * BankParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BankParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BankParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BankParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BankParams;
}
//# sourceMappingURL=BankParams.d.ts.map