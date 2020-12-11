import { MobileAppReportChoiceEnum } from './MobileAppReportChoiceEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ServiceAppReportParams
 */
export interface ServiceAppReportParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Report Choice.
     * @nullable
     */
    reportChoice?: MobileAppReportChoiceEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceAppReportParams.build]] instead.
 */
export declare function createServiceAppReportParams(json: any): ServiceAppReportParams;
/**
 * ServiceAppReportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceAppReportParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceAppReportParams> {
    /**
     * Representation of the [[ServiceAppReportParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceAppReportParams.reportChoice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportChoice: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ServiceAppReportParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ServiceAppReportParams {
    /**
     * Metadata information on all properties of the `ServiceAppReportParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ServiceAppReportParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceAppReportParams;
}
//# sourceMappingURL=ServiceAppReportParams.d.ts.map