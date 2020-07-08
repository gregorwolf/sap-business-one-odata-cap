import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * UpdateUserLicenseParams
 */
export interface UpdateUserLicenseParams {
    /**
     * User Name.
     * @nullable
     */
    userName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UpdateUserLicenseParams.build]] instead.
 */
export declare function createUpdateUserLicenseParams(json: any): UpdateUserLicenseParams;
/**
 * UpdateUserLicenseParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UpdateUserLicenseParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[UpdateUserLicenseParams.userName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace UpdateUserLicenseParams {
    function build(json: {
        [keys: string]: FieldType;
    }): UpdateUserLicenseParams;
}
//# sourceMappingURL=UpdateUserLicenseParams.d.ts.map