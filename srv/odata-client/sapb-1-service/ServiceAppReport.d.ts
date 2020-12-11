import { MobileAppReportChoiceEnum } from './MobileAppReportChoiceEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    /**
     * Report Choice.
     * @nullable
     */
    reportChoice?: MobileAppReportChoiceEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReport.build]] instead.
 */
export declare function createServiceAppReport(json: any): ServiceAppReport;
/**
 * ServiceAppReportField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceAppReportField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceAppReport> {
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
    /**
     * Representation of the [[ServiceAppReport.reportChoice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportChoice: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ServiceAppReportField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceAppReport {
    /**
     * Metadata information on all properties of the `ServiceAppReport` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceAppReport>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceAppReport;
}
//# sourceMappingURL=ServiceAppReport.d.ts.map