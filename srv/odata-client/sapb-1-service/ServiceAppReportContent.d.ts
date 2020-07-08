import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceAppReportContent
 */
export interface ServiceAppReportContent {
    /**
     * Report Content.
     * @nullable
     */
    reportContent?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReportContent.build]] instead.
 */
export declare function createServiceAppReportContent(json: any): ServiceAppReportContent;
/**
 * ServiceAppReportContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceAppReportContentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceAppReportContent.reportContent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportContent: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ServiceAppReportContent {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceAppReportContent;
}
//# sourceMappingURL=ServiceAppReportContent.d.ts.map