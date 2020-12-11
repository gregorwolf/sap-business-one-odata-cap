import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ServiceAppReportContentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceAppReportContent> {
    /**
     * Representation of the [[ServiceAppReportContent.reportContent]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportContent: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ServiceAppReportContentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceAppReportContent {
    /**
     * Metadata information on all properties of the `ServiceAppReportContent` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceAppReportContent>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceAppReportContent;
}
//# sourceMappingURL=ServiceAppReportContent.d.ts.map