import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DashboardPackageImportParams
 */
export interface DashboardPackageImportParams {
    /**
     * Package File Path.
     * @nullable
     */
    packageFilePath?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DashboardPackageImportParams.build]] instead.
 */
export declare function createDashboardPackageImportParams(json: any): DashboardPackageImportParams;
/**
 * DashboardPackageImportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DashboardPackageImportParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DashboardPackageImportParams.packageFilePath]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    packageFilePath: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DashboardPackageImportParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DashboardPackageImportParams;
}
//# sourceMappingURL=DashboardPackageImportParams.d.ts.map