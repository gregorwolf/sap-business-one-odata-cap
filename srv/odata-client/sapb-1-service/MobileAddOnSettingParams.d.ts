import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * MobileAddOnSettingParams
 */
export interface MobileAddOnSettingParams {
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
 * @deprecated Since v1.6.0. Use [[MobileAddOnSettingParams.build]] instead.
 */
export declare function createMobileAddOnSettingParams(json: any): MobileAddOnSettingParams;
/**
 * MobileAddOnSettingParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MobileAddOnSettingParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MobileAddOnSettingParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MobileAddOnSettingParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace MobileAddOnSettingParams {
    function build(json: {
        [keys: string]: FieldType;
    }): MobileAddOnSettingParams;
}
//# sourceMappingURL=MobileAddOnSettingParams.d.ts.map