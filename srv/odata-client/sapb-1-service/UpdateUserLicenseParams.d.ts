import { LicenseTypeEnum } from './LicenseTypeEnum';
import { LicenseUpdateTypeEnum } from './LicenseUpdateTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UpdateUserLicenseParams
 */
export interface UpdateUserLicenseParams {
    /**
     * User Name.
     * @nullable
     */
    userName?: string;
    /**
     * License Type.
     * @nullable
     */
    licenseType?: LicenseTypeEnum;
    /**
     * License Update Type.
     * @nullable
     */
    licenseUpdateType?: LicenseUpdateTypeEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[UpdateUserLicenseParams.build]] instead.
 */
export declare function createUpdateUserLicenseParams(json: any): UpdateUserLicenseParams;
/**
 * UpdateUserLicenseParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UpdateUserLicenseParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UpdateUserLicenseParams> {
    /**
     * Representation of the [[UpdateUserLicenseParams.userName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[UpdateUserLicenseParams.licenseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    licenseType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[UpdateUserLicenseParams.licenseUpdateType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    licenseUpdateType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of UpdateUserLicenseParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UpdateUserLicenseParams {
    /**
     * Metadata information on all properties of the `UpdateUserLicenseParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UpdateUserLicenseParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UpdateUserLicenseParams;
}
//# sourceMappingURL=UpdateUserLicenseParams.d.ts.map