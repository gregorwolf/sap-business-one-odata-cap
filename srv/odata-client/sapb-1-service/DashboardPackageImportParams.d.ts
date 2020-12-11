import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DashboardPackageImportParams
 */
export interface DashboardPackageImportParams {
    /**
     * Package File Path.
     * @nullable
     */
    packageFilePath?: string;
    /**
     * Import Queries.
     * @nullable
     */
    importQueries?: BoYesNoEnum;
    /**
     * Force Overwrite Query.
     * @nullable
     */
    forceOverwriteQuery?: BoYesNoEnum;
    /**
     * Force Overwrite Package.
     * @nullable
     */
    forceOverwritePackage?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[DashboardPackageImportParams.build]] instead.
 */
export declare function createDashboardPackageImportParams(json: any): DashboardPackageImportParams;
/**
 * DashboardPackageImportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DashboardPackageImportParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DashboardPackageImportParams> {
    /**
     * Representation of the [[DashboardPackageImportParams.packageFilePath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    packageFilePath: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DashboardPackageImportParams.importQueries]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    importQueries: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DashboardPackageImportParams.forceOverwriteQuery]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    forceOverwriteQuery: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[DashboardPackageImportParams.forceOverwritePackage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    forceOverwritePackage: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of DashboardPackageImportParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DashboardPackageImportParams {
    /**
     * Metadata information on all properties of the `DashboardPackageImportParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DashboardPackageImportParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DashboardPackageImportParams;
}
//# sourceMappingURL=DashboardPackageImportParams.d.ts.map