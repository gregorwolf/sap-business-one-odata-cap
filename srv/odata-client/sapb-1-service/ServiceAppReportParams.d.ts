import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceAppReportParams
 */
export interface ServiceAppReportParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReportParams.build]] instead.
 */
export declare function createServiceAppReportParams(json: any): ServiceAppReportParams;
/**
 * ServiceAppReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceAppReportParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceAppReportParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ServiceAppReportParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceAppReportParams;
}
//# sourceMappingURL=ServiceAppReportParams.d.ts.map