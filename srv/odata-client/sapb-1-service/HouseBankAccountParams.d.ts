import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * HouseBankAccountParams
 */
export interface HouseBankAccountParams {
    /**
     * Absolute Entry.
     * @nullable
     */
    absoluteEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[HouseBankAccountParams.build]] instead.
 */
export declare function createHouseBankAccountParams(json: any): HouseBankAccountParams;
/**
 * HouseBankAccountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class HouseBankAccountParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[HouseBankAccountParams.absoluteEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absoluteEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace HouseBankAccountParams {
    function build(json: {
        [keys: string]: FieldType;
    }): HouseBankAccountParams;
}
//# sourceMappingURL=HouseBankAccountParams.d.ts.map