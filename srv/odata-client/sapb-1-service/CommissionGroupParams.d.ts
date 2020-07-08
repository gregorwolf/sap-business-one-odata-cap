import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CommissionGroupParams
 */
export interface CommissionGroupParams {
    /**
     * Commission Group Code.
     * @nullable
     */
    commissionGroupCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CommissionGroupParams.build]] instead.
 */
export declare function createCommissionGroupParams(json: any): CommissionGroupParams;
/**
 * CommissionGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CommissionGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CommissionGroupParams.commissionGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    commissionGroupCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace CommissionGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CommissionGroupParams;
}
//# sourceMappingURL=CommissionGroupParams.d.ts.map