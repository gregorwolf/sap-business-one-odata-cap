import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DashboardPackageParams
 */
export interface DashboardPackageParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DashboardPackageParams.build]] instead.
 */
export declare function createDashboardPackageParams(json: any): DashboardPackageParams;
/**
 * DashboardPackageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DashboardPackageParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DashboardPackageParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DashboardPackageParams {
    function build(json: {
        [keys: string]: FieldType;
    }): DashboardPackageParams;
}
//# sourceMappingURL=DashboardPackageParams.d.ts.map