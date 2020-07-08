import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AdvancedGlAccountReturnParams
 */
export interface AdvancedGlAccountReturnParams {
    /**
     * Account Code.
     * @nullable
     */
    accountCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AdvancedGlAccountReturnParams.build]] instead.
 */
export declare function createAdvancedGlAccountReturnParams(json: any): AdvancedGlAccountReturnParams;
/**
 * AdvancedGlAccountReturnParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AdvancedGlAccountReturnParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AdvancedGlAccountReturnParams.accountCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AdvancedGlAccountReturnParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AdvancedGlAccountReturnParams;
}
//# sourceMappingURL=AdvancedGlAccountReturnParams.d.ts.map