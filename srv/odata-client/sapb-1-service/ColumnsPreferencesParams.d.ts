import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ColumnsPreferencesParams
 */
export interface ColumnsPreferencesParams {
    /**
     * User.
     * @nullable
     */
    user?: number;
    /**
     * Form Id.
     * @nullable
     */
    formId?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ColumnsPreferencesParams.build]] instead.
 */
export declare function createColumnsPreferencesParams(json: any): ColumnsPreferencesParams;
/**
 * ColumnsPreferencesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ColumnsPreferencesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ColumnsPreferencesParams.user]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    user: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ColumnsPreferencesParams.formId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ColumnsPreferencesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ColumnsPreferencesParams;
}
//# sourceMappingURL=ColumnsPreferencesParams.d.ts.map