import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceAppReport
 */
export interface ServiceAppReport {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * System Report Name.
     * @nullable
     */
    systemReportName?: string;
    /**
     * Customized Report Name.
     * @nullable
     */
    customizedReportName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReport.build]] instead.
 */
export declare function createServiceAppReport(json: any): ServiceAppReport;
/**
 * ServiceAppReportField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceAppReportField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceAppReport.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceAppReport.systemReportName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemReportName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceAppReport.customizedReportName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    customizedReportName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ServiceAppReport {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceAppReport;
}
//# sourceMappingURL=ServiceAppReport.d.ts.map